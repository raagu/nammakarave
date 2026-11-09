import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pillars } from '../content/site';
import { useLanguage } from '../i18n/context';
import { Icon } from './Icon';
import { Modal } from './Modal';
import { SectionHeading } from './SectionHeading';

export function Pillars() {
  const { t, localize } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const pillar = pillars.find((item) => item.id === selected);
  return (
    <section className="section pillars-section" id="pillars" aria-labelledby="pillars-title">
      <div className="site-container">
        <SectionHeading
          id="pillars-title"
          eyebrow={t('pillarsEyebrow')}
          title={t('pillarsTitle')}
          description={t('pillarsIntro')}
        />
        <div className="pillars-grid">
          {pillars.map((item) => (
            <button
              type="button"
              className="pillar-card group"
              onClick={() => setSelected(item.id)}
              key={item.id}
            >
              <div className="pillar-top">
                <span className="pillar-icon">
                  <Icon name={item.icon} />
                </span>
                <span className="pillar-number">{item.number}</span>
              </div>
              <span className="pillar-tag">{localize(item.tag)}</span>
              <h3>{localize(item.title)}</h3>
              <p>{localize(item.short)}</p>
              <span className="pillar-bottom">
                <span>{t('learnMore')}</span>
                <Icon name="upRight" />
              </span>
            </button>
          ))}
        </div>
      </div>
      {pillar && (
        <Modal
          titleId="pillar-modal-title"
          descriptionId="pillar-modal-description"
          className="pillar-dialog"
          onClose={() => setSelected(null)}
        >
          <div className="pillar-modal-content">
            <span className="pillar-icon">
              <Icon name={pillar.icon} />
            </span>
            <p className="eyebrow">{localize(pillar.tag)}</p>
            <h2 id="pillar-modal-title">{localize(pillar.title)}</h2>
            <p id="pillar-modal-description">{localize(pillar.description)}</p>
            <Link className="button button-yellow" to="/about" onClick={() => setSelected(null)}>
              {t('navAbout')}
              <Icon name="upRight" />
            </Link>
          </div>
        </Modal>
      )}
    </section>
  );
}
