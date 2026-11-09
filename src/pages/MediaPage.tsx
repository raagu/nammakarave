import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';
import { MediaGallery } from '../features/media/MediaGallery';
import { Icon } from '../components/Icon';
import { pressReleases } from '../content/media';
import { pillars } from '../content/site';
import { downloadBlob } from '../lib/download';
import { asset } from '../lib/assets';

export default function MediaPage() {
  const { t, localize } = useLanguage();
  const [failed, setFailed] = useState(false);
  return (
    <>
      <PageHeading eyebrow={t('navMedia')} title={t('mediaTitle')} intro={t('mediaEyebrow')} />
      <section className="section pt-0">
        <div className="site-container">
          <MediaGallery showHeading={false} />
          <div className="press-strip">
            <div>
              <Icon name="book" />
              <div>
                <h2>{t('pressTitle')}</h2>
                <p>{t('pressDescription')}</p>
              </div>
            </div>
            <button
              type="button"
              className="text-link"
              onClick={() => {
                try {
                  const note = [
                    t('brandShort'),
                    t('pressDescription'),
                    '',
                    ...pillars.flatMap((pillar) => [
                      localize(pillar.title),
                      localize(pillar.description),
                      '',
                    ]),
                  ].join('\n');
                  downloadBlob(
                    new Blob(['\ufeff', note], { type: 'text/plain;charset=utf-8' }),
                    'namma-karave-introduction.txt',
                  );
                  setFailed(false);
                } catch {
                  setFailed(true);
                }
              }}
            >
              {t('downloadNote')}
              <Icon name="download" />
            </button>
          </div>
          {failed && (
            <p className="field-error" role="alert">
              {t('downloadFailed')}
            </p>
          )}
          <div className="press-releases">
            <h2>{t('officialPress')}</h2>
            {pressReleases.length === 0 ? (
              <p className="muted">{t('pressPending')}</p>
            ) : (
              pressReleases.map((release) => (
                <a key={release.id} href={asset(release.path)} download>
                  <span>{localize(release.title)}</span>
                  <time dateTime={release.date}>{release.date}</time>
                  <Icon name="download" />
                </a>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
