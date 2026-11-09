import { bilingual as b } from './types';

export const kuvempuPortrait = {
  id: 'kuvempu',
  image: 'assets/branding/kuvempu-portrait.webp',
  title: b('ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು', 'Rashtrakavi Kuvempu'),
  alt: b('ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು ಅವರ ಭಾವಚಿತ್ರ', 'Portrait of Kannada poet Kuvempu'),
  credit: 'Unknown photographer / Wikimedia Commons',
  source: 'https://commons.wikimedia.org/wiki/File:Kuvempu.jpg',
  license: 'Public domain (India)',
  licenseUrl: 'https://commons.wikimedia.org/wiki/File:Kuvempu.jpg#Licensing',
} as const;

export const karaveEmblem = {
  id: 'karave-emblem',
  image: 'assets/branding/karave-emblem.webp',
  title: b('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ ಲಾಂಛನ', 'Karnataka Rakshana Vedike emblem'),
  alt: b('ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ ಲಾಂಛನ', 'Karnataka Rakshana Vedike emblem'),
  credit: 'Karnataka Rakshana Vedike — organization artwork',
  source: 'https://karnatakarakshanavedike.in/wp-content/uploads/2026/01/KRV-LOGO.png',
  license: 'Organization artwork — rights reserved',
  licenseUrl: 'https://karnatakarakshanavedike.in/',
} as const;

/** Cultural photography, not documentation of Karave events. */
export const landscapes = [
  {
    id: 'kaveri',
    image: 'assets/images/kaveri-falls.webp',
    title: b('ಶಿವನಸಮುದ್ರ, ಕರ್ನಾಟಕ', 'Shivanasamudra, Karnataka'),
    alt: b(
      'ಹಸಿರಿನಿಂದ ಆವೃತವಾದ ಕಾವೇರಿ ನದಿಯ ಶಿವನಸಮುದ್ರ ಜಲಪಾತ',
      'Shivanasamudra waterfalls on the Kaveri, surrounded by Karnataka’s green landscape',
    ),
    credit: 'Bharat Galagali / Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Shivanasamudra.jpg',
    license: 'CC BY-SA 4.0',
  },
  {
    id: 'hampi',
    image: 'assets/images/hampi-heritage.webp',
    title: b('ಹಂಪಿ, ಕರ್ನಾಟಕ', 'Hampi, Karnataka'),
    alt: b(
      'ಹಂಪಿಯ ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯದ ಐತಿಹಾಸಿಕ ಕಲ್ಲಿನ ರಥ',
      'The historic stone chariot at the Vijaya Vittala Temple in Hampi',
    ),
    credit: 'Snivas1008 / Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Stone_Chariot,_Hampi.jpg',
    license: 'CC BY-SA 4.0',
  },
  {
    id: 'mysuru',
    image: 'assets/images/mysuru-illuminated.webp',
    title: b('ಮೈಸೂರು, ಕರ್ನಾಟಕ', 'Mysuru, Karnataka'),
    alt: b(
      'ರಾತ್ರಿ ಚಿನ್ನದ ಬಣ್ಣದ ದೀಪಗಳಿಂದ ಹೊಳೆಯುತ್ತಿರುವ ಮೈಸೂರು ಅರಮನೆ',
      'Mysuru Palace illuminated with golden lights at night',
    ),
    credit: 'Dattatreya N R / Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Mysore_Palace_in_night.jpg',
    license: 'CC BY-SA 4.0',
  },
] as const;
