import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../data/contactInfo';

export default function Footer() {
  const { email } = CONTACT_DATA;

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid-minimal">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="brand-logo-wrap">
              <div className="brand-icon-box">S</div>
              <span className="brand-name">StruxureWeb</span>
            </div>
            <p className="footer-brand-desc">
              High-impact modern web engineering and digital architecture crafted by founders
              Ragul & Sarvesh.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services" className="footer-link-item">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-link-item">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link-item">
                  About Founders
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Minimal Contact Column (No raw numbers/email printed) */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <p className="footer-brand-desc" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              Speak directly with our engineering team for inquiries and project estimates.
            </p>

            <div className="footer-contact-minimal-box">
              <a
                href="#contact"
                className="contact-btn btn-primary btn-sm"
                id="footer-contact-link"
              >
                <span>Contact Us</span>
                <ArrowRight size={14} />
              </a>

              {/* Compact Quick Action Icons */}
              <div className="footer-compact-icons">
                <a
                  href="#contact"
                  className="footer-icon-btn"
                  id="footer-icon-phone"
                  title="Phone lines available in Contact Section"
                  aria-label="Direct Phone Calls"
                >
                  <Phone size={16} />
                </a>

                <a
                  href="#contact"
                  className="footer-icon-btn"
                  id="footer-icon-whatsapp"
                  title="WhatsApp channels available in Contact Section"
                  aria-label="WhatsApp Chats"
                >
                  <MessageSquare size={16} />
                </a>

                <a
                  href={email.mailto}
                  className="footer-icon-btn"
                  id="footer-icon-mail"
                  title="Send us an email"
                  aria-label="Email Us"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; 2026 StruxureWeb. All rights reserved. Founded by Sarvesh & Ragul.
          </div>
          <div className="footer-legal-note">
            Built with modern React & Vanilla CSS architecture. Frontend-only.
          </div>
        </div>
      </div>
    </footer>
  );
}
