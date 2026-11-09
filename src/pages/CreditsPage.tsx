import { mediaItems } from '../content/media';
import { landscapes, kuvempuPortrait, karaveEmblem } from '../content/imagery';
import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';
import { AppImage } from '../components/AppImage';
import { asset } from '../lib/assets';
import { organization } from '../content/site';
import { officialCopy } from '../content/official';

export default function CreditsPage() {
  const { t, localize } = useLanguage();
  return (
    <>
      <PageHeading eyebrow={t('credits')} title={t('credits')} intro={t('creditsIntro')} />
      <section className="section pt-0">
        <div className="site-container credits-list">
          <article>
            <AppImage
              src={organization.heroPortrait}
              alt={localize(organization.president)}
              width={160}
              height={160}
              loading="lazy"
            />
            <div>
              <h2>{localize(organization.president)}</h2>
              <p>{localize(officialCopy.ownerPortraitCredit)}</p>
            </div>
          </article>
          {[...mediaItems, ...landscapes, kuvempuPortrait, karaveEmblem].map((item) => (
            <article key={item.id}>
              <AppImage
                src={item.image}
                alt={localize(item.alt)}
                width={160}
                height={120}
                loading="lazy"
              />
              <div>
                <h2>{localize(item.title)}</h2>
                <p>{item.credit}</p>
                <a href={item.source} target="_blank" rel="noopener noreferrer">
                  {t('source')} ↗
                </a>
                <span> · </span>
                <a
                  href={
                    'licenseUrl' in item
                      ? item.licenseUrl
                      : item.license === 'CC BY 3.0'
                        ? 'https://creativecommons.org/licenses/by/3.0/'
                        : item.license === 'CC BY-SA 3.0'
                          ? 'https://creativecommons.org/licenses/by-sa/3.0/'
                          : 'https://creativecommons.org/licenses/by-sa/4.0/'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.license}
                </a>
              </div>
            </article>
          ))}
          <p className="muted">
            Inter — Rasmus Andersson · Noto Sans Kannada — The Noto Project · SIL Open Font License
            1.1. <a href={asset('licenses/FONTS.txt')}>Licenses</a>
          </p>
        </div>
      </section>
    </>
  );
}
