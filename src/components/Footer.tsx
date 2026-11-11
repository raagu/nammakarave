import { Link } from './LocalizedLink';
import { organization } from '../content/site';
import { useLanguage } from '../i18n/context';
import { Brand } from './Brand';
import { Icon } from './Icon';
import { navigation } from '../content/navigation';
import { asset } from '../lib/assets';
import { publicSite } from '../content/seo';

export function ContactBanner() {
  const { t } = useLanguage();
  return (
    <section className="contact-banner" aria-labelledby="contact-banner-title">
      <div className="site-container contact-grid">
        <div>
          <p className="eyebrow">{t('contactEyebrow')}</p>
          <h2 id="contact-banner-title">{t('contactTitle')}</h2>
        </div>
        <Link className="button button-dark" to="/contact">
          <span>{t('navContact')}</span>
          <Icon name="upRight" />
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, localize } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>{t('footerDescription')}</p>
            <div className="footer-socials">
              <a
                href={organization.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" />
              </a>
              <a
                href={organization.presidentX}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('presidentRole')} — X`}
              >
                <Icon name="x" />
              </a>
              <Link to="/media?item=interview" aria-label="YouTube / Vishwavani TV">
                <Icon name="youtube" />
              </Link>
            </div>
          </div>
          <div className="footer-links">
            <h3>{t('explore')}</h3>
            {navigation.slice(1).map(({ to, key }) => (
              <Link to={to} key={to}>
                {t(key)}
              </Link>
            ))}
            <Link to="/wings">{t('navWings')}</Link>
            <Link to="/districts">{t('navDistricts')}</Link>
          </div>
          <div className="footer-address">
            <h3>{t('headOffice')}</h3>
            <address>{localize(organization.address)}</address>
            <a
              href={organization.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <span>{t('getDirections')}</span>
              <Icon name="upRight" />
            </a>
          </div>
          <div className="footer-contact">
            <h3>{t('navContact')}</h3>
            {organization.phones.map((phone) => (
              <a key={phone.international} href={`tel:${phone.international}`}>
                {phone.display}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-disclaimer">{t('footerDisclaimer')}</p>
        <div className="footer-bottom">
          <span>
            © {publicSite.year} {t('copyright')}
          </span>
          <div>
            <Link to="/privacy">{t('privacy')}</Link>
            <a href={asset('licenses/NOTICE.txt')}>{t('legalNotices')}</a>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? 'instant'
                    : 'smooth',
                })
              }
            >
              {t('backTop')} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
