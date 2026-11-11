import { Link } from '../components/LocalizedLink';
import { useLanguage } from '../i18n/context';

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="site-container error-page">
      <p className="eyebrow">404 / NAMMA KARAVE</p>
      <h1>{t('notFound')}</h1>
      <Link className="button button-yellow" to="/">
        {t('returnHome')} ↗
      </Link>
    </div>
  );
}
