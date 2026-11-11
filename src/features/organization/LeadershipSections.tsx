import { Link } from '../../components/LocalizedLink';
import { organization } from '../../content/site';
import { officialCopy as copy, leaderMessage } from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { AppImage } from '../../components/AppImage';
import { Icon } from '../../components/Icon';

export function FounderProfile() {
  const { t, localize } = useLanguage();
  return (
    <section className="section founder-section">
      <div className="site-container founder-grid">
        <div className="founder-portrait">
          <AppImage src={organization.portrait} alt={t('leaderAlt')} width={472} height={563} />
          <span>{localize(copy.founderRole)}</span>
        </div>
        <div className="section-copy">
          <p className="eyebrow">{localize(copy.founding)}</p>
          <h2>{localize(copy.founderTitle)}</h2>
          <p>{localize(copy.founderBody)}</p>
          <p>{localize(copy.foundingBody)}</p>
          <div className="inline-actions">
            <Link className="text-link" to="/history">
              {localize(copy.fullHistory)}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeaderMessage({ compact = false }: { compact?: boolean }) {
  const { localize } = useLanguage();
  const draft = leaderMessage.status === 'draft';
  const visible = !draft || import.meta.env.DEV;
  return (
    <section
      className="section president-message"
      aria-labelledby="president-message-title"
      id="president-message"
    >
      <div className="site-container message-grid">
        <div>
          <p className="eyebrow">{localize(copy.presidentMessage)}</p>
          <h2 id="president-message-title">{localize(copy.messageTitle)}</h2>
          <div className="message-signature">
            <strong>{localize(copy.founderTitle)}</strong>
            <span>{localize(copy.founderRole)}</span>
          </div>
          <Link className="text-link" to="/media?item=interview">
            <Icon name="play" />
            {localize(copy.watchInterview)}
          </Link>
        </div>
        <div className="message-copy">
          {visible ? (
            <>
              {draft && <span className="review-label">{localize(copy.messageReview)}</span>}
              {leaderMessage.paragraphs.slice(0, compact ? 2 : undefined).map((p) => (
                <p key={p.en}>{localize(p)}</p>
              ))}
              {compact && (
                <Link className="text-link" to="/leadership">
                  {localize(copy.readMore)}
                  <Icon name="arrow" />
                </Link>
              )}
            </>
          ) : (
            <p>{localize(copy.messagePending)}</p>
          )}
        </div>
      </div>
    </section>
  );
}
