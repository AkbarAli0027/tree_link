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

function parseSvg(file) {
  const s = fs.readFileSync(file, 'utf8')
  const vb = s.match(/viewBox="([\d.\- ]+)"/)[1].split(' ').map(Number)
  const rect = s.match(/<rect x="([\d.\-]+)" y="([\d.\-]+)" width="([\d.]+)" height="([\d.]+)"/)
  const use = s.match(/<use[^>]*transform="scale\(([\d.e\-]+) ([\d.e\-]+)\)"/)
  const base64 = s.match(/base64,([A-Za-z0-9+/=]+)/)[1]
  return { viewBox: vb, rect: { x: +rect[1], y: +rect[2], w: +rect[3], h: +rect[4] }, scale: { sx: +use[1], sy: +use[2] }, img: decodePng(Buffer.from(base64, 'base64')) }
}

function render(file, label, cols, rows, region, thr = 150) {
  const { viewBox, rect, scale, img } = parseSvg(file)
  const [vbx, vby, vbw, vbh] = viewBox
  const rx = region.x, ry = region.y, rw = region.w, rh = region.h
  const toPx = (vx, vy) => ({ px: ((vx - rect.x) / rect.w) / scale.sx, py: ((vy - rect.y) / rect.h) / scale.sy })
  console.log(`\n===== ${label} solid art region x${rx}..${rx + rw} y${ry}..${ry + rh} (of viewBox ${vbw}x${vbh}) =====`)
  for (let r = 0; r < rows; r++) {
    let line = ''
    for (let c = 0; c < cols; c++) {
      let cnt = 0, den = 0
      const x0 = rx + (c / cols) * rw, x1 = rx + ((c + 1) / cols) * rw
      const y0 = ry + (r / rows) * rh, y1 = ry + ((r + 1) / rows) * rh
      for (let yy = y0; yy < y1; yy += 4) {
        for (let xx = x0; xx < x1; xx += 4) {
          const { px, py } = toPx(xx, yy)
          if (px < 0 || py < 0 || px >= img.width || py >= img.height) continue
          den++
          const i = Math.floor(py) * img.stride + Math.floor(px) * img.bpp
          if (img.data[i + 3] > thr) cnt++
        }
      }
      const f = den ? cnt / den : 0
      line += f > 0.5 ? '#' : f > 0.2 ? '+' : f > 0.06 ? '.' : ' '
    }
    console.log(line)
  }
}

render('public/patterns/men.svg', 'MEN full solid', 120, 56, { x: 0, y: 120, w: 819, h: 761 }, 150)
render('public/patterns/girl.svg', 'GIRL full solid', 120, 56, { x: 0, y: 120, w: 841, h: 761 }, 150)
