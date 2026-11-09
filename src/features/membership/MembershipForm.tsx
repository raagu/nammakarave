import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { districts } from '../../content/districts';
import { wings } from '../../content/wings';
import { organization } from '../../content/site';
import { useLanguage } from '../../i18n/context';
import { messages, type MessageKey } from '../../i18n/messages';
import { Icon } from '../../components/Icon';
import {
  membershipSchema,
  type MembershipField,
  type MembershipInput,
  type SupporterPreview,
} from './schema';
import { downloadSupporterCard } from './card';

const fieldIds: Record<MembershipField, string> = {
  fullName: 'full-name',
  phone: 'phone',
  district: 'join-district',
  taluk: 'taluk',
  profession: 'profession',
  wing: 'wing-interest',
  consent: 'consent',
};

export function MembershipForm() {
  const { t, localize } = useLanguage();
  const [params] = useSearchParams();
  const [values, setValues] = useState<MembershipInput>(() => ({
    fullName: '',
    phone: '',
    district: '',
    taluk: '',
    profession: '',
    consent: false,
    wing: wings.some((wing) => wing.id === params.get('wing')) ? params.get('wing')! : 'general',
  }));
  const [errors, setErrors] = useState<Partial<Record<MembershipField, MessageKey>>>({});
  const [preview, setPreview] = useState<SupporterPreview | null>(null);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );
  const update = <K extends MembershipField>(field: K, value: MembershipInput[K]) =>
    setValues((previous) => ({ ...previous, [field]: value }));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = membershipSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<MembershipField, MessageKey>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as MembershipField;
        if (!next[field])
          next[field] = issue.message in messages ? (issue.message as MessageKey) : 'errorSummary';
      }
      setErrors(next);
      const firstField = Object.keys(next)[0] as MembershipField | undefined;
      if (firstField)
        requestAnimationFrame(() => document.getElementById(fieldIds[firstField])?.focus());
      return;
    }
    setErrors({});
    setPreview({
      fullName: result.data.fullName,
      district: result.data.district,
      wing: result.data.wing,
    });
    setDownloadState('idle');
    requestAnimationFrame(() => document.getElementById('supporter-result')?.focus());
  }

  const error = (field: MembershipField) => (
    <span id={`${fieldIds[field]}-error`} className="field-error">
      {errors[field] ? t(errors[field]) : ''}
    </span>
  );
  const attributes = (field: MembershipField) => ({
    id: fieldIds[field],
    name: field,
    'aria-invalid': !!errors[field],
    'aria-describedby': `${fieldIds[field]}-error`,
  });
  const district = districts.find((item) => item.id === preview?.district);
  const wing = wings.find((item) => item.id === preview?.wing);

  return (
    <div className="join-form-wrap">
      <div className="form-heading">
        <span className="form-step">{t('yourNextStep')}</span>
        <span className="form-required">{t('requiredFields')}</span>
      </div>
      {preview ? (
        <section
          className="supporter-result"
          id="supporter-result"
          tabIndex={-1}
          aria-labelledby="card-title"
        >
          <p className="success-label">
            <Icon name="check" />
            {t('cardReady')}
          </p>
          <div className="supporter-card">
            <div className="card-top">
              <span>{localize(organization.name)}</span>
              <span className="mini-flag" aria-hidden="true" />
            </div>
            <span className="card-preview-label">{t('previewOnly')}</span>
            <h2 id="card-title">{preview.fullName}</h2>
            <p>{district ? localize(district.name) : ''}</p>
            <p>{wing ? localize(wing.title) : t('generalWing')}</p>
            <div className="card-bottom">{t('motto')}</div>
          </div>
          <p className="muted">{t('cardDisclaimer')}</p>
          <div className="card-actions">
            <button
              type="button"
              className="button button-yellow"
              disabled={downloadState === 'loading'}
              onClick={async () => {
                setDownloadState('loading');
                try {
                  await downloadSupporterCard({
                    organization: localize(organization.name),
                    faction: localize(organization.faction),
                    name: preview.fullName,
                    district: district ? localize(district.name) : '',
                    wing: wing ? localize(wing.title) : t('generalWing'),
                    disclaimer: t('previewOnly'),
                    motto: t('motto'),
                  });
                  setDownloadState('success');
                } catch {
                  setDownloadState('error');
                }
              }}
            >
              {t(downloadState === 'loading' ? 'loading' : 'downloadCard')}
              <Icon name="download" />
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={() => {
                setPreview(null);
                setDownloadState('idle');
                requestAnimationFrame(() => document.getElementById('full-name')?.focus());
              }}
            >
              {t('editDetails')}
            </button>
          </div>
          <p
            className={downloadState === 'error' ? 'field-error' : 'download-status'}
            role="status"
          >
            {downloadState === 'success'
              ? t('savedCard')
              : downloadState === 'error'
                ? t('downloadFailed')
                : ''}
          </p>
        </section>
      ) : (
        <form id="membership-form" onSubmit={submit} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="full-name">
                {t('fullName')} <span aria-hidden="true">*</span>
              </label>
              <input
                {...attributes('fullName')}
                autoComplete="name"
                maxLength={80}
                required
                placeholder={t('namePlaceholder')}
                value={values.fullName}
                onChange={(event) => update('fullName', event.target.value)}
              />
              {error('fullName')}
            </div>
            <div className="form-field">
              <label htmlFor="phone">
                {t('phoneLabel')} <span aria-hidden="true">*</span>
              </label>
              <input
                {...attributes('phone')}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={24}
                required
                placeholder={t('phonePlaceholder')}
                value={values.phone}
                onChange={(event) => update('phone', event.target.value)}
              />
              {error('phone')}
            </div>
            <div className="form-field">
              <label htmlFor="join-district">
                {t('districtLabel')} <span aria-hidden="true">*</span>
              </label>
              <select
                {...attributes('district')}
                required
                value={values.district}
                onChange={(event) => update('district', event.target.value)}
              >
                <option value="">{t('selectDistrict')}</option>
                {districts.map((item) => (
                  <option value={item.id} key={item.id}>
                    {localize(item.name)}
                  </option>
                ))}
              </select>
              {error('district')}
            </div>
            <div className="form-field">
              <label htmlFor="taluk">
                {t('talukLabel')} <span aria-hidden="true">*</span>
              </label>
              <input
                {...attributes('taluk')}
                autoComplete="address-level3"
                maxLength={60}
                required
                placeholder={t('talukPlaceholder')}
                value={values.taluk}
                onChange={(event) => update('taluk', event.target.value)}
              />
              {error('taluk')}
            </div>
            <div className="form-field">
              <label htmlFor="profession">
                {t('professionLabel')} <span aria-hidden="true">*</span>
              </label>
              <input
                {...attributes('profession')}
                autoComplete="organization-title"
                maxLength={80}
                required
                placeholder={t('professionPlaceholder')}
                value={values.profession}
                onChange={(event) => update('profession', event.target.value)}
              />
              {error('profession')}
            </div>
            <div className="form-field">
              <label htmlFor="wing-interest">{t('wingInterest')}</label>
              <select
                {...attributes('wing')}
                value={values.wing}
                onChange={(event) => update('wing', event.target.value)}
              >
                <option value="general">{t('generalWing')}</option>
                {wings.map((item) => (
                  <option value={item.id} key={item.id}>
                    {localize(item.title)}
                  </option>
                ))}
              </select>
              {error('wing')}
            </div>
          </div>
          <div className="form-field consent-field">
            <label className="checkbox-label" htmlFor="consent">
              <input
                {...attributes('consent')}
                type="checkbox"
                required
                checked={values.consent}
                onChange={(event) => update('consent', event.target.checked)}
              />
              <span>{t('consentLabel')}</span>
            </label>
            {error('consent')}
          </div>
          <p className="field-error form-summary" role="alert">
            {Object.keys(errors).length > 0 ? t('errorSummary') : ''}
          </p>
          <button className="button button-yellow form-submit" type="submit">
            {t('generateCard')}
            <Icon name="upRight" />
          </button>
          <p className="form-bottom">{t('formBottom')}</p>
        </form>
      )}
    </div>
  );
}
