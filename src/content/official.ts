import { bilingual as b, type Localized } from './types';
import { historySources } from './history';

/** Owner-approved identity; editorial copy is kept separate from attributed speech. */
export const officialCopy = {
  ownerPortraitCredit: b(
    'ಜಾಲತಾಣದ ಮಾಲೀಕರು ಈ ಜಾಲತಾಣಕ್ಕಾಗಿ ಒದಗಿಸಿದ ಭಾವಚಿತ್ರ. ಛಾಯಾಗ್ರಾಹಕರ ವಿವರ ಒದಗಿಸಿಲ್ಲ.',
    'Portrait supplied by the website owner for this site. Photographer information was not supplied.',
  ),
  official: b('ಅಧಿಕೃತ ಜಾಲತಾಣ · 1999ರಿಂದ', 'OFFICIAL WEBSITE · EST. 1999'),
  heroTitle: b(
    'ಕನ್ನಡದ ಧ್ವನಿ.\nಕನ್ನಡಿಗರ ಶಕ್ತಿ.',
    'The voice of Kannada.\nThe strength of its people.',
  ),
  heroBody: b(
    'ನುಡಿಯ ಗೌರವ. ಬದುಕಿನ ಅವಕಾಶ. ನೆಲದ ಭವಿಷ್ಯ. ಕನ್ನಡ, ಕನ್ನಡಿಗ ಮತ್ತು ಕರ್ನಾಟಕಕ್ಕಾಗಿ ಜನರೊಂದಿಗೆ ನಿಲ್ಲುವ ಸಂಘಟನೆ.',
    'Our language. Our livelihoods. Our shared future. A movement standing with the people of Karnataka, with Kannada at its heart.',
  ),
  discover: b('ನಮ್ಮ ಪರಿಚಯ', 'About the Vedike'),
  ourStory: b('ನಮ್ಮ ಪಯಣವನ್ನು ನೋಡಿ', 'Explore our story'),
  founderRole: b('ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ರಾಜ್ಯಾಧ್ಯಕ್ಷರು', 'FOUNDER & STATE PRESIDENT'),
  leadership: b('ನಾಯಕತ್ವ', 'Leadership'),
  leadershipIntro: b(
    'ಕನ್ನಡದ ಕಳಕಳಿಯನ್ನು ಜನರ ಬದುಕಿನ ಪ್ರಶ್ನೆಗಳೊಂದಿಗೆ ಬೆಸೆಯುವ ನಾಯಕತ್ವ.',
    'Connecting the cause of Kannada with the everyday lives and aspirations of its people.',
  ),
  founderTitle: b('ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು', 'T. A. Narayana Gowdru'),
  founderBody: b(
    'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ರಾಜ್ಯಾಧ್ಯಕ್ಷರಾದ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು, ಕನ್ನಡದ ಬಳಕೆ, ಕನ್ನಡಿಗರ ಉದ್ಯೋಗಾವಕಾಶ ಹಾಗೂ ನಾಡಿನ ನೆಲ ಜಲದ ವಿಷಯಗಳಲ್ಲಿ ಸಂಘಟನೆಯನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ. 1999ರಲ್ಲಿ ಆರಂಭವಾದ ಪಯಣವು ಭಾಷಾಭಿಮಾನವನ್ನು ಸಾರ್ವಜನಿಕ ಬದುಕಿನ ಪ್ರಶ್ನೆಗಳೊಂದಿಗೆ ಬೆಸೆದುಕೊಂಡಿದೆ.',
    'Founder and state president T. A. Narayana Gowdru leads the Karnataka Rakshana Vedike’s work on the use of Kannada, opportunities for Kannadigas, and Karnataka’s land and water. The journey that began in 1999 connects a commitment to language with questions of everyday public life.',
  ),
  leaderProfile: b('ನಾಯಕತ್ವದ ಪರಿಚಯ', 'Meet our founder'),
  presidentMessage: b('ರಾಜ್ಯಾಧ್ಯಕ್ಷರ ಸಂದೇಶ', 'A message from our president'),
  messageTitle: b(
    'ಭಾಷೆಯ ಅಭಿಮಾನ.\nಜನರಿಗಾಗಿ ಬದ್ಧತೆ.',
    'Pride in our language.\nPurpose in our work.',
  ),
  messageReview: b('ಪರಿಶೀಲನೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಸಂದೇಶ', 'PROPOSED MESSAGE · FOR REVIEW'),
  messagePending: b(
    'ರಾಜ್ಯಾಧ್ಯಕ್ಷರ ಅಧಿಕೃತ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುವುದು. ಅವರ ನಿಲುವುಗಳನ್ನು ತಿಳಿಯಲು ಸಂಗ್ರಹಿತ ಸಂದರ್ಶನವನ್ನು ವೀಕ್ಷಿಸಿ.',
    'The president’s approved message will be published here. Explore the archived interview to hear his public views.',
  ),
  watchInterview: b('ಸಂದರ್ಶನ ವೀಕ್ಷಿಸಿ', 'Watch the interview'),
  aboutPageIntro: b(
    'ಕನ್ನಡ, ಕನ್ನಡಿಗ ಮತ್ತು ಕರ್ನಾಟಕಕ್ಕಾಗಿ — 1999ರಿಂದ ಜನರೊಂದಿಗೆ ಬೆಳೆದ ವೇದಿಕೆ. ನಮ್ಮ ಆರಂಭ, ಮೌಲ್ಯಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ಷೇತ್ರಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ.',
    'For Kannada, Kannadigas, and Karnataka. Discover the beginnings, values, and work of a movement that has grown with its people since 1999.',
  ),
  campaignsDetailsTitle: b(
    'ಬೇಡಿಕೆಗಳು, ಕಾರ್ಯ ಮತ್ತು ಬೆಳವಣಿಗೆಗಳು',
    'Advocacy, evidence & developments',
  ),
  aboutEyebrow: b('ನಮ್ಮ ಸಂಘಟನೆ', 'THE ORGANIZATION'),
  aboutTitle: b(
    'ನುಡಿಯಿಂದ ಒಗ್ಗಟ್ಟು.\nಒಗ್ಗಟ್ಟಿನಿಂದ ಬದಲಾವಣೆ.',
    'United by language.\nMoved by purpose.',
  ),
  aboutIntro: b(
    'ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ ಕನ್ನಡ ಭಾಷೆ, ಕನ್ನಡಿಗರ ಘನತೆ ಮತ್ತು ಕರ್ನಾಟಕದ ಹಿತಕ್ಕಾಗಿ ಕೆಲಸ ಮಾಡುವ ಕನ್ನಡಪರ ಸಂಘಟನೆ. ಭಾಷೆ, ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ, ನೆಲ ಜಲ ಮತ್ತು ಸಂಸ್ಕೃತಿ — ಈ ಎಲ್ಲ ಪ್ರಶ್ನೆಗಳಲ್ಲಿ ಜನರ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯೇ ನಮ್ಮ ಶಕ್ತಿ.',
    'Karnataka Rakshana Vedike is a pro-Kannada organization working for the language, the dignity of Kannadigas, and the interests of Karnataka. Public participation is at the heart of its work across language, education, employment, land, water, and culture.',
  ),
  vision: b('ನಮ್ಮ ದೂರದೃಷ್ಟಿ', 'Our vision'),
  visionBody: b(
    'ಕನ್ನಡಕ್ಕೆ ಗೌರವ, ಕನ್ನಡಿಗರಿಗೆ ನ್ಯಾಯಯುತ ಅವಕಾಶ ಮತ್ತು ಕರ್ನಾಟಕಕ್ಕೆ ಸುಸ್ಥಿರ ಭವಿಷ್ಯ ಇರುವ ಸಮಾಜ.',
    'A Karnataka where Kannada is respected, people have fair opportunities, and our shared heritage has a secure future.',
  ),
  mission: b('ನಮ್ಮ ಧ್ಯೇಯ', 'Our mission'),
  missionBody: b(
    'ಕನ್ನಡ ಜಾಗೃತಿ, ಜನಪರ ಸಂವಾದ ಮತ್ತು ಸಂವಿಧಾನಬದ್ಧ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯ ಮೂಲಕ ಭಾಷೆ, ಬದುಕು ಹಾಗೂ ನೆಲ ಜಲದ ಹಿತವನ್ನು ಕಾಪಾಡುವುದು.',
    'To advance the interests of our language, livelihoods, land, and water through awareness, public dialogue, and constitutional participation.',
  ),
  priorities: b('ನಾವು ನಿಲ್ಲುವ ವಿಷಯಗಳು', 'WHAT WE STAND FOR'),
  prioritiesTitle: b('ನಾಡಿನ ಹಿತ.\nಜನರ ಬದುಕು.', 'Our priorities.\nOur people.'),
  prioritiesIntro: b(
    'ಭಾಷಾಭಿಮಾನವನ್ನು ಅರ್ಥಪೂರ್ಣ ಸಾರ್ವಜನಿಕ ಕೆಲಸವಾಗಿ ರೂಪಿಸುವ ನಾಲ್ಕು ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು.',
    'Four areas that turn a commitment to Kannada into meaningful public work.',
  ),
  programmes: b('ಕಾರ್ಯಕ್ರಮಗಳು', 'Programmes'),
  programmesEyebrow: b('ಸಂವಾದದಿಂದ ಸಹಭಾಗಿತ್ವದವರೆಗೆ', 'FROM DIALOGUE TO PARTICIPATION'),
  programmesTitle: b('ಜನರೊಂದಿಗೆ.\nಕನ್ನಡಕ್ಕಾಗಿ.', 'With our people.\nFor our language.'),
  programmesIntro: b(
    'ಜಾಗೃತಿ, ಶಿಕ್ಷಣದ ಅವಕಾಶ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಂವಾದದಲ್ಲಿ ವೇದಿಕೆಯ ಹೆಜ್ಜೆಗಳು. ಕಾರ್ಯಕ್ರಮಗಳ ಸಂಗ್ರಹದ ಮೂಲಕ ಹಿಂದಿನ ಚಟುವಟಿಕೆಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ.',
    'Explore the Vedike’s work through awareness, educational opportunity, and public dialogue, through the programme archive.',
  ),
  programmePhotoPending: b('ಕಾರ್ಯಕ್ರಮದ ಛಾಯಾಚಿತ್ರ ಶೀಘ್ರದಲ್ಲೇ', 'Event photograph pending'),
  archive: b('ಕಾರ್ಯಕ್ರಮಗಳ ಸಂಗ್ರಹ', 'From the programme archive'),
  archivePhoto: b('ಸಂಗ್ರಹಿತ ವರದಿಯ ಚಿತ್ರ', 'ARCHIVAL REPORTING IMAGE'),
  photoReview: b('ಚಿತ್ರ ಬಳಕೆಯ ಅನುಮತಿ ಪರಿಶೀಲನೆ ಬಾಕಿ', 'REFERENCE PHOTO · RIGHTS REVIEW PENDING'),
  referencePhoto: b('ವರದಿಯ ಮೂಲ ಚಿತ್ರವನ್ನು ನೋಡಿ', 'View the reporting photograph'),
  source: b('ಮೂಲ ವರದಿ', 'Read the source'),
  upcoming: b('ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು', 'Upcoming programmes'),
  upcomingTitle: b('ಮುಂದಿನ ಹೆಜ್ಜೆ,\nನಿಮ್ಮೊಂದಿಗೆ.', 'The next chapter.\nTogether.'),
  upcomingEmpty: b(
    'ಖಚಿತವಾದ ದಿನಾಂಕ ಮತ್ತು ಸ್ಥಳ ಘೋಷಣೆಯಾದ ನಂತರ ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುವುದು.',
    'New programmes will appear here once dates and venues are confirmed.',
  ),
  stayConnected: b('ಕಾರ್ಯಕ್ರಮಗಳ ಮಾಹಿತಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ', 'Stay connected for programme updates'),
  campaigns: b('ಹೋರಾಟಗಳು ಮತ್ತು ಪರಿಣಾಮ', 'Campaigns & impact'),
  campaignsEyebrow: b('ನಿಲುವಿನಿಂದ ಕಾರ್ಯದವರೆಗೆ', 'OUR WORK IN PUBLIC LIFE'),
  campaignsTitle: b(
    'ಹಕ್ಕಿಗಾಗಿ ಧ್ವನಿ.\nಬದಲಾವಣೆಗೆ ಪ್ರಯತ್ನ.',
    'A voice for rights.\nA commitment to change.',
  ),
  campaignsIntro: b(
    'ನಮ್ಮ ಬೇಡಿಕೆಗಳು, ಸಾರ್ವಜನಿಕ ಕಾರ್ಯ ಮತ್ತು ದಾಖಲಾಗಿರುವ ಬೆಳವಣಿಗೆಗಳ ಪರಿಚಯ. ಪ್ರತಿ ವಿಷಯದ ಹಿನ್ನೆಲೆ ಮತ್ತು ಕಾರ್ಯವನ್ನು ತಿಳಿಯಿರಿ.',
    'Understand the issues, the organization’s advocacy, and documented developments. Explore the background to each area of our work.',
  ),
  advocacy: b('ನಮ್ಮ ಆಗ್ರಹ', 'The advocacy'),
  development: b('ದಾಖಲಾಗಿರುವ ಬೆಳವಣಿಗೆ', 'The documented development'),
  impactNote: b(
    'ಸಾರ್ವಜನಿಕ ನೀತಿಯ ಬದಲಾವಣೆಗಳಲ್ಲಿ ಹಲವು ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕರ ಪಾತ್ರವಿರುತ್ತದೆ. ಇಲ್ಲಿ ವಿವರಿಸಿದ ಬೆಳವಣಿಗೆಗಳನ್ನು ಕರವೇಯ ಏಕೈಕ ಸಾಧನೆ ಎಂದು ಹೇಳುವುದಿಲ್ಲ.',
    'Public-policy changes involve government, communities, and many organizations. The developments described here are not presented as the Vedike’s sole achievement.',
  ),
  photoArchivePending: b('ಹೋರಾಟಗಳ ಛಾಯಾಚಿತ್ರ ಸಂಗ್ರಹ', 'The campaign photo archive'),
  photoArchiveBody: b(
    'ದಿನಾಂಕ, ಸ್ಥಳ ಮತ್ತು ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳೊಂದಿಗೆ ಅಧಿಕೃತವಾಗಿ ಒದಗಿಸುವ ಚಿತ್ರಗಳನ್ನು ಈ ಸಂಗ್ರಹಕ್ಕೆ ಸೇರಿಸಲಾಗುವುದು.',
    'Organization-supplied photographs will be added with their dates, locations, and programme details.',
  ),
  historyEyebrow: b('1999ರಿಂದ ಇಂದಿನವರೆಗೆ', 'A JOURNEY THAT BEGAN IN 1999'),
  historyTitle: b(
    'ನಮ್ಮ ನೆಲದಲ್ಲಿ ಬೇರು.\nನಮ್ಮ ನುಡಿಯಲ್ಲಿ ನಾಳೆ.',
    'Rooted in our land.\nLooking to tomorrow.',
  ),
  historyIntro: b(
    'ಸಂಘಟನೆಯ ಆರಂಭದಿಂದ ಭಾಷೆ, ಬದುಕು ಮತ್ತು ಕರ್ನಾಟಕದ ಹಿತದ ಪ್ರಶ್ನೆಗಳವರೆಗೆ — ನಮ್ಮ ಸಂಘಟನೆಯ ಪಯಣ.',
    'From the founding years to questions of language, livelihoods, and Karnataka’s future: the story of our movement.',
  ),
  fullHistory: b('ಸಂಪೂರ್ಣ ಇತಿಹಾಸ ಮತ್ತು ಕಾಲರೇಖೆ', 'Read the complete history & timeline'),
  founding: b('ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಆರಂಭದ ಆಶಯ', 'Our founder & founding purpose'),
  foundingBody: b(
    '1999ರಲ್ಲಿ ಆರಂಭವಾದ ವೇದಿಕೆಯ ಪಯಣದ ಮೂಲದಲ್ಲಿ ಕನ್ನಡಿಗರ ಬದುಕು ಮತ್ತು ಕನ್ನಡದ ಸ್ಥಾನ ಕುರಿತ ಕಳಕಳಿ ಇದೆ. ಸಂಸ್ಥಾಪಕ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ನಾಯಕತ್ವದಲ್ಲಿ ಈ ಆಶಯವು ಜನಪರ ಸಂಘಟನೆಯಾಗಿ ಮುಂದುವರಿದಿದೆ.',
    'The Vedike’s journey began in 1999 with a concern for Kannadigas’ livelihoods and Kannada’s place in public life. Under founder T. A. Narayana Gowdru, that purpose continues through the organization’s public work.',
  ),
  participation: b('ವೇದಿಕೆಯ ಪರಿಚಯ', 'DISCOVER THE VEDIKE'),
  participationTitle: b('ನಮ್ಮ ಸಂಘಟನೆ.\nನಮ್ಮ ಕಾರ್ಯಕ್ಷೇತ್ರ.', 'Our organization.\nOur work.'),
  participationBody: b(
    'ನಮ್ಮ ಅಂಗಸಂಸ್ಥೆಗಳು, ಜಿಲ್ಲಾ ಸಂಪರ್ಕಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ವೇದಿಕೆಯ ಕಾರ್ಯವನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ.',
    'Explore our organizational wings, district contacts, and programmes to learn more about the Vedike’s work.',
  ),
  wings: b('ಅಂಗಸಂಸ್ಥೆಗಳನ್ನು ಪರಿಚಯಿಸಿಕೊಳ್ಳಿ', 'Explore our wings'),
  network: b('ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ಸಂಪರ್ಕ', 'Connect with your district'),
  networkBody: b(
    'ಜಿಲ್ಲೆಯ ಆಯ್ಕೆ ಮಾಡಿ ಕೇಂದ್ರ ಕಚೇರಿಯ ಮೂಲಕ ಸ್ಥಳೀಯ ಸಂಪರ್ಕವನ್ನು ತಿಳಿಯಿರಿ.',
    'Choose a district and contact the central office for local information.',
  ),
  media: b('ಸುದ್ದಿ ಮತ್ತು ಮಾಧ್ಯಮ', 'News & media'),
  mediaBody: b(
    'ಸಂಗ್ರಹಿತ ಸಂದರ್ಶನಗಳು, ಅಧಿಕೃತ ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳ ದಾಖಲೆಗಳು.',
    'Archived interviews, organization announcements, and records of our work.',
  ),
  readMore: b('ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ', 'Discover more'),
  allProgrammes: b('ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು', 'Explore programmes'),
  allCampaigns: b('ಹೋರಾಟಗಳ ವಿವರ', 'Explore our campaigns'),
  faqTitle: b('ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ', 'A few useful answers'),
  valuesTitle: b('ನಮ್ಮನ್ನು ಮುನ್ನಡೆಸುವ ಮೌಲ್ಯಗಳು', 'The values behind our work'),
} as const;

