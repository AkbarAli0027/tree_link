const { spawn } = require('child_process')
const net = require('net')
const crypto = require('crypto')

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const APP_URL = process.env.URL || 'http://localhost:5173/'
const PORT = 9334
const VIEWPORTS = [
  { w: 1920, h: 1080, label: 'desktop-1920' },
  { w: 1440, h: 900, label: 'desktop-1440' },
  { w: 1024, h: 768, label: 'desktop-1024' },
  { w: 768, h: 1024, label: 'tablet-768' },
  { w: 410, h: 904, label: 'mobile-410' },
  { w: 390, h: 844, label: 'mobile-390' },
  { w: 360, h: 740, label: 'mobile-360' },
]

const CHECK_JS = `(() => {
  const at = (el, px, py) => { const b = el.getBoundingClientRect(); return { x: b.x + (px / 100) * b.width, y: b.y + (py / 100) * b.height } }
  const $ = (s) => document.querySelector(s)
  const men = $('.person--men')
  const girl = $('.person--girl')
  const hd = { men: $('.heart-icon--men'), girl1: $('.heart-icon--girl-1'), girl2: $('.heart-icon--girl-2') }
  if (!men || !girl || !hd.men || !hd.girl1 || !hd.girl2) {
    return JSON.stringify({ missing: { men: !!men, girl: !!girl, hmen: !!hd.men, hg1: !!hd.girl1, hg2: !!hd.girl2 }, htmlLen: document.body.innerHTML.length, url: location.href })
  }
  const heart = (el) => { const b = el.getBoundingClientRect(); return { cx: b.x + b.width / 2, cy: b.y + b.height / 2, w: Math.round(b.width), h: Math.round(b.height), vis: b.width > 0 && b.height > 0 } }
  const hearts = {
    men: heart(hd.men),
    girl1: heart(hd.girl1),
    girl2: heart(hd.girl2),
  }
  const exp = { men: at(men, 12, 38), girl1: at(girl, 91, 47), girl2: at(girl, 50, 48) }
  const out = {}
  for (const k of Object.keys(hearts)) {
    out[k] = { dx: Math.round((hearts[k].cx - exp[k].x) * 10) / 10, dy: Math.round((hearts[k].cy - exp[k].y) * 10) / 10, w: hearts[k].w, h: hearts[k].h, vis: hearts[k].vis }
  }
  const mb = men.getBoundingClientRect(), gb = girl.getBoundingClientRect()
  out.menBox = { x: Math.round(mb.x), y: Math.round(mb.y), w: Math.round(mb.width), h: Math.round(mb.height) }
  out.girlBox = { x: Math.round(gb.x), y: Math.round(gb.y), w: Math.round(gb.width), h: Math.round(gb.height) }
  out.scrollH = document.documentElement.scrollHeight
  out.vw = innerWidth; out.vh = innerHeight
  return JSON.stringify(out)
})()`

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)) }

// Minimal WebSocket client over raw TCP (CDP protocol)
function connectWS(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const key = crypto.randomBytes(16).toString('base64')
    const sock = net.connect(Number(u.port), u.hostname, () => {
      sock.write(
        `GET ${u.pathname} HTTP/1.1\r\nHost: ${u.host}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\n\r\n`
      )
    })
    let buf = Buffer.alloc(0)
    let opened = false
    const pending = []
    let id = 0
    const handlers = new Map()
    sock.on('data', (d) => {
      buf = Buffer.concat([buf, d])
      if (!opened) {
        const idx = buf.indexOf('\r\n\r\n')
        if (idx < 0) return
        const head = buf.slice(0, idx).toString()
        if (!head.includes(' 101 ')) return reject(new Error('handshake failed: ' + head.split('\r\n')[0]))
        buf = buf.slice(idx + 4)
        opened = true
        resolve({
          send: (obj) => {
            const mid = ++id
            const payload = Buffer.from(JSON.stringify({ id: mid, ...obj }))
            const mask = crypto.randomBytes(4)
            const masked = Buffer.alloc(payload.length)
            for (let i = 0; i < payload.length; i++) masked[i] = payload[i] ^ mask[i % 4]
            let header
            if (payload.length < 126) header = Buffer.from([0x81, 0x80 | payload.length])
            else if (payload.length < 65536) header = Buffer.from([0x81, 0x80 | 126])
            else header = Buffer.from([0x81, 0x80 | 127])
            const len = payload.length >= 65536
              ? Buffer.alloc(8) : payload.length >= 126 ? Buffer.alloc(2) : Buffer.alloc(0)
            if (len.length === 2) len.writeUInt16BE(payload.length)
            else if (len.length === 8) len.writeBigUInt64BE(BigInt(payload.length))
            sock.write(Buffer.concat([header, len, mask, masked]))
            return new Promise((res) => handlers.set(mid, res))
          },
          close: () => sock.destroy(),
          _handlers: handlers,
        })
        // process any remaining bytes as frames
      }
      // parse frames (server frames unmasked)
      while (buf.length >= 2) {
        const b0 = buf[0], b1 = buf[1]
        const opcode = b0 & 0x0f
        let len = b1 & 0x7f
        let off = 2
        if (len === 126) { if (buf.length < 4) break; len = buf.readUInt16BE(2); off = 4 }
        else if (len === 127) { if (buf.length < 10) break; len = Number(buf.readBigUInt64BE(2)); off = 10 }
        if (buf.length < off + len) break
        const payload = buf.slice(off, off + len)
        buf = buf.slice(off + len)
        if (opcode === 0x9) { // ping -> pong
          sock.write(Buffer.concat([Buffer.from([0x8a, payload.length]), payload]))
        } else if (opcode === 0x1) {
          const msg = JSON.parse(payload.toString())
          if (msg.id && handlers.has(msg.id)) { handlers.get(msg.id)(msg); handlers.delete(msg.id) }
        } else if (opcode === 0x8) { sock.destroy() }
      }
    })
    sock.on('error', reject)
  })
}

