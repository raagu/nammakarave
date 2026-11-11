import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function english(page: Page, path = '/') {
  await page.goto(path === '/' ? '/' : path.replace(/([^/])(?=\?|$)/, '$1/'));
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
}

async function navigateHeader(page: Page, name: string) {
  const menu = page.getByRole('button', { name: 'Open menu', exact: true });
  if (await menu.isVisible()) {
    await menu.click();
    await page.getByRole('dialog').getByRole('link', { name, exact: true }).click();
  } else await page.locator('.site-header').getByRole('link', { name, exact: true }).click();
}

test('defaults to Kannada and remembers language across routes and reloads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'kn');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ಕನ್ನಡದ ಧ್ವನಿ. ಕನ್ನಡಿಗರ ಶಕ್ತಿ.');
  await expect(page.locator('.masthead-details')).toContainText('ಕನ್ನಡಪರ ಸಂಘಟನೆಗಳ ಒಕ್ಕೂಟ');
  await expect(page.locator('.masthead-portrait')).toHaveAttribute('alt', /ಕುವೆಂಪು/);
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('The voice of Kannada.');
  await expect(page.locator('.masthead-copy')).toHaveAttribute('lang', 'kn');
  await expect(page.locator('.masthead-portrait')).toHaveAttribute(
    'alt',
    'Portrait of Kannada poet Kuvempu',
  );
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  expect(await page.evaluate(() => Object.keys(localStorage))).toEqual(['namma-karave.language']);
});

