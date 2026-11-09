export type Language = 'kn' | 'en';
export type Localized = Readonly<Record<Language, string>>;
export const bilingual = (kn: string, en: string): Localized => ({ kn, en });

export type IconName = 'book' | 'work' | 'water' | 'culture' | 'people' | 'scales' | 'code';
export interface Wing {
  id: string;
  icon: IconName;
  title: Localized;
  tagline: Localized;
  description: Localized;
  activities: readonly Localized[];
}
export type DistrictOffice =
  | {
      status: 'verified';
      contactName?: Localized;
      address: Localized;
      phones: readonly { display: string; international: string }[];
      directions?: string;
    }
  | {
      status: 'sample';
      contactName: Localized;
      address: Localized;
      phoneDisplay: string;
    };
export interface District {
  id: string;
  name: Localized;
  aliases: readonly string[];
  office?: DistrictOffice;
}
export interface Milestone {
  id: string;
  year: number;
  date?: string;
  period?: Localized;
  category: 'culture' | 'movement';
  title: Localized;
  description: Localized;
  source: string;
  sourceName?: string;
}
export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: Localized;
  description: Localized;
  image: string;
  alt: Localized;
  credit: string;
  source: string;
  license: string;
  videoId?: string;
}
