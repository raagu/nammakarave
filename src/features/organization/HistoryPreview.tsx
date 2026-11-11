import { Link } from '../../components/LocalizedLink';
import { milestones } from '../../content/milestones';
import { officialCopy as copy } from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { Icon } from '../../components/Icon';

const highlights = [
  'formation',
  'belagavi-2005',
  'metro-2017',
  'language-act-2024',
  'employment-2026',
];
export function HistoryPreview() {
  const { localize } = useLanguage();
  const entries = milestones.filter((item) => highlights.includes(item.id));
  return (
    <section className="section history-preview">
      <div className="site-container history-preview-grid">
        <div className="section-copy">
          <p className="eyebrow light-eyebrow">{localize(copy.historyEyebrow)}</p>
          <h2>{localize(copy.historyTitle)}</h2>
          <p>{localize(copy.historyIntro)}</p>
          <Link className="button button-yellow" to="/history">
            {localize(copy.fullHistory)}
            <Icon name="arrow" />
          </Link>
        </div>
        <ol className="history-highlights">
          {entries.map((entry) => (
            <li key={entry.id}>
              <span>{entry.year}</span>
              <div>
                <h3>{localize(entry.title)}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
