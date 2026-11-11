import { useEffect } from 'react';
import { pageSeo, structuredData, serializeStructuredData } from '../content/seo';
import type { Language } from '../content/types';
import type { PagePath } from '../lib/routing';

export function Seo({ page, language }: { page: PagePath | undefined; language: Language }) {
  useEffect(() => {
    const seo = pageSeo(page, language);
    document.title = seo.title;
    document.documentElement.lang = language;
    function meta(name: string, content: string, property = false) {
      const attribute = property ? 'property' : 'name';
      let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(attribute, name);
        document.head.append(node);
      }
      node.content = content;
    }
    meta('description', seo.description);
    meta('robots', seo.robots);
    meta('og:type', 'website', true);
    meta('og:title', seo.title, true);
    meta('og:description', seo.description, true);
    meta('og:image', seo.image, true);
    meta('og:image:alt', seo.imageAlt, true);
    meta('og:locale', seo.locale, true);
    meta('og:locale:alternate', seo.alternateLocale, true);
    meta('twitter:card', 'summary');
    meta('twitter:title', seo.title);
    meta('twitter:description', seo.description);
    meta('twitter:image', seo.image);
    meta('twitter:image:alt', seo.imageAlt);
    const oldCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (seo.canonical) {
      const canonical = oldCanonical ?? document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = seo.canonical;
      if (!oldCanonical) document.head.append(canonical);
      meta('og:url', seo.canonical, true);
    } else {
      oldCanonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((node) => node.remove());
    for (const alternate of seo.alternates) {
      const node = document.createElement('link');
      node.rel = 'alternate';
      node.hreflang = alternate.language;
      node.href = alternate.href;
      document.head.append(node);
    }
    document.getElementById('organization-structured-data')?.remove();
    const data = structuredData(seo);
    if (data) {
      const node = document.createElement('script');
      node.id = 'organization-structured-data';
      node.type = 'application/ld+json';
      node.textContent = serializeStructuredData(data);
      document.head.append(node);
    }
  }, [page, language]);
  return null;
}
