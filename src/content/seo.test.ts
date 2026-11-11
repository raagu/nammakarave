import { describe, expect, it } from 'vitest';
import { pageSeo, structuredData } from './seo';
import { languages, pagePaths } from '../lib/routing';

describe('search metadata and indexing policy', () => {
  it('gives each language/page its own title, description, and canonical', () => {
    const all = pagePaths.flatMap((page) => languages.map((language) => pageSeo(page, language)));
    expect(new Set(all.map((page) => page.canonical)).size).toBe(22);
    expect(new Set(all.map((page) => page.title)).size).toBe(22);
    expect(new Set(all.map((page) => page.description)).size).toBe(22);
    for (const page of all.filter((page) => page.indexable)) {
      expect(page.alternates.map((alternate) => alternate.language)).toEqual([
        'kn',
        'en',
        'x-default',
      ]);
      expect(page.alternates.some((alternate) => alternate.href === page.canonical)).toBe(true);
      expect(page.canonical).not.toContain('#');
    }
  });
  it('excludes demonstration contacts and missing pages from indexing', () => {
    for (const language of languages) {
      expect(pageSeo('/districts', language).robots).toBe('noindex,follow');
      expect(structuredData(pageSeo('/districts', language))).toBeUndefined();
      expect(pageSeo(undefined, language).indexable).toBe(false);
      expect(pageSeo(undefined, language).canonical).toBeUndefined();
    }
  });
  it('uses the approved headquarters and never invents local offices or events', () => {
    const data = structuredData(pageSeo('/', 'en'))!;
    const organization = data['@graph'].find((node) => node['@type'] === 'Organization');
    expect(organization).toMatchObject({
      telephone: '+918022370032',
      address: { postalCode: '560009', addressLocality: 'Bengaluru' },
    });
    expect(JSON.stringify(data)).not.toContain('00000');
    expect(data['@graph'].some((node) => ['Event', 'LocalBusiness'].includes(node['@type']))).toBe(
      false,
    );
  });
});
