import { Code2, Compass, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../data/contactInfo';

export default function FoundersSection() {
  const { ragul, sarvesh } = CONTACT_DATA.founders;

  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Leadership & Architectural Vision</div>
          <h2 className="section-title">Meet The Founders</h2>
          <p className="section-description">
            StruxureWeb was founded on a simple principle: high-impact web development
            delivered directly by engineering architects, without layers of middlemen or bureaucracy.
          </p>
        </div>

        <div className="founders-grid">
          {/* Ragul's Profile Card (No contact details repeated) */}
          <div className="founder-card ragul" id="founder-card-ragul">
            <div className="founder-header">
              <div className="founder-avatar-lg avatar-ragul">R</div>
              <div className="founder-info">
                <h3 className="founder-name">{ragul.name}</h3>
                <div className="founder-role">{ragul.role}</div>
                <div className="founder-title">{ragul.title}</div>
              </div>
            </div>

            <p className="founder-bio">
              Ragul spearheads full-stack frontend architecture, performance engineering,
              and code resilience. With deep expertise in modular JavaScript frameworks,
              component lifecycle optimization, and accessible design systems, Ragul ensures
              every application is robust, scalable, and blisteringly fast.
            </p>

            <div className="founder-skills-list">
              <span className="skill-badge">Frontend Architecture</span>
              <span className="skill-badge">React & Vite</span>
              <span className="skill-badge">Performance Tuning</span>
              <span className="skill-badge">State Engineering</span>
            </div>

            <div className="founder-quote-box">
              <Code2 size={16} />
              <span>"Speed, simplicity, and maintainability are the cornerstones of lasting web software."</span>
            </div>
          </div>

          {/* Sarvesh's Profile Card (No contact details repeated) */}
          <div className="founder-card sarvesh" id="founder-card-sarvesh">
            <div className="founder-header">
              <div className="founder-avatar-lg avatar-sarvesh">S</div>
              <div className="founder-info">
                <h3 className="founder-name">{sarvesh.name}</h3>
                <div className="founder-role">{sarvesh.role}</div>
                <div className="founder-title">{sarvesh.title}</div>
              </div>
            </div>

            <p className="founder-bio">
              Sarvesh drives product architecture, digital solutions strategy, and user
              experience design. Focusing on how users think, browse, and decide, Sarvesh crafts
              digital customer journeys that turn casual visitors into committed, long-term clients.
            </p>

            <div className="founder-skills-list">
              <span className="skill-badge">Solutions Architecture</span>
              <span className="skill-badge">UX & Information Flow</span>
              <span className="skill-badge">Conversion Strategy</span>
              <span className="skill-badge">Digital Roadmap</span>
            </div>

            <div className="founder-quote-box">
              <Compass size={16} />
              <span>"Great design isn't just how a website looks—it's how effortlessly it guides action."</span>
            </div>
          </div>
        </div>

        {/* Clean invitation link to the dedicated contact section */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="#contact"
            className="contact-btn btn-secondary"
            id="about-connect-cta"
          >
            <span>Have a project in mind? Reach out to our team</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