export const values = [
  {
    icon: 'book',
    title: b('ಕನ್ನಡಕ್ಕೆ ಗೌರವ', 'Respect for Kannada'),
    body: b(
      'ಸಾರ್ವಜನಿಕ ಬದುಕಿನಲ್ಲಿ ಭಾಷೆಯ ಸಮರ್ಪಕ ಬಳಕೆ.',
      'A meaningful place for the language in public life.',
    ),
  },
  {
    icon: 'people',
    title: b('ಎಲ್ಲರ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ', 'Shared participation'),
    body: b(
      'ಕನ್ನಡದ ಹಿತಕ್ಕಾಗಿ ಜೊತೆ ನಿಲ್ಲುವ ಜನರ ಒಗ್ಗಟ್ಟು.',
      'People coming together for the interests of Kannada.',
    ),
  },
  {
    icon: 'scales',
    title: b('ಘನತೆ ಮತ್ತು ನ್ಯಾಯ', 'Dignity & fairness'),
    body: b(
      'ಶಿಕ್ಷಣ ಮತ್ತು ಉದ್ಯೋಗದಲ್ಲಿ ನ್ಯಾಯಯುತ ಅವಕಾಶ.',
      'Fair opportunities in education and employment.',
    ),
  },
  {
    icon: 'shield',
    title: b('ಜವಾಬ್ದಾರಿಯುತ ಕಾರ್ಯ', 'Responsible action'),
    body: b(
      'ಶಾಂತಿಯುತ, ಸಂವಿಧಾನಬದ್ಧ ಜನಪರ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ.',
      'Peaceful, constitutional participation in public life.',
    ),
  },
] as const;

