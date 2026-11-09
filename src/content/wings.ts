import { bilingual as b, type Wing } from './types';

// Append a wing here to add it to the directory and membership interest selector.
export const wings = [
  {
    id: 'women',
    icon: 'people',
    title: b('ಮಹಿಳಾ ಘಟಕ', 'Women’s Wing'),
    tagline: b('ಸಮಾನ ಅವಕಾಶ. ಸಬಲ ಹೆಜ್ಜೆ.', 'Equal opportunity. Stronger together.'),
    description: b(
      'ಮಹಿಳೆಯರ ಸುರಕ್ಷತೆ, ಗೌರವ ಮತ್ತು ಸಮುದಾಯದ ನಾಯಕತ್ವಕ್ಕೆ ಬೆಂಬಲ. ನಾಡಿನ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಮಹಿಳೆಯರ ಭಾಗವಹಿಸುವಿಕೆಗೆ ಒಂದು ವೇದಿಕೆ.',
      'A platform for women’s safety, dignity, and community leadership, supporting participation in Karnataka’s social and cultural life.',
    ),
    activities: [
      b('ಸಬಲೀಕರಣ ಮತ್ತು ಜಾಗೃತಿ', 'Empowerment and awareness'),
      b('ಸಮುದಾಯ ನಾಯಕತ್ವ', 'Community leadership'),
      b('ಸುರಕ್ಷತೆ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ', 'Safety awareness and guidance'),
    ],
  },
  {
    id: 'legal',
    icon: 'scales',
    title: b('ಕಾನೂನು ಘಟಕ', 'Legal Wing'),
    tagline: b('ಹಕ್ಕಿನ ಅರಿವು. ನ್ಯಾಯದ ದಾರಿ.', 'Know your rights. Find a way forward.'),
    description: b(
      'ಕಾನೂನು ಅರಿವು, ಕಾರ್ಮಿಕ ವಿವಾದಗಳು ಮತ್ತು ಸಂವಿಧಾನಬದ್ಧ ಹಕ್ಕುಗಳ ಕುರಿತ ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಆಸಕ್ತ ವೃತ್ತಿಪರರನ್ನು ಒಗ್ಗೂಡಿಸುವ ಕಾರ್ಯಕ್ಷೇತ್ರ. ನಿರ್ದಿಷ್ಟ ಪ್ರಕರಣಕ್ಕೆ ವಕೀಲರ ಸಲಹೆ ಅಗತ್ಯ.',
      'A forum for legal awareness and guidance on worker disputes and constitutional rights. Individual cases require advice from a qualified lawyer.',
    ),
    activities: [
      b('ಕಾನೂನು ಅರಿವು ಕಾರ್ಯಕ್ರಮಗಳು', 'Legal-literacy initiatives'),
      b('ಕಾರ್ಮಿಕ ಹಕ್ಕುಗಳ ಜಾಗೃತಿ', 'Worker-rights awareness'),
      b('ಅರ್ಹ ವೃತ್ತಿಪರರ ಮಾರ್ಗದರ್ಶನ', 'Guidance from qualified professionals'),
    ],
  },
  {
    id: 'labour',
    icon: 'work',
    title: b('ಕಾರ್ಮಿಕ ಘಟಕ', 'Labour Wing'),
    tagline: b('ದುಡಿಯುವ ಕೈಗಳಿಗೆ ಘನತೆ.', 'Dignity for every working hand.'),
    description: b(
      'ಕೈಗಾರಿಕಾ ಕಾರ್ಮಿಕರು, ಆಟೋ ಮತ್ತು ಕ್ಯಾಬ್ ಚಾಲಕರು ಹಾಗೂ ಅಸಂಘಟಿತ ಕಾರ್ಮಿಕರ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಜಾಗೃತಿ ಮತ್ತು ಸಮುದಾಯ ಸಹಕಾರ.',
      'Awareness and community cooperation around the concerns of industrial workers, auto and cab drivers, and people in the unorganized sector.',
    ),
    activities: [
      b('ಕಾರ್ಮಿಕರ ಕಲ್ಯಾಣ ಜಾಗೃತಿ', 'Worker-welfare awareness'),
      b('ಚಾಲಕರ ಸಮುದಾಯ ಸಂಪರ್ಕ', 'Driver-community engagement'),
      b('ನ್ಯಾಯಯುತ ಉದ್ಯೋಗಾವಕಾಶ', 'Fair employment opportunities'),
    ],
  },
  {
    id: 'digital',
    icon: 'code',
    title: b('ಐಟಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಘಟಕ', 'IT & Digital Wing'),
    tagline: b('ಡಿಜಿಟಲ್ ಜಗತ್ತಲ್ಲೂ ಕನ್ನಡ.', 'A place for Kannada in the digital world.'),
    description: b(
      'ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ಕನ್ನಡದ ಬಳಕೆ, ಸ್ಥಳೀಕರಣ, ಡಿಜಿಟಲ್ ಜಾಗೃತಿ ಮತ್ತು ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಯ ಬೆಳವಣಿಗೆಗಾಗಿ ಕೌಶಲ್ಯಗಳನ್ನು ಒಗ್ಗೂಡಿಸುವ ವೇದಿಕೆ.',
      'Bringing skills together for Kannada localization, digital literacy, responsible online advocacy, and opportunities for local technology talent.',
    ),
    activities: [
      b('ಕನ್ನಡ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸ್ಥಳೀಕರಣ', 'Kannada technology and localization'),
      b('ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ', 'Digital literacy'),
      b('ಜವಾಬ್ದಾರಿಯುತ ಆನ್‌ಲೈನ್ ಅಭಿಯಾನ', 'Responsible digital campaigns'),
    ],
  },
] satisfies readonly Wing[];
