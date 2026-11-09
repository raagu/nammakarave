import { LeaderHero } from '../features/organization/LeaderHero';
import {
  PurposeIntro,
  Participation,
  OrganizationFaq,
} from '../features/organization/PurposeSections';
import { LeaderMessage } from '../features/organization/LeadershipSections';
import { ProgrammeArchive, UpcomingProgrammes } from '../features/organization/ProgrammeSections';
import { HistoryPreview } from '../features/organization/HistoryPreview';
import { CampaignCards } from '../features/organization/CampaignCards';
import { Pillars } from '../components/Pillars';

export default function HomePage() {
  return (
    <>
      <LeaderHero />
      <PurposeIntro />
      <Pillars />
      <LeaderMessage compact />
      <ProgrammeArchive />
      <HistoryPreview />
      <CampaignCards />
      <UpcomingProgrammes />
      <Participation />
      <OrganizationFaq />
    </>
  );
}