export const leaderMessage = {
  status: 'draft' as 'draft' | 'approved',
  paragraphs: [
    b(
      'ಆತ್ಮೀಯ ಕನ್ನಡ ಬಂಧುಗಳೇ, ಕನ್ನಡ ನಮ್ಮನ್ನು ಒಂದಾಗಿಸುವ ಬದುಕಿನ ಭಾಷೆ. ಅದರ ಗೌರವವನ್ನು ಕಾಪಾಡುವುದು, ಕನ್ನಡಿಗರಿಗೆ ನ್ಯಾಯಯುತ ಅವಕಾಶಗಳನ್ನು ಬೆಂಬಲಿಸುವುದು ಮತ್ತು ನಮ್ಮ ನಾಡಿನ ಹಿತಕ್ಕಾಗಿ ಜವಾಬ್ದಾರಿಯಿಂದ ಕೆಲಸ ಮಾಡುವುದು ನಮ್ಮೆಲ್ಲರ ಹಂಚಿಕೊಂಡ ಕರ್ತವ್ಯ.',
      'Dear friends of Kannada, our language connects our lives and our communities. Respecting it, supporting fair opportunities for Kannadigas, and working responsibly for Karnataka are duties we share.',
    ),
    b(
      'ಕನ್ನಡದ ಕೆಲಸವು ಒಂದು ದಿನದ ಆಚರಣೆಗೆ ಸೀಮಿತವಾಗಬಾರದು. ಶಾಲೆ, ಕೆಲಸದ ಸ್ಥಳ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬದುಕಿನಲ್ಲಿ ಕನ್ನಡವನ್ನು ಗೌರವದಿಂದ ಬಳಸೋಣ. ಮಹಿಳೆಯರು, ಯುವಜನರು, ಕಾರ್ಮಿಕರು ಮತ್ತು ರೈತರ ಧ್ವನಿಗಳಿಗೆ ಕಿವಿಗೊಡೋಣ. ಸಂವಾದ, ಸೇವೆ ಮತ್ತು ಸಂವಿಧಾನಬದ್ಧ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯ ಮೂಲಕ ನಮ್ಮ ಆಶಯಗಳನ್ನು ಅರ್ಥಪೂರ್ಣ ಕಾರ್ಯಗಳಾಗಿ ರೂಪಿಸೋಣ.',
      'Our commitment must extend beyond a single day of celebration. Let us give Kannada a respected place in education, workplaces, and public life. Let us listen to women, young people, workers, and farmers, and turn our aspirations into meaningful work through dialogue, service, and constitutional participation.',
    ),
    b(
      'ನಮ್ಮ ನುಡಿಯ ಹೆಮ್ಮೆ ಜನರ ಬದುಕಿಗೆ ಬೆಳಕಾಗಲಿ. ಕನ್ನಡ, ಕನ್ನಡಿಗ ಮತ್ತು ಕರ್ನಾಟಕದ ಭವಿಷ್ಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಸಹಭಾಗಿತ್ವವನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇನೆ.',
      'May pride in our language bring purpose to our work for people. I invite you to take part in building the future of Kannada, Kannadigas, and Karnataka.',
    ),
  ],
};

