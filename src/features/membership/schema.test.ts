import { describe, expect, it } from 'vitest';
import { membershipSchema, normalizePhone } from './schema';

const valid = {
  fullName: 'ಕಿರಣ್ ಕುಮಾರ್',
  phone: '+91 98765 43210',
  district: 'mysuru',
  taluk: 'ಮೈಸೂರು',
  profession: 'Software engineer',
  wing: 'digital',
  consent: true,
};

describe('supporter preview validation', () => {
  it('accepts Kannada, trims text, and normalizes the phone', () => {
    expect(membershipSchema.parse({ ...valid, fullName: '  ಕಿರಣ್ ಕುಮಾರ್  ' })).toMatchObject({
      fullName: 'ಕಿರಣ್ ಕುಮಾರ್',
      phone: '9876543210',
    });
  });
  it.each(['+91 98765 43210', '0091-98765-43210', '೯೮೭೬೫೪೩೨೧೦', '९८७६५४३२१०', '9876543210'])(
    'supports a valid local phone format: %s',
    (phone) => {
      expect(normalizePhone(phone)).toBe('9876543210');
      expect(membershipSchema.safeParse({ ...valid, phone }).success).toBe(true);
    },
  );
  it.each([
    '',
    '1234567890',
    '+1 9876543210',
    '98765432101',
    '98765abc10',
    '919876543210',
    '+919876543210<script>',
  ])('rejects an invalid phone: %s', (phone) => {
    expect(membershipSchema.safeParse({ ...valid, phone }).success).toBe(false);
  });
  it.each(['<img src=x onerror=alert(1)>', 'A', 'x'.repeat(81), 'Alice\nSmith'])(
    'rejects unsafe or invalid names: %s',
    (fullName) => {
      expect(membershipSchema.safeParse({ ...valid, fullName }).success).toBe(false);
    },
  );
  it('rejects fabricated district and wing identifiers', () => {
    const result = membershipSchema.safeParse({
      ...valid,
      district: 'not-a-district',
      wing: 'not-a-wing',
    });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(result.error.issues.map((issue) => issue.message)).toEqual([
        'errorDistrict',
        'errorWing',
      ]);
  });
  it('requires an explicit acknowledgement', () => {
    expect(membershipSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
  it('validates all required fields in one pass', () => {
    const result = membershipSchema.safeParse({
      ...valid,
      fullName: '',
      phone: '',
      taluk: '',
      profession: '',
      district: '',
      consent: false,
    });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(new Set(result.error.issues.map((issue) => issue.path[0])).size).toBe(6);
  });
});
