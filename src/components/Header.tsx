import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { organization } from '../content/site';
import { kuvempuPortrait } from '../content/imagery';
import { navigation } from '../content/navigation';
import { useLanguage } from '../i18n/context';
import { AppImage } from './AppImage';
import { Icon } from './Icon';
import { Modal } from './Modal';

export function Header() {
  const { language, setLanguage, t, localize } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="header-masthead">
          <Link
            className="site-container masthead-brand"
            to="/"
            aria-label={localize(organization.name)}
          >
            <AppImage
              className="masthead-emblem"
              src={organization.logo}
              alt=""
              width={433}
              height={410}
              decoding="async"
            />
            <span className="masthead-copy" lang="kn">
              <span className="masthead-slogans">
                {organization.slogans.map((slogan) => (
                  <span key={slogan.kn}>{slogan.kn}</span>
                ))}
              </span>
              <strong className="masthead-name">{organization.name.kn}</strong>
            </span>
            <AppImage
              className="masthead-portrait"
              src={kuvempuPortrait.image}
              alt={localize(kuvempuPortrait.alt)}
              width={480}
              height={621}
              decoding="async"
            />
            <span className="masthead-details" lang="kn">
              <span>{organization.tagline.kn}</span>
              <span>{organization.registration.kn}</span>
            </span>
          </Link>
        </div>
        <div className="header-nav-bar">
          <div className="site-container header-inner">
            <nav className="desktop-nav" aria-label={t('mainNav')}>
              {navigation.map(({ to, key }) => (
                <NavLink
                  key={to}
                  end={to === '/'}
                  to={to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  data-i18n={key}
                >
                  {t(key)}
                </NavLink>
              ))}
            </nav>
            <div className="header-actions">
              <div className="language-switch" role="group" aria-label="ಭಾಷೆ / Language">
                <button
                  type="button"
                  onClick={() => setLanguage('kn')}
                  aria-pressed={language === 'kn'}
                  lang="kn"
                >
                  ಕನ್ನಡ
                </button>
                <span aria-hidden="true">/</span>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  lang="en"
                >
                  EN
                </button>
              </div>
              <button
                className="menu-toggle icon-button"
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={t('openMenu')}
              >
                <Icon name="menu" />
                <span>{t('menu')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <Modal
          titleId="mobile-menu-title"
          className="mobile-menu"
          onClose={() => setMenuOpen(false)}
        >
          <h2 id="mobile-menu-title" className="sr-only">
            {t('menu')}
          </h2>
          <nav id="mobile-menu" aria-label={t('mainNav')}>
            {[
              ...navigation,
              { to: '/wings', key: 'navWings' as const },
              { to: '/districts', key: 'navDistricts' as const },
            ].map(({ to, key }) => (
              <NavLink key={to} end={to === '/'} to={to} onClick={() => setMenuOpen(false)}>
                {t(key)}
                <Icon name="upRight" />
              </NavLink>
            ))}
          </nav>
          <p>{t('motto')}</p>
        </Modal>
      )}
    </>
  );
}