export interface Programme {
  id: string;
  year: string;
  category: Localized;
  title: Localized;
  body: Localized;
  source: string;
  publisher: string;
  image: string;
  imageStatus: 'reference-only' | 'approved';
  imageCredit: string;
  imageAlt: Localized;
}

/** Photographs are review references; never copied into the public build. */
export const programmeArchive: readonly Programme[] = [
  {
    id: 'kannada-education',
    year: '2024',
    category: b('ಶಿಕ್ಷಣ ಮತ್ತು ಅವಕಾಶ', 'EDUCATION & OPPORTUNITY'),
    title: b('ಕನ್ನಡ ಮಾಧ್ಯಮದ ಅಭ್ಯರ್ಥಿಗಳ ಪರ ಧ್ವನಿ', 'Speaking for Kannada-medium candidates'),
    body: b(
      'ಕೆಪಿಎಸ್‌ಸಿ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಯ ಅನುವಾದ ಮತ್ತು ಸಮಾನ ಅವಕಾಶದ ಬಗ್ಗೆ ನಾರಾಯಣ ಗೌಡರು ಸಾರ್ವಜನಿಕವಾಗಿ ನಿಲುವು ಮಂಡಿಸಿದರು. ಮರುಪರೀಕ್ಷೆಯ ನಿರ್ಧಾರವನ್ನು ಸ್ವಾಗತಿಸಿದರು.',
      'In 2024, Narayana Gowda spoke publicly about KPSC question-paper translation and fair opportunities, welcoming the decision to hold a re-examination.',
    ),
    source:
      'https://kannada.oneindia.com/news/karnataka/karave-president-narayana-gowda-has-welcomed-the-kpsc-re-examination-373419.html',
    publisher: 'Oneindia Kannada',
    image: 'review-media/education-2024.webp',
    imageAlt: b(
      'ಒನ್ಇಂಡಿಯಾ ವರದಿಯಲ್ಲಿ ಪ್ರಕಟವಾದ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಸಂಗ್ರಹಿತ ಚಿತ್ರ',
      'Archival photograph of T. A. Narayana Gowda published with Oneindia’s 2024 education report',
    ),
    imageStatus: 'reference-only',
    imageCredit: 'Oneindia Kannada — archival reporting photograph',
  },
  {
    id: 'kannada-awareness',
    year: '2025',
    category: b('ಜಾಗೃತಿ ಮತ್ತು ಸಂವಾದ', 'AWARENESS & DIALOGUE'),
    title: b(
      'ಭಾಷೆ ಮತ್ತು ಬದುಕಿನ ಪ್ರಶ್ನೆಗಳ ಕುರಿತು ಸಂವಾದ',
      'Bringing language and livelihoods together',
    ),
    body: b(
      'ಕನ್ನಡದ ಬಳಕೆ, ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳಲ್ಲಿ ಭಾಷೆಯ ಸ್ಥಾನ ಕುರಿತಂತೆ ವೇದಿಕೆ ತನ್ನ ಬೇಡಿಕೆಗಳನ್ನು ಮಂಡಿಸಿತು. ಭಾಷೆ, ಬದುಕು ಮತ್ತು ನ್ಯಾಯಯುತ ಅವಕಾಶಗಳು ಪರಸ್ಪರ ಬೆಸೆದ ಆದ್ಯತೆಗಳಾಗಿವೆ.',
      'The Vedike raised questions about Kannada in services and public communication, alongside local employment. Language, livelihoods, and fair opportunities remain connected priorities.',
    ),
    source:
      'https://kannada.oneindia.com/news/karnataka/kannada-activist-ta-narayana-gowda-calls-for-major-movement-against-injustice-to-kannadigas-395075.html',
    publisher: 'Oneindia Kannada',
    image: 'review-media/awareness-2025.webp',
    imageAlt: b(
      'ಜನವರಿ 2025ರ ಒನ್ಇಂಡಿಯಾ ವರದಿಯಲ್ಲಿ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು ಜನರನ್ನು ಉದ್ದೇಶಿಸಿ ಮಾತನಾಡುತ್ತಿರುವ ಸಂಗ್ರಹಿತ ಚಿತ್ರ',
      'Archival reporting photograph of T. A. Narayana Gowda addressing a gathering, published by Oneindia in January 2025',
    ),
    imageStatus: 'reference-only',
    imageCredit: 'Oneindia Kannada — archival reporting photograph',
  },
  {
    id: 'railway-representation',
    year: '2026',
    category: b('ಸಾರ್ವಜನಿಕ ಪ್ರಾತಿನಿಧ್ಯ', 'PUBLIC REPRESENTATION'),
    title: b('ರೈಲ್ವೆ ಸೇವೆಗಳಲ್ಲಿ ಕನ್ನಡ ಮತ್ತು ಅವಕಾಶ', 'Kannada and opportunity in railway services'),
    body: b(
      'ರೈಲ್ವೆ ನೇಮಕಾತಿ ಪರೀಕ್ಷೆಗಳು, ನಾಮಫಲಕಗಳು ಮತ್ತು ಕನ್ನಡಿಗರ ಅವಕಾಶಗಳ ವಿಷಯದಲ್ಲಿ ನಾರಾಯಣ ಗೌಡರು ಬೇಡಿಕೆಗಳನ್ನು ಮಂಡಿಸಿದರು. ಮಾರ್ಚ್ 2026ರಲ್ಲಿ ಈ ನಿಲುವುಗಳನ್ನು ಮಂಡಿಸಿದರು.',
      'In March 2026, Narayana Gowda raised concerns about Kannada in railway recruitment examinations, signage, and opportunities for Kannadigas.',
    ),
    source:
      'https://kannada.oneindia.com/news/karnataka/karnataka-rakshana-vedike-sets-april-15-deadline-railways-ta-narayana-gowda-warns-statewide-train-sh-447591.html',
    publisher: 'Oneindia Kannada',
    image: 'review-media/railway-2026.webp',
    imageAlt: b(
      'ಮಾರ್ಚ್ 2026ರ ಒನ್ಇಂಡಿಯಾ ವರದಿಯಲ್ಲಿ ರೈಲ್ವೆ ವಿಷಯದ ಕುರಿತು ಮಾತನಾಡುತ್ತಿರುವ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಚಿತ್ರ',
      'T. A. Narayana Gowda speaking about railway issues, in Oneindia’s March 2026 reporting photograph',
    ),
    imageStatus: 'reference-only',
    imageCredit: 'Oneindia Kannada — archival reporting photograph',
  },
];

