import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/app.css';
import { App } from './app/App';
import {
  indexDocumentDestination,
  legacyHashDestination,
  normalizePagePath,
  stripBasePath,
} from './lib/routing';
import { readLanguagePreference } from './i18n/preference';

const legacyTarget = legacyHashDestination(window.location, readLanguagePreference());
const indexTarget = indexDocumentDestination(window.location.pathname);
if (legacyTarget || indexTarget) {
  window.location.replace(
    legacyTarget ?? `${indexTarget}${window.location.search}${window.location.hash}`,
  );
} else {
  const root = document.getElementById('root')!;
  const application = (
    <StrictMode>
      <App />
    </StrictMode>
  );
  const matchingStaticPage =
    root.dataset.rendered === 'true' &&
    normalizePagePath(stripBasePath(window.location.pathname)) ===
      normalizePagePath(root.dataset.path ?? '/');
  // Query parameters control optional tabs/modals; their initial view is deliberately client-rendered.
  if (matchingStaticPage && !window.location.search) hydrateRoot(root, application);
  else createRoot(root).render(application);
}
