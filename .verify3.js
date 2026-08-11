const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');
const BASE = 'http://localhost:4310';
const OUT = '.verify3';
const SHOTS = [
  ['contact', '/contact', 1440],
  ['about', '/about', 1440],
  ['contact-m', '/contact', 390],
];
function getJSON(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => { let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d))); }).on('error', reject);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);
  const version = await getJSON('http://localhost:9223/json/version');
  const ws = new WebSocket(version.webSocketDebuggerUrl, { perMessageDeflate: false });
  let id = 0; const pending = new Map(); const eventWaiters = [];
  ws.on('message', (raw) => {
    const msg = JSON.parse(raw);
    if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); if (msg.error) reject(new Error(JSON.stringify(msg.error))); else resolve(msg.result); }
    else if (msg.method) { for (let i = eventWaiters.length - 1; i >= 0; i--) { if (eventWaiters[i].method === msg.method && eventWaiters[i].sessionId === msg.sessionId) { eventWaiters[i].resolve(msg.params); eventWaiters.splice(i, 1); } } }
  });
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => { const myId = ++id; pending.set(myId, { resolve, reject }); ws.send(JSON.stringify({ id: myId, method, params, sessionId })); });
  const waitEvent = (method, sessionId, timeout = 8000) => new Promise((resolve) => { const w = { method, sessionId, resolve }; eventWaiters.push(w); setTimeout(() => { const i = eventWaiters.indexOf(w); if (i >= 0) { eventWaiters.splice(i, 1); resolve(null); } }, timeout); });
  await new Promise(r => ws.on('open', r));
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  await send('Page.enable', {}, sessionId);
  for (const [name, route, width] of SHOTS) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 600 }, sessionId);
    const loaded = waitEvent('Page.loadEventFired', sessionId);
    await send('Page.navigate', { url: BASE + route }, sessionId);
    await loaded; await sleep(1400);
    const dims = await send('Runtime.evaluate', { expression: '(()=>{const d=document.documentElement;return JSON.stringify({w:d.scrollWidth,h:d.scrollHeight,title:document.title});})()', returnByValue: true }, sessionId);
    const { w, h, title } = JSON.parse(dims.result.value);
    const overflow = w > width + 1 ? ' OVERFLOW!' : '';
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: Math.min(h, 6000), scale: 1 } }, sessionId);
    fs.writeFileSync(`${OUT}/${name}.png`, Buffer.from(shot.data, 'base64'));
    console.log(`${name}.png docW=${w} h=${h}${overflow} "${title}"`);
  }
  await send('Target.closeTarget', { targetId });
  ws.close(); process.exit(0);
})().catch(e => { console.error('ERR', e); process.exit(1); });
