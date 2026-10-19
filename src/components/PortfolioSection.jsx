import { MapPin, ArrowRight, Eye } from 'lucide-react';

export default function PortfolioSection() {
  const realProjects = [
    {
      id: 'gym-management-application',
      name: 'Gym Management Application',
      location: 'Kangeyam, Tamil Nadu',
      status: 'Developed & Deployed',
      description:
        'A custom gym application developed and deployed to support the digital needs of a gym business in Kangeyam.',
    },
    {
      id: 'real-estate-construction',
      name: 'Real Estate & Construction Business Website',
      location: 'Vellode, Tamil Nadu',
      status: 'Developed & Deployed',
      description:
        'A professional business website developed and deployed for real estate and construction building services in Vellode.',
    },
    {
      id: 'nsp-mahal',
      name: 'NSP Mahal — Commercial Website',
      location: 'Muthur, Tamil Nadu',
      status: 'Developed & Deployed',
      description:
        'A commercial website developed and deployed for NSP Mahal in Muthur, establishing its online presence.',
    },
  ];

  return (
    <section className="section-wrapper" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Real Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore verified projects engineered and delivered by StruxureWeb.
          </p>
        </div>

        <div className="portfolio-grid-three">
          {realProjects.map((project) => (
            <div
              className="portfolio-card"
              key={project.id}
              id={`portfolio-${project.id}`}
            >
              {/* Elegant CSS Placeholder (No fake/stock images) */}
              <div className="portfolio-preview-placeholder">
                <div className="preview-placeholder-inner">
                  <Eye size={22} className="placeholder-icon" />
                  <span className="placeholder-text">Project preview coming soon.</span>
                </div>
              </div>

              <div className="portfolio-content-body">
                {/* Meta Bar: Location & Optional Status */}
                <div className="portfolio-meta-bar">
                  <div className="portfolio-location-badge">
                    <MapPin size={13} />
                    <span>{project.location}</span>
                  </div>

                  {project.status && (
                    <div className="portfolio-deployed-badge">
                      <span className="status-dot"></span>
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>

                <h3 className="portfolio-title">{project.name}</h3>
                <p className="portfolio-description">{project.description}</p>

                {/* Optional "Discuss a Similar Project" Button */}
                <div className="portfolio-action-row">
                  <a
                    href="#contact"
                    className="contact-btn btn-secondary btn-sm"
                    id={`portfolio-discuss-${project.id}`}
                    title={`Discuss a similar project with StruxureWeb`}
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
