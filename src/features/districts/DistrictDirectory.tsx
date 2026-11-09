import { useId } from 'react';
import { useSearchParams } from 'react-router-dom';
import { districts } from '../../content/districts';
import { organization } from '../../content/site';
import { useLanguage } from '../../i18n/context';
import { Icon } from '../../components/Icon';
import { KarnatakaGraphic } from '../../components/KarnatakaGraphic';

export function DistrictDirectory({ heading = true }: { heading?: boolean }) {
  const { t, localize } = useLanguage();
  const [params, setParams] = useSearchParams();
  const selected =
    districts.find((district) => district.id === params.get('district')) ??
    districts.find((district) => district.id === 'bengaluru-urban')!;
  const id = useId();
  const resultId = `${id}-result`;
  const Heading = heading ? 'h2' : 'div';
  const office = selected.office;
  const verifiedOffice = office?.status === 'verified' ? office : undefined;
  const phones = verifiedOffice?.phones ?? organization.phones;
  const directions = verifiedOffice?.directions ?? (!office ? organization.directions : undefined);

  function selectDistrict(districtId: string) {
    if (!districts.some((district) => district.id === districtId)) return;
    setParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        next.set('district', districtId);
        return next;
      },
      { preventScrollReset: true },
    );
  }

  return (
    <div className="district-grid">
      <div className="district-copy">
        <p className="eyebrow">
          <span className="red-rule" />
          {t('districtEyebrow')}
        </p>
        <Heading className="district-heading">
          <span>{t('districtLine1')}</span>
          <span className="text-yellow">{t('districtLine2')}</span>
        </Heading>
        <p>{t('districtIntro')}</p>
        <label className="field-label" htmlFor={id}>
          {t('selectDistrict')}
        </label>
        <div className="select-wrap">
          <select
            id={id}
            value={selected.id}
            onChange={(event) => selectDistrict(event.target.value)}
            aria-describedby={resultId}
          >
            {districts.map((district) => (
              <option value={district.id} key={district.id}>
                {localize(district.name)}
              </option>
            ))}
          </select>
          <Icon name="chevron" />
        </div>
        <div className="district-result" id={resultId} aria-live="polite" aria-atomic="true">
          <div className="district-result-title">
            <Icon name="pin" />
            <h3>{localize(selected.name)}</h3>
          </div>
          {office?.status === 'sample' && (
            <>
              <span className="sample-contact-badge">{t('sampleContact')}</span>
              <p>{t('sampleContactNote')}</p>
            </>
          )}
          {!office && (
            <>
              <p>{t('districtContactNote')}</p>
              <span className="verification-note">{t('localDetailsPending')}</span>
            </>
          )}
          <p className="district-office-label">{t(office ? 'districtOffice' : 'headOffice')}</p>
          {office?.contactName && (
            <p className="district-contact-name">{localize(office.contactName)}</p>
          )}
          {office?.status === 'sample' ? (
            <span className="district-sample-phone">
              <Icon name="phone" />
              {office.phoneDisplay}
            </span>
          ) : (
            <div className="district-phone-list">
              {phones.map((phone) => (
                <a
                  className="text-link"
                  key={phone.international}
                  href={`tel:${phone.international}`}
                >
                  <Icon name="phone" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          )}
          <span className="district-address-label">{t('districtAddress')}</span>
          <address>{localize(office?.address ?? organization.address)}</address>
          {directions && (
            <a
              className="text-link district-directions"
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('getDirections')}
              <Icon name="upRight" />
            </a>
          )}
          {office?.status === 'sample' && (
            <div className="district-central-help">
              <p>{t('districtContactNote')}</p>
              <a className="text-link" href={`tel:${organization.phones[0].international}`}>
                <Icon name="phone" />
                {t('office')} · {organization.phones[0].display}
              </a>
            </div>
          )}
        </div>
      </div>
      <KarnatakaGraphic selectedId={selected.id} onSelect={selectDistrict} resultId={resultId} />
    </div>
  );
}
