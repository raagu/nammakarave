import { bilingual as b } from './types';

/** A dated editorial snapshot; update the sources when extending the chronology. */
export const historyReviewedOn = '2026-11-08';

export const historySources = {
  origins: {
    title: 'Karnataka Rakshana Vedike: Nandini, Cauvery to rattling tech firms',
    publisher: 'ThePrint',
    published: '2026-11-06',
    url: 'https://theprint.in/india/karnataka-rakshana-vedike-nandini-cauvery-to-rattling-tech-firms-the-pro-kannada-group-none-can-ignore/3091464/',
  },
  founding: {
    title: 'ಕನ್ನಡಿಗರಿಗೆ ಉದ್ಯೋಗ, ಅದೇ ನಿಜವಾದ ರಾಜ್ಯೋತ್ಸವ — ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಸಂದರ್ಶನ',
    publisher: 'Oneindia Kannada',
    published: '2013-10-31',
    url: 'https://kannada.oneindia.com/news/karnataka/karnataka-rakshana-vedike-ta-narayana-gowda-interview-078853.html',
  },
  belagavi: {
    title: 'As Belagavi simmers, a familiar name is raising the heat: Karnataka Rakshana Vedike',
    publisher: 'The Indian Express',
    published: '2022-12-07',
    url: 'https://indianexpress.com/article/political-pulse/belagavi-karnataka-rakshana-vedike-krv-maharashtra-border-dispute-8310098/lite/',
  },
  cauvery2007: {
    title: 'Final verdict out on Cauvery water, Karnataka wants review',
    publisher: 'UNI / Oneindia',
    published: '2007-02-05',
    url: 'https://www.oneindia.com/2007/02/05/final-verdict-out-on-cauvery-water-karnataka-wants-review-1170687997.html',
  },
  hogenakkal: {
    title: 'KRV calls off Karnataka bandh on April 10',
    publisher: 'UNI / Oneindia',
    published: '2008-04-05',
    url: 'https://www.oneindia.com/2008/04/05/krv-calls-off-ktaka-bandh-on-april-10-1207389918.html',
  },
  cauvery2012: {
    title: 'Karnataka shuts down for Cauvery',
    publisher: 'The New Indian Express',
    published: '2012-10-06',
    url: 'https://www.newindianexpress.com/states/karnataka/2012/Oct/06/karnataka-shuts-down-for-cauvery-412589.html',
  },
  mahadayi: {
    title: 'Bustling Bengaluru brought to a halt',
    publisher: 'The New Indian Express',
    published: '2016-07-31',
    url: 'https://www.newindianexpress.com/cities/bengaluru/2016/Jul/31/bustling-bengaluru-brought-to-a-halt-946173.html',
  },
  metro: {
    title: 'Activists mask Hindi signage at Metro stations',
    publisher: 'Deccan Herald',
    published: '2017-07-20',
    url: 'https://www.deccanherald.com/content/623692/activists-mask-hindi-signage-metro.html',
  },
  nandini: {
    title: 'Karnataka Rakshana Vedike stages demonstration against Amul’s entry in Bengaluru',
    publisher: 'The News Minute',
    published: '2023-04-10',
    url: 'https://www.thenewsminute.com/karnataka/karnataka-rakshana-vedike-stages-demonstration-against-amuls-entry-bengaluru-175705',
  },
  cauvery2023: {
    title: 'Karnataka Rakshana Vedike activists stage protest near Soudha',
    publisher: 'The New Indian Express',
    published: '2023-09-22',
    url: 'https://www.newindianexpress.com/amp/story/states/karnataka/2023/Sep/22/karnataka-rakshana-vedike-activists-stage-protestnear-soudha-2617152.html',
  },
  signboards: {
    title: 'KRV protest in Karnataka turns violent; activists taken into preventive custody',
    publisher: 'The New Indian Express',
    published: '2023-12-27',
    url: 'https://www.newindianexpress.com/states/karnataka/2023/Dec/27/krv-protest-in-karnatakaturns-violent-over-dozens-activists-taken-into-preventive-custody-2645404.html',
  },
  languageAct: {
    title: 'Karnataka Gazette: Kannada Language Comprehensive Development (Amendment) Act, 2024',
    publisher: 'Government of Karnataka / PRS Legislative Research',
    published: '2024-02-26',
    url: 'https://prsindia.org/files/bills_acts/acts_states/karnataka/2023/Act13of2023Karnataka.pdf#page=18',
  },
  kas: {
    title: 'Set right Kannada KAS question paper: Karnataka Rakshana Vedike',
    publisher: 'The New Indian Express',
    published: '2025-02-19',
    url: 'https://www.newindianexpress.com/states/karnataka/2025/Feb/19/set-right-kannada-kas-q-paper-karnataka-rakshana-vedike',
  },
  forum: {
    title: 'Once rivals, Maharashtra and Karnataka groups unite to fight Hindi imposition',
    publisher: 'The Indian Express',
    published: '2026-09-02',
    url: 'https://indianexpress.com/article/cities/bangalore/mns-krv-alliance-indian-languages-forum-hindi-imposition-10860605/',
  },
  employment2026: {
    title:
      'KRV to submit report on Kannadigas’ employment in private firms to Karnataka government',
    publisher: 'PTI / The Week',
    published: '2026-11-03',
    url: 'https://www.theweek.in/wire-updates/national/2026/11/03/krv-to-submit-report-on-kannadigas-employment-in-private-firms-to-k-taka-govt0.amp.html',
  },
} as const;

