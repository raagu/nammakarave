import { organization } from '../content/site';
import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';
import { Icon } from '../components/Icon';

export default function ContactPage() {
  const { t, localize } = useLanguage();
  return (
    <>
      <PageHeading eyebrow={t('navContact')} title={t('contactTitle')} intro={t('contactIntro')} />
      <section className="section pt-0">
        <div className="site-container contact-page-grid">
          <article className="contact-card">
            <span className="pillar-icon">
              <Icon name="pin" />
            </span>
            <h2>{t('headOffice')}</h2>
            <address>{localize(organization.address)}</address>
            <p className="muted">{t('officeHours')}</p>
            <a
              className="button button-yellow"
              href={organization.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('getDirections')}
              <Icon name="upRight" />
            </a>
          </article>
          <article className="contact-card">
            <span className="pillar-icon">
              <Icon name="phone" />
            </span>
            <h2>{t('callOffice')}</h2>
            <div className="contact-phone-list">
              {organization.phones.map((phone) => (
                <a href={`tel:${phone.international}`} key={phone.international}>
                  {phone.display}
                  <Icon name="upRight" />
                </a>
              ))}
            </div>
            <a
              className="text-link"
              href={organization.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" />
              {t('instagram')}
              <Icon name="upRight" />
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
