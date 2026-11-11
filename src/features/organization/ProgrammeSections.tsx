import { Link } from '../../components/LocalizedLink';
import { officialCopy as copy, programmeArchive, upcomingProgrammes } from '../../content/official';
import { organization } from '../../content/site';
import { useLanguage } from '../../i18n/context';
import { AppImage } from '../../components/AppImage';
import { Icon } from '../../components/Icon';

export function ProgrammeArchive({
  heading = true,
  showAllLink = true,
}: {
  heading?: boolean;
  showAllLink?: boolean;
}) {
  const { localize } = useLanguage();
  return (
    <section
      className="section programme-section"
      aria-labelledby={heading ? 'programme-title' : undefined}
    >
      <div className="site-container">
        {heading && (
          <div className="section-heading">
            <div>
              <p className="eyebrow">{localize(copy.programmesEyebrow)}</p>
              <h2 id="programme-title">{localize(copy.archive)}</h2>
            </div>
            {showAllLink && (
              <Link className="text-link" to="/programmes">
                {localize(copy.allProgrammes)}
                <Icon name="arrow" />
              </Link>
            )}
          </div>
        )}
        <div className="programme-grid">
          {programmeArchive.map((programme) => (
            <article className="programme-card" key={programme.id}>
              <div
                className={`programme-photo ${programme.imageStatus === 'approved' ? '' : 'programme-cover'}`}
              >
                {programme.imageStatus === 'approved' ? (
                  <AppImage
                    src={programme.image}
                    alt={localize(programme.imageAlt)}
                    width={960}
                    height={540}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <Icon name="people" />
                    <span>{localize(programme.category)}</span>
                    <small>{localize(copy.programmePhotoPending)}</small>
                  </>
                )}
                <span className="programme-year">{programme.year}</span>
              </div>
              <div className="programme-card-copy">
                <p className="eyebrow">{localize(programme.category)}</p>
                <h3>{localize(programme.title)}</h3>
                <p>{localize(programme.body)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UpcomingProgrammes() {
  const { localize, language } = useLanguage();
  return (
    <section className="section upcoming-section" aria-labelledby="upcoming-title">
      <div className="site-container upcoming-panel">
        <div>
          <p className="eyebrow">{localize(copy.upcoming)}</p>
          <h2 id="upcoming-title">{localize(copy.upcomingTitle)}</h2>
        </div>
        <div className="upcoming-content">
          {upcomingProgrammes.length ? (
            upcomingProgrammes.map((programme) => (
              <article key={programme.id}>
                <time dateTime={programme.date}>
                  {new Intl.DateTimeFormat(language === 'kn' ? 'kn-IN' : 'en-IN', {
                    dateStyle: 'long',
                    timeZone: 'UTC',
                  }).format(new Date(programme.date))}
                </time>
                <h3>{localize(programme.title)}</h3>
                <p>{localize(programme.venue)}</p>
              </article>
            ))
          ) : (
            <>
              <span className="calendar-mark" aria-hidden="true">
                <Icon name="book" />
              </span>
              <p>{localize(copy.upcomingEmpty)}</p>
              <a
                className="text-link"
                href={organization.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localize(copy.stayConnected)}
                <Icon name="upRight" />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