export const historyChapters = [
  {
    id: 'origins',
    period: '1998–1999',
    title: b('ಉದ್ಯೋಗದ ಪ್ರಶ್ನೆಯಿಂದ ಸಂಘಟನೆಯ ಆರಂಭ', 'From an employment question to an organization'),
    body: b(
      '1990ರ ದಶಕದ ಕೊನೆಯಲ್ಲಿ ಸ್ಥಳೀಯರಿಗೆ ಉದ್ಯೋಗ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬದುಕಿನಲ್ಲಿ ಕನ್ನಡದ ಸ್ಥಾನ ಕುರಿತ ಕಳಕಳಿ ಕರವೇಯ ಆರಂಭಕ್ಕೆ ಹಿನ್ನೆಲೆಯಾಯಿತು. ಡಾ. ರಾಜ್‌ಕುಮಾರ್ ಅಭಿಮಾನಿಗಳ ಸಂಘದ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿದ್ದ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು ಸ್ಥಾಪಕರಲ್ಲಿ ಒಬ್ಬರು. 2013ರ ಅವರ ಸಂದರ್ಶನವು ಸಂಘಟನೆಯ ಆರಂಭವನ್ನು 1999ರಲ್ಲಿ ಗುರುತಿಸುತ್ತದೆ. ಭಾಷೆಯ ಅಭಿಮಾನವನ್ನು ಜನರ ಬದುಕಿನ ಪ್ರಶ್ನೆಗಳೊಂದಿಗೆ ಬೆಸೆಯುವುದು ಈ ಪಯಣದ ಮೂಲ ಆಶಯವಾಯಿತು.',
      'Concerns about local employment and Kannada’s place in public life shaped the Vedike’s beginnings in the late 1990s. T. A. Narayana Gowda, associated with the Dr Rajkumar fans’ movement, was among its founders. His 2013 interview dates the organization’s formation to 1999. Connecting language identity with everyday livelihoods became a lasting theme.',
    ),
    sources: [historySources.origins, historySources.founding],
  },
  {
    id: 'land-water',
    period: '2000–2012',
    title: b('ನಾಡು, ಗಡಿ ಮತ್ತು ನೀರಿನ ಹಕ್ಕು', 'Land, borders, and water'),
    body: b(
      '2000ರ ದಶಕದಲ್ಲಿ ಕರವೇಯ ಕಾರ್ಯಕ್ಷೇತ್ರ ಭಾಷೆಯ ಪ್ರಶ್ನೆಯಿಂದ ಗಡಿ ಮತ್ತು ನೀರಿನ ವಿಷಯಗಳವರೆಗೆ ವಿಸ್ತರಿಸಿತು. ಬೆಳಗಾವಿ ವಿವಾದವು ಸಂಘಟನೆಗೆ ಹೆಚ್ಚಿನ ಸಾರ್ವಜನಿಕ ಗಮನ ತಂದಿತು. ಕಾವೇರಿ ನೀರು ಹಂಚಿಕೆ ಮತ್ತು ಹೊಗೇನಕಲ್ ಯೋಜನೆ ವಿರುದ್ಧ ಪ್ರತಿಭಟನೆಗಳು ನಡೆದವು. 2008ರಲ್ಲಿ ಹೊಗೇನಕಲ್ ಯೋಜನೆ ಮುಂದೂಡಿಕೆಯ ಬಳಿಕ ಕರವೇ ತನ್ನ ಪ್ರಸ್ತಾವಿತ ಬಂದ್ ಕರೆಯನ್ನು ಹಿಂತೆಗೆದುಕೊಂಡಿತು. 2012ರಲ್ಲಿ ಕಾವೇರಿ ವಿಷಯ ಮತ್ತೆ ದೊಡ್ಡ ಮಟ್ಟದ ಜನಸಮೂಹದ ಚಟುವಟಿಕೆಗೆ ಕಾರಣವಾಯಿತು.',
      'During the 2000s, Karave’s work extended to border and water issues. The Belagavi dispute increased its public visibility, while Cauvery water sharing and the Hogenakkal project prompted demonstrations. In 2008, KRV withdrew a proposed bandh after the Hogenakkal project was deferred. Cauvery became a major focus of mobilization again in 2012.',
    ),
    sources: [historySources.hogenakkal, historySources.cauvery2012],
  },
  {
    id: 'language-livelihood',
    period: '2013–2022',
    title: b('ನುಡಿಯ ಗೌರವ ಮತ್ತು ಬದುಕಿನ ಅವಕಾಶ', 'Language dignity and opportunities'),
    body: b(
      'ಕನ್ನಡಿಗರಿಗೆ ಉದ್ಯೋಗಾವಕಾಶ, ಸರೋಜಿನಿ ಮಹಿಷಿ ವರದಿಯ ಅನುಷ್ಠಾನ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳಲ್ಲಿ ಕನ್ನಡದ ಬಳಕೆ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಬೇಡಿಕೆಗಳಾಗಿ ಮುಂದುವರಿದವು. ಉತ್ತರ ಕರ್ನಾಟಕದ ಮಹದಾಯಿ ನೀರಿನ ಪ್ರಶ್ನೆಯ ಚಳವಳಿ ಮತ್ತು 2017ರ ನಮ್ಮ ಮೆಟ್ರೋ ಭಾಷಾ ಚಳವಳಿಯಲ್ಲಿ ಕರವೇ ಭಾಗವಹಿಸಿತು. ಗಡಿ ವಿಷಯದಲ್ಲಿಯೂ ಕಾರ್ಯಚಟುವಟಿಕೆ ಮುಂದುವರಿಯಿತು. ಈ ಅವಧಿಯ ವರದಿಗಳು ಸಂಘಟನೆಯ ವಿವಿಧ ಬಣಗಳನ್ನೂ ದಾಖಲಿಸುತ್ತವೆ; ಇಲ್ಲಿ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ನೇತೃತ್ವದ ವೇದಿಕೆಯ ಪಯಣಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಲಾಗಿದೆ.',
      'Employment opportunities, implementation of the Sarojini Mahishi report, and Kannada in public services remained recurring demands. KRV participated in the Mahadayi water movement concerning North Karnataka and the 2017 Namma Metro language campaign. Border activism continued. Public reporting also records different groups using the KRV name; this account focuses on the Vedike led by T. A. Narayana Gowda.',
    ),
    sources: [
      historySources.founding,
      historySources.mahadayi,
      historySources.metro,
      historySources.belagavi,
    ],
  },
  {
    id: 'public-life',
    period: '2023–2025',
    title: b(
      'ಹಾಲು ಉತ್ಪಾದಕರಿಂದ ಕನ್ನಡ ಮಾಧ್ಯಮದ ಅಭ್ಯರ್ಥಿಗಳವರೆಗೆ',
      'From dairy livelihoods to Kannada-medium candidates',
    ),
    body: b(
      '2023ರಲ್ಲಿ ನಂದಿನಿ ಬ್ರ್ಯಾಂಡ್ ಮತ್ತು ಹಾಲು ಉತ್ಪಾದಕರ ಹಿತದ ವಿಷಯ, ಕಾವೇರಿ ನೀರು ಮತ್ತು ವ್ಯಾಪಾರ ನಾಮಫಲಕಗಳಲ್ಲಿ ಕನ್ನಡದ ಗೋಚರತೆ ಕರವೇಯ ಪ್ರಮುಖ ಅಭಿಯಾನಗಳಾದವು. ನಾಮಫಲಕ ಪ್ರತಿಭಟನೆಗಳ ಸಂದರ್ಭದಲ್ಲಿ ಆಸ್ತಿ ಹಾನಿ ಮತ್ತು ಪೊಲೀಸ್ ಕ್ರಮಗಳೂ ವರದಿಯಾದವು. 2024ರ ರಾಜ್ಯ ಕಾನೂನು ತಿದ್ದುಪಡಿ ನಾಮಫಲಕಗಳ ಕುರಿತು ಹೊಸ ನಿಯಮ ನೀಡಿತು. 2025ರಲ್ಲಿ ಕೆಎಎಸ್ ಪರೀಕ್ಷೆಯ ಕನ್ನಡ ಅನುವಾದದ ಸಮಸ್ಯೆಗಳ ವಿರುದ್ಧ ಅಭ್ಯರ್ಥಿಗಳೊಂದಿಗೆ ಕರವೇ ಪ್ರತಿಭಟಿಸಿತು.',
      'In 2023, campaigns focused on Nandini and dairy livelihoods, Cauvery water, and Kannada visibility on business signboards. The signboard protests also brought reports of property damage and police action. A state-law amendment followed in 2024. In 2025, KRV joined KAS aspirants protesting problems in Kannada translations of examination papers.',
    ),
    sources: [historySources.nandini, historySources.signboards, historySources.kas],
  },
  {
    id: 'present-day',
    period: '2026',
    title: b(
      'ಇಂದಿನ ಅಧ್ಯಾಯ: ಭಾಷಾ ಸಹಕಾರ ಮತ್ತು ಉದ್ಯೋಗ',
      'The current chapter: language cooperation and employment',
    ),
    body: b(
      '2026ರ ಸೆಪ್ಟೆಂಬರ್‌ನಲ್ಲಿ ಕರವೇ ಮತ್ತು ಮಹಾರಾಷ್ಟ್ರ ನವನಿರ್ಮಾಣ ಸೇನೆಯ ಪ್ರತಿನಿಧಿಗಳು ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳ ಹಕ್ಕುಗಳಿಗಾಗಿ ಸಹಕಾರದ ವೇದಿಕೆ ರೂಪಿಸುವುದಾಗಿ ತಿಳಿಸಿದರು. ನವೆಂಬರ್‌ನಲ್ಲಿ ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಕನ್ನಡಿಗರ ಉದ್ಯೋಗದ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸುವ ಅಭಿಯಾನವನ್ನು ಕರವೇ ಘೋಷಿಸಿತು. ನವೆಂಬರ್ 8ರ ಪರಿಶೀಲನಾ ದಿನಾಂಕಕ್ಕೆ ಈ ಅಭಿಯಾನ ನಡೆಯುತ್ತಿತ್ತು; ಮಾಹಿತಿ ಆಧಾರಿತ ವರದಿಯನ್ನು ರಾಜ್ಯ ಸರ್ಕಾರಕ್ಕೆ ಸಲ್ಲಿಸುವುದು ಘೋಷಿತ ಮುಂದಿನ ಹೆಜ್ಜೆಯಾಗಿತ್ತು.',
      'In September 2026, KRV and Maharashtra Navnirman Sena representatives announced cooperation on regional-language rights. In November, KRV announced a campaign to gather information about Kannadiga employment in private firms. At the 8 November review date, the campaign was ongoing, with a report to the state government proposed as a next step.',
    ),
    sources: [historySources.forum, historySources.employment2026],
  },
] as const;