export interface FutureProgramme {
  id: string;
  title: Localized;
  date: string;
  venue: Localized;
}
/** Publish only owner-confirmed dates and venues. */
export const upcomingProgrammes: readonly FutureProgramme[] = [];

export interface CampaignPhotograph {
  id: string;
  date: string;
  location: Localized;
  image: string;
  alt: Localized;
  caption: Localized;
  credit: string;
}
/** Add only owner-approved photos, captions, and dates. */
export const campaignPhotographs: readonly CampaignPhotograph[] = [];

export const campaigns = [
  {
    id: 'language',
    icon: 'book',
    category: b('ಭಾಷೆಯ ಹಕ್ಕು', 'LANGUAGE RIGHTS'),
    title: b('ಸಾರ್ವಜನಿಕ ಬದುಕಿನಲ್ಲಿ ಕನ್ನಡ', 'Kannada in public life'),
    advocacy: b(
      'ವ್ಯಾಪಾರ ನಾಮಫಲಕಗಳು, ಸೇವೆಗಳು ಮತ್ತು ಆಡಳಿತದಲ್ಲಿ ಕನ್ನಡದ ಗೋಚರತೆ ಮತ್ತು ಬಳಕೆಗಾಗಿ ನಿರಂತರ ಆಗ್ರಹ.',
      'Advocacy for the visibility and use of Kannada on business signboards, in services, and in administration.',
    ),
    development: b(
      '2024ರ ರಾಜ್ಯ ಕಾನೂನು ತಿದ್ದುಪಡಿಯು ಅದರ ವ್ಯಾಪ್ತಿಯ ನಾಮಫಲಕಗಳಲ್ಲಿ ಶೇ.60 ಕನ್ನಡ ಮತ್ತು ಮೇಲಿನ ಅರ್ಧದಲ್ಲಿ ಕನ್ನಡದ ಪ್ರದರ್ಶನವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ.',
      'The 2024 state-law amendment specifies 60% Kannada, in the upper half, on nameboards of covered establishments.',
    ),
    sources: [historySources.signboards, historySources.languageAct],
  },
  {
    id: 'opportunity',
    icon: 'work',
    category: b('ಬದುಕು ಮತ್ತು ಅವಕಾಶ', 'LIVELIHOODS & OPPORTUNITY'),
    title: b('ಕನ್ನಡಿಗರಿಗೆ ನ್ಯಾಯಯುತ ಅವಕಾಶ', 'Fair opportunities for Kannadigas'),
    advocacy: b(
      'ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸ್ಥಳೀಯ ಉದ್ಯೋಗದ ಬಗ್ಗೆ ಮಾಹಿತಿ ಸಂಗ್ರಹ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಂವಾದಕ್ಕೆ ಒತ್ತು.',
      'An emphasis on gathering information and public dialogue about local employment in private companies.',
    ),
    development: b(
      'ನವೆಂಬರ್ 2026ರಲ್ಲಿ ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳ ಉದ್ಯೋಗ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಿ ಸರ್ಕಾರಕ್ಕೆ ವರದಿ ನೀಡುವ ಅಭಿಯಾನವನ್ನು ವೇದಿಕೆ ಘೋಷಿಸಿತು. ಇದು ಘೋಷಿತ ಅಭಿಯಾನ; ಉದ್ಯೋಗಗಳ ಸಾಧಿತ ಸಂಖ್ಯೆಯಲ್ಲ.',
      'In November 2026, the Vedike announced an employment-information campaign and a proposed report to the government. This is an announced campaign, not a verified count of jobs secured.',
    ),
    sources: [historySources.employment2026],
  },
  {
    id: 'land-water',
    icon: 'water',
    category: b('ನೆಲ ಮತ್ತು ಜಲ', 'LAND & WATER'),
    title: b('ಕರ್ನಾಟಕದ ಹಿತದ ಪ್ರಶ್ನೆಗಳು', 'Standing for Karnataka’s interests'),
    advocacy: b(
      'ಕಾವೇರಿ ಮತ್ತು ಮಹದಾಯಿ ವಿಷಯಗಳಲ್ಲಿ ರೈತರು ಹಾಗೂ ಜನರ ಕಳಕಳಿಯನ್ನು ಸಾರ್ವಜನಿಕ ಚರ್ಚೆಯ ಮುನ್ನೆಲೆಗೆ ತರುವುದು.',
      'Bringing the concerns of farmers and communities into public discussion on Kaveri and Mahadayi.',
    ),
    development: b(
      '2007ರಿಂದ ವಿವಿಧ ಹಂತಗಳಲ್ಲಿ ಪ್ರತಿಭಟನೆ, ಮನವಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯನ್ನು ವರದಿಗಳು ದಾಖಲಿಸಿವೆ. ನೀರಿನ ಹಂಚಿಕೆಯ ವಿಚಾರಗಳು ನ್ಯಾಯಾಂಗ ಮತ್ತು ಅಂತರರಾಜ್ಯ ಪ್ರಕ್ರಿಯೆಗಳ ವ್ಯಾಪ್ತಿಯಲ್ಲಿವೆ.',
      'Reporting records demonstrations, representations, and public participation across several years from 2007. Water-sharing decisions remain subject to judicial and interstate processes.',
    ),
    sources: [historySources.cauvery2007, historySources.mahadayi, historySources.cauvery2023],
  },
] as const;

