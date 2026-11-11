import { useSearchParams } from 'react-router-dom';
import { Link } from '../../components/LocalizedLink';
import { wings } from '../../content/wings';
import { useLanguage } from '../../i18n/context';
import { Icon } from '../../components/Icon';

export function WingsExplorer() {
  const { t, localize } = useLanguage();
  const [params, setParams] = useSearchParams();
  const selected = wings.find((wing) => wing.id === params.get('wing')) ?? wings[0]!;
  function select(id: string) {
    setParams(
      (previous) => {
        previous.set('wing', id);
        return previous;
      },
      { preventScrollReset: true },
    );
  }
  return (
    <div className="wings-layout">
      <div
        className="wings-tabs"
        role="tablist"
        aria-orientation="vertical"
        aria-label={t('navWings')}
      >
        {wings.map((wing, index) => (
          <button
            type="button"
            role="tab"
            id={`wing-tab-${wing.id}`}
            aria-controls={`wing-panel-${wing.id}`}
            aria-selected={selected.id === wing.id}
            tabIndex={selected.id === wing.id ? 0 : -1}
            key={wing.id}
            onClick={() => select(wing.id)}
            onKeyDown={(event) => {
              let next: number;
              if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
                next = (index + 1) % wings.length;
              else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
                next = (index - 1 + wings.length) % wings.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = wings.length - 1;
              else return;
              event.preventDefault();
              const target = wings[next]!;
              select(target.id);
              requestAnimationFrame(() =>
                document.getElementById(`wing-tab-${target.id}`)?.focus(),
              );
            }}
          >
            <span className="wing-tab-icon">
              <Icon name={wing.icon} />
            </span>
            <span>{localize(wing.title)}</span>
            <Icon name="upRight" />
          </button>
        ))}
      </div>
      {wings.map((wing) => (
        <div
          key={wing.id}
          className="wing-panel"
          role="tabpanel"
          id={`wing-panel-${wing.id}`}
          aria-labelledby={`wing-tab-${wing.id}`}
          tabIndex={0}
          hidden={selected.id !== wing.id}
        >
          <span className="wing-panel-icon">
            <Icon name={wing.icon} />
          </span>
          <p className="eyebrow">{localize(wing.title)}</p>
          <h3>{localize(wing.tagline)}</h3>
          <p>{localize(wing.description)}</p>
          <span className="wing-focus-title">{t('wingActivities')}</span>
          <ul className="wing-activities">
            {wing.activities.map((activity) => (
              <li key={activity.en}>
                <Icon name="check" />
                {localize(activity)}
              </li>
            ))}
          </ul>
          <Link className="text-link" to="/contact">
            {t('navContact')}
            <Icon name="arrow" />
          </Link>
        </div>
      ))}
    </div>
  );
}
