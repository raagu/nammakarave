import { createContext, useContext } from 'react';
import type { Language, Localized } from '../content/types';
import type { MessageKey } from './messages';

export interface LanguageValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: MessageKey) => string;
  localize: (text: Localized) => string;
  clearPreference: () => void;
}
export const LanguageContext = createContext<LanguageValue | undefined>(undefined);
export function useLanguage(): LanguageValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is required');
  return context;
}
