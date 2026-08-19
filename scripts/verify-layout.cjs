const fs = require('fs')
const zlib = require('zlib')

function decodePng(buf) {
  let offset = 8, width = 0, height = 0, colorType = 0
  const idat = []
  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset)
    const type = buf.toString('ascii', offset + 4, offset + 8)
    const data = buf.slice(offset + 8, offset + 8 + len)
    if (type === 'IHDR') { width = data.readUInt32BE(0); height = data.readUInt32BE(4); colorType = data[9] }
    else if (type === 'IDAT') idat.push(data)
    offset += 12 + len
  }
  const raw = zlib.inflateSync(Buffer.concat(idat))
  const bpp = colorType === 6 ? 4 : 3
  const stride = width * bpp
  const out = Buffer.alloc(height * stride)
  let pos = 0
  for (let y = 0; y < height; y++) {
    const filter = raw[pos++]
    const row = out.slice(y * stride, (y + 1) * stride)
    const prev = y > 0 ? out.slice((y - 1) * stride, y * stride) : null
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? row[x - bpp] : 0
      const b = prev ? prev[x] : 0
      const c = x >= bpp && prev ? prev[x - bpp] : 0
      let v = raw[pos++]
      switch (filter) {
        case 1: v = (v + a) & 0xff; break
        case 2: v = (v + b) & 0xff; break
        case 3: v = (v + ((a + b) >> 1)) & 0xff; break
        case 4: { const p = a + b - c; const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v = (v + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c)) & 0xff } break
      }
      row[x] = v
    }
  }
  return { width, height, colorType, bpp, stride, data: out }
}

const files = fs.readdirSync('scripts/shots').filter((f) => f.endsWith('.png')).sort()

for (const file of files) {
  const path = `scripts/shots/${file}`
  if (!fs.existsSync(path)) continue
  const img = decodePng(fs.readFileSync(path))
  const { width: W, height: H } = img
  const at = (x, y) => {
    const i = y * img.stride + x * img.bpp
    return [img.data[i], img.data[i + 1], img.data[i + 2]]
  }
  // people silhouettes are brownish (r > g) vs green background (g > r)
  const dark = []
  for (let y = 0; y < H; y += 3) {
    for (let x = 0; x < W; x += 3) {
      const [r, g, b] = at(x, y)
      const lum = r + g + b
      const isRed = r > 200 && g < 90 && b < 90
      if (!isRed && r > g && lum < 430 && r < 165) dark.push([x, y])
    }
  }
  // cluster dark into 2 big blobs (people) using coarse bins
  const bin = 40
  const cells = new Map()
  for (const [x, y] of dark) {
    const k = Math.floor(x / bin) + ',' + Math.floor(y / bin)
    if (!cells.has(k)) cells.set(k, [])
    cells.get(k).push([x, y])
  }
  // merge cells into blobs with 8-connectivity via simple union by proximity
  const blobs = []
  for (const arr of cells.values()) {
    const cx = arr.reduce((s, p) => s + p[0], 0) / arr.length
    const cy = arr.reduce((s, p) => s + p[1], 0) / arr.length
    let m = blobs.find((b) => Math.abs(b.cx - cx) < bin * 2 && Math.abs(b.cy - cy) < bin * 2)
    if (!m) { m = { pts: [], cx: 0, cy: 0, n: 0 }; blobs.push(m) }
    m.pts.push(...arr)
    m.cx = (m.cx * m.n + cx * arr.length) / (m.n + arr.length)
    m.cy = (m.cy * m.n + cy * arr.length) / (m.n + arr.length)
    m.n += arr.length
  }
  // person boxes = bounding boxes of blobs; keep the two largest
  const boxes = blobs
    .map((b) => {
      let minX = Infinity, maxX = -1, minY = Infinity, maxY = -1
      for (const [x, y] of b.pts) {
        if (x < minX) minX = x; if (x > maxX) maxX = x
        if (y < minY) minY = y; if (y > maxY) maxY = y
      }
      return { minX, maxX, minY, maxY, area: (maxX - minX) * (maxY - minY) }
    })
    .filter((b) => b.area > 3000)
    .sort((a, b) => b.area - a.area)
    .slice(0, 2)
  // red hearts
  const red = []
  for (let y = 0; y < H; y += 2) {
    for (let x = 0; x < W; x += 2) {
      const i = y * img.stride + x * img.bpp
      if (img.data[i] > 240 && img.data[i + 1] < 40 && img.data[i + 2] < 40) red.push([x, y])
    }
  }
  const rcells = new Map()
  for (const [x, y] of red) {
    const k = Math.floor(x / 50) + ',' + Math.floor(y / 50)
    if (!rcells.has(k)) rcells.set(k, [])
    rcells.get(k).push([x, y])
  }
  const rclusters = []
  for (const arr of rcells.values()) {
    const cx = arr.reduce((s, p) => s + p[0], 0) / arr.length
    const cy = arr.reduce((s, p) => s + p[1], 0) / arr.length
    let m = rclusters.find((c) => Math.abs(c.cx - cx) < 90 && Math.abs(c.cy - cy) < 90)
    if (m) { m.cx = (m.cx * m.n + cx * arr.length) / (m.n + arr.length); m.cy = (m.cy * m.n + cy * arr.length) / (m.n + arr.length); m.n += arr.length }
    else rclusters.push({ cx, cy, n: arr.length })
  }
  console.log(`\n== ${file} (${W}x${H})`)
  console.log('  person boxes (dark):')
  boxes.forEach((b) => console.log(`    x ${b.minX}..${b.maxX} (w ${b.maxX - b.minX}), y ${b.minY}..${b.maxY} (h ${b.maxY - b.minY})`))
  console.log('  red clusters (n>30):')
  rclusters.filter((c) => c.n > 30).forEach((c) => {
    const box = boxes.find((b) => c.cx >= b.minX && c.cx <= b.maxX && c.cy >= b.minY && c.cy <= b.maxY)
    const rel = box
      ? `  -> ${((c.cx - box.minX) / (box.maxX - box.minX) * 100).toFixed(0)}% x, ${((c.cy - box.minY) / (box.maxY - box.minY) * 100).toFixed(0)}% y of box`
      : '  -> outside detected boxes'
    console.log(`    red at x=${c.cx.toFixed(0)}, y=${c.cy.toFixed(0)}${rel}`)
  })
}
