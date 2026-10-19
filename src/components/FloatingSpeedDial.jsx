import { useState } from 'react';
import { Phone, Mail, MessageSquare, X, Headset } from 'lucide-react';
import { CONTACT_DATA } from '../data/contactInfo';

export default function FloatingSpeedDial() {
  const [isOpen, setIsOpen] = useState(false);
  const { ragul, sarvesh } = CONTACT_DATA.founders;
  const { email } = CONTACT_DATA;

  return (
    <aside className="floating-fab-container" aria-label="Quick Contact Actions">
      {isOpen && (
        <div className="fab-menu" role="menu" id="fab-actions-menu">
          {/* Call Ragul */}
          <a
            href={ragul.phoneTel}
            className="fab-item-link call-ragul"
            id="fab-call-ragul"
            role="menuitem"
            title={`Call Ragul (${ragul.phoneDisplay})`}
            onClick={() => setIsOpen(false)}
          >
            <Phone size={16} color="var(--phone-color)" />
            <span>Call Ragul</span>
          </a>

          {/* Call Sarvesh */}
          <a
            href={sarvesh.phoneTel}
            className="fab-item-link call-sarvesh"
            id="fab-call-sarvesh"
            role="menuitem"
            title={`Call Sarvesh (${sarvesh.phoneDisplay})`}
            onClick={() => setIsOpen(false)}
          >
            <Phone size={16} color="var(--phone-color)" />
            <span>Call Sarvesh</span>
          </a>

          {/* WhatsApp Ragul */}
          <a
            href={ragul.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fab-item-link whatsapp-ragul"
            id="fab-whatsapp-ragul"
            role="menuitem"
            title="WhatsApp Ragul"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare size={16} color="var(--whatsapp-color)" />
            <span>WhatsApp Ragul</span>
          </a>

          {/* WhatsApp Sarvesh */}
          <a
            href={sarvesh.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fab-item-link whatsapp-sarvesh"
            id="fab-whatsapp-sarvesh"
            role="menuitem"
            title="WhatsApp Sarvesh"
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare size={16} color="var(--whatsapp-color)" />
            <span>WhatsApp Sarvesh</span>
          </a>

          {/* Email Us */}
          <a
            href={email.mailto}
            className="fab-item-link email-us"
            id="fab-email-us"
            role="menuitem"
            title={`Email ${email.address}`}
            onClick={() => setIsOpen(false)}
          >
            <Mail size={16} color="var(--email-color)" />
            <span>Email Us</span>
          </a>
        </div>
      )}

      {/* Main FAB Toggle Button */}
      <button
        type="button"
        className={`fab-main-trigger ${isOpen ? 'active' : ''}`}
        id="fab-toggle-trigger"
        aria-expanded={isOpen}
        aria-controls="fab-actions-menu"
        aria-label={isOpen ? 'Close contact menu' : 'Open quick contact options'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={24} /> : <Headset size={26} />}
      </button>
    </aside>
  );
}
