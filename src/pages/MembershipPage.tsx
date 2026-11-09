import { useLanguage } from '../i18n/context';
import { Icon } from '../components/Icon';
import { MembershipForm } from '../features/membership/MembershipForm';

export default function MembershipPage() {
  const { t } = useLanguage();
  return (
    <section className="section join-section">
      <div className="site-container join-grid">
        <div className="join-copy">
          <p className="eyebrow">
            <span className="red-rule" />
            {t('joinEyebrow')}
          </p>
          <h1>
            <span>{t('joinLine1')}</span>
            <span className="text-yellow">{t('joinLine2')}</span>
          </h1>
          <p>{t('joinIntro')}</p>
          <ul className="join-benefits">
            {(['joinBenefit1', 'joinBenefit2', 'joinBenefit3'] as const).map((key) => (
              <li key={key}>
                <Icon name="check" />
                {t(key)}
              </li>
            ))}
          </ul>
          <div className="privacy-note">
            <Icon name="shield" />
            <p>{t('formPrivacy')}</p>
          </div>
        </div>
        <MembershipForm />
      </div>
    </section>
  );
}
