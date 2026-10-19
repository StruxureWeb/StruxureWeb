import { Layout, Globe, Smartphone, Gauge, Layers, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'web-apps',
      icon: <Layout size={24} />,
      title: 'Custom Web Applications',
      description:
        'Tailored, single-page and progressive web applications engineered with modern JavaScript architectures for maximum scalability and speed.',
      features: [
        'Component-driven architecture',
        'Intuitive client-side state',
        'Fast and seamless data flow',
        'Cross-platform responsiveness',
      ],
    },
    {
      id: 'corporate-sites',
      icon: <Globe size={24} />,
      title: 'Corporate & Brand Portals',
      description:
        'Sleek, brand-defining corporate websites that establish authority, captivate high-value clients, and drive inbound business conversions.',
      features: [
        'Bespoke visual branding',
        'Enterprise-grade presentation',
        'Built-in SEO architecture',
        'High conversion copy flow',
      ],
    },
    {
      id: 'mobile-first',
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Responsive UI',
      description:
        'Flawless user experiences across phones, tablets, laptops, and ultra-wide desktop monitors with precision touch interactions.',
      features: [
        'Fluid adaptive layouts',
        'Tactile mobile micro-interactions',
        'Retina and high-DPI clarity',
        'Optimized touch targets',
      ],
    },
    {
      id: 'performance',
      icon: <Gauge size={24} />,
      title: 'Speed & Core Web Vitals',
      description:
        'Performance audits and radical speed optimization that push your site to sub-second load times and top search ranking performance.',
      features: [
        '90+ Lighthouse score benchmarks',
        'Asset optimization & lazy loading',
        'Zero layout shifts (CLS)',
        'Instant first contentful paint',
      ],
    },
    {
      id: 'interactive-ui',
      icon: <Layers size={24} />,
      title: 'Interactive User Interfaces',
      description:
        'Dynamic client-side features, custom interactive visualizers, calculators, and state-of-the-art animations that set you apart.',
      features: [
        'Smooth CSS animations & transitions',
        'Client-side state management',
        'Accessible WCAG compliant code',
        'Clean maintainable codebases',
      ],
    },
    {
      id: 'modern-redesign',
      icon: <Sparkles size={24} />,
      title: 'Modern Web Overhaul',
      description:
        'Transform outdated legacy websites into modern, hyper-responsive digital masterpieces that immediately boost visitor trust.',
      features: [
        'Complete visual transformation',
        'Modern code modernization',
        'Preserved SEO equity',
        'Fast turnaround execution',
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Capabilities & Expertise</div>
          <h2 className="section-title">What We Build At StruxureWeb</h2>
          <p className="section-description">
            We focus on clean, high-performance web development. Every line of code is
            handcrafted to ensure speed, accessibility, and an unforgettable user experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id} id={`service-${service.id}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feat, i) => (
                  <li className="service-feature-item" key={i}>
                    <Check size={14} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="service-action-link"
                id={`service-cta-${service.id}`}
              >
                <span>Inquire about this capability</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
