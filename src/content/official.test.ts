import { describe, expect, it } from 'vitest';
import {
  officialCopy,
  values,
  leaderMessage,
  programmeArchive,
  upcomingProgrammes,
  participationFaqs,
  campaigns,
} from './official';
import { milestones } from './milestones';

describe('official organization content', () => {
  it('provides complete Kannada and English text across the new content', () => {
    const localized = [
      ...Object.values(officialCopy),
      ...values.flatMap((v) => [v.title, v.body]),
      ...leaderMessage.paragraphs,
      ...programmeArchive.flatMap((p) => [p.title, p.body, p.category, p.imageAlt]),
      ...participationFaqs.flatMap((f) => [f.question, f.answer]),
      ...campaigns.flatMap((c) => [c.title, c.category, c.advocacy, c.development]),
    ];
    for (const text of localized) {
      expect(text.kn.trim()).not.toBe('');
      expect(text.en.trim()).not.toBe('');
    }
  });
  it('retains review status for unapproved speech and photographs', () => {
    expect(leaderMessage.status).toBe('draft');
    for (const programme of programmeArchive) {
      expect(programme.imageCredit.trim()).not.toBe('');
      expect(programme.image).toMatch(
        programme.imageStatus === 'reference-only' ? /^review-media\// : /^assets\//,
      );
      expect(new URL(programme.source).protocol).toBe('https:');
    }
    expect(upcomingProgrammes).toEqual([]);
  });
  it('connects history previews and campaign claims to actual source records', () => {
    for (const id of [
      'formation',
      'belagavi-2005',
      'metro-2017',
      'language-act-2024',
      'employment-2026',
    ])
      expect(milestones.some((m) => m.id === id)).toBe(true);
    for (const campaign of campaigns) {
      expect(campaign.sources.length).toBeGreaterThan(0);
      for (const source of campaign.sources) expect(new URL(source.url).protocol).toBe('https:');
    }
  });
});
