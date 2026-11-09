import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="red-rule" />
          {eyebrow}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
      {action}
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="page-heading site-container">
      <p className="eyebrow">
        <span className="red-rule" />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </div>
  );
}
