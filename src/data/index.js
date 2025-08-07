import terms from './terms';
import termsEs from './termsEs';
import privacy from './privacy';
import privacyEs from './privacyEs';
import cookies from './cookies';

export const navData = {
  links: [{ href: '#comisiones', title: 'Comisiones' }],
  button: { href: '#comisiones', title: 'Comisiones' },
};

export const faqData = {
  title: 'Frequently Questioned Answers',
  data: [
    {
      question: 'What is KLU USA?',
      answer:
        'KLU USA is a global Fintech designed specifically for immigrants. With KLU USA you can keep, spend, and share your money all within one simple app. KLU USA is a financial technology company, not a bank. Banking services provided by XXXXX, member FDIC. KLU USA is a financial technology company, not a bank. Banking services provided by XXXXX, member FDIC.',
    },
    {
      question: 'Is KLU USA for immigrants only?',
      answer:
        'KLU USA’s features and benefits are specifically designed for immigrants, however all residents of the United States over 18 can sign up as well. We welcome everybody.',
    },
    {
      question: 'Will it affect my credit score?',
      answer:
        'No, we do not check your credit score to open an account and being an account holder does not help build your credit score. However, if you set up a direct deposit to your KLU USA account and use the benefits. ',
    },
    {
      question: 'Are there really no fees?',
      answer:
        'Really, no fees! We don’t charge any of the usual fees for minimum balance, overdraft, maintenance, ATM withdrawal (from 55,000+ Allpoint ®️ ATMs), transfers, service charges, card issues, etc. When you choose KLU USA as your primary bank account and set up direct deposit from your payroll provider, you get even more benefits.',
    },
    {
      question: 'What information do you need to create an account?',
      answer:
        'When you sign up, we’ll ask for your phone number, birthday, residential address, and Social Security Number. If you don’t have a Social Security Number, you can provide your Tax Identification Number (TIN).',
    },
    {
      question: 'How long does it take to open an account?',
      answer:
        'Signing up usually takes less than 5 minutes it may take longer depending on how quickly we can verify your identity.',
    },
    {
      question: 'Can I use KLU USA outside the United States?',
      answer:
        'Yes! you can use the KLU USA debit card and app outside of the U. S. but the account itself is US-based and you must reside in the United States to open an account.',
    },
  ],
};

export const footerData = {
  rightsReserved: '© 2025 Klu Peru.',
  links: [
    // { href: '/faqs', title: 'FAQs' },
    // { href: '/legal', title: 'Legal' },
    // { href: '#security', title: 'Security' },
  ],
  icons: [
    // { href: '#', icon: '/images/social-ig.svg', name: 'Instagram' },
    // { href: '#', icon: '/images/social-fb.svg', name: 'Facebook' },
    // { href: '#', icon: '/images/social-tw.svg', name: 'Twitter' },
    // { href: '#', icon: '/images/social-in.svg', name: 'LinkedIn' },
  ],
  address: '',
  email: 'contact@klu.pe',
  disclaimerTitle: '',
  disclaimers: 'KLU Peru.',
};

export const downloadAppData = {
  title: 'Open your Klu Account today',
  description: 'Download the app and start enjoying the benefits',
  buttons: [
    {
      href: '#',
      icon: '/images/app-store.svg',
      name: 'App Store',
      titleTop: 'Download on the',
      titleBottom: 'App Store',
    },
    {
      href: '#',
      icon: '/images/play-store.svg',
      name: 'Play Store',
      titleTop: 'Android App on',
      titleBottom: 'Google Play',
    },
  ],
};

export const mainLandingData = {
  hero: {
    title:
      'La Infraestructura de Pagos que Potencia a los Innovadores del Perú.',
    description:
      'Somos el motor de adquirencia que necesitan los agregadores, fintechs y grandes empresas para procesar pagos de forma segura, escalable y eficiente.',
    button: { href: '#download-app', title: 'Download App' },
  },
  cardsSection: {
    title: 'A card design for you',
    description:
      'With the Klu USA card, your purchases become even more convenient. Gain access to exclusive discounts, special promotions, and a hassle-free shopping experience, along with the option to transfer money to your family members. Discover a new level of convenience with Klu USA!',
    button: { href: '#', title: 'Go premium with metal' },
  },
  join: {
    title: 'Join Klu USA',
    description: 'Open your account in less than 48 hrs',
  },
  benefits: {
    title: 'Beneficios',
    features: [
      'Conexión Directa y Mayor Eficiencia',
      'Escalabilidad y Confiabilidad Garantizada',
      'Flexibilidad para Innovar con Tu Propia Marca',
      'Máxima Seguridad y Cumplimiento Normativo',
    ],
  },
};

export const aboutUsPageData = {
  hero: {
    title:
      'We’re a global fintech company that’s making banking more accessible',
    description:
      ' Few banking services have the power to link people across the globe. We created MOMENTO to connect you with your family and friends near and far from the convenience of your smartphone - for little to no cost.',
    link: { href: '#', title: 'Bank where your best interests matter' },
  },
  cardsSection: {
    title: 'We’re helping you save more and worry less',
    description:
      'Klu - usa saves people money through its free banking app and debit card. By taking fees and minimum balances out of the equation, we’re making banking affordable for everyone, everywhere.',
  },
};

export const legalData = {
  tabs: [
    'Terms and conditions',
    'Privacy Policy',
    'Cookies Policy',
    'Terminos y condiciones',
    'Politicas de privacidad',
  ],
  terms,
  privacy,
  cookies,
  termsEs,
  privacyEs,
};
