const WebSocket = require('ws');
const fs = require('fs');
const url = fs.readFileSync('.ws.txt', 'utf8').trim();
const ws = new WebSocket(url);
let id = 0;
const send = (method, params) => new Promise((res) => {
  const myId = ++id;
  const handler = (data) => {
    const msg = JSON.parse(data);
    if (msg.id === myId) { ws.off('message', handler); res(msg.result); }
  };
  ws.on('message', handler);
  ws.send(JSON.stringify({ id: myId, method, params }));
});
const expr = `(() => {
  const docW = document.documentElement.scrollWidth;
  const winW = window.innerWidth;
  const offenders = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right > winW + 1 || r.width > winW + 1) {
      offenders.push({ tag: el.tagName, cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).toString().slice(0,80), right: Math.round(r.right), width: Math.round(r.width) });
    }
  });
  return JSON.stringify({ docW, winW, offenders: offenders.slice(0, 12) }, null, 2);
})()`;
ws.on('open', async () => {
  await send('Runtime.enable', {});
  await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 800, deviceScaleFactor: 1, mobile: true });
  await new Promise((r) => setTimeout(r, 400));
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
  console.log(r.result.value);
  ws.close();
  process.exit(0);
});
