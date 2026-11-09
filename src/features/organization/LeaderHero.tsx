import { Link } from 'react-router-dom';
import { organization } from '../../content/site';
import { officialCopy as copy } from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { AppImage } from '../../components/AppImage';
import { Icon } from '../../components/Icon';

export function LeaderHero() {
  const { localize } = useLanguage();
  return (
    <section className="organization-hero" aria-labelledby="hero-title">
      <div className="site-container organization-hero-grid">
        <div className="organization-hero-copy">
          <p className="eyebrow light-eyebrow">
            <span className="mini-flag" aria-hidden="true" />
            {localize(copy.official)}
          </p>
          <h1 id="hero-title">{localize(copy.heroTitle)}</h1>
          <p className="hero-description">{localize(copy.heroBody)}</p>
          <div className="hero-buttons">
            <Link className="button button-yellow" to="/about">
              {localize(copy.discover)}
              <Icon name="arrow" />
            </Link>
            <Link className="button button-hero-outline" to="/history">
              {localize(copy.ourStory)}
              <Icon name="upRight" />
            </Link>
          </div>
          <div className="hero-foundation">
            <strong>1999</strong>
            <span>{localize(copy.founding)}</span>
            <span className="hero-foundation-rule" aria-hidden="true" />
          </div>
        </div>
        <figure className="hero-leader-card">
          <AppImage
            className="leader-image hero-leader-image"
            src={organization.heroPortrait}
            alt={localize(organization.president)}
            width={400}
            height={400}
            fetchPriority="high"
          />
          <figcaption>
            <span>{localize(copy.founderRole)}</span>
            <strong>{localize(organization.president)}</strong>
            <Link to="/leadership">
              {localize(copy.leaderProfile)}
              <Icon name="upRight" />
            </Link>
          </figcaption>
        </figure>
      </div>
      <div className="hero-principles site-container" aria-label={localize(copy.priorities)}>
        {organization.slogans.map((slogan, index) => (
          <span key={slogan.en}>
            <span className="principle-number">0{index + 1}</span>
            {localize(slogan)}
          </span>
        ))}
      </div>
    </section>
  );
}