async function main() {
  const tmpDir = require('path').join(require('os').tmpdir(), 'cdp-check-' + Date.now())
  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${tmpDir}`,
    '--no-first-run', '--no-default-browser-check', 'about:blank',
  ], { stdio: 'ignore' })

  let targets
  for (let i = 0; i < 40; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
      if (targets.length) break
    } catch { /* retry */ }
    await sleep(250)
  }
  const page = targets && targets.find((t) => t.type === 'page')
  if (!page) throw new Error('no page target')
  const ws = await connectWS(page.webSocketDebuggerUrl)
  const send = (method, params = {}) => ws.send({ method, params })

  await send('Runtime.enable')
  await send('Page.enable')
  const nav =  await send('Page.navigate', { url: APP_URL })
  console.error('navigate ->', JSON.stringify(nav))
  await sleep(3500)
  const loc = await send('Runtime.evaluate', { expression: 'location.href', returnByValue: true })
  console.error('location ->', JSON.stringify(loc.result.result.value))

  const fs = require('fs')
  const path = require('path')
  const shotsDir = path.join(__dirname, 'shots')
  if (!fs.existsSync(shotsDir)) fs.mkdirSync(shotsDir, { recursive: true })

  for (const vp of VIEWPORTS) {
    await send('Emulation.setDeviceMetricsOverride', { width: vp.w, height: vp.h, deviceScaleFactor: 1, mobile: false })
    await sleep(700)
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)', returnByValue: true })
    await sleep(400)
    const shot = await send('Page.captureScreenshot', { format: 'png' })
    if (shot && shot.result && shot.result.data) {
      fs.writeFileSync(path.join(shotsDir, vp.label + '.png'), Buffer.from(shot.result.data, 'base64'))
    }
    const res = await send('Runtime.evaluate', { expression: CHECK_JS, returnByValue: true })
    if (!res.result || !res.result.result || res.result.result.value === undefined) {
      console.error('EVAL FAILED:', JSON.stringify(res.result, null, 2))
      continue
    }
    const data = JSON.parse(res.result.result.value)
    if (data.missing) { console.log('\n== ' + vp.label + ' MISSING:', JSON.stringify(data)); continue }
    console.log(`\n== ${vp.label} (${data.vw}x${data.vh}, scrollH=${data.scrollH})`)
    console.log(`   menBox  x=${data.menBox.x} y=${data.menBox.y} ${data.menBox.w}x${data.menBox.h}`)
    console.log(`   girlBox x=${data.girlBox.x} y=${data.girlBox.y} ${data.girlBox.w}x${data.girlBox.h}`)
    for (const k of ['men', 'girl1', 'girl2']) {
      const h = data[k]
      const ok = Math.abs(h.dx) <= 1 && Math.abs(h.dy) <= 1
      console.log(`   ${k.padEnd(5)} ${h.w}x${h.h} visible=${h.vis} dx=${h.dx} dy=${h.dy} ${ok ? 'OK' : 'MISMATCH'}`)
    }
  }
  ws.close()
  chrome.kill()
}

main().catch((e) => { console.error(e); process.exit(1) })
