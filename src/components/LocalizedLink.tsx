import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  type LinkProps,
  type NavLinkProps,
  type To,
} from 'react-router-dom';
import { useLanguage } from '../i18n/context';
import type { Language } from '../content/types';
import { languagePath, resolvePage } from '../lib/routing';

function localizedTarget(to: To, language: Language): To {
  if (typeof to !== 'string')
    return to.pathname ? { ...to, pathname: localizedTarget(to.pathname, language) as string } : to;
  if (!to.startsWith('/') || to.startsWith('//')) return to;
  const target = new URL(`https://internal.invalid${to}`);
  const resolved = resolvePage(target.pathname);
  return `${languagePath(resolved.path, language)}${target.search}${target.hash}`;
}

export function Link({ to, ...props }: LinkProps) {
  const { language } = useLanguage();
  return <RouterLink {...props} to={localizedTarget(to, language)} />;
}

export function NavLink({ to, ...props }: NavLinkProps) {
  const { language } = useLanguage();
  return <RouterNavLink {...props} to={localizedTarget(to, language)} />;
}