export const participationFaqs = [
  {
    question: b('ವೇದಿಕೆಯ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು ಯಾವುವು?', 'What does the Vedike work on?'),
    answer: b(
      'ಕನ್ನಡ ಭಾಷೆ, ಶಿಕ್ಷಣ, ಉದ್ಯೋಗಾವಕಾಶ, ನೆಲ ಜಲ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ವಿಷಯಗಳಲ್ಲಿ ವೇದಿಕೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ ನಮ್ಮ ಪರಿಚಯ ಮತ್ತು ಅಂಗಸಂಸ್ಥೆಗಳ ಪುಟಗಳನ್ನು ನೋಡಿ.',
      'The Vedike works across Kannada language, education, employment opportunities, land, water, and culture. Explore the organization and wings pages for more information.',
    ),
  },
  {
    question: b(
      'ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳ ಮಾಹಿತಿಯನ್ನು ಎಲ್ಲಿ ಪಡೆಯಬಹುದು?',
      'Where can I find upcoming programmes?',
    ),
    answer: b(
      'ದಿನಾಂಕ ಮತ್ತು ಸ್ಥಳ ಖಚಿತವಾದ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಕಾರ್ಯಕ್ರಮಗಳ ಪುಟದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುವುದು. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗೆ ಕೇಂದ್ರ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      'Confirmed programmes will appear on the programmes page with their dates and venues. Contact the central office for further information.',
    ),
  },
  {
    question: b('ನನ್ನ ಜಿಲ್ಲೆಯ ಸಂಪರ್ಕವನ್ನು ಹೇಗೆ ಪಡೆಯುವುದು?', 'How can I find a local contact?'),
    answer: b(
      'ಜಿಲ್ಲಾ ಸಂಪರ್ಕ ಪುಟದಲ್ಲಿ ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸ್ಥಳೀಯ ವಿವರಗಳನ್ನು ತಿಳಿಯಲು ಪ್ರಕಟಿತ ಕೇಂದ್ರ ಕಚೇರಿಯ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ.',
      'Choose your district in the district directory, then use the published central-office number to request local details.',
    ),
  },
] as const;
