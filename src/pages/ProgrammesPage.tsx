import { useLanguage } from '../i18n/context';
import { officialCopy as copy } from '../content/official';
import { PageHeading } from '../components/SectionHeading';
import { ProgrammeArchive, UpcomingProgrammes } from '../features/organization/ProgrammeSections';
import { Participation } from '../features/organization/PurposeSections';

export default function ProgrammesPage() {
  const { localize } = useLanguage();
  return (
    <>
      <PageHeading
        eyebrow={localize(copy.programmes)}
        title={localize(copy.programmesTitle)}
        intro={localize(copy.programmesIntro)}
      />
      <UpcomingProgrammes />
      <ProgrammeArchive showAllLink={false} />
      <Participation />
    </>
  );
}
