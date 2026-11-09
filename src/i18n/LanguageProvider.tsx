import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from '../content/types';
import { messages } from './messages';
import { LanguageContext, type LanguageValue } from './context';

export const LANGUAGE_STORAGE_KEY = 'namma-karave.language';
function readPreference(): Language {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'kn';
  } catch {
    return 'kn';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(readPreference);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo<LanguageValue>(
    () => ({
      language,
      setLanguage: (next) => {
        updateLanguage(next);
        try {
          localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
        } catch {
          /* Storage is optional. */
        }
      },
      t: (key) => messages[key][language],
      localize: (text) => text[language],
      clearPreference: () => {
        try {
          localStorage.removeItem(LANGUAGE_STORAGE_KEY);
        } catch {
          /* Private browsing may deny storage. */
        }
      },
    }),
    [language],
  );
  return <LanguageContext value={value}>{children}</LanguageContext>;
}
