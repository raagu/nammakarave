import { bilingual as b } from './types';

/** Contact details supplied by the site owner on 8 November 2026. */
export const organization = {
  domain: 'nammakarave.com',
  name: b('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ', 'Karnataka Rakshana Vedike'),
  tagline: b('ಕನ್ನಡಪರ ಸಂಘಟನೆಗಳ ಒಕ್ಕೂಟ', 'Federation of pro-Kannada organizations'),
  logo: 'assets/branding/karave-emblem.webp',
  slogans: [
    b('ಕನ್ನಡವೇ ಜಾತಿ', 'Kannada is our caste'),
    b('ಕನ್ನಡವೇ ಧರ್ಮ', 'Kannada is our faith'),
    b('ಕನ್ನಡವೇ ದೇವರು', 'Kannada is our God'),
  ],
  // Registration text supplied in the owner's masthead reference.
  registration: b('ನೋಂದಣಿ ಸಂಖ್ಯೆ: 43/2000', 'Registration number: 43/2000'),
  faction: b('ಟಿ ಎ ನಾರಾಯಣ ಗೌಡ ಪಕ್ಷ', 'T. A. Narayana Gowda faction'),
  president: b('ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು', 'T. A. Narayana Gowda'),
  address: b(
    'ಪ್ರವೀಣ್ ಬಿಲ್ಡಿಂಗ್, ನಂ. 25, 2ನೇ ಮಹಡಿ, 5ನೇ ಮುಖ್ಯ ರಸ್ತೆ, ಸುಖ್ ಸಾಗರ್ ಹತ್ತಿರ, ಗಾಂಧಿ ನಗರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560009.',
    'Praveen Building, No. 25, 2nd Floor, 5th Main, near Sukh Sagar, Gandhi Nagar, Bengaluru, Karnataka 560009.',
  ),
  phones: [
    { display: '080 2237 0032', international: '+918022370032' },
    { display: '080 2237 4014', international: '+918022374014' },
    { display: '+91 97413 35744', international: '+919741335744' },
    { display: '+91 92426 91385', international: '+919242691385' },
  ],
  // No email or Facebook account was supplied; publish only approved details.
  email: null,
  instagram: 'https://www.instagram.com/karnataka_rakshana_vedike_25/',
  presidentX: 'https://x.com/narayanagowdru',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Praveen+Building+25+5th+Main+Gandhi+Nagar+Bengaluru+560009',
  portrait: 'assets/images/ta-narayana-gowda-kannada-shawl.jpg',
  heroPortrait: 'assets/leadership/narayana-gowdru.png',
} as const;

export const pillars = [
  {
    id: 'language',
    icon: 'book',
    number: '01',
    title: b('ನುಡಿಗೆ ಗೌರವ', 'Language & identity'),
    short: b('ಕನ್ನಡ ನಮ್ಮ ಬದುಕಿನ ಭಾಷೆ.', 'Kannada belongs in everyday life.'),
    description: b(
      'ಆಡಳಿತ, ಶಿಕ್ಷಣ, ಸೇವೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ನಾಮಫಲಕಗಳಲ್ಲಿ ಕನ್ನಡದ ಸಮರ್ಪಕ ಬಳಕೆಗಾಗಿ ಜಾಗೃತಿ ಹಾಗೂ ಸಂವಿಧಾನಬದ್ಧ ಜನಪರ ಕಾರ್ಯ.',
      'Awareness and constitutional advocacy for the use of Kannada in administration, education, public services, and signboards.',
    ),
    tag: b('ಭಾಷಾ ರಕ್ಷಣೆ', 'LINGUISTIC PROTECTION'),
  },
  {
    id: 'livelihood',
    icon: 'work',
    number: '02',
    title: b('ಬದುಕಿಗೆ ಭರವಸೆ', 'Livelihood & dignity'),
    short: b('ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಗೆ ನ್ಯಾಯಯುತ ಅವಕಾಶ.', 'Fair opportunities for local talent.'),
    description: b(
      'ಕನ್ನಡಿಗರ ಉದ್ಯೋಗಾವಕಾಶ, ಕಾರ್ಮಿಕರ ಘನತೆ ಮತ್ತು ಸರೋಜಿನಿ ಮಹಿಷಿ ವರದಿಯ ಕುರಿತ ಸಾರ್ವಜನಿಕ ಚರ್ಚೆಗೆ ಬೆಂಬಲ. ಯಾವುದೇ ಉದ್ಯೋಗದ ಭರವಸೆ ನೀಡುವುದಿಲ್ಲ.',
      'Support for fair local employment opportunities, worker dignity, and public discussion of the Sarojini Mahishi report. The organization does not guarantee jobs.',
    ),
    tag: b('ಉದ್ಯೋಗ ಮತ್ತು ಹಕ್ಕು', 'LIVELIHOOD & RIGHTS'),
  },
  {
    id: 'land-water',
    icon: 'water',
    number: '03',
    title: b('ನೆಲ ಜಲದ ರಕ್ಷಣೆ', 'Land & water'),
    short: b('ನಮ್ಮ ಮಣ್ಣಿನ ಹಿತವೇ ನಮ್ಮ ಬದ್ಧತೆ.', 'Committed to the land we call home.'),
    description: b(
      'ಕಾವೇರಿ, ಮಹದಾಯಿ ಮತ್ತು ಕರ್ನಾಟಕದ ನೆಲ ಜಲದ ವಿಷಯಗಳಲ್ಲಿ ಜಾಗೃತಿ; ರೈತರು ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳ ಹಿತಕ್ಕಾಗಿ ಶಾಂತಿಯುತ ಸಂವಾದ.',
      'Public awareness about Karnataka’s land and water, including Kaveri and Mahadayi, through peaceful dialogue centered on farmers and local communities.',
    ),
    tag: b('ನೆಲ ಮತ್ತು ಜಲ', 'LAND & WATER RIGHTS'),
  },
  {
    id: 'heritage',
    icon: 'culture',
    number: '04',
    title: b('ಪರಂಪರೆಯ ಹೆಮ್ಮೆ', 'Culture & heritage'),
    short: b('ತಲೆಮಾರುಗಳನ್ನು ಬೆಸೆಯುವ ಕನ್ನಡ.', 'A heritage that connects generations.'),
    description: b(
      'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ, ಸಾಹಿತ್ಯ, ಜನಪದ ಕಲೆ ಮತ್ತು ಸ್ಥಳೀಯ ಇತಿಹಾಸದ ಆಚರಣೆ ಹಾಗೂ ಸಂರಕ್ಷಣೆಗೆ ಸಮುದಾಯದ ಸಹಭಾಗಿತ್ವ.',
      'Community participation in Kannada Rajyotsava, literature, folk art, and the preservation of local history.',
    ),
    tag: b('ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆ', 'CULTURAL HERITAGE'),
  },
] as const;
