import { Component, type ErrorInfo, type ReactNode } from 'react';
import { useLanguage } from '../i18n/context';

function ErrorFallback() {
  const { t } = useLanguage();
  return (
    <div className="site-container error-page" role="alert">
      <p className="eyebrow">NAMMA KARAVE</p>
      <h1>{t('errorTitle')}</h1>
      <p>{t('errorBody')}</p>
      <button
        type="button"
        className="button button-yellow"
        onClick={() => window.location.reload()}
      >
        {t('reload')}
      </button>
      <a href="tel:+918022370032">080 2237 0032</a>
    </div>
  );
}

export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error('Application render failed', error, info.componentStack);
  }
  render() {
    return this.state.failed ? <ErrorFallback /> : this.props.children;
  }
}