test('renders live Kannada branding with separate images above navigation', async ({ page }) => {
  await english(page);
  await page.evaluate(() => document.fonts.ready);
  const header = page.locator('.site-header');
  const copy = header.locator('.masthead-copy');
  await expect(copy.locator('.masthead-name')).toHaveText('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ');
  await expect(copy.locator('.masthead-slogans > span')).toHaveText([
    'ಕನ್ನಡವೇ ಜಾತಿ',
    'ಕನ್ನಡವೇ ಧರ್ಮ',
    'ಕನ್ನಡವೇ ದೇವರು',
  ]);
  await expect(header.locator('.masthead-details')).toContainText('ಕನ್ನಡಪರ ಸಂಘಟನೆಗಳ ಒಕ್ಕೂಟ');
  await expect(header.locator('.masthead-details')).toContainText('ನೋಂದಣಿ ಸಂಖ್ಯೆ: 43/2000');
  await expect(header.locator('img')).toHaveCount(2);
  await expect(header.locator('.masthead-emblem')).toHaveJSProperty('naturalWidth', 433);
  await expect(header.locator('.masthead-portrait')).toHaveJSProperty('naturalWidth', 480);
  await expect(header.locator('.masthead-portrait')).toHaveAttribute(
    'alt',
    'Portrait of Kannada poet Kuvempu',
  );
  await expect(header.locator('img[src*="narayana-gowdru"]')).toHaveCount(0);
  await expect(page.locator('.utility-bar')).toHaveCount(0);
  const brandingBox = (await header.locator('.masthead-brand').boundingBox())!;
  const tabsBox = (await header.locator('.header-nav-bar').boundingBox())!;
  expect(tabsBox.y).toBeGreaterThanOrEqual(brandingBox.y + brandingBox.height);
  await expect(
    header.locator('.header-nav-bar').getByRole('link', { name: 'EN', exact: true }),
  ).toBeVisible();
  await navigateHeader(page, 'About us');
  await header.getByRole('link', { name: 'Karnataka Rakshana Vedike', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/(?:\?.*)?$/);
});

test('keeps live branding and navigation usable when both masthead images fail', async ({
  page,
}) => {
  await english(page);
  await page.evaluate(() => document.fonts.ready);
  const header = page.locator('.site-header');
  const before = (await header.boundingBox())!;
  await page.route('**/assets/branding/*.webp', (route) => route.abort());
  await page.reload();
  await expect(header.locator('.image-fallback')).toHaveCount(2);
  await expect(header.locator('.masthead-name')).toHaveText('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ');
  await expect(header.locator('.masthead-slogans > span')).toHaveCount(3);
  await expect(header.getByRole('img', { name: 'Portrait of Kannada poet Kuvempu' })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  const after = (await header.boundingBox())!;
  expect(after.height).toBeCloseTo(before.height, 0);
  await navigateHeader(page, 'About us');
  await expect(page).toHaveURL(/\/en\/about\/$/);
  await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'kn');
  await expect(header.locator('.masthead-details')).toContainText('ಕನ್ನಡಪರ ಸಂಘಟನೆಗಳ ಒಕ್ಕೂಟ');
});

test('puts the founder in the hero and preserves bilingual organizational content', async ({
  page,
}) => {
  await english(page);
  await expect(page.locator('.hero-leader-card')).toContainText('FOUNDER & STATE PRESIDENT');
  await expect(page.locator('.hero-leader-card')).toContainText('T. A. Narayana Gowda');
  await expect(page.locator('.hero-leader-image')).toHaveJSProperty('naturalWidth', 400);
  await expect(page.locator('.hero-leader-image')).toHaveAttribute(
    'src',
    /assets\/leadership\/narayana-gowdru\.png$/,
  );
  const transparency = await page.locator('.hero-leader-image').evaluate(async (element) => {
    const image = element as HTMLImageElement;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d')!;
    context.drawImage(image, 0, 0);
    // Probe the backdrop above and beside the subject, away from the shirt's bottom crop.
    const backgroundAlpha = [
      [0, 0],
      [canvas.width - 1, 0],
      [0, canvas.height / 2],
      [canvas.width - 1, canvas.height / 2],
    ].map(([x, y]) => context.getImageData(x, y, 1, 1).data[3]);
    return {
      backgroundAlpha,
      subjectAlpha: context.getImageData(canvas.width / 2, canvas.height / 2, 1, 1).data[3],
    };
  });
  expect(transparency.backgroundAlpha).toEqual([0, 0, 0, 0]);
  expect(transparency.subjectAlpha).toBeGreaterThan(0);
  await expect(page.locator('.hero-leader-card')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await expect(page.locator('.hero-leader-card figcaption')).toHaveCSS(
    'background-color',
    'rgba(0, 0, 0, 0)',
  );
  for (const tag of ['span', 'strong', 'a']) {
    await expect(page.locator(`.hero-leader-card figcaption > ${tag}`)).toHaveCSS(
      'color',
      'rgb(238, 191, 54)',
    );
  }

  await expect(page.getByRole('heading', { name: 'Our vision', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Our mission', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
  await expect(page.locator('.hero-leader-card')).toContainText('ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ರಾಜ್ಯಾಧ್ಯಕ್ಷರು');
  await expect(page.locator('.hero-leader-card')).toContainText('ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು');
  await expect(page.getByRole('heading', { name: 'ನಮ್ಮ ದೂರದೃಷ್ಟಿ', exact: true })).toBeVisible();
});

test('organization links stay informational while membership is deferred', async ({ page }) => {
  await english(page);
  await expect(page.locator('a[href*="/membership"]')).toHaveCount(0);
  await page
    .locator('.participation-panel')
    .getByRole('link', { name: 'About us', exact: true })
    .click();
  await expect(page).toHaveURL(/\/en\/about\/$/);
  await page.goto('/#/membership?wing=legal');
  await expect(page).toHaveURL(/\/en\/(?:\?.*)?$/);
  await expect(page.getByRole('form')).toHaveCount(0);
  await expect(page.getByLabel('Full name')).toHaveCount(0);
});

test('keeps unapproved speech and reference photographs out of the production presentation', async ({
  page,
}) => {
  await english(page, '/leadership');
  await expect(page.locator('.message-copy')).toContainText('approved message will be published');
  await expect(page.locator('.review-label')).toHaveCount(0);
  await page.goto('/#/programmes');
  await expect(page.locator('.programme-card')).toHaveCount(3);
  await expect(page.locator('.programme-photo img')).toHaveCount(0);
  await expect(page.locator('.upcoming-content')).toContainText(
    'once dates and venues are confirmed',
  );
  await expect(page.locator('.upcoming-content time')).toHaveCount(0);
});

test('makes no third-party requests on first load and has no runtime errors', async ({ page }) => {
  const requests: string[] = [];
  const errors: string[] = [];
  page.on('request', (request) => {
    if (!request.url().startsWith('http://127.0.0.1:4173')) requests.push(request.url());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.leader-image')).toHaveJSProperty('naturalWidth', 400);
  expect(requests).toEqual([]);
  expect(errors).toEqual([]);
});

test('all 31 map markers select their district and synchronize the contact panel and dropdown', async ({
  page,
}) => {
  await english(page, '/districts?view=directory');
  const select = page.getByLabel('Select your district', { exact: true });
  const options = await select.locator('option').evaluateAll((elements) =>
    elements.map((element) => ({
      id: (element as HTMLOptionElement).value,
      name: element.textContent!,
    })),
  );
  await expect(page.locator('.district-boundary')).toHaveCount(31);
  await expect(page.locator('.district-marker')).toHaveCount(31);
  for (const district of options) {
    const marker = page.getByRole('button', {
      name: `Select your district: ${district.name}`,
      exact: true,
    });
    await marker.click();
    await expect(select).toHaveValue(district.id);
    await expect(page.locator('.district-result h3')).toHaveText(district.name);
    await expect(page.locator('.district-result address')).toContainText(district.name);
    await expect(page.locator('.sample-contact-badge')).toHaveText('SAMPLE CONTACT DETAILS');
    await expect(page.locator('.district-sample-phone a')).toHaveCount(0);
    await expect(marker).toHaveAttribute('aria-pressed', 'true');
    await expect(page).toHaveURL(new RegExp(`view=directory&district=${district.id}$`));
  }
  await expect(page.locator('.district-result address')).toContainText(
    'This is a demonstration address.',
  );
  await expect(page.locator('.district-result a[href="tel:+918022370032"]')).toBeVisible();
  await select.selectOption('mandya');
  await expect(
    page.getByRole('button', { name: 'Select your district: Mandya', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.reload();
  await expect(page.locator('.district-result h3')).toHaveText('Mandya');
});

test('district markers support keyboard selection, language changes, and browser history', async ({
  page,
}) => {
  await english(page, '/districts?district=mandya');
  const marker = page.getByRole('button', {
    name: 'Select your district: Vijayanagara',
    exact: true,
  });
  await marker.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.district-result h3')).toHaveText('Vijayanagara');
  await page.goBack();
  await expect(page.locator('.district-result h3')).toHaveText('Mandya');
  await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
  await page.getByRole('button', { name: 'ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ: ವಿಜಯನಗರ', exact: true }).click();
  await expect(page.locator('.district-result h3')).toHaveText('ವಿಜಯನಗರ');
  await expect(page.locator('.district-result address')).toContainText('ವಿಜಯನಗರ');
  await expect(page.locator('.sample-contact-badge')).toHaveText('ಮಾದರಿ ಸಂಪರ್ಕ ವಿವರಗಳು');
});

test('wing tabs keep keyboard control without offering membership registration', async ({
  page,
}) => {
  await english(page, '/wings');
  await page.getByRole('tab', { name: 'Women’s Wing' }).focus();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('tab', { name: 'Legal Wing' })).toHaveAttribute(
    'aria-selected',
    'true',
  );
  await expect(page.locator('a[href*="/membership"]')).toHaveCount(0);
  await page.getByRole('tabpanel').getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/contact\/$/);
});

test('pillar dialogs align their content and stay usable in both languages', async ({ page }) => {
  await english(page);
  for (const language of ['en', 'kn']) {
    if (language === 'kn') await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
    await page.evaluate(() => document.fonts.ready);
    const pillars = page.locator('.pillar-card');
    for (let index = 0; index < 4; index++) {
      const trigger = pillars.nth(index);
      await trigger.click();
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();
      await expect(dialog.locator('a[href*="/membership"]')).toHaveCount(0);
      const bounds = await dialog.evaluate((element) => {
        const content = element.querySelector('.pillar-modal-content')!;
        const selectors = [
          '.pillar-icon',
          '.eyebrow',
          'h2',
          '#pillar-modal-description',
          '.button',
        ];
        const boxes = selectors.map((selector) =>
          content.querySelector(selector)!.getBoundingClientRect(),
        );
        const outer = element.getBoundingClientRect();
        return {
          lefts: boxes.map((box) => box.left),
          outerLeft: outer.left,
          noOverflow: element.scrollWidth <= element.clientWidth,
          fitsViewport: outer.bottom <= window.innerHeight,
        };
      });
      expect(Math.max(...bounds.lefts) - Math.min(...bounds.lefts)).toBeLessThan(2);
      expect(bounds.lefts[0] - bounds.outerLeft).toBeGreaterThanOrEqual(20);
      expect(bounds.noOverflow).toBe(true);
      expect(bounds.fitsViewport).toBe(true);
      await page.keyboard.press('Escape');
      await expect(dialog).toHaveCount(0);
      await expect(trigger).toBeFocused();
    }
  }
});

test('old credits links no longer expose an editorial bibliography', async ({ page }) => {
  await english(page, '/credits');
  await expect(page).toHaveURL(/\/en\/(?:\?.*)?$/);
  await expect(page.getByRole('link', { name: 'Legal notices', exact: true })).toHaveAttribute(
    'href',
    /licenses\/NOTICE\.txt$/,
  );
});

test('journey links open the complete history from home and About, including after reload', async ({
  page,
}) => {
  await page.goto('/?layout=refined#/');
  await page.getByRole('link', { name: 'ನಮ್ಮ ಪಯಣವನ್ನು ನೋಡಿ', exact: true }).click();
  await expect(page).toHaveURL(/\/history\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಪಯಣ');
  await expect(page.locator('.history-chapter-list article')).toHaveCount(5);
  await expect(page.locator('.timeline-year').first()).toHaveText('1999');
  await expect(page.locator('.timeline-year').last()).toHaveText('2026');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಪಯಣ');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'The story of Karnataka Rakshana Vedike',
  );
  await expect(
    page.locator('.history-sources, .history-chapter-sources, .history-review'),
  ).toHaveCount(0);
  await expect(page.locator('.timeline-entry a')).toHaveCount(0);
  await page.goto('/#/about');
  await page
    .getByRole('link', { name: 'Read the complete history & timeline', exact: true })
    .click();
  await expect(page).toHaveURL(/\/en\/history\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Karnataka Rakshana Vedike');
});

test('timeline filters Karave milestones and state context in chronological order', async ({
  page,
}) => {
  await english(page, '/history');
  await expect(page.locator('.timeline-year').first()).toHaveText('1999');
  await expect(page.locator('.timeline-year').last()).toHaveText('2026');
  const events = await page.locator('.timeline-entry').count();
  expect(events).toBeGreaterThan(10);
  await page.getByRole('button', { name: 'All', exact: true }).click();
  expect(await page.locator('.timeline-entry').count()).toBeGreaterThan(events);
  await page.getByRole('button', { name: 'State & language context', exact: true }).click();
  await expect(page.locator('.timeline-year')).toHaveText(['1956', '1973', '2008', '2024']);
  await page.getByRole('button', { name: 'Karave milestones', exact: true }).click();
  const years = (await page.locator('.timeline-year').allTextContents()).map(Number);
  expect(years).toEqual([...years].sort((a, b) => a - b));
  expect(years[0]).toBe(1999);
  expect(years.at(-1)).toBe(2026);
});

test('media modal asks before connecting to YouTube and closes with Escape', async ({ page }) => {
  const videoRequests: string[] = [];
  await page.route('https://www.youtube-nocookie.com/**', async (route) => {
    videoRequests.push(route.request().url());
    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: '<p>Video embed boundary</p>',
    });
  });
  await english(page, '/media');
  await page.getByRole('button', { name: 'Photos', exact: true }).click();
  await expect(page.locator('.media-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'Videos', exact: true }).click();
  await expect(page.locator('.media-card')).toHaveCount(1);
  await page.locator('.media-card').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('iframe')).toHaveCount(0);
  expect(videoRequests).toEqual([]);
  await page.getByRole('button', { name: 'Load video from YouTube' }).click();
  await expect(page.locator('iframe')).toHaveAttribute(
    'src',
    'https://www.youtube-nocookie.com/embed/CsfBsxnA3Uo',
  );
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.locator('.media-card')).toBeFocused();
});

test('mobile navigation traps focus and restores it on dismissal', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Drawer is used on mobile viewports.');
  await english(page);
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await toggle.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Shift+Tab');
  const focusInside = await page.evaluate(
    () => !!document.querySelector('dialog')?.contains(document.activeElement),
  );
  expect(focusInside).toBe(true);
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.getByRole('dialog').getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Every conversation');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('reduced motion disables smooth scrolling and decorative transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
  expect(
    await page
      .locator('.pillar-card')
      .first()
      .evaluate((element) => getComputedStyle(element).transitionDuration),
  ).toBe('0s');
});

test('broken hero image uses a meaningful accessible fallback', async ({ page }) => {
  await page.route('**/narayana-gowdru.png', (route) => route.abort());
  await page.goto('/');
  await expect(page.locator('.hero-leader-card [role="img"]')).toHaveAttribute(
    'aria-label',
    /ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು/,
  );
});

for (const path of [
  '/',
  '/about',
  '/history',
  '/leadership',
  '/programmes',
  '/campaigns',
  '/districts',
  '/media',
  '/contact',
  '/wings',
  '/privacy',
]) {
  test(`accessible and without horizontal overflow: ${path}`, async ({ page }) => {
    await english(page, path);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.locator(
        'a[href*="/membership"], a[href*="/credits"], .history-sources, .history-chapter-sources, .source-links, .media-credit',
      ),
    ).toHaveCount(0);
    await expect(
      page.locator('a[href*="oneindia.com"], a[href*="wikipedia.org"], a[href*="wikimedia.org"]'),
    ).toHaveCount(0);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    expect(
      await page
        .getByRole('heading', { level: 1 })
        .evaluate((element) => element.getBoundingClientRect().left),
    ).toBeGreaterThanOrEqual(16);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      result.violations.map((violation) => ({
        id: violation.id,
        nodes: violation.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });
}

test('unknown routes offer recovery and known routes reload correctly', async ({ page }) => {
  await english(page, '/unknown-page');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page could not be found.');
  await page.getByRole('link', { name: 'Return home' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('The voice of Kannada.');
  await page.goto('/#/membership');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('The voice of Kannada.');
});

for (const path of [
  '/',
  '/history',
  '/leadership',
  '/programmes',
  '/campaigns',
  '/wings',
  '/districts',
]) {
  test(`Kannada accessibility: ${path}`, async ({ page }) => {
    await page.goto(path === '/' ? '/' : `${path}/`);
    await expect(page.locator('html')).toHaveAttribute('lang', 'kn');
    await page.evaluate(() => document.fonts.ready);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(result.violations.map((violation) => violation.id)).toEqual([]);
  });
}

test('clean deep links retain language, content, and local assets after reload', async ({
  page,
}) => {
  await english(page, '/history');
  await expect(page).toHaveURL(/\/en\/history\/$/);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'The story of Karnataka Rakshana Vedike',
  );
  await expect(page.locator('.masthead-emblem')).toHaveJSProperty('naturalWidth', 433);
  await expect(page.locator('.masthead-portrait')).toHaveJSProperty('naturalWidth', 480);
  await page.getByRole('link', { name: 'ಕನ್ನಡ', exact: true }).click();
  await expect(page).toHaveURL(/\/history\/$/);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಪಯಣ');
});
