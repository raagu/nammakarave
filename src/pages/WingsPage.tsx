import { useLanguage } from '../i18n/context';
import { PageHeading } from '../components/SectionHeading';
import { WingsExplorer } from '../features/wings/WingsExplorer';

export default function WingsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeading eyebrow={t('navWings')} title={t('wingsTitle')} intro={t('wingsIntro')} />
      <section className="section pt-0">
        <div className="site-container">
          <WingsExplorer />
        </div>
      </section>
    </>
  );
}
