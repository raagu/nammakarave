import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const output = resolve('dist');
const template = await readFile(resolve(output, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--seo:start-->')) {
  throw new Error('The Vite HTML template is missing the static-render placeholders.');
}
const {
  render,
  pagePaths,
  languages,
  languagePath,
  withBasePath,
  pageSeo,
  structuredData,
  serializeStructuredData,
  publicSite,
} = await import(pathToFileURL(resolve('.ssg/entry-server.js')).href);

const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character],
  );

function head(seo, redirect) {
  const tags = [
    `<title>${escape(seo.title)}</title>`,
    `<meta name="description" content="${escape(seo.description)}">`,
    `<meta name="robots" content="${redirect ? 'noindex,follow' : seo.robots}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Karnataka Rakshana Vedike">`,
    `<meta property="og:title" content="${escape(seo.title)}">`,
    `<meta property="og:description" content="${escape(seo.description)}">`,
    `<meta property="og:image" content="${escape(seo.image)}">`,
    `<meta property="og:image:alt" content="${escape(seo.imageAlt)}">`,
    `<meta property="og:image:width" content="472">`,
    `<meta property="og:image:height" content="563">`,
    `<meta property="og:locale" content="${seo.locale}">`,
    `<meta property="og:locale:alternate" content="${seo.alternateLocale}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escape(seo.title)}">`,
    `<meta name="twitter:description" content="${escape(seo.description)}">`,
    `<meta name="twitter:image" content="${escape(seo.image)}">`,
    `<meta name="twitter:image:alt" content="${escape(seo.imageAlt)}">`,
  ];
  if (seo.canonical)
    tags.push(
      `<link rel="canonical" href="${escape(seo.canonical)}">`,
      `<meta property="og:url" content="${escape(seo.canonical)}">`,
    );
  if (!redirect) {
    for (const alternate of seo.alternates)
      tags.push(
        `<link rel="alternate" hreflang="${alternate.language}" href="${escape(alternate.href)}">`,
      );
    const data = structuredData(seo);
    if (data)
      tags.push(
        `<script id="organization-structured-data" type="application/ld+json">${serializeStructuredData(data)}</script>`,
      );
  }
  if (publicSite.verification)
    tags.push(
      `<meta name="google-site-verification" content="${escape(publicSite.verification)}">`,
    );
  if (redirect) tags.push(`<meta http-equiv="refresh" content="0;url=${escape(redirect)}">`);
  return tags.join('\n    ');
}

const rendered = new Map();
async function document(page, language, redirect) {
  const pathname = page ? languagePath(page, language) : '/not-found/';
  const key = `${language}:${pathname}`;
  if (!rendered.has(key)) rendered.set(key, await render(withBasePath(pathname)));
  const seo = pageSeo(page, language);
  return template
    .replace('<html lang="kn">', `<html lang="${language}">`)
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => head(seo, redirect))
    .replace(
      'data-rendered="false" data-path="/"',
      `data-rendered="true" data-path="${escape(pathname)}"`,
    )
    .replace('<!--app-html-->', () => rendered.get(key));
}

async function save(pathname, html) {
  const file = resolve(output, pathname.replace(/^\//, ''), 'index.html');
  if (!file.startsWith(`${output}/`)) throw new Error('Unsafe output path.');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const pages = [];
for (const page of pagePaths) {
  for (const language of languages) {
    const pathname = languagePath(page, language);
    const seo = pageSeo(page, language);
    await save(pathname, await document(page, language));
    pages.push({
      page,
      language,
      pathname,
      canonical: seo.canonical,
      indexable: seo.indexable,
      title: seo.title,
      description: seo.description,
      alternates: seo.alternates,
    });
  }
}

// Explicit Kannada-prefix aliases and retired routes remain usable without JavaScript.
const redirects = [];
for (const page of pagePaths) {
  const from = `/kn${page === '/' ? '/' : `${page}/`}`;
  const target = withBasePath(languagePath(page, 'kn'));
  await save(from, await document(page, 'kn', target));
  redirects.push({ from, to: target });
}
for (const language of languages) {
  for (const retired of ['/membership', '/credits']) {
    const from = languagePath(retired, language);
    const target = withBasePath(languagePath('/', language));
    await save(from, await document('/', language, target));
    redirects.push({ from, to: target });
  }
}
await writeFile(resolve(output, '404.html'), await document(undefined, 'kn'));

const sitemap = pages
  .filter((page) => page.indexable)
  .map((page) => `  <url><loc>${escape(page.canonical)}</loc></url>`)
  .join('\n');
await writeFile(
  resolve(output, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`,
);
await writeFile(
  resolve(output, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBasePath('/sitemap.xml'), publicSite.origin).href}\n`,
);
await writeFile(
  resolve(output, '.vite/seo-manifest.json'),
  JSON.stringify({ pages, redirects }, null, 2),
);
console.log(
  `Rendered ${pages.length} complete bilingual pages; ${pages.filter((page) => page.indexable).length} eligible pages in sitemap; ${redirects.length} compatibility redirects.`,
);
