import { z } from 'zod';
import { districts } from '../../content/districts';
import { wings } from '../../content/wings';

export function normalizePhone(value: string): string {
  const digits = value
    .trim()
    .replace(/[೦-೯]/g, (digit) => String(digit.charCodeAt(0) - 0x0ce6))
    .replace(/[०-९]/g, (digit) => String(digit.charCodeAt(0) - 0x0966));
  const compact = digits.replace(/[\s()-]/g, '');
  if (compact.startsWith('+91')) return compact.slice(3);
  if (compact.startsWith('0091')) return compact.slice(4);
  return compact;
}

const safeText = (max: number, error: string) =>
  z
    .string()
    .trim()
    .min(2, error)
    .max(max, error)
    .regex(/^[^<>\p{Cc}]+$/u, error);
export const membershipSchema = z.object({
  fullName: safeText(80, 'errorName').regex(/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u, 'errorName'),
  phone: z
    .string()
    .transform(normalizePhone)
    .pipe(z.string().regex(/^[6-9]\d{9}$/, 'errorPhone')),
  district: z
    .string()
    .refine((value) => districts.some((district) => district.id === value), 'errorDistrict'),
  taluk: safeText(60, 'errorTaluk'),
  profession: safeText(80, 'errorProfession'),
  wing: z
    .string()
    .refine((value) => value === 'general' || wings.some((wing) => wing.id === value), 'errorWing'),
  consent: z.boolean().refine((value) => value, 'errorConsent'),
});

export type MembershipInput = z.input<typeof membershipSchema>;
export type MembershipField = keyof MembershipInput;
export interface SupporterPreview {
  fullName: string;
  district: string;
  wing: string;
}
