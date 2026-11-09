import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { LanguageProvider } from '../../i18n/LanguageProvider';
import { bilingual as b } from '../../content/types';
import { CampaignPhotoArchive } from './CampaignPhotoArchive';

it('shows an approved photograph with its date, location, and caption', async () => {
  localStorage.clear();
  const photo = {
    id: 'approved-example',
    date: '2025-02-18',
    image: 'assets/approved-example.webp',
    alt: b('ಅನುಮೋದಿತ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರ', 'Approved programme photograph'),
    caption: b('ಕನ್ನಡಕ್ಕಾಗಿ ಸಾರ್ವಜನಿಕ ಸಂವಾದ', 'Public dialogue for Kannada'),
    location: b('ಬೆಂಗಳೂರು', 'Bengaluru'),
    credit: 'Owner-approved photo credit',
  };
  const { rerender } = render(
    <LanguageProvider>
      <CampaignPhotoArchive photographs={[photo]} />
    </LanguageProvider>,
  );
  expect(screen.getByRole('img', { name: 'ಅನುಮೋದಿತ ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರ' })).toBeInTheDocument();
  expect(screen.getByText('ಬೆಂಗಳೂರು')).toBeInTheDocument();
  expect(screen.queryByText('Owner-approved photo credit')).not.toBeInTheDocument();
  expect(document.querySelector('time')).toHaveAttribute('dateTime', '2025-02-18');
  rerender(
    <LanguageProvider>
      <CampaignPhotoArchive photographs={[]} />
    </LanguageProvider>,
  );
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ಹೋರಾಟಗಳ ಛಾಯಾಚಿತ್ರ ಸಂಗ್ರಹ' })).toBeInTheDocument();
});
