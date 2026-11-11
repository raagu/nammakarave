import type { Language } from '../content/types';

export const LANGUAGE_STORAGE_KEY = 'namma-karave.language';

export function readLanguagePreference(): Language {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'kn';
  } catch {
    return 'kn';
  }
}

export function rememberLanguage(language: Language): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    /* Storage is optional; explicit language URLs remain usable. */
  }
}
