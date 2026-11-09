import { bilingual as b, type District } from './types';

/** Replace a sample office only with an owner-confirmed, verified record. */
const districtEntries: readonly District[] = [
  { id: 'bagalkot', name: b('ಬಾಗಲಕೋಟೆ', 'Bagalkote'), aliases: ['Bagalkot'] },
  { id: 'ballari', name: b('ಬಳ್ಳಾರಿ', 'Ballari'), aliases: ['Bellary'] },
  { id: 'belagavi', name: b('ಬೆಳಗಾವಿ', 'Belagavi'), aliases: ['Belgaum'] },
  {
    id: 'bengaluru-rural',
    name: b('ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', 'Bengaluru Rural'),
    aliases: ['Bangalore Rural'],
  },
  { id: 'bengaluru-urban', name: b('ಬೆಂಗಳೂರು ನಗರ', 'Bengaluru Urban'), aliases: ['Bangalore'] },
  {
    id: 'bengaluru-south',
    name: b('ಬೆಂಗಳೂರು ದಕ್ಷಿಣ (ರಾಮನಗರ)', 'Bengaluru South (Ramanagara)'),
    aliases: ['Ramanagara', 'Ramanagaram'],
  },
  { id: 'bidar', name: b('ಬೀದರ್', 'Bidar'), aliases: [] },
  { id: 'chamarajanagar', name: b('ಚಾಮರಾಜನಗರ', 'Chamarajanagar'), aliases: [] },
  { id: 'chikkaballapur', name: b('ಚಿಕ್ಕಬಳ್ಳಾಪುರ', 'Chikkaballapur'), aliases: [] },
  { id: 'chikkamagaluru', name: b('ಚಿಕ್ಕಮಗಳೂರು', 'Chikkamagaluru'), aliases: ['Chikmagalur'] },
  { id: 'chitradurga', name: b('ಚಿತ್ರದುರ್ಗ', 'Chitradurga'), aliases: [] },
  {
    id: 'dakshina-kannada',
    name: b('ದಕ್ಷಿಣ ಕನ್ನಡ', 'Dakshina Kannada'),
    aliases: ['Mangaluru', 'Mangalore'],
  },
  { id: 'davanagere', name: b('ದಾವಣಗೆರೆ', 'Davanagere'), aliases: [] },
  { id: 'dharwad', name: b('ಧಾರವಾಡ', 'Dharwad'), aliases: ['Hubballi', 'Hubli'] },
  { id: 'gadag', name: b('ಗದಗ', 'Gadag'), aliases: [] },
  { id: 'hassan', name: b('ಹಾಸನ', 'Hassan'), aliases: [] },
  { id: 'haveri', name: b('ಹಾವೇರಿ', 'Haveri'), aliases: [] },
  { id: 'kalaburagi', name: b('ಕಲಬುರಗಿ', 'Kalaburagi'), aliases: ['Gulbarga'] },
  { id: 'kodagu', name: b('ಕೊಡಗು', 'Kodagu'), aliases: ['Coorg', 'Madikeri'] },
  { id: 'kolar', name: b('ಕೋಲಾರ', 'Kolar'), aliases: [] },
  { id: 'koppal', name: b('ಕೊಪ್ಪಳ', 'Koppal'), aliases: [] },
  { id: 'mandya', name: b('ಮಂಡ್ಯ', 'Mandya'), aliases: [] },
  { id: 'mysuru', name: b('ಮೈಸೂರು', 'Mysuru'), aliases: ['Mysore'] },
  { id: 'raichur', name: b('ರಾಯಚೂರು', 'Raichur'), aliases: [] },
  { id: 'shivamogga', name: b('ಶಿವಮೊಗ್ಗ', 'Shivamogga'), aliases: ['Shimoga'] },
  { id: 'tumakuru', name: b('ತುಮಕೂರು', 'Tumakuru'), aliases: ['Tumkur'] },
  { id: 'udupi', name: b('ಉಡುಪಿ', 'Udupi'), aliases: [] },
  { id: 'uttara-kannada', name: b('ಉತ್ತರ ಕನ್ನಡ', 'Uttara Kannada'), aliases: ['Karwar'] },
  { id: 'vijayapura', name: b('ವಿಜಯಪುರ', 'Vijayapura'), aliases: ['Bijapur'] },
  { id: 'vijayanagara', name: b('ವಿಜಯನಗರ', 'Vijayanagara'), aliases: ['Hosapete'] },
  { id: 'yadgir', name: b('ಯಾದಗಿರಿ', 'Yadgir'), aliases: [] },
];

/** Owner-requested demonstration records; sample phones are deliberately non-dialable. */
export const districts: readonly District[] = districtEntries.map((district, index) => ({
  ...district,
  office: district.office ?? {
    status: 'sample',
    contactName: b(
      `${district.name.kn} ಜಿಲ್ಲಾ ಸಂಯೋಜಕರು — ಮಾದರಿ`,
      `${district.name.en} district coordinator — sample`,
    ),
    address: b(
      `ಮಾದರಿ ಜಿಲ್ಲಾ ಕಚೇರಿ ${index + 1}, ಮಾದರಿ ಮುಖ್ಯ ರಸ್ತೆ, ${district.name.kn}, ಕರ್ನಾಟಕ. ಇದು ನೈಜ ಕಚೇರಿ ವಿಳಾಸವಲ್ಲ.`,
      `Sample district office ${index + 1}, Example Main Road, ${district.name.en}, Karnataka. This is a demonstration address.`,
    ),
    phoneDisplay: `00000 ${String(index + 1).padStart(5, '0')}`,
  },
}));
