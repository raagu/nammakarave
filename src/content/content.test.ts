import { describe, expect, it } from 'vitest';
import { districts } from './districts';
import { wings } from './wings';
import { milestones } from './milestones';
import { mediaItems } from './media';
import { messages } from '../i18n/messages';
import { landscapes, kuvempuPortrait, karaveEmblem } from './imagery';
import { historyChapters, historyReviewedOn, historySources } from './history';

describe('editorial content contracts', () => {
  it('provides both languages for every UI message', () => {
    for (const value of Object.values(messages)) {
      expect(value.kn.trim()).not.toBe('');
      expect(value.en.trim()).not.toBe('');
    }
  });
  it('has unique, stable identifiers for every editable collection', () => {
    for (const collection of [districts, wings, milestones, mediaItems, landscapes]) {
      expect(new Set(collection.map((item) => item.id)).size).toBe(collection.length);
    }
  });
  it('provides all 31 district choices without inventing local contacts', () => {
    expect(districts).toHaveLength(31);
    expect(districts.find((district) => district.id === 'dharwad')?.aliases).toContain('Hubballi');
    for (const district of districts) {
      expect(district.name.kn).toBeTruthy();
      expect(district.name.en).toBeTruthy();
      expect(district).not.toHaveProperty('phone');
    }
  });
  it('keeps external media IDs and source URLs well formed', () => {
    for (const item of [...mediaItems, ...landscapes, kuvempuPortrait, karaveEmblem]) {
      expect(new URL(item.source).protocol).toBe('https:');
      if ('type' in item && item.type === 'video')
        expect(item.videoId).toMatch(/^[A-Za-z0-9_-]{11}$/);
    }
  });
  it('keeps the researched history bilingual, sourced, and within its review date', () => {
    for (const chapter of historyChapters) {
      expect(chapter.title.kn.trim()).not.toBe('');
      expect(chapter.title.en.trim()).not.toBe('');
      expect(chapter.body.kn.trim()).not.toBe('');
      expect(chapter.body.en.trim()).not.toBe('');
      expect(chapter.sources.length).toBeGreaterThan(0);
    }
    for (const source of Object.values(historySources)) {
      expect(new URL(source.url).protocol).toBe('https:');
      expect(source.publisher.trim()).not.toBe('');
      expect(source.published).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(source.published <= historyReviewedOn).toBe(true);
    }
    for (const milestone of milestones.filter((entry) => entry.category === 'movement')) {
      expect(milestone.date).toMatch(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/);
      expect(milestone.date?.startsWith(String(milestone.year))).toBe(true);
      expect(milestone.date! <= historyReviewedOn).toBe(true);
      expect(milestone.sourceName?.trim()).toBeTruthy();
      expect(new URL(milestone.source).protocol).toBe('https:');
    }
  });
});
