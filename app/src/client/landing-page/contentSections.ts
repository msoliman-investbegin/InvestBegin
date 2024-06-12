import { DOCS_URL, BLOG_URL, YouTube_InvestBegin, FB_InvestBegin } from '../../shared/constants';
import daBoiAvatar from '../static/da-boi.png';
import avatarPlaceholder from '../static/avatar-placeholder.png';
import { FaYoutube, FaFacebook, FaFileAlt } from 'react-icons/fa'; // Import necessary icons

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: DOCS_URL },
  { name: 'Blog', href: BLOG_URL },
];
export const features = [
  {
    name: 'Cool Feature #1',
    description: 'Konstenlose Beratung (no fees at all)',
    icon: '🤝',
    href: DOCS_URL,
  },
  {
    name: 'Cool Feature #2',
    description: 'Datenschutz (Deine Datei sind verschlüselt gespeichert)',
    icon: '🔐',
    href: DOCS_URL,
  },
  {
    name: 'Cool Feature #3',
    description: '24/7 kundenberatung (all-time available support)',
    icon: '🥞',
    href: DOCS_URL,
  },
  {
    name: 'Cool Feature #4',
    description: 'Mehrsprachig (Supports Deutsch, English and more)',
    icon: '💸',
    href: DOCS_URL,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'What are Stocks and how to make online money?',
    answer: '1.',
    href: 'https://www.investopedia.com/terms/s/stock.asp',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DOCS_URL },
    { name: 'Blog', href: BLOG_URL },
  ],
  company: [
    { name: 'Watch us on Youtube', href: YouTube_InvestBegin, icon: FaYoutube },
    { name: 'Follow us on FaceBook', href: FB_InvestBegin, icon: FaFacebook },
    { name: 'Terms of Service', href: '#', icon: FaFileAlt },
  ],
};
