import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo-wrap" id="nav-brand-logo">
          <div className="brand-icon-box">S</div>
          <div className="brand-text-box">
            <span className="brand-name">StruxureWeb</span>
            <div className="brand-status">
              <span className="status-dot"></span>
              <span>Available for Projects</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            <li>
              <a href="#services" className="nav-link" id="nav-link-services">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link" id="nav-link-portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" id="nav-link-about">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" id="nav-link-contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Header: Single Contact Us Button */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="contact-btn btn-primary btn-sm"
            id="header-contact-btn"
          >
            <span>Contact Us</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          className="hamburger-btn"
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            <div className="mobile-drawer-header">
              <div className="brand-logo-wrap">
                <div
                  className="brand-icon-box"
                  style={{ width: 34, height: 34, fontSize: '1rem' }}
                >
                  S
                </div>
                <span className="brand-name" style={{ fontSize: '1.2rem' }}>
                  StruxureWeb
                </span>
              </div>
              <button
                type="button"
                className="hamburger-btn"
                style={{ width: 36, height: 36 }}
                id="mobile-drawer-close"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              <li>
                <a
                  href="#hero"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Single Contact Button */}
            <div className="mobile-contact-group">
              <a
                href="#contact"
                className="contact-btn btn-primary"
                id="mobile-contact-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
