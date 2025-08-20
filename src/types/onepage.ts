// TypeScript interfaces for P0STMAN One-Pager content and contact data

export interface ContactCTA {
  label: string;
  action: () => void;
  icon: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export interface ContactInfo {
  email: string;
  whatsapp: {
    number: string;
    displayNumber: string;
    message?: string;
  };
  linkedin?: string;
}

export interface Logo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  socialProof: string[];
}

export interface ServiceCard {
  title: string;
  description: string;
  features: string[];
  badge?: string;
  prominence: 'primary' | 'secondary';
}

export interface ServicesContent {
  primaryService: ServiceCard;
  complementaryService: ServiceCard;
}

export interface ProjectMockup {
  id: string;
  title: string;
  image: string;
  category: 'web' | 'mobile' | 'ai' | 'dashboard';
  animationDelay: number;
}

export interface CapabilityChip {
  id: string;
  label: string;
  category: string;
}

export interface ShowcaseContent {
  mockups: ProjectMockup[];
  capabilities: CapabilityChip[];
  animationTrigger: 'scroll' | 'hover' | 'auto';
}

export interface OutcomesContent {
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface CredibilityContent {
  experience: string;
  highlights: string[];
  testimonials?: {
    quote: string;
    author: string;
    company: string;
  }[];
}

export interface ContactContent {
  finalCTA: {
    headline: string;
    description: string;
  };
  methods: ContactInfo;
}

export interface PageContent {
  hero: HeroContent;
  services: ServicesContent;
  showcase: ShowcaseContent;
  outcomes: OutcomesContent;
  credibility: CredibilityContent;
  contact: ContactContent;
}

export interface MetaData {
  title: string;
  description: string;
  ogImage: string;
  ogType: 'website';
  twitterCard: 'summary_large_image';
  canonicalUrl: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  emailCTA: ContactCTA;
  whatsappCTA: ContactCTA;
  socialProofLogos: Logo[];
}

export interface ServicesProps {
  primaryService: ServiceCard;
  complementaryService: ServiceCard;
}

export interface ShowcaseProps {
  mockups: ProjectMockup[];
  capabilities: CapabilityChip[];
  animationTrigger: 'scroll' | 'hover' | 'auto';
}