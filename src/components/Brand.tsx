import { Link } from 'react-router-dom';
import { organization } from '../content/site';
import { useLanguage } from '../i18n/context';
import { AppImage } from './AppImage';

export function Brand() {
  const { localize } = useLanguage();
  return (
    <Link className="brand" to="/" aria-label={localize(organization.name)}>
      <AppImage className="brand-logo" src={organization.logo} alt="" width={433} height={410} />
      <span className="brand-text">
        <strong>{localize(organization.name)}</strong>
        <span>{localize(organization.tagline)}</span>
      </span>
    </Link>
  );
}
