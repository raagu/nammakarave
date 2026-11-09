import { useId } from 'react';
import { districts } from '../content/districts';
import { karnatakaMap } from '../content/karnataka-map';
import { useLanguage } from '../i18n/context';
import { Icon } from './Icon';

const names = new Map(districts.map((district) => [district.id, district.name]));

export function KarnatakaGraphic({
  selectedId,
  onSelect,
  resultId,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
  resultId: string;
}) {
  const { t, localize } = useLanguage();
  const instructionsId = useId();
  return (
    <div className="district-art district-map-panel">
      <div className="district-map-toolbar">
        <div>
          <strong>{t('mapState')}</strong>
          <span>
            {districts.length} {t('districtsLabel')}
          </span>
        </div>
        <span className="map-north" aria-hidden="true">
          ↑ N
        </span>
      </div>
      <div
        className="district-map-canvas"
        role="group"
        aria-label={t('districtMap')}
        aria-describedby={instructionsId}
      >
        <svg
          className="karnataka-map"
          viewBox={`0 0 ${karnatakaMap.width} ${karnatakaMap.height}`}
          aria-hidden="true"
        >
          {karnatakaMap.regions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              fillRule="evenodd"
              className={`district-boundary ${region.id === selectedId ? 'district-boundary-selected' : ''}`}
            />
          ))}
        </svg>
        {karnatakaMap.regions.map((region) => {
          const name = localize(names.get(region.id)!);
          return (
            <button
              key={region.id}
              className={`district-marker ${region.point.x < karnatakaMap.width * 0.3 ? 'district-marker-left' : region.point.x > karnatakaMap.width * 0.7 ? 'district-marker-right' : ''}`}
              type="button"
              style={{
                left: `${(region.point.x / karnatakaMap.width) * 100}%`,
                top: `${(region.point.y / karnatakaMap.height) * 100}%`,
              }}
              aria-label={`${t('selectDistrict')}: ${name}`}
              aria-pressed={region.id === selectedId}
              aria-controls={resultId}
              onClick={() => onSelect(region.id)}
            >
              <span className="district-marker-label" aria-hidden="true">
                {name}
              </span>
              <Icon name="pin" />
            </button>
          );
        })}
      </div>
      <p className="map-note" id={instructionsId}>
        <Icon name="pin" />
        {t('mapInstructions')}
      </p>
    </div>
  );
}
