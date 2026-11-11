import type { Language } from '../content/types.ts';

export const pagePaths = [
  '/',
  '/about',
  '/leadership',
  '/history',
  '/programmes',
  '/campaigns',
  '/wings',
  '/districts',
  '/media',
  '/contact',
  '/privacy',
] as const;
export type PagePath = (typeof pagePaths)[number];
export const languages: readonly Language[] = ['kn', 'en'];

export function normalizeBasePath(value: string): string {
  const parts = value.split('/').filter(Boolean);
  if (
    !value.startsWith('/') ||
    parts.some((part) => !/^[\w.~-]+$/.test(part) || part === '.' || part === '..')
  ) {
    throw new Error('SITE_BASE_PATH must be an absolute directory path without query parameters.');
  }
  return parts.length ? `/${parts.join('/')}/` : '/';
}

export const basePath = normalizeBasePath(import.meta.env?.BASE_URL ?? '/');
export const routerBasename = basePath === '/' ? '/' : basePath.slice(0, -1);

export function normalizePagePath(pathname: string): string {
  const path = `/${pathname}`.replace(/\/{2,}/g, '/');
  return path === '/' ? '/' : path.replace(/\/+$/, '');
}

export function resolvePage(pathname: string) {
  let path = normalizePagePath(pathname);
  const language: Language = path === '/en' || path.startsWith('/en/') ? 'en' : 'kn';
  if (language === 'en') path = path.slice(3) || '/';
  else if (path === '/kn' || path.startsWith('/kn/')) path = path.slice(3) || '/';
  path = normalizePagePath(path);
  return {
    language,
    path,
    page: pagePaths.find((page) => page === path),
    retired: path === '/membership' || path === '/credits',
    alias: pathname === '/kn' || pathname.startsWith('/kn/'),
  };
}

export function languagePath(path: string, language: Language): string {
  const normalized = normalizePagePath(path);
  return `${language === 'en' ? '/en' : ''}${normalized === '/' ? '/' : `${normalized}/`}`;
}

export function withBasePath(path: string): string {
  return `${basePath === '/' ? '' : basePath.slice(0, -1)}${path}`;
}

export function stripBasePath(pathname: string): string {
  if (basePath === '/') return pathname;
  if (pathname === routerBasename) return '/';
  return pathname.startsWith(basePath) ? `/${pathname.slice(basePath.length)}` : pathname;
}

/** Directory indexes are the same document as their canonical directory URL. */
export function indexDocumentDestination(pathname: string): string | undefined {
  if (!pathname.endsWith('/index.html')) return;
  const route = resolvePage(stripBasePath(pathname.slice(0, -'index.html'.length)));
  if (route.page) return withBasePath(languagePath(route.page, route.language));
}

/** Old fragment links are migrated only to this site's paths, never to another origin. */
export function legacyHashDestination(
  location: { hash: string; search: string },
  language: Language,
): string | undefined {
  if (!location.hash.startsWith('#/') || location.hash.startsWith('#//')) return;
  const target = new URL(`https://legacy.invalid${location.hash.slice(1)}`);
  if (target.origin !== 'https://legacy.invalid') return;
  const resolved = resolvePage(target.pathname);
  const chosenLanguage = /^\/(?:en|kn)(?:\/|$)/.test(target.pathname)
    ? resolved.language
    : language;
  const search = new URLSearchParams(location.search);
  search.delete('layout');
  for (const [key, value] of target.searchParams) search.set(key, value);
  const query = search.size ? `?${search}` : '';
  return `${withBasePath(languagePath(resolved.retired ? '/' : resolved.path, chosenLanguage))}${query}${target.hash}`;
}
