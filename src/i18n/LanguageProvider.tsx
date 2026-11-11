import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from '../content/types';
import { messages } from './messages';
import { LanguageContext, type LanguageValue } from './context';
import { LANGUAGE_STORAGE_KEY, readLanguagePreference, rememberLanguage } from './preference';

export function LanguageProvider({
  children,
  language: explicitLanguage,
  onLanguageChange,
}: {
  children: ReactNode;
  language?: Language;
  onLanguageChange?: (language: Language) => void;
}) {
  const [preference, updatePreference] = useState<Language>(
    () => explicitLanguage ?? readLanguagePreference(),
  );
  const language = explicitLanguage ?? preference;
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo<LanguageValue>(
    () => ({
      language,
      setLanguage: (next) => {
        rememberLanguage(next);
        updatePreference(next);
        onLanguageChange?.(next);
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
    [language, onLanguageChange],
  );
  return <LanguageContext value={value}>{children}</LanguageContext>;
}
