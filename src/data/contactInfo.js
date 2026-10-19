export const CONTACT_DATA = {
  brand: {
    name: 'StruxureWeb',
    tagline: 'High-Impact Modern Web Development & Architecture',
    description:
      'We craft high-performance, responsive, and visually stunning digital experiences tailored to scale your brand.',
  },
  founders: {
    ragul: {
      name: 'Ragul',
      role: 'Co-Founder & Lead Engineer',
      title: 'Full-Stack Architecture & Systems',
      phoneDisplay: '+91 80151 61780',
      phoneRaw: '+918015161780',
      phoneTel: 'tel:+918015161780',
      whatsappNumber: '918015161780',
      whatsappUrl:
        'https://wa.me/918015161780?text=Hi%20StruxureWeb%2C%20I%27m%20interested%20in%20discussing%20a%20website%20project.',
      avatarInitial: 'R',
      status: 'Available for technical consultation',
    },
    sarvesh: {
      name: 'Sarvesh',
      role: 'Co-Founder & Product Architect',
      title: 'Digital Solutions & Strategy',
      phoneDisplay: '+91 97903 30776',
      phoneRaw: '+919790330776',
      phoneTel: 'tel:+919790330776',
      whatsappNumber: '919790330776',
      whatsappUrl:
        'https://wa.me/919790330776?text=Hi%20StruxureWeb%2C%20I%27m%20interested%20in%20discussing%20a%20website%20project.',
      avatarInitial: 'S',
      status: 'Available for project discovery',
    },
  },
  email: {
    address: 'struxurweb@gmail.com',
    defaultSubject: 'Website Development Enquiry',
    defaultBody:
      "Hi StruxureWeb Team,\n\nI am interested in discussing a website development project for my business.\n\nProject Overview:\n- Name/Company: \n- Target Timeline: \n- Key Goals: \n\nLooking forward to hearing from you!",
    mailto: 'mailto:struxurweb@gmail.com?subject=Website%20Development%20Enquiry',
  },
  defaultWhatsappMessage: "Hi StruxureWeb, I'm interested in discussing a website project.",
};

export function getCustomMailtoUrl({ subject, body } = {}) {
  const s = encodeURIComponent(subject || CONTACT_DATA.email.defaultSubject);
  const b = encodeURIComponent(body || CONTACT_DATA.email.defaultBody);
  return `mailto:${CONTACT_DATA.email.address}?subject=${s}&body=${b}`;
}

export function getCustomWhatsappUrl(number, message) {
  const text = encodeURIComponent(message || CONTACT_DATA.defaultWhatsappMessage);
  return `https://wa.me/${number}?text=${text}`;
}
