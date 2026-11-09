import type { MessageKey } from '../i18n/messages';

export const navigation: readonly { to: string; key: MessageKey }[] = [
  { to: '/', key: 'navHome' },
  { to: '/about', key: 'navAbout' },
  { to: '/leadership', key: 'navLeadership' },
  { to: '/history', key: 'historyNav' },
  { to: '/programmes', key: 'navProgrammes' },
  { to: '/campaigns', key: 'navCampaigns' },
  { to: '/media', key: 'navMedia' },
  { to: '/contact', key: 'navContact' },
];
