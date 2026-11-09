import { useLanguage } from '../i18n/context';
import { officialCopy as copy } from '../content/official';
import { organization } from '../content/site';
import { PageHeading } from '../components/SectionHeading';
import {
  PurposeIntro,
  OrganizationValues,
  Participation,
} from '../features/organization/PurposeSections';
import { FounderProfile } from '../features/organization/LeadershipSections';
import { Pillars } from '../components/Pillars';

export default function AboutPage() {
  const { localize } = useLanguage();
  return (
    <>
      <PageHeading
        eyebrow={localize(copy.aboutEyebrow)}
        title={localize(organization.name)}
        intro={localize(copy.aboutPageIntro)}
      />
      <PurposeIntro />
      <FounderProfile />
      <OrganizationValues />
      <Pillars />
      <Participation />
    </>
  );
}
