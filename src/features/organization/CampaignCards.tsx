import { Link } from 'react-router-dom';
import { campaigns, officialCopy as copy } from '../../content/official';
import { useLanguage } from '../../i18n/context';
import { Icon } from '../../components/Icon';

export function CampaignCards({ detailed = false }: { detailed?: boolean }) {
  const { localize } = useLanguage();
  return (
    <section className="section campaigns-section">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{localize(copy.campaignsEyebrow)}</p>
            <h2>{localize(detailed ? copy.campaignsDetailsTitle : copy.campaignsTitle)}</h2>
          </div>
          {!detailed && (
            <Link className="text-link" to="/campaigns">
              {localize(copy.allCampaigns)}
              <Icon name="arrow" />
            </Link>
          )}
        </div>
        <div className={`campaign-grid ${detailed ? 'campaign-grid-detailed' : ''}`}>
          {campaigns.map((campaign, index) => (
            <article key={campaign.id} className="campaign-card">
              <div className="campaign-top">
                <span className="purpose-icon">
                  <Icon name={campaign.icon} />
                </span>
                <span className="card-index">0{index + 1}</span>
              </div>
              <p className="eyebrow">{localize(campaign.category)}</p>
              <h3>{localize(campaign.title)}</h3>
              {detailed && <h4>{localize(copy.advocacy)}</h4>}
              <p>{localize(campaign.advocacy)}</p>
              {detailed ? (
                <>
                  <h4>{localize(copy.development)}</h4>
                  <p>{localize(campaign.development)}</p>
                </>
              ) : (
                <Link className="text-link" to="/campaigns">
                  {localize(copy.readMore)}
                  <Icon name="arrow" />
                </Link>
              )}
            </article>
          ))}
        </div>
        {detailed && <p className="editorial-note">{localize(copy.impactNote)}</p>}
      </div>
    </section>
  );
}
