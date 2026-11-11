import { test, expect } from '@playwright/test';

const paths = [
  '/',
  '/about/',
  '/leadership/',
  '/history/',
  '/programmes/',
  '/campaigns/',
  '/wings/',
  '/districts/',
  '/media/',
  '/contact/',
  '/privacy/',
];
const localized = (path: string, language: string) => `${language === 'en' ? '/en' : ''}${path}`;

test('all bilingual pages expose complete content and search metadata without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    for (const language of ['kn', 'en']) {
      for (const path of paths) {
        const address = localized(path, language);
        const response = await page.goto(`http://127.0.0.1:4173${address}`);
        expect(response?.status(), address).toBe(200);
        await expect(page.locator('html')).toHaveAttribute('lang', language);
        await expect(page.locator('main h1')).toBeVisible();
        await expect(page.locator('.route-loading')).toHaveCount(0);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          'href',
          `https://nammakarave.com${address}`,
        );
        await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/);
        const indexable = path !== '/districts/';
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
          'content',
          indexable ? /^index,follow/ : /^noindex,follow/,
        );
        await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(
          indexable ? 3 : 0,
        );
        await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(
          indexable ? 1 : 0,
        );
        await expect(page.locator('a[href^="#/"]')).toHaveCount(0);
      }
    }
    await page.goto('http://127.0.0.1:4173/history/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL(/\/en\/history\/$/);
    await expect(page.locator('main h1')).toHaveText('The story of Karnataka Rakshana Vedike');
  } finally {
    await context.close();
  }
});

test('canonical pages hydrate without errors and their URLs determine language', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.addInitScript(() => localStorage.setItem('namma-karave.language', 'en'));
  for (const language of ['kn', 'en']) {
    for (const path of paths) {
      await page.goto(localized(path, language));
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      // A same-language click must run its handler, proving the static document hydrated.
      await page
        .getByRole('link', { name: language === 'en' ? 'EN' : 'ಕನ್ನಡ', exact: true })
        .click();
      await expect
        .poll(() => page.evaluate(() => localStorage.getItem('namma-karave.language')))
        .toBe(language);
    }
  }
  expect(errors).toEqual([]);
});

test('navigation and language links update canonical, alternate and social metadata', async ({
  page,
}) => {
  await page.goto('/en/');
  await page.locator('.hero-buttons a').first().click();
  await expect(page).toHaveURL(/\/en\/about\/$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://nammakarave.com/en/about/',
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    'https://nammakarave.com/en/about/',
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    await page.title(),
  );
  await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://nammakarave.com/about/',
  );
  await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
    'href',
    'https://nammakarave.com/en/about/',
  );
  const graph = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}',
  );
  expect(
    graph['@graph'].find((node: Record<string, string>) => node['@type'] === 'WebPage').inLanguage,
  ).toBe('kn');
});

test('sitemap contains only canonical eligible pages and missing pages return a real 404', async ({
  request,
}) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect([...xml.matchAll(/<loc>/g)]).toHaveLength(20);
  expect(xml).not.toMatch(/districts|membership|credits|#\//);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap: https://nammakarave.com/sitemap.xml');
  for (const address of ['/not-a-real-page/', '/en/not-a-real-page/']) {
    const response = await request.get(address, { headers: { Accept: 'text/html' } });
    expect(response.status()).toBe(404);
    expect(await response.text()).toContain('content="noindex,follow"');
    expect(await response.text()).not.toContain('rel="canonical"');
  }
});

test('direct index-file links normalize to the canonical page rather than showing a soft 404', async ({
  page,
}) => {
  await page.goto('/en/history/index.html?utm_source=share');
  await expect(page).toHaveURL(/\/en\/history\/\?utm_source=share$/);
  await expect(page.locator('main h1')).toHaveText('The story of Karnataka Rakshana Vedike');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://nammakarave.com/en/history/',
  );
});

test('legacy fragment links keep their selection while moving to clean canonical URLs', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/en/');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goto('/?layout=refined#/districts?district=mandya');
  await expect(page).toHaveURL(/\/en\/districts\/\?district=mandya$/);
  await expect(page.locator('.district-result h3')).toHaveText('Mandya');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://nammakarave.com/en/districts/',
  );
  expect(errors).toEqual([]);
});
