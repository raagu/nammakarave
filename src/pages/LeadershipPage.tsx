import { useLanguage } from '../i18n/context';
import { officialCopy as copy } from '../content/official';
import { PageHeading } from '../components/SectionHeading';
import { FounderProfile, LeaderMessage } from '../features/organization/LeadershipSections';
import { HistoryPreview } from '../features/organization/HistoryPreview';

export default function LeadershipPage() {
  const { localize } = useLanguage();
  return (
    <>
      <PageHeading
        eyebrow={localize(copy.leadership)}
        title={localize(copy.founderTitle)}
        intro={localize(copy.leadershipIntro)}
      />
      <FounderProfile />
      <LeaderMessage />
      <HistoryPreview />
    </>
  );
}
