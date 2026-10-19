import { useState } from 'react';
import { Phone, Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { CONTACT_DATA, getCustomMailtoUrl, getCustomWhatsappUrl } from '../data/contactInfo';

export default function ContactSection({ onCopy, copiedKey }) {
  const { ragul, sarvesh } = CONTACT_DATA.founders;
  const { email } = CONTACT_DATA;

  // Form State for client-side mailto / WhatsApp generator
  const [formData, setFormData] = useState({
    name: '',
    projectType: 'Corporate Website',
    timeframe: 'Ready to start immediately',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const customSubject = `Website Development Enquiry - ${formData.projectType}${
    formData.name ? ` from ${formData.name}` : ''
  }`;

  const customBody = `Hello StruxureWeb Team,\n\nI would like to discuss a new website project.\n\nClient Name: ${
    formData.name || 'Not specified'
  }\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeframe}\n\nProject Details & Goals:\n${
    formData.notes || 'Looking forward to scheduling an introductory call or chat.'
  }\n\nBest regards,\n${formData.name || 'A Website Inquirer'}`;

  const dynamicMailto = getCustomMailtoUrl({
    subject: customSubject,
    body: customBody,
  });

  const dynamicWaText = `Hi StruxureWeb, my name is ${formData.name || 'Visitor'}. I'm interested in discussing a ${formData.projectType} (${formData.timeframe}). Details: ${formData.notes || 'Looking forward to speaking with you.'}`;

  const dynamicWaRagul = getCustomWhatsappUrl(ragul.whatsappNumber, dynamicWaText);
  const dynamicWaSarvesh = getCustomWhatsappUrl(sarvesh.whatsappNumber, dynamicWaText);

  return (
    <section className="section-wrapper contact-hub-wrapper" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Direct Contact Hub</div>
          <h2 className="section-title">Get In Touch With StruxureWeb</h2>
          <p className="section-description">
            Connect directly with our founders for all project inquiries, technical consultations,
            and collaborations. All direct communication channels are centralized right here.
          </p>
        </div>

        {/* Centralized Full Contact Cards */}
        <div className="contact-main-grid">
          {/* Card 1: Ragul */}
          <div className="contact-founder-box" id="contact-card-ragul">
            <div className="contact-card-top">
              <div className="founder-avatar-badge avatar-ragul">R</div>
              <div>
                <h3 className="contact-person-name">{ragul.name}</h3>
                <span className="contact-person-role">Co-Founder & Lead Engineer</span>
              </div>
            </div>

            <div className="contact-detail-line">
              <span className="contact-label">Direct Phone:</span>
              <span className="contact-value-mono">8015161780</span>
              <button
                type="button"
                className={`copy-btn ${copiedKey === 'phone-ragul-contact' ? 'copied' : ''}`}
                onClick={() =>
                  onCopy('8015161780', 'phone-ragul-contact', "Ragul's phone number copied")
                }
                title="Copy phone number"
                id="contact-copy-ragul"
              >
                {copiedKey === 'phone-ragul-contact' ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedKey === 'phone-ragul-contact' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-action-row">
              <a
                href={ragul.phoneTel}
                className="contact-btn btn-call-solid"
                id="contact-call-ragul"
              >
                <Phone size={15} />
                <span>Call Ragul</span>
              </a>
              <a
                href={ragul.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn btn-whatsapp-solid"
                id="contact-whatsapp-ragul"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Ragul</span>
              </a>
            </div>
          </div>

          {/* Card 2: Sarvesh */}
          <div className="contact-founder-box" id="contact-card-sarvesh">
            <div className="contact-card-top">
              <div className="founder-avatar-badge avatar-sarvesh">S</div>
              <div>
                <h3 className="contact-person-name">{sarvesh.name}</h3>
                <span className="contact-person-role">Co-Founder & Product Architect</span>
              </div>
            </div>

            <div className="contact-detail-line">
              <span className="contact-label">Direct Phone:</span>
              <span className="contact-value-mono">97903 30776</span>
              <button
                type="button"
                className={`copy-btn ${copiedKey === 'phone-sarvesh-contact' ? 'copied' : ''}`}
                onClick={() =>
                  onCopy('9790330776', 'phone-sarvesh-contact', "Sarvesh's phone number copied")
                }
                title="Copy phone number"
                id="contact-copy-sarvesh"
              >
                {copiedKey === 'phone-sarvesh-contact' ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedKey === 'phone-sarvesh-contact' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-action-row">
              <a
                href={sarvesh.phoneTel}
                className="contact-btn btn-call-solid"
                id="contact-call-sarvesh"
              >
                <Phone size={15} />
                <span>Call Sarvesh</span>
              </a>
              <a
                href={sarvesh.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn btn-whatsapp-solid"
                id="contact-whatsapp-sarvesh"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Sarvesh</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="contact-founder-box email-box" id="contact-card-email">
            <div className="contact-card-top">
              <div className="founder-avatar-badge avatar-email">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="contact-person-name">General Enquiries</h3>
                <span className="contact-person-role">Official Project Inbox</span>
              </div>
            </div>

            <div className="contact-detail-line">
              <span className="contact-label">Official Email:</span>
              <span className="contact-value-mono">{email.address}</span>
              <button
                type="button"
                className={`copy-btn ${copiedKey === 'email-contact' ? 'copied' : ''}`}
                onClick={() =>
                  onCopy(email.address, 'email-contact', 'Email address copied')
                }
                title="Copy email address"
                id="contact-copy-email"
              >
                {copiedKey === 'email-contact' ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedKey === 'email-contact' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-action-row">
              <a
                href={email.mailto}
                className="contact-btn btn-email-solid"
                id="contact-email-btn"
                style={{ width: '100%' }}
              >
                <Mail size={15} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Project Enquiry Composer (100% Frontend Only) */}
        <div className="inquiry-composer-box" id="inquiry-composer" style={{ marginTop: '3.5rem' }}>
          <div className="composer-header">
            <h3 className="composer-title">Quick Project Brief Composer</h3>
            <p className="composer-desc">
              Draft your project details below to automatically generate a pre-filled email or WhatsApp message
              with zero backend or database required.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="composer-form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="client-name">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  id="client-name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Alex Morgan / Acme Inc"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="project-type">
                  Project Type
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  className="form-select"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="Corporate Website">Corporate & Business Website</option>
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="Landing Page & Conversions">High-Converting Landing Page</option>
                  <option value="Speed & Architecture Overhaul">Speed & Architecture Overhaul</option>
                  <option value="Other Digital Project">Other Digital Initiative</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="project-notes">
                  Project Summary & Requirements
                </label>
                <textarea
                  id="project-notes"
                  name="notes"
                  className="form-textarea"
                  placeholder="Briefly describe what you would like to achieve or any specific references..."
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="composer-actions-bar">
              <div className="composer-actions-note">
                Directly opens your default email application or WhatsApp.
              </div>
              <div className="composer-actions-buttons">
                {/* Send via Email App */}
                <a
                  href={dynamicMailto}
                  className="contact-btn btn-email-solid"
                  id="composer-send-email"
                >
                  <Mail size={16} />
                  <span>Open in Email App</span>
                </a>

                {/* Send via WhatsApp to Ragul */}
                <a
                  href={dynamicWaRagul}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn btn-whatsapp"
                  id="composer-send-wa-ragul"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Ragul</span>
                </a>

                {/* Send via WhatsApp to Sarvesh */}
                <a
                  href={dynamicWaSarvesh}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn btn-whatsapp"
                  id="composer-send-wa-sarvesh"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Sarvesh</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
