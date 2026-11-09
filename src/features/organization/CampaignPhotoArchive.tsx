import {
  campaignPhotographs,
  officialCopy as copy,
  type CampaignPhotograph,
} from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { AppImage } from '../../components/AppImage';
import { Icon } from '../../components/Icon';

export function CampaignPhotoArchive({
  photographs = campaignPhotographs,
}: {
  photographs?: readonly CampaignPhotograph[];
}) {
  const { localize, language } = useLanguage();
  const formatter = new Intl.DateTimeFormat(language === 'kn' ? 'kn-IN' : 'en-IN', {
    dateStyle: 'long',
    timeZone: 'UTC',
  });
  return (
    <section className="section section-muted">
      <div className="site-container">
        {photographs.length ? (
          <>
            <div className="section-heading">
              <h2>{localize(copy.photoArchivePending)}</h2>
            </div>
            <div className="programme-grid campaign-photo-grid">
              {[...photographs]
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((photo) => (
                  <figure className="programme-card" key={photo.id}>
                    <div className="programme-photo">
                      <AppImage
                        src={photo.image}
                        alt={localize(photo.alt)}
                        width={960}
                        height={640}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="programme-card-copy">
                      <time dateTime={photo.date}>{formatter.format(new Date(photo.date))}</time>
                      <h3>{localize(photo.caption)}</h3>
                      <p>{localize(photo.location)}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </>
        ) : (
          <div className="archive-notice">
            <Icon name="culture" />
            <div>
              <h2>{localize(copy.photoArchivePending)}</h2>
              <p>{localize(copy.photoArchiveBody)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
