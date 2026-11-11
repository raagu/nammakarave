import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const { pages, redirects } = JSON.parse(
  readFileSync(resolve(root, '.vite/seo-manifest.json'), 'utf8'),
);
const home = new URL(pages.find((page) => page.page === '/' && page.language === 'kn').canonical);
const prefix = home.pathname;
const pageFile = (pathname) => resolve(root, pathname.replace(/^\//, ''), 'index.html');
const canonicalUrls = new Set(pages.map((page) => page.canonical));
const decode = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const attribute = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? '');
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'g')) ?? [];
const meta = (html, name, property = false) =>
  attribute(
    tags(html, 'meta').find((tag) => attribute(tag, property ? 'property' : 'name') === name) ?? '',
    'content',
  );

function localFile(url) {
  const location = new URL(url, home);
  if (location.origin !== home.origin || !location.pathname.startsWith(prefix)) return;
  const relative = decodeURIComponent(location.pathname.slice(prefix.length));
  const path = resolve(root, relative || '.');
  assert(path === root || path.startsWith(`${root}/`), 'Unsafe generated asset path');
  return location.pathname.endsWith('/') ? resolve(path, 'index.html') : path;
}

assert.equal(pages.length, 22, 'Both languages must have all 11 public pages');
assert.equal(
  canonicalUrls.size,
  pages.length,
  'Every public page must have a distinct canonical URL',
);
const titles = new Set();
const descriptions = new Set();
for (const page of pages) {
  const html = readFileSync(pageFile(page.pathname), 'utf8');
  assert(html.includes(`<html lang="${page.language}">`), `Incorrect language: ${page.pathname}`);
  assert(html.includes('data-rendered="true"'), `Missing prerendered content: ${page.pathname}`);
  assert.match(
    html,
    /<main\b[\s\S]*?<h1\b[^>]*>[^]*?<\/h1>/,
    `Missing server-rendered heading: ${page.pathname}`,
  );
  assert(
    !html.includes('class="route-loading"'),
    `Suspense fallback leaked into HTML: ${page.pathname}`,
  );
  assert(!html.includes('<!--app-html-->'), `Unrendered template: ${page.pathname}`);
  assert(!html.includes('<!--$?-->'), `Incomplete Suspense boundary: ${page.pathname}`);
  assert(
    tags(html, 'script').every(
      (tag) => attribute(tag, 'src') || attribute(tag, 'type') === 'application/ld+json',
    ),
    `Inline executable script in static HTML: ${page.pathname}`,
  );
  const canonical = tags(html, 'link').filter((tag) => attribute(tag, 'rel') === 'canonical');
  assert.equal(canonical.length, 1, `Duplicate/missing canonical: ${page.pathname}`);
  assert.equal(attribute(canonical[0], 'href'), page.canonical);
  assert.equal(new URL(page.canonical).protocol, 'https:');
  assert.equal(new URL(page.canonical).hash, '');
  const title = decode(html.match(/<title>([^]*?)<\/title>/)?.[1] ?? '');
  assert.equal(title, page.title);
  assert(!titles.has(title), `Duplicate title: ${page.pathname}`);
  titles.add(title);
  assert.equal(meta(html, 'description'), page.description);
  assert(!descriptions.has(page.description), `Duplicate description: ${page.pathname}`);
  descriptions.add(page.description);
  assert.equal(meta(html, 'og:title', true), page.title);
  assert.equal(meta(html, 'og:url', true), page.canonical);
  assert.equal(meta(html, 'twitter:title'), page.title);
  const alternates = tags(html, 'link').filter((tag) => attribute(tag, 'hreflang'));
  const graphText = html.match(
    /<script id="organization-structured-data" type="application\/ld\+json">([^]*?)<\/script>/,
  )?.[1];
  if (page.indexable) {
    assert(!meta(html, 'robots').includes('noindex'));
    assert.equal(alternates.length, 3);
    for (const expected of page.alternates) {
      const alternate = alternates.find((tag) => attribute(tag, 'hreflang') === expected.language);
      assert(alternate && attribute(alternate, 'href') === expected.href);
      assert(
        canonicalUrls.has(expected.href),
        `Alternate URL has no static page: ${expected.href}`,
      );
    }
    const graph = JSON.parse(graphText)['@graph'];
    assert(graph.some((node) => node['@type'] === 'Organization'));
    assert(graph.some((node) => node['@type'] === 'WebPage' && node.url === page.canonical));
    assert(!graphText.includes('00000'), 'Sample phone numbers must never enter structured data');
    assert(
      !graph.some((node) => ['Event', 'LocalBusiness'].includes(node['@type'])),
      'Unconfirmed events/offices must not be described as real',
    );
  } else {
    assert(
      meta(html, 'robots').includes('noindex'),
      `Preview page must not be indexable: ${page.pathname}`,
    );
    assert.equal(alternates.length, 0);
    assert.equal(graphText, undefined);
  }
  for (const tag of [
    ...tags(html, 'a'),
    ...tags(html, 'img'),
    ...tags(html, 'script'),
    ...tags(html, 'link'),
  ]) {
    const value = attribute(tag, 'src') || attribute(tag, 'href');
    assert(!value.startsWith('#/'), `Fragment navigation remains in ${page.pathname}`);
    if (!value || value.startsWith('#') || /^(?:tel:|mailto:|data:|blob:)/.test(value)) continue;
    const file = localFile(value);
    if (file) assert(existsSync(file), `Broken local resource/link in ${page.pathname}: ${value}`);
  }
}

const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.deepEqual(
  locations.sort(),
  pages
    .filter((page) => page.indexable)
    .map((page) => page.canonical)
    .sort(),
);
assert(!locations.some((url) => /districts|membership|credits/.test(url)));
const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
assert(robots.includes(`Sitemap: ${new URL('sitemap.xml', home).href}`));
assert.match(robots, /User-agent: \*\nAllow: \//);
assert(!/Disallow: \/(?:\s|$)/m.test(robots), 'Public crawlers must not be blocked');
for (const redirect of redirects) {
  const html = readFileSync(pageFile(redirect.from), 'utf8');
  assert(meta(html, 'robots').includes('noindex'));
  assert(html.includes(`content="0;url=${redirect.to}"`));
}
assert(meta(readFileSync(resolve(root, '404.html'), 'utf8'), 'robots').includes('noindex'));
for (const file of readdirSync('public').filter((name) => /^google[\da-f]+\.html$/.test(name))) {
  const verification = readFileSync(resolve('public', file), 'utf8');
  assert.equal(verification.trim(), `google-site-verification: ${file}`);
  assert.equal(readFileSync(resolve(root, file), 'utf8'), verification);
}
console.log(
  `SEO verified: ${pages.length} complete bilingual documents, ${locations.length} index-eligible URLs, reciprocal language links, valid metadata, and local resources.`,
);
