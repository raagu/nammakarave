import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mediaItems } from '../../content/media';
import type { MediaItem } from '../../content/types';
import { useLanguage } from '../../i18n/context';
import { AppImage } from '../../components/AppImage';
import { Icon } from '../../components/Icon';
import { Modal } from '../../components/Modal';
import { SectionHeading } from '../../components/SectionHeading';

function MediaViewer({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  const { t, localize } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const videoId =
    item.videoId && /^[A-Za-z0-9_-]{11}$/.test(item.videoId) ? item.videoId : undefined;
  return (
    <Modal titleId="media-dialog-title" onClose={onClose} className="media-dialog">
      <div className="media-viewer">
        <h2 id="media-dialog-title">{localize(item.title)}</h2>
        {item.type === 'video' && videoId ? (
          <>
            <div className="video-frame">
              {loaded ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title={localize(item.title)}
                  allow="encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="video-poster">
                  <AppImage src={item.image} alt={localize(item.alt)} width={472} height={563} />
                  <button
                    type="button"
                    className="button button-yellow"
                    onClick={() => setLoaded(true)}
                  >
                    <Icon name="play" />
                    {t('loadVideo')}
                  </button>
                </div>
              )}
            </div>
            <p className="video-consent">{t(loaded ? 'videoFallback' : 'videoConsent')}</p>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('watchYoutube')}
              <Icon name="external" />
            </a>
          </>
        ) : (
          <AppImage className="media-full-image" src={item.image} alt={localize(item.alt)} />
        )}
        <p>{localize(item.description)}</p>
      </div>
    </Modal>
  );
}

export function MediaGallery({ showHeading = true }: { showHeading?: boolean }) {
  const { t, localize } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [params, setParams] = useSearchParams();
  const selected = mediaItems.find((item) => item.id === params.get('item'));
  const filtered = mediaItems.filter((item) => filter === 'all' || item.type === filter);
  const filterButtons = (
    <div className="filter-group" role="group" aria-label={t('navMedia')}>
      {(['all', 'photo', 'video'] as const).map((key) => (
        <button
          type="button"
          key={key}
          aria-pressed={filter === key}
          onClick={() => setFilter(key)}
        >
          {t(key === 'photo' ? 'photos' : key === 'video' ? 'videos' : 'all')}
        </button>
      ))}
    </div>
  );
  return (
    <>
      {showHeading ? (
        <SectionHeading
          eyebrow={t('mediaEyebrow')}
          title={t('mediaTitle')}
          action={filterButtons}
        />
      ) : (
        <div className="mb-8 flex justify-end">{filterButtons}</div>
      )}
      <div className="media-grid">
        {filtered.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`media-card media-${item.type}`}
            onClick={() =>
              setParams(
                (previous) => {
                  previous.set('item', item.id);
                  return previous;
                },
                { preventScrollReset: true },
              )
            }
            aria-label={`${t('mediaOpen')}: ${localize(item.title)}`}
          >
            <div className="media-image-wrap">
              <AppImage
                src={item.image}
                alt={localize(item.alt)}
                loading="lazy"
                width={item.type === 'video' ? 472 : 960}
                height={item.type === 'video' ? 563 : 500}
              />
              <span className="media-badge">{t(item.type)}</span>
              <span className="media-card-action">
                <Icon name={item.type === 'video' ? 'play' : 'upRight'} />
              </span>
            </div>
            <div className="media-card-copy">
              <span>{t(item.type)}</span>
              <h3>{localize(item.title)}</h3>
            </div>
          </button>
        ))}
        {filtered.length === 0 && <p>{t('noMedia')}</p>}
      </div>
      {selected && (
        <MediaViewer
          key={selected.id}
          item={selected}
          onClose={() =>
            setParams(
              (previous) => {
                previous.delete('item');
                return previous;
              },
              { replace: true, preventScrollReset: true },
            )
          }
        />
      )}
    </>
  );
}
