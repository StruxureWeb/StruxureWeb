import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import FoundersSection from './components/FoundersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key, successMsg) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => triggerToast(key, successMsg))
        .catch(() => fallbackCopy(text, key, successMsg));
    } else {
      fallbackCopy(text, key, successMsg);
    }
  };

  const fallbackCopy = (text, key, successMsg) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      triggerToast(key, successMsg);
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const triggerToast = (key, msg) => {
    setCopiedKey(key);
    setToastMessage(msg || 'Copied to clipboard!');
    setTimeout(() => {
      setToastMessage(null);
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <div className="struxureweb-app">
      {/* Top Navbar with Single 'Contact Us' button */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section: 'Discuss Your Project' & 'View Our Work' buttons */}
        <Hero />

        {/* Services Section: No phone numbers or emails */}
        <ServicesSection />

        {/* Portfolio Section: Case studies with 'Discuss a Similar Project' */}
        <PortfolioSection />

        {/* About Founders Section: Founders' names without repeating contact details */}
        <FoundersSection />

        {/* Dedicated Contact Section: Full contact information in one clear section */}
        <ContactSection onCopy={handleCopy} copiedKey={copiedKey} />
      </main>

      {/* Footer: Minimal contact info with Contact link and compact icons */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-container" role="status" aria-live="polite">
          <div className="toast-message">
            <Check size={18} color="var(--whatsapp-color)" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
