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
    for (const fact of ['Ensayos y mediciones','Ingeniería y estudios',...(route === '/propuesta-d' ? ['Servicios de capacitación','Nuestro equipamiento'] : ['Capacitación técnica','Equipamiento']),'Otros servicios','26 años','ABB','Siemens','DOW Argentina','Pampa Energía','Genneia','Profertil','mailto:info@iconosrl.com.ar','tel:+542914521352','Villarino 53']) assert.ok(html.includes(fact), `${route}: missing shared content ${fact}`);
    assert.ok(html.includes('aria-current="page"'), `${route}: missing active proposal`);
  }
  results.push({ route, status: response.status, h1: 1, images: imagePaths.length, content: 'pass' });
}
const serviceRoutes = [
  ['ensayos-y-mediciones', 'Ensayos y mediciones'],
  ['ingenieria-y-estudios', 'Ingeniería y estudios'],
  ['servicios-de-capacitacion', 'Servicios de capacitación'],
  ['nuestro-equipamiento', 'Nuestro equipamiento'],
  ['otros-servicios', 'Otros servicios'],
];
const homepage = await (await fetch(base + '/propuesta-d')).text();
assert.ok(!homepage.includes('<details'), 'Proposal D must navigate instead of expanding');
assert.ok(!homepage.includes('details-plus'), 'Proposal D must not display a plus control');
for (const [slug, title] of serviceRoutes) {
  const route = '/propuesta-d/servicios/' + slug;
  assert.ok(homepage.includes(`href="${route}"`), `Homepage missing card link: ${slug}`);
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: exactly one H1`);
  assert.ok(html.includes(title), `${route}: service title missing`);
  assert.ok(html.includes('href="/propuesta-d#servicios"'), `${route}: back navigation missing`);
  assert.ok(html.includes('id="contacto"'), `${route}: contact missing`);
  assert.ok(html.includes('href="/propuesta-d/nosotros"'), `${route}: header must navigate home`);
  if (slug === 'nuestro-equipamiento') {
    assert.equal((html.match(/class="d-equipment-card"/g) || []).length, 5, 'Exactly five products required');
    for (const name of ['Sansion SXVLF-80/0.5', 'Descargador de baterías Amperis', 'Fluke 80T-IR', 'Medidor de bajas resistencias', 'Keysight U1733C']) assert.ok(html.includes(name), `Missing product: ${name}`);
    assert.ok(html.includes('El resto de los productos se va a cargar en producción.'), 'Production catalog note missing');
  }
  results.push({ route, status: response.status, h1: 1, content: 'pass' });
}
assert.equal((await fetch(base + '/propuesta-d/servicios/no-existe')).status, 404, 'Unknown service must return 404');
const institutionalRoutes = [
  ['nosotros', 'Nosotros'], ['clientes', 'Clientes'], ['contacto', 'Contacto'],
];
for (const [slug, title] of institutionalRoutes) {
  const route = '/propuesta-d/' + slug;
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: exactly one H1`);
  assert.ok(html.includes(`>${title}</h1>`), `${route}: missing title`);
  for (const href of ['/propuesta-d', '/propuesta-d/nosotros', '/propuesta-d/clientes', '/propuesta-d/contacto', '/propuesta-d/servicios/nuestro-equipamiento']) assert.ok(html.includes(`href="${href}"`), `${route}: missing navigation to ${href}`);
  assert.ok(html.includes('aria-controls="d-services-submenu"'), `${route}: services disclosure missing`);
  assert.ok(html.includes('Estudios eléctricos') && html.includes('Cursos de capacitación'), `${route}: submenu labels missing`);
  if (slug === 'nosotros') {
    for (const section of ['Visión', 'Misión', 'Política de calidad', 'Principios de gestión']) assert.ok(html.includes(section), `About missing ${section}`);
  }
  if (slug === 'clientes') {
    const directory = html.match(/<ul class="d-directory-grid">([\s\S]*?)<\/ul>/);
    assert.ok(directory, 'Missing client directory');
    assert.equal((directory[1].match(/<li\b/g) || []).length, 186, 'All 186 source entries required');
    assert.ok(directory[1].includes('ABB (Cap. Federal)') && directory[1].includes('WARTSILA ARGENTINA S.A.'), 'Source list endpoints missing');
  }
  if (slug === 'contacto') {
    for (const field of ['name','email','organization','phone','service','message']) assert.ok(html.includes(`name="${field}"`), `Contact field missing: ${field}`);
    assert.ok(html.includes('type="email"') && html.includes('Preparar correo'), 'Email validation / draft action missing');
  }
  for (const image of [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1])) {
    const asset = await fetch(new URL(image.replaceAll('&amp;', '&'), base));
    assert.equal(asset.status, 200, `${route}: missing image ${image}`);
  }
  results.push({ route, status: response.status, h1: 1, content: 'pass' });
}
await mkdir('qa', { recursive: true });
await writeFile('qa/http-content.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
