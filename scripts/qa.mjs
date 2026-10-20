// HTTP/content smoke check. Visual verification is recorded separately in qa/.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3100';
const results = [];
const routes = ['/', '/propuesta-a', '/propuesta-b', '/propuesta-c', '/propuesta-d'];
for (const route of routes) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, `${route}: HTTP ${response.status}`);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: must have exactly one H1`);
  assert.match(html, /lang="es-AR"/);
  const imagePaths = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]))];
  for (const image of imagePaths) {
    const asset = await fetch(new URL(image.replaceAll('&amp;', '&'), base));
    assert.equal(asset.status, 200, `${route}: missing ${image}`);
    assert.ok(asset.headers.get('content-type')?.startsWith('image/'), `${image}: not an image`);
  }
  if (route !== '/') {
    for (const section of ['servicios','nosotros','clientes','contacto']) assert.ok(html.includes(`id="${section}"`), `${route}: missing ${section}`);
    for (const fact of ['Ensayos y mediciones','Ingeniería y estudios','Capacitación técnica','Equipamiento','Otros servicios','26 años','ABB','Siemens','DOW Argentina','Pampa Energía','Genneia','Profertil','mailto:info@iconosrl.com.ar','tel:+542914521352','Villarino 53']) assert.ok(html.includes(fact), `${route}: missing shared content ${fact}`);
    assert.ok(html.includes('aria-current="page"'), `${route}: missing active proposal`);
  }
  results.push({ route, status: response.status, h1: 1, images: imagePaths.length, content: 'pass' });
}
await mkdir('qa', { recursive: true });
await writeFile('qa/http-content.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
