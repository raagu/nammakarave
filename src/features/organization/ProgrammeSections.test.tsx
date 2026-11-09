import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import { LanguageProvider } from '../../i18n/LanguageProvider';
import { programmeArchive } from '../../content/official';
import { ProgrammeArchive } from './ProgrammeSections';

it('never substitutes reference reporting photos for photographs of the actual programme', () => {
  localStorage.clear();
  render(
    <MemoryRouter>
      <LanguageProvider>
        <ProgrammeArchive />
      </LanguageProvider>
    </MemoryRouter>,
  );
  expect(screen.getAllByRole('article')).toHaveLength(programmeArchive.length);
  expect(screen.queryAllByRole('img')).toHaveLength(0);
  expect(document.querySelectorAll('a[href*="oneindia.com"]')).toHaveLength(0);
  for (const programme of programmeArchive) {
    expect(screen.getByRole('heading', { name: programme.title.kn })).toBeInTheDocument();
  }
});
