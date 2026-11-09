import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CodeXml,
  Download,
  Droplets,
  ExternalLink,
  Globe2,
  Landmark,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  Scale,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const icons = {
  left: ArrowLeft,
  arrow: ArrowRight,
  upRight: ArrowUpRight,
  down: ArrowDown,
  book: BookOpen,
  work: BriefcaseBusiness,
  water: Droplets,
  culture: Landmark,
  people: Users,
  scales: Scale,
  code: CodeXml,
  download: Download,
  check: Check,
  chevron: ChevronDown,
  external: ExternalLink,
  globe: Globe2,
  pin: MapPin,
  phone: Phone,
  play: Play,
  pause: Pause,
  menu: Menu,
  close: X,
  shield: ShieldCheck,
} satisfies Record<string, LucideIcon>;
export type IconId = keyof typeof icons | 'x' | 'instagram' | 'youtube';
export function Icon({ name, className = '' }: { name: IconId; className?: string }) {
  if (name === 'x')
    return (
      <svg
        className={`icon ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M4 3h4l12 18h-4L4 3Zm16 0L4 21" />
      </svg>
    );
  if (name === 'instagram')
    return (
      <svg
        className={`icon ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
      </svg>
    );
  if (name === 'youtube')
    return (
      <svg
        className={`icon ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    );
  const Component = icons[name];
  return <Component className={`icon ${className}`} strokeWidth={1.7} aria-hidden="true" />;
}
