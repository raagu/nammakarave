import { bilingual as b, type MediaItem } from './types';

/** Cultural images are identified as such, not presented as organization events. */
export const mediaItems: readonly MediaItem[] = [
  {
    id: 'interview',
    type: 'video',
    title: b('ನಾಯಕತ್ವದ ಮಾತು', 'In conversation with the president'),
    description: b(
      'ವಾಟಾಳ್ ಬಂದ್ ಕುರಿತು ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಪ್ರತಿಕ್ರಿಯೆಯ ಸಂಗ್ರಹಿತ ಸಂದರ್ಶನ.',
      'An archived interview with T. A. Narayana Gowda about the Vatal bandh.',
    ),
    image: 'assets/images/ta-narayana-gowda-kannada-shawl.jpg',
    alt: b(
      'ಹಳದಿ-ಕೆಂಪು ಕನ್ನಡ ಶಾಲು ಧರಿಸಿರುವ ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು',
      'T. A. Narayana Gowda wearing a yellow-and-red Kannada shawl',
    ),
    credit: 'Vishwavani TV / Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:T.A._Narayana_Gowda_(2025).jpg',
    license: 'CC BY 3.0',
    videoId: 'CsfBsxnA3Uo',
  },
  {
    id: 'soudha',
    type: 'photo',
    title: b('ನಮ್ಮ ನಾಡು. ನಮ್ಮ ಹೆಮ್ಮೆ.', 'Our land. Our pride.'),
    description: b(
      'ಬೆಂಗಳೂರಿನ ವಿಧಾನ ಸೌಧ — ಕರ್ನಾಟಕದ ವಾಸ್ತುಶಿಲ್ಪದ ಒಂದು ನೋಟ. ಸಾಂಸ್ಕೃತಿಕ ಚಿತ್ರ; ಕರವೇ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರವಲ್ಲ.',
      'Vidhana Soudha in Bengaluru, a glimpse of Karnataka’s architecture. A cultural photograph, not a Karave event.',
    ),
    image: 'assets/images/vidhana-soudha.jpg',
    alt: b(
      'ನೀಲಿ ಆಕಾಶದಡಿ ಬೆಂಗಳೂರಿನ ವಿಧಾನ ಸೌಧದ ವಿಶಾಲ ನೋಟ',
      'A panoramic view of Vidhana Soudha, Bengaluru, under a blue sky',
    ),
    credit: 'iMahesh / Wikimedia Commons',
    source:
      'https://commons.wikimedia.org/wiki/File:Vidhana_Soudha_(Bengaluru)_-_Panoramic_view.jpg',
    license: 'CC BY-SA 4.0',
  },
  {
    id: 'palace',
    type: 'photo',
    title: b('ಪರಂಪರೆಯ ಬೆಳಕು', 'A living heritage'),
    description: b(
      'ಮೈಸೂರು ಅರಮನೆಯ ಬೆಳಗಿನ ನೋಟ. ನಮ್ಮ ಪರಂಪರೆಯನ್ನು ಅರಿಯಲು ಒಂದು ಸಾಂಸ್ಕೃತಿಕ ಚಿತ್ರ; ಕರವೇ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರವಲ್ಲ.',
      'A morning view of Mysuru Palace. A cultural photograph celebrating Karnataka’s heritage, not a Karave event.',
    ),
    image: 'assets/images/mysuru-palace.jpg',
    alt: b(
      'ಬೆಳಗಿನ ಬೆಳಕಿನಲ್ಲಿ ಮೈಸೂರು ಅರಮನೆಯ ವಾಸ್ತುಶಿಲ್ಪ',
      'The architecture of Mysuru Palace in morning light',
    ),
    credit: 'Rohanbharadwaj / Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Mysore_Palace_Front_View_Morning.jpg',
    license: 'CC BY-SA 4.0',
  },
];

// Add only approved, dated press releases here. No sample is labeled official.
export const pressReleases: readonly {
  id: string;
  title: ReturnType<typeof b>;
  date: string;
  path: string;
}[] = [];
