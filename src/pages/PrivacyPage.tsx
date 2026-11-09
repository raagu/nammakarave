import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';

export default function PrivacyPage() {
  const { t, clearPreference } = useLanguage();
  const [cleared, setCleared] = useState(false);
  return (
    <>
      <PageHeading eyebrow={t('privacy')} title={t('privacyTitle')} />
      <section className="section pt-0">
        <div className="site-container prose-page">
          <p>{t('privacyBody')}</p>
          <p>{t('privacyExternal')}</p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => {
              clearPreference();
              setCleared(true);
            }}
          >
            {t('privacyErase')}
          </button>
          <p role="status">{cleared ? t('preferenceCleared') : ''}</p>
        </div>
      </section>
    </>
  );
}
