import { ArrowRight, Layers, Zap, ShieldCheck, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content">
        {/* Section Pill Badge */}
        <div className="hero-badge-wrap">
          <Zap size={15} />
          <span>Next-Gen Web Architecture & Development</span>
        </div>

        {/* Primary Page Heading */}
        <h1 className="hero-title">
          Engineering High-Impact Modern Websites & Digital Architecture
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          StruxureWeb builds bespoke, high-performance web applications and modern
          corporate platforms designed to scale your business. Crafted by founders
          Ragul & Sarvesh for speed, elegance, and conversion.
        </p>

        {/* Hero Actions Bar: Exactly "Discuss Your Project" and "View Our Work" */}
        <div className="hero-actions-container" style={{ marginBottom: '3.5rem' }}>
          <div className="hero-buttons-grid">
            <a
              href="#contact"
              className="contact-btn btn-primary btn-lg"
              id="hero-discuss-btn"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="contact-btn btn-secondary btn-lg"
              id="hero-view-work-btn"
            >
              <Layers size={18} />
              <span>View Our Work</span>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-metrics-bar">
          <div className="metric-card">
            <div className="metric-icon-wrap">
              <Users size={20} />
            </div>
            <div className="metric-title">Direct Leadership</div>
            <div className="metric-desc">
              Work directly with founders Ragul & Sarvesh on architecture and design.
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap">
              <Clock size={20} />
            </div>
            <div className="metric-title">Rapid Response</div>
            <div className="metric-desc">
              Dedicated communication and quick turnaround on inquiries and milestones.
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap">
              <Zap size={20} />
            </div>
            <div className="metric-title">Ultra-Fast Delivery</div>
            <div className="metric-desc">
              Optimized codebases delivering 95+ Google Lighthouse scores and smooth UX.
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap">
              <ShieldCheck size={20} />
            </div>
            <div className="metric-title">Production Quality</div>
            <div className="metric-desc">
              Robust frontend architecture built for resilience, accessibility, and scalability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
