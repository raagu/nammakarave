import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ContactBanner, Footer } from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useLanguage } from '../i18n/context';
import type { MessageKey } from '../i18n/messages';
import HomePage from '../pages/HomePage';
import { officialCopy } from '../content/official';
import type { Localized } from '../content/types';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage'));
const LeadershipPage = lazy(() => import('../pages/LeadershipPage'));
const ProgrammesPage = lazy(() => import('../pages/ProgrammesPage'));
const CampaignsPage = lazy(() => import('../pages/CampaignsPage'));
const WingsPage = lazy(() => import('../pages/WingsPage'));
const DistrictsPage = lazy(() => import('../pages/DistrictsPage'));
const MediaPage = lazy(() => import('../pages/MediaPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const pageTitles: Record<string, MessageKey> = {
  '/': 'navHome',
  '/about': 'navAbout',
  '/history': 'historyNav',
  '/leadership': 'navLeadership',
  '/programmes': 'navProgrammes',
  '/campaigns': 'navCampaigns',
  '/wings': 'navWings',
  '/districts': 'navDistricts',
  '/media': 'navMedia',
  '/membership': 'navJoin',
  '/contact': 'navContact',
  '/privacy': 'privacy',
  '/credits': 'credits',
};

function RouteEffects() {
  const { pathname } = useLocation();
  const { t, localize } = useLanguage();
  useEffect(() => {
    document.title = `${t(pageTitles[pathname] ?? 'notFound')} | ${t('brandShort')} — Karnataka Rakshana Vedike`;
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      pathname === '/history' || pathname === '/membership'
        ? t(pathname === '/history' ? 'historyIntro' : 'formPrivacy')
        : localize(
            (
              {
                '/about': officialCopy.aboutPageIntro,
                '/leadership': officialCopy.leadershipIntro,
                '/programmes': officialCopy.programmesIntro,
                '/campaigns': officialCopy.campaignsIntro,
              } as Record<string, Localized>
            )[pathname] ?? officialCopy.heroBody,
          ),
    );
  }, [pathname, t, localize]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { t } = useLanguage();
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        {t('skip')}
      </a>
      <Header />
      <RouteEffects />
      <main id="main" tabIndex={-1}>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="route-loading" role="status">
                <span className="loading-mark" aria-hidden="true">
                  ಕ
                </span>
                {t('loading')}
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/programmes" element={<ProgrammesPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/wings" element={<WingsPage />} />
              <Route path="/districts" element={<DistrictsPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/membership" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/credits" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <ContactBanner />
      <Footer />
    </>
  );
}

export function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
