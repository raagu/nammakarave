import { bilingual as b, type Language } from './types';
import { organization } from './site';
import { officialCopy } from './official';
import { messages } from '../i18n/messages';
import { languagePath, withBasePath, type PagePath } from '../lib/routing';

const configuredUrl = new URL(import.meta.env.VITE_SITE_URL || 'https://nammakarave.com');
if (
  configuredUrl.protocol !== 'https:' ||
  configuredUrl.pathname !== '/' ||
  configuredUrl.search ||
  configuredUrl.hash ||
  configuredUrl.username ||
  configuredUrl.password
) {
  throw new Error('SITE_URL must be an HTTPS origin, for example https://nammakarave.com.');
}

export const publicSite = {
  origin: configuredUrl.origin,
  year: Number(import.meta.env.VITE_BUILD_YEAR || new Date().getFullYear()),
  verification: String(import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || ''),
};

const pageCopy = {
  '/': {
    title: b(
      'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ | ಅಧಿಕೃತ ಜಾಲತಾಣ',
      'Karnataka Rakshana Vedike | Official Website',
    ),
    description: b(
      'ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ನೇತೃತ್ವದ ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಅಧಿಕೃತ ಜಾಲತಾಣ. ಸಂಘಟನೆಯ ಇತಿಹಾಸ, ನಾಯಕತ್ವ, ಕನ್ನಡಪರ ಕಾರ್ಯ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ.',
      'Official website of Karnataka Rakshana Vedike, led by T. A. Narayana Gowda. Explore its history, leadership, Kannada advocacy and Karnataka programmes.',
    ),
  },
  '/about': { title: messages.navAbout, description: officialCopy.aboutPageIntro },
  '/leadership': {
    title: organization.president,
    description: b(
      'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾದ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಪರಿಚಯ ಮತ್ತು ಸಂಘಟನೆಯ ನಾಯಕತ್ವದ ವಿವರಗಳು.',
      'Meet T. A. Narayana Gowda, founder and state president of Karnataka Rakshana Vedike, and learn about the organization’s leadership.',
    ),
  },
  '/history': { title: messages.historyTitle, description: messages.historyIntro },
  '/programmes': { title: messages.navProgrammes, description: officialCopy.programmesIntro },
  '/campaigns': { title: messages.navCampaigns, description: officialCopy.campaignsIntro },
  '/wings': {
    title: messages.navWings,
    description: b(
      'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಅಂಗಸಂಸ್ಥೆಗಳು ಮತ್ತು ಅವುಗಳ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ.',
      'Learn about Karnataka Rakshana Vedike’s organizational wings and their areas of focus.',
    ),
  },
  '/districts': { title: messages.navDistricts, description: messages.sampleContactNote },
  '/media': {
    title: messages.navMedia,
    description: b(
      'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ ಮತ್ತು ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಸಂಗ್ರಹಿತ ಸಂದರ್ಶನಗಳು ಹಾಗೂ ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ಚಿತ್ರಗಳನ್ನು ನೋಡಿ.',
      'Explore archived interviews about Karnataka Rakshana Vedike and T. A. Narayana Gowda, alongside Karnataka’s cultural heritage.',
    ),
  },
  '/contact': {
    title: messages.navContact,
    description: b(
      'ಬೆಂಗಳೂರಿನ ಗಾಂಧಿ ನಗರದಲ್ಲಿರುವ ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಕೇಂದ್ರ ಕಚೇರಿಯ ವಿಳಾಸ, ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ.',
      'Contact Karnataka Rakshana Vedike’s central office in Gandhi Nagar, Bengaluru. Find the approved address, phone numbers and directions.',
    ),
  },
  '/privacy': {
    title: messages.privacy,
    description: b(
      'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಜಾಲತಾಣದಲ್ಲಿ ಭಾಷೆಯ ಆಯ್ಕೆ, ಹೊರಗಿನ ಕೊಂಡಿಗಳು ಮತ್ತು ಸಂದರ್ಶಕರ ಗೌಪ್ಯತೆ ಕುರಿತು ತಿಳಿಯಿರಿ.',
      'Learn how the Karnataka Rakshana Vedike website handles language preferences, external links and visitor privacy.',
    ),
  },
} satisfies Record<PagePath, { title: ReturnType<typeof b>; description: ReturnType<typeof b> }>;

export const absoluteUrl = (path: string): string =>
  new URL(withBasePath(path), publicSite.origin).href;
export const absoluteAsset = (path: string): string => absoluteUrl(`/${path.replace(/^\//, '')}`);

export function pageSeo(page: PagePath | undefined, language: Language) {
  const copy = page
    ? pageCopy[page]
    : { title: messages.notFound, description: messages.errorBody };
  const indexable = !!page && page !== '/districts';
  const canonical = page ? absoluteUrl(languagePath(page, language)) : undefined;
  return {
    language,
    page,
    title:
      page === '/'
        ? copy.title[language]
        : `${copy.title[language]} | ${organization.name[language]}`,
    description: copy.description[language].replace(/\s+/g, ' ').trim(),
    canonical,
    robots: indexable ? 'index,follow,max-image-preview:large' : 'noindex,follow',
    indexable,
    alternates:
      indexable && page
        ? [
            { language: 'kn', href: absoluteUrl(languagePath(page, 'kn')) },
            { language: 'en', href: absoluteUrl(languagePath(page, 'en')) },
            { language: 'x-default', href: absoluteUrl(languagePath(page, 'kn')) },
          ]
        : [],
    image: absoluteAsset(organization.portrait),
    imageAlt: organization.president[language],
    locale: language === 'kn' ? 'kn_IN' : 'en_IN',
    alternateLocale: language === 'kn' ? 'en_IN' : 'kn_IN',
  };
}

export type PageSeo = ReturnType<typeof pageSeo>;

/** Only approved public facts are described; no sample offices or unconfirmed events. */
export function structuredData(seo: PageSeo) {
  if (!seo.indexable || !seo.canonical) return undefined;
  const home = absoluteUrl('/');
  const organizationId = `${home}#organization`;
  const founderId = `${home}#founder`;
  const websiteId = `${home}#website`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: organization.name[seo.language],
        alternateName: organization.name[seo.language === 'kn' ? 'en' : 'kn'],
        url: home,
        logo: {
          '@type': 'ImageObject',
          url: absoluteAsset(organization.logo),
          width: 433,
          height: 410,
        },
        telephone: organization.phones[0].international,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Praveen Building, No. 25, 2nd Floor, 5th Main, near Sukh Sagar, Gandhi Nagar',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560009',
          addressCountry: 'IN',
        },
        sameAs: [organization.instagram],
        founder: { '@id': founderId },
      },
      {
        '@type': 'Person',
        '@id': founderId,
        name: organization.president[seo.language],
        url: absoluteUrl(languagePath('/leadership', seo.language)),
        image: absoluteAsset(organization.heroPortrait),
        jobTitle: officialCopy.founderRole[seo.language],
        worksFor: { '@id': organizationId },
        sameAs: [organization.presidentX],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: home,
        name: organization.name[seo.language],
        inLanguage: ['kn', 'en'],
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': `${seo.canonical}#webpage`,
        url: seo.canonical,
        name: seo.title,
        description: seo.description,
        inLanguage: seo.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': seo.page === '/leadership' ? founderId : organizationId },
      },
    ],
  };
}

export function serializeStructuredData(data: ReturnType<typeof structuredData>): string {
  if (!data) return '';
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
