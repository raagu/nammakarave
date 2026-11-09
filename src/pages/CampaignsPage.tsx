import { useLanguage } from '../i18n/context';
import { officialCopy as copy } from '../content/official';
import { PageHeading } from '../components/SectionHeading';
import { CampaignCards } from '../features/organization/CampaignCards';
import { HistoryPreview } from '../features/organization/HistoryPreview';
import { CampaignPhotoArchive } from '../features/organization/CampaignPhotoArchive';

export default function CampaignsPage() {
  const { localize } = useLanguage();
  return (
    <>
      <PageHeading
        eyebrow={localize(copy.campaigns)}
        title={localize(copy.campaignsTitle)}
        intro={localize(copy.campaignsIntro)}
      />
      <CampaignCards detailed />
      <CampaignPhotoArchive />
      <HistoryPreview />
    </>
  );
}
