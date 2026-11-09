import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';
import { DistrictDirectory } from '../features/districts/DistrictDirectory';

export default function DistrictsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeading
        eyebrow={t('navDistricts')}
        title={t('mapCaption')}
        intro={t('mapInstructions')}
      />
      <section className="section pt-0 districts-section">
        <div className="site-container">
          <DistrictDirectory />
        </div>
      </section>
    </>
  );
}
