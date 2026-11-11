import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { ContactBanner, Footer } from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Seo } from '../components/Seo';
import { useLanguage } from '../i18n/context';
import { LanguageProvider } from '../i18n/LanguageProvider';
import HomePage from '../pages/HomePage';
import {
  languagePath,
  languages,
  pagePaths,
  resolvePage,
  routerBasename,
  type PagePath,
} from '../lib/routing';

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

const pages = {
  '/': <HomePage />,
  '/about': <AboutPage />,
  '/history': <HistoryPage />,
  '/leadership': <LeadershipPage />,
  '/programmes': <ProgrammesPage />,
  '/campaigns': <CampaignsPage />,
  '/wings': <WingsPage />,
  '/districts': <DistrictsPage />,
  '/media': <MediaPage />,
  '/contact': <ContactPage />,
  '/privacy': <PrivacyPage />,
} satisfies Record<PagePath, ReactNode>;

function AppLayout() {
  const { t, language } = useLanguage();
  const { pathname, search, hash } = useLocation();
  const current = resolvePage(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [current.path]);
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
      <Seo page={current.page} language={language} />
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
              {pagePaths.flatMap((page) =>
                languages.map((locale) => (
                  <Route
                    key={`${locale}:${page}`}
                    path={languagePath(page, locale)}
                    element={pages[page]}
                  />
                )),
              )}
              {['/membership', '/credits', '/en/membership', '/en/credits'].map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={<Navigate to={languagePath('/', language)} replace />}
                />
              ))}
              <Route
                path="/kn/*"
                element={
                  <Navigate
                    to={`${languagePath(current.retired ? '/' : current.path, 'kn')}${search}${hash}`}
                    replace
                  />
                }
              />
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

/** Shared by the browser router and the build-time static renderer. */
export function SiteApp() {
  const location = useLocation();
  const navigate = useNavigate();
  const current = resolvePage(location.pathname);
  return (
    <LanguageProvider
      language={current.language}
      onLanguageChange={(next) => {
        navigate(`${languagePath(current.path, next)}${location.search}${location.hash}`);
      }}
    >
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <SiteApp />
    </BrowserRouter>
  );
}
