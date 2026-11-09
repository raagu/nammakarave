import { useState } from 'react';
import { milestones } from '../../content/milestones';
import { useLanguage } from '../../i18n/context';
import { SectionHeading } from '../../components/SectionHeading';

export function Timeline() {
  const { t, localize } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'culture' | 'movement'>('movement');
  const entries = milestones
    .filter((entry) => filter === 'all' || entry.category === filter)
    .sort((a, b) => (a.date ?? String(a.year)).localeCompare(b.date ?? String(b.year)));
  return (
    <section className="section journey-section" aria-labelledby="journey-title">
      <div className="site-container">
        <SectionHeading
          eyebrow={t('journeyEyebrow')}
          title={t('journeyTitle')}
          id="journey-title"
          action={
            <div className="filter-group" role="group" aria-label={t('journeyTitle')}>
              {(['all', 'culture', 'movement'] as const).map((key) => (
                <button
                  type="button"
                  key={key}
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                >
                  {t(key)}
                </button>
              ))}
            </div>
          }
        />
        <p className="muted timeline-context">{t('timelineContext')}</p>
        <div className="timeline" aria-live="polite">
          {entries.map((entry) => (
            <article className="timeline-entry" key={entry.id}>
              <time className="timeline-year" dateTime={entry.date ?? String(entry.year)}>
                {entry.year}
              </time>
              <span className="timeline-node" />
              <div>
                <span className="timeline-category">
                  {t(entry.category)}
                  {entry.period && ` · ${localize(entry.period)}`}
                </span>
                <h3>{localize(entry.title)}</h3>
                <p>{localize(entry.description)}</p>
              </div>
            </article>
          ))}
          {entries.length === 0 && <p>{t('emptyTimeline')}</p>}
        </div>
      </div>
    </section>
  );
}
