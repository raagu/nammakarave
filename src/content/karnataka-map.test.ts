import { describe, expect, it } from 'vitest';
import { districts } from './districts';
import { karnatakaMap } from './karnataka-map';

describe('Karnataka geographic directory', () => {
  it('maps every current district to one polygon and a valid selectable location', () => {
    const expected = districts.map((district) => district.id).sort();
    expect(karnatakaMap.regions.map((region) => region.id).sort()).toEqual(expected);
    expect(expected).toHaveLength(31);
    for (const region of karnatakaMap.regions) {
      expect(region.path).toMatch(/^M[\d.,LZM-]+Z$/);
      expect(region.point.x).toBeGreaterThan(0);
      expect(region.point.x).toBeLessThan(karnatakaMap.width);
      expect(region.point.y).toBeGreaterThan(0);
      expect(region.point.y).toBeLessThan(karnatakaMap.height);
    }
  });

  it('keeps sample contacts explicit and separate from verified telephone numbers', () => {
    const addresses = new Set<string>();
    for (const district of districts) {
      const office = district.office;
      expect(office).toBeDefined();
      if (office?.status === 'sample') {
        expect(office.contactName.en).toContain('sample');
        expect(office.contactName.kn).toContain('ಮಾದರಿ');
        expect(office.address.en).toContain(district.name.en);
        expect(office.address.kn).toContain(district.name.kn);
        expect(office.phoneDisplay).toMatch(/^00000 \d{5}$/);
        expect(office).not.toHaveProperty('phones');
        expect(addresses.has(office.address.en)).toBe(false);
        addresses.add(office.address.en);
      } else if (office?.status === 'verified') {
        for (const phone of office.phones) expect(phone.international).toMatch(/^\+91\d{10}$/);
      }
    }
  });
});
