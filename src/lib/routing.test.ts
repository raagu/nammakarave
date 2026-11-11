import { describe, expect, it } from 'vitest';
import {
  indexDocumentDestination,
  languagePath,
  legacyHashDestination,
  normalizeBasePath,
  resolvePage,
} from './routing';

describe('crawlable language routes', () => {
  it('keeps Kannada at the main URLs and gives English its own addresses', () => {
    expect(languagePath('/', 'kn')).toBe('/');
    expect(languagePath('/history', 'kn')).toBe('/history/');
    expect(languagePath('/history', 'en')).toBe('/en/history/');
    expect(resolvePage('/en/history/')).toMatchObject({ language: 'en', page: '/history' });
    expect(resolvePage('/history/')).toMatchObject({ language: 'kn', page: '/history' });
    expect(resolvePage('/en/not-a-page/').page).toBeUndefined();
  });
  it('preserves existing fragment links and query-selected districts', () => {
    expect(
      legacyHashDestination(
        { hash: '#/districts?district=mandya', search: '?layout=refined&utm_source=poster' },
        'en',
      ),
    ).toBe('/en/districts/?utm_source=poster&district=mandya');
    expect(legacyHashDestination({ hash: '#/membership?wing=legal', search: '' }, 'kn')).toBe(
      '/?wing=legal',
    );
    expect(legacyHashDestination({ hash: '#main', search: '' }, 'kn')).toBeUndefined();
    expect(legacyHashDestination({ hash: '#/en', search: '' }, 'kn')).toBe('/en/');
    expect(legacyHashDestination({ hash: '#/kn/history', search: '' }, 'en')).toBe('/history/');
  });
  it('does not turn an old fragment into an external redirect', () => {
    expect(
      legacyHashDestination({ hash: '#//example.com/phishing', search: '' }, 'en'),
    ).toBeUndefined();
    expect(
      legacyHashDestination({ hash: '#/\\example.com/phishing', search: '' }, 'kn'),
    ).not.toContain('https://example.com');
  });
  it('validates repository subpaths instead of accepting unsafe bases', () => {
    expect(normalizeBasePath('/karave-project')).toBe('/karave-project/');
    expect(() => normalizeBasePath('/../secrets/')).toThrow();
    expect(() => normalizeBasePath('https://example.com')).toThrow();
  });
  it('normalizes direct directory-index links only for real pages', () => {
    expect(indexDocumentDestination('/index.html')).toBe('/');
    expect(indexDocumentDestination('/en/history/index.html')).toBe('/en/history/');
    expect(indexDocumentDestination('/not-a-page/index.html')).toBeUndefined();
    expect(indexDocumentDestination('/history/')).toBeUndefined();
  });
});
