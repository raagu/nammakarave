import { Link } from 'react-router-dom';
import { officialCopy as copy, values, participationFaqs } from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { Icon } from '../../components/Icon';

export function PurposeIntro() {
  const { localize } = useLanguage();
  return (
    <section className="section purpose-section" aria-labelledby="purpose-title">
      <div className="site-container purpose-grid">
        <div className="section-copy">
          <p className="eyebrow">{localize(copy.aboutEyebrow)}</p>
          <h2 id="purpose-title">{localize(copy.aboutTitle)}</h2>
          <p>{localize(copy.aboutIntro)}</p>
          <Link className="text-link" to="/about">
            {localize(copy.readMore)}
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="purpose-cards">
          {[
            { title: copy.vision, body: copy.visionBody, icon: 'globe' as const },
            { title: copy.mission, body: copy.missionBody, icon: 'shield' as const },
          ].map((item) => (
            <article key={item.title.en}>
              <span className="purpose-icon">
                <Icon name={item.icon} />
              </span>
              <h3>{localize(item.title)}</h3>
              <p>{localize(item.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrganizationValues() {
  const { localize } = useLanguage();
  return (
    <section className="section section-muted">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{localize(copy.aboutEyebrow)}</p>
            <h2>{localize(copy.valuesTitle)}</h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title.en}>
              <Icon name={value.icon} />
              <h3>{localize(value.title)}</h3>
              <p>{localize(value.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Participation() {
  const { t, localize } = useLanguage();
  return (
    <section className="section participation-section">
      <div className="site-container participation-panel">
        <div>
          <p className="eyebrow light-eyebrow">{localize(copy.participation)}</p>
          <h2>{localize(copy.participationTitle)}</h2>
          <p>{localize(copy.participationBody)}</p>
          <Link className="button button-yellow" to="/about">
            {t('navAbout')}
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="participation-links">
          <Link to="/wings">
            <Icon name="people" />
            <span>
              <strong>{localize(copy.wings)}</strong>
              <span>{t('wingActivities')}</span>
            </span>
            <Icon name="upRight" />
          </Link>
          <Link to="/districts">
            <Icon name="pin" />
            <span>
              <strong>{localize(copy.network)}</strong>
              <span>{localize(copy.networkBody)}</span>
            </span>
            <Icon name="upRight" />
          </Link>
          <Link to="/media">
            <Icon name="play" />
            <span>
              <strong>{localize(copy.media)}</strong>
              <span>{localize(copy.mediaBody)}</span>
            </span>
            <Icon name="upRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function OrganizationFaq() {
  const { localize } = useLanguage();
  return (
    <section className="section faq-section">
      <div className="site-container faq-grid">
        <div>
          <p className="eyebrow">{localize(copy.participation)}</p>
          <h2>{localize(copy.faqTitle)}</h2>
        </div>
        <div>
          {participationFaqs.map((item) => (
            <details key={item.question.en}>
              <summary>
                {localize(item.question)}
                <Icon name="chevron" />
              </summary>
              <p>{localize(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
