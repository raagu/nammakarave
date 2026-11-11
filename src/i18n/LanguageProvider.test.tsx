import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LanguageProvider } from './LanguageProvider';
import { LANGUAGE_STORAGE_KEY } from './preference';
import { useLanguage } from './context';

function Probe() {
  const { t, language, setLanguage } = useLanguage();
  return (
    <button type="button" onClick={() => setLanguage('en')} data-testid="probe" lang={language}>
      {t('navHome')}
    </button>
  );
}

describe('language preference', () => {
  it('defaults to Kannada and persists only a language choice', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    expect(screen.getByTestId('probe')).toHaveTextContent('ಮುಖಪುಟ');
    fireEvent.click(screen.getByTestId('probe'));
    expect(screen.getByTestId('probe')).toHaveTextContent('Home');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
    expect(localStorage.length).toBe(1);
  });
  it('uses a valid saved preference', () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en');
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    expect(screen.getByTestId('probe')).toHaveTextContent('Home');
  });
  it('uses the URL language instead of a different stored preference', () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en');
    const change = vi.fn();
    render(
      <LanguageProvider language="kn" onLanguageChange={change}>
        <Probe />
      </LanguageProvider>,
    );
    expect(screen.getByTestId('probe')).toHaveTextContent('ಮುಖಪುಟ');
    fireEvent.click(screen.getByTestId('probe'));
    expect(change).toHaveBeenCalledWith('en');
    expect(screen.getByTestId('probe')).toHaveTextContent('ಮುಖಪುಟ');
  });
  it('survives denied storage access', () => {
    const read = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Denied', 'SecurityError');
    });
    const write = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Denied', 'SecurityError');
    });
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    expect(screen.getByTestId('probe')).toHaveTextContent('ಮುಖಪುಟ');
    fireEvent.click(screen.getByTestId('probe'));
    expect(screen.getByTestId('probe')).toHaveTextContent('Home');
    read.mockRestore();
    write.mockRestore();
  });
});
