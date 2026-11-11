import { Link } from '../components/LocalizedLink';
import { historyChapters } from '../content/history';
import { useLanguage } from '../i18n/context';
import { PageHeading, SectionHeading } from '../components/SectionHeading';
import { Icon } from '../components/Icon';
import { Timeline } from '../features/timeline/Timeline';

export default function HistoryPage() {
  const { t, localize } = useLanguage();
  return (
    <>
      <PageHeading eyebrow={t('historyNav')} title={t('historyTitle')} intro={t('historyIntro')} />
      <section className="section history-intro-section">
        <div className="site-container history-overview history-overview-full">
          <div className="history-lead">
            <span className="history-range">1999 — 2026</span>
            <h2>{t('historyLeadTitle')}</h2>
            <p>{t('historyScope')}</p>
            <Link to="/about" className="text-link">
              <Icon name="left" />
              {t('historyBackAbout')}
            </Link>
          </div>
        </div>
      </section>
      <section className="section history-chapters" aria-labelledby="history-chapters-title">
        <div className="site-container">
          <SectionHeading
            eyebrow={t('historyChaptersEyebrow')}
            title={t('historyChaptersTitle')}
            id="history-chapters-title"
          />
          <ol className="history-chapter-list">
            {historyChapters.map((chapter) => (
              <li key={chapter.id}>
                <article aria-labelledby={`chapter-${chapter.id}`}>
                  <span className="history-period">{chapter.period}</span>
                  <div>
                    <h3 id={`chapter-${chapter.id}`}>{localize(chapter.title)}</h3>
                    <p>{localize(chapter.body)}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Timeline />
    </>
  );
}
