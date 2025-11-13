import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Building2,
  Bot,
  Zap,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  Calendar,
  Smartphone,
  DollarSign,
  Target,
  Filter,
  Code,
  Award,
  Heart
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import CaseStudyModal from '../components/modals/CaseStudyModal';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

// All projects data
const allProjects = [
  // Enterprise Projects
  {
    id: 'fab',
    title: 'Enterprise Digital Transformation',
    company: 'First Abu Dhabi Bank',
    category: 'Banking & Finance',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/First-Abu-Dhabi-Bank-FAB-Logo.png',
    description: 'Started with Innovation Lab project that impressed multiple departments, leading to 18-month transformation with 40-50 experts across various departments.',
    challenge: 'FAB needed to modernize their digital infrastructure and create scalable, reusable systems across multiple departments while maintaining security and compliance standards.',
    solution: 'Built enterprise-grade platforms with unified design systems and code libraries. Established cross-functional teams and agile delivery processes to ensure consistent, high-quality output.',
    results: [
      'Scaled from 1 pilot project to 40+ person transformation team',
      'Delivered enterprise-grade platforms across multiple departments',
      'Created reusable design systems and unified code libraries',
      'Established one of the region\'s biggest digital transformations',
      'Improved development efficiency by 60% through standardization',
      'Successfully delivered 18 months of continuous innovation'
    ],
    metrics: [
      { label: 'Team Scale', value: '1→40', icon: <Users className="w-6 h-6" /> },
      { label: 'Duration', value: '18mo', icon: <Calendar className="w-6 h-6" /> },
      { label: 'Efficiency Gain', value: '60%', icon: <TrendingUp className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Node.js', 'Azure', 'Design Systems', 'Microservices', 'DevOps'],
    timeline: '18 months',
    teamSize: '40+ people',
    caseStudyUrl: '/case-study/fab-bank'
  },
  {
    id: 'al-arabiya',
    title: 'News Platform Redesign',
    company: 'Al Arabiya',
    category: 'Media & Broadcasting',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Al-Arabiya-Logo.png',
    description: 'Led international team of 20 to modernize leading news brand during COVID-19. Created personalized, customizable news experience from ground up.',
    challenge: 'Al Arabiya needed a modern, scalable news platform that could handle high traffic loads while providing a customizable, multi-platform experience during unprecedented global events.',
    solution: 'Led a global team through UX research, development, testing, and content delivery. Implemented a future-ready architecture with customizable components and multi-platform support.',
    results: [
      'Successfully delivered complete platform redesign during pandemic',
      'Led global team across multiple time zones and lockdowns',
      'Created future-ready, customizable multi-platform experience',
      'Achieved high user satisfaction and stakeholder approval',
      'Improved page load speeds by 40%',
      'Implemented real-time content management system'
    ],
    metrics: [
      { label: 'Load Speed', value: '+40%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Global Team', value: '15+', icon: <Users className="w-6 h-6" /> },
      { label: 'Platforms', value: 'Multi', icon: <Globe className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'CMS', 'CDN', 'Real-time APIs'],
    caseStudyUrl: '/case-study/al-arabiya',
    timeline: '8 months',
    teamSize: '15+ global team'
  },
  {
    id: 'etihad',
    title: 'Booking Flow Optimization',
    company: 'Etihad Airways',
    category: 'Travel & Aviation',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Etihad-Airways-Logo.png',
    description: 'Complete overhaul of Etihad Airways\' booking system, replacing legacy flows with a user-centered journey that delivered immediate, measurable results.',
    challenge: 'The existing booking flow was outdated, complex, and didn\'t match how customers actually wanted to book flights, resulting in high abandonment rates.',
    solution: 'Conducted user research to understand booking behaviors, then rebuilt the entire flow with a focus on simplicity, speed, and user intent matching.',
    results: [
      '25% increase in booking conversions overnight',
      'Reduced booking abandonment by 35%',
      'Improved user satisfaction scores by 40%',
      'Decreased support tickets related to booking issues',
      'Faster booking completion times',
      'Mobile-optimized experience with 60% mobile conversion improvement'
    ],
    metrics: [
      { label: 'Conversion', value: '+25%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Mobile Boost', value: '+60%', icon: <Smartphone className="w-6 h-6" /> },
      { label: 'Launch Time', value: '1 Day', icon: <Zap className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Node.js', 'Payment APIs', 'A/B Testing', 'Analytics', 'Mobile-First'],
    timeline: '4 months',
    teamSize: '8 people',
    caseStudyUrl: '/case-study/etihad-airways'
  },
  {
    id: 'doh-health',
    title: 'My Health Coach (DoH)',
    company: 'Department of Health Abu Dhabi',
    category: 'Government & Healthcare',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Government_of_Abu_Dhabi_Logo.svg/500px-Government_of_Abu_Dhabi_Logo.svg.png',
    description: 'Partnered with IBM to build standout health & fitness app for Abu Dhabi residents. Personalized wellness app integrating with Google Fit and Fitbit.',
    challenge: 'Build a standout health app for government that exceeds market standards while partnering with IBM.',
    solution: 'Suggested ambitious, innovative features to leapfrog existing market offerings with senior development team leadership.',
    results: [
      'Successfully launched standout health app for government',
      'Provided valuable wellness resource for Abu Dhabi residents',
      'Exceeded market standards in app development',
      'Integrated with major fitness platforms',
      'Delivered ambitious, innovative features'
    ],
    metrics: [
      { label: 'Partnership', value: 'IBM', icon: <Building2 className="w-6 h-6" /> },
      { label: 'Client', value: 'Government', icon: <Award className="w-6 h-6" /> },
      { label: 'Standards', value: 'Exceeded', icon: <TrendingUp className="w-6 h-6" /> }
    ],
    technologies: ['Mobile Development', 'Health APIs', 'Google Fit', 'Fitbit', 'Government Compliance'],
    timeline: '6 months',
    teamSize: '12 people',
    caseStudyUrl: '/case-study/doh-health'
  },
  {
    id: 'arabian-malls',
    title: 'Arabian Malls',
    company: 'Premium Brand Experience',
    category: 'Retail & Real Estate',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png',
    logo: 'https://img.icons8.com/color/96/shopping-mall.png',
    description: 'Redesigned website with custom CMS, enhancing premium brand feel and receiving high praise for aesthetic excellence.',
    challenge: 'Enhance user experience and content management while maintaining high-end, premium brand feel across devices.',
    solution: 'Created modern palette inspired by brand, experimented with high-end design styles, and developed custom CMS.',
    results: [
      'Significantly improved client and visitor experience',
      'Received high praise for aesthetic appeal and usability',
      'Enhanced premium brand feel across all devices',
      'Improved content discovery and management capabilities'
    ],
    metrics: [
      { label: 'Experience', value: 'Enhanced', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'CMS', value: 'Custom', icon: <Building2 className="w-6 h-6" /> },
      { label: 'Praise', value: 'High', icon: <Award className="w-6 h-6" /> }
    ],
    technologies: ['Custom CMS', 'Premium Design', 'Responsive Web', 'Content Management'],
    timeline: '4 months',
    teamSize: '8 people',
    caseStudyUrl: '/case-study/arabian-malls'
  },
  {
    id: 'bfit-web3',
    title: 'BFIT Web3',
    company: 'Blockchain Fitness Platform',
    category: 'Web3 & Fitness',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    logo: 'https://img.icons8.com/color/96/blockchain-technology.png',
    description: 'Transitioned Fitlink to Web 3.0 blockchain platform with native token, cryptocurrency rewards, and live beta testing.',
    challenge: 'Transition existing fitness app to Web 3.0 world, including backend, API, and mobile apps for blockchain functionality.',
    solution: 'Assembled specialized Web 3.0 team, created native token, designed tokenomics model, and launched beta platform.',
    results: [
      'Successfully created native token and tokenomics model',
      'Redesigned platform for Web 3.0 blockchain functionality',
      'Launched beta platform recording health data to blockchain',
      'Enabled users to earn cryptocurrency through fitness'
    ],
    metrics: [
      { label: 'Token', value: 'Created', icon: <Award className="w-6 h-6" /> },
      { label: 'Beta', value: 'Live', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Crypto', value: 'Rewards', icon: <Zap className="w-6 h-6" /> }
    ],
    technologies: ['Blockchain', 'Web 3.0', 'Native Token', 'Cryptocurrency', 'Mobile Apps'],
    timeline: '10 months',
    teamSize: '15 people',
    caseStudyUrl: '/case-study/bfit-web3'
  },
  {
    id: 'genieology',
    title: 'Genieology',
    company: 'Creative Agency Transformation',
    category: 'Digital Agency & Design',
    type: 'Enterprise',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png',
    logo: 'https://img.icons8.com/color/96/creative.png',
    description: 'Responsive website with API-powered CMS achieving instant success and increased sales conversions for creative agency.',
    challenge: 'Redesign outdated website to reflect agency growth and enhance content management capabilities.',
    solution: 'Conducted extensive research, created mood boards, designed multiple iterations, and built responsive site with API-powered CMS.',
    results: [
      'Instant success with client and visitors',
      'Contributed to increased sales conversions',
      'Successfully reflected agency growth and capabilities',
      'Enhanced content management capabilities'
    ],
    metrics: [
      { label: 'Success', value: 'Instant', icon: <Zap className="w-6 h-6" /> },
      { label: 'Conversions', value: 'Increased', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'CMS', value: 'API-powered', icon: <Building2 className="w-6 h-6" /> }
    ],
    technologies: ['Responsive Design', 'API CMS', 'Conversion Optimization', 'Performance'],
    timeline: '3 months',
    teamSize: '6 people',
    caseStudyUrl: '/case-study/genieology'
  },
  // New AI Products
  {
    id: 'yachtos',
    title: 'YachtOS Command',
    company: 'Voice-Powered Maritime Intelligence',
    category: 'Maritime Technology',
    type: 'AI-Built',
    image: '/agents/yachtos-home.png',
    logo: '/agents/yachtos-icon.png',
    description: 'First AI-native operating system for superyacht captains with voice commands, computer vision, and real-time operations.',
    challenge: 'Superyacht captains manage complex operations across weather monitoring, maintenance scheduling, crew coordination, and supplier relationships using 8-12 different apps.',
    solution: 'Built voice-first AI platform with 7 specialized agent tools, computer vision for maintenance, and unified command center consolidating all operations.',
    results: [
      '10+ hours saved weekly in operational coordination',
      '7 AI agent tools automating maritime operations',
      '24/7 AI assistant with voice-powered support',
      '3-second response time for multi-step operations',
      '85% faster task execution through voice commands',
      '40% reduction in emergency maintenance incidents'
    ],
    metrics: [
      { label: 'Time Saved', value: '10+hr/wk', icon: <Zap className="w-6 h-6" /> },
      { label: 'AI Tools', value: '7', icon: <Bot className="w-6 h-6" /> },
      { label: 'Response Time', value: '3sec', icon: <TrendingUp className="w-6 h-6" /> }
    ],
    technologies: ['Claude Sonnet 4.5', 'ElevenLabs AI', 'Next.js 14', 'Supabase', 'OpenWeather Marine API'],
    timeline: '12 weeks',
    teamSize: 'Solo + AI',
    caseStudyUrl: '/case-study/yachtos'
  },
  {
    id: 'pathfinder',
    title: 'Pathfinder',
    company: 'Professional ADHD Parent Coaching',
    category: 'Healthcare Technology',
    type: 'AI-Built',
    image: '/agents/pathfinder-1.png',
    logo: '/agents/pathfinder.png',
    description: 'Evidence-based AI coaching platform helping parents of ADHD children through professional therapeutic frameworks.',
    challenge: 'Parents of ADHD children face limited access to professional coaches (£100-200/session) and generic online advice that doesn\'t fit their specific situation.',
    solution: 'Built therapeutic platform using GROW Model framework with crisis-first multi-agent architecture, dual voice+text interface, and multi-child support.',
    results: [
      '162+ coaching exchanges across therapeutic sessions',
      '0 critical safety incidents with real-time crisis detection',
      '$0.01 per session cost efficiency (95% gross margin)',
      '9 children supported across 5 family profiles',
      '300ms voice latency for real-time conversation quality',
      'Production-ready with waitlist system'
    ],
    metrics: [
      { label: 'Sessions', value: '162+', icon: <Users className="w-6 h-6" /> },
      { label: 'Safety Incidents', value: '0', icon: <Award className="w-6 h-6" /> },
      { label: 'Cost/Session', value: '$0.01', icon: <DollarSign className="w-6 h-6" /> }
    ],
    technologies: ['Next.js 15', 'OpenAI GPT-4o-mini', 'ElevenLabs AI', 'Supabase', 'GROW Model Framework'],
    timeline: '10 months',
    teamSize: 'Solo + AI',
    caseStudyUrl: '/case-study/pathfinder'
  },
  // AI-Built Projects (link to existing case studies)
  {
    id: 'chilled-sites',
    title: 'Chilled Sites — AI Website Builder',
    company: 'Chilled Ventures',
    category: 'AI / SaaS',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    logo: 'https://chilledsites.com/images/logo.svg',
    description: 'AI-powered website builder that turns a prompt, photo, or email into a fully hosted website in minutes — complete with SEO, analytics, and forms.',
    caseStudyUrl: '/case-study/chilled-sites',
    challenge: 'Most small businesses and founders struggle with the time, cost, and creativity needed to launch a professional website. Traditional template builders feel generic, while agencies are expensive and slow.',
    solution: 'We built Chilled Sites, an AI-first platform that generates unique websites from simple inputs (prompt, image, or email). Users can edit, publish, and grow their site with built-in hosting, SEO, and analytics.',
    results: [
      'Beta users launched live sites in under 10 minutes',
      'Agencies adopted Chilled Sites to speed up client delivery',
      'Delivered a full infrastructure layer (tokens, hosting, analytics, SEO) around the AI build',
      '100+ beta users successfully launched websites',
      'Cost savings of £5,000+ compared to traditional agency builds',
      'Reduced website creation time from weeks to minutes'
    ],
    technologies: ['Supabase', 'Next.js', 'Tailwind', 'Mamopay', 'OpenAI', 'Claude', 'Claude Code'],
    timeline: 'Ongoing Product',
    teamSize: '1 Builder',
    metrics: [
      { label: 'Time to First Site', value: '< 10 min', icon: <Zap className="w-6 h-6" /> },
      { label: 'Cost Savings', value: '£5,000+', icon: <DollarSign className="w-6 h-6" /> },
      { label: 'Active Users', value: '1000+', icon: <Users className="w-6 h-6" /> },
      { label: 'Websites Built', value: '2500+', icon: <Globe className="w-6 h-6" /> }
    ]
  },
  {
    id: 'chilled-crm',
    title: 'Chilled CRM',
    company: 'AI-Powered CRM Platform',
    category: 'SaaS & AI',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledcrm1.png',
    logo: 'https://chilledsites.com/images/logo.svg',
    description: 'Next-generation CRM system built with AI at its core, delivering unprecedented efficiency and insights. Built in 4 weeks using AI-powered development.',
    caseStudyUrl: '/case-study/chilled-crm',
    metrics: [
      { label: 'Build Time', value: '4 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Cost Saving', value: '70%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Team Size', value: '1', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'rhythm',
    title: 'Rhythm',
    company: 'AI-Powered Running Coach',
    category: 'HealthTech & AI',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/rhythm1.png',
    logo: 'https://ai-running-app.netlify.app/favicon.svg',
    description: 'Find your perfect running rhythm with AI-powered coaching and adaptive music. Revolutionary fitness app built in just 1 week using AI development.',
    caseStudyUrl: '/case-study/rhythm',
    metrics: [
      { label: 'Build Time', value: '1 week', icon: <Zap className="w-6 h-6" /> },
      { label: 'Performance', value: '+45%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Team Size', value: '1', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'harmony',
    title: 'Harmony',
    company: 'Music Collaboration Platform',
    category: 'Music & AI',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png',
    logo: 'https://img.icons8.com/color/96/musical-notes.png',
    description: 'Revolutionary music collaboration platform that connects artists worldwide with AI-powered matching and real-time collaboration tools.',
    caseStudyUrl: '/case-study/harmony',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Artists', value: '1000+', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'clinic-book',
    title: 'ClinicBook',
    company: 'Healthcare Booking System',
    category: 'HealthTech',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    logo: 'https://img.icons8.com/color/96/health-book.png',
    description: 'Comprehensive healthcare booking and management system with AI-powered scheduling optimization and patient management.',
    caseStudyUrl: '/case-study/clinic-book',
    metrics: [
      { label: 'Build Time', value: '3 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Efficiency', value: '+80%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'mamori-healthos',
    title: 'Mamori HealthOS',
    company: 'AI-Powered Health Operating System',
    category: 'HealthTech & AI Agents',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop',
    logo: 'https://img.icons8.com/color/96/health-graph.png',
    description: 'AI-native health operating system that transforms fragmented health data into actionable intelligence through evidence-based guidance. Built in 2-3 weeks with 95% cost reduction.',
    caseStudyUrl: '/case-study/mamori-healthos',
    metrics: [
      { label: 'Build Time', value: '2-3 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Cost Savings', value: '95%', icon: <DollarSign className="w-6 h-6" /> },
      { label: 'Team Size', value: '1 Dev', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'luxury-travel-sweden',
    title: 'Luxury Travel Sweden',
    company: 'AI-Powered Luxury Travel Platform',
    category: 'Travel & Hospitality',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&auto=format&fit=crop',
    logo: 'https://img.icons8.com/color/96/tourist-map.png',
    description: 'Sophisticated luxury travel website combining interactive destination mapping, real-time AI concierge services (LIV), and comprehensive CMS. Built in 8 weeks with 70% faster content updates.',
    caseStudyUrl: '/case-study/luxury-travel-sweden',
    metrics: [
      { label: 'Build Time', value: '8 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Infrastructure', value: '$0-25/mo', icon: <DollarSign className="w-6 h-6" /> },
      { label: 'Lead Context', value: '10x', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'serenity',
    title: 'Serenity',
    company: 'Wellness & Meditation App',
    category: 'HealthTech & AI',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/serenity1.png',
    logo: 'https://img.icons8.com/color/96/lotus.png',
    description: 'AI-powered wellness and meditation platform with personalized mindfulness programs and mental health tracking.',
    caseStudyUrl: '/case-study/serenity',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'User Retention', value: '85%', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'fitlink',
    title: 'Fitlink',
    company: 'Social Fitness Platform',
    category: 'HealthTech & Social',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fitlink1.png',
    logo: 'https://img.icons8.com/color/96/dumbbell.png',
    description: 'Social fitness platform connecting fitness enthusiasts worldwide with AI-powered workout recommendations and community features.',
    caseStudyUrl: '/case-study/fitlink',
    metrics: [
      { label: 'Countries', value: '30+', icon: <Globe className="w-6 h-6" /> },
      { label: 'Active Users', value: '50K+', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'barber-booking',
    title: 'Barber Booking System',
    company: 'Salon Management Platform',
    category: 'Business Tools',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/barber1.png',
    logo: 'https://img.icons8.com/color/96/scissors.png',
    description: 'Complete salon and barber shop management system with AI-powered scheduling, customer management, and business analytics.',
    caseStudyUrl: '/case-study/barber-booking',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Bookings', value: '+200%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'experience-gift',
    title: 'Experience A Gift',
    company: 'AI-Powered Gifting Platform',
    category: 'E-commerce & AI',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/experienceagift.png',
    logo: 'https://img.icons8.com/color/96/gift.png',
    description: 'Revolutionizing personalized gifting with AI-driven design and seamless booking experiences.',
    caseStudyUrl: '/case-study/experience-a-gift',
    metrics: [
      { label: 'Build Time', value: '1 week', icon: <Zap className="w-6 h-6" /> },
      { label: 'Gift Selection', value: '+85%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  // Gallery Projects (Screenshots only - no full case study)
  {
    id: 'nordik-basalt',
    title: 'Nordik Basalt',
    company: 'Travel & Tourism',
    category: 'Travel',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/images/screenshot_f9bc38ad-3351-42dc-a897-27e1be1b4177_1759009074553.png',
    description: 'A beautiful travel website with a Nordic dark theme, showcasing stunning destinations and immersive experiences.',
    metrics: [
      { label: 'Build Time', value: '3 days', icon: <Zap className="w-6 h-6" /> },
      { label: 'Design Style', value: 'Nordic', icon: <Globe className="w-6 h-6" /> }
    ]
  },
  {
    id: 'rams-gehry',
    title: 'Rams & Gehry Architecture',
    company: 'Architecture Portfolio',
    category: 'Architecture',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/images/screenshot_71b6ef3b-18e1-45db-aa85-156664f1f8ad_1759009534586.png',
    description: 'Minimalist Design, Expressive Form. A stunning architectural portfolio showcasing bold, innovative designs.',
    metrics: [
      { label: 'Style', value: 'Minimalist', icon: <Building2 className="w-6 h-6" /> },
      { label: 'Build Time', value: '4 days', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    id: 'powerfit-gym',
    title: 'PowerFit Gym',
    company: 'Fitness Center',
    category: 'Health & Fitness',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_e34da882-3d2e-44c2-89db-9e8cd527c31d_1753873072455.png',
    description: 'Transform Your Body, Elevate Your Mind. Modern fitness center website with dynamic design and powerful branding.',
    metrics: [
      { label: 'Build Time', value: '3 days', icon: <Zap className="w-6 h-6" /> },
      { label: 'Category', value: 'Fitness', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'audi-concept',
    title: 'Audi',
    company: 'Automobile Showcase',
    category: 'Automobile',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_d31357b6-225e-4b68-8e57-03bee4b71b0d_1753133531463.png',
    description: 'Progress Through Technology. Sleek automotive showcase highlighting innovation and premium design.',
    metrics: [
      { label: 'Build Time', value: '5 days', icon: <Zap className="w-6 h-6" /> },
      { label: 'Industry', value: 'Automotive', icon: <Target className="w-6 h-6" /> }
    ]
  },
  {
    id: 'earthwear',
    title: 'EarthWear',
    company: 'Sustainable Fashion',
    category: 'E-commerce & Sustainability',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_031365e2-2db7-4e14-a6d7-28826f841901_1753135468257.png',
    description: 'Sustainable Fashion for a Better World. Eco-conscious e-commerce platform promoting ethical clothing.',
    metrics: [
      { label: 'Focus', value: 'Sustainable', icon: <Globe className="w-6 h-6" /> },
      { label: 'Build Time', value: '4 days', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    id: 'capture-moments',
    title: 'Capture Moments',
    company: 'Photography Portfolio',
    category: 'Creative & Portfolio',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_ca6c14c8-b019-42eb-8b08-cc27d1b8a0ba_1754554966478.png',
    description: 'Professional Photography Portfolio. Elegant showcase for capturing life\'s most beautiful moments.',
    metrics: [
      { label: 'Build Time', value: '3 days', icon: <Zap className="w-6 h-6" /> },
      { label: 'Type', value: 'Portfolio', icon: <Target className="w-6 h-6" /> }
    ]
  },
  {
    id: 'luxe-fashion',
    title: 'LUXE Fashion Store',
    company: 'Premium Fashion E-commerce',
    category: 'E-commerce',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_9d315e0f-da19-4859-8a81-b1a1635b00ab_1753512706150.png',
    description: 'Premium Clothing & Accessories. Luxury fashion e-commerce with sophisticated design and seamless shopping.',
    metrics: [
      { label: 'Category', value: 'Luxury', icon: <Target className="w-6 h-6" /> },
      { label: 'Build Time', value: '5 days', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    id: 'modish',
    title: 'Modish',
    company: 'Premium Fashion Store',
    category: 'E-commerce',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_0c31f40e-6101-45e2-b9b6-2822ae2f3c10_1753135578901.png',
    description: 'Premium Fashion Store. Contemporary e-commerce platform featuring curated collections and modern aesthetics.',
    metrics: [
      { label: 'Style', value: 'Modern', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Build Time', value: '4 days', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    id: 'dubai-jet',
    title: 'Dubai Jet Adventures',
    company: 'Watersports Rentals',
    category: 'Mobile App & Travel',
    type: 'AI-Built',
    image: 'https://nccnasarzekslweasfpw.supabase.co/storage/v1/object/public/images/screenshot_1b81782b-b344-4528-a3b3-143f744d5586_1753134657308.png',
    description: 'Premium Jet Ski & Watersports Rentals. Mobile app for booking thrilling water adventures in Dubai.',
    metrics: [
      { label: 'Platform', value: 'Mobile', icon: <Smartphone className="w-6 h-6" /> },
      { label: 'Build Time', value: '1 week', icon: <Zap className="w-6 h-6" /> }
    ]
  },
  {
    id: 'lissa-yoga',
    title: 'Lissa Yoga',
    company: 'Yoga & Wellness',
    category: 'Health & Wellness',
    type: 'AI-Built',
    image: 'https://api.chilledsites.com/storage/v1/object/public/images/screenshot_b571d1fd-87ad-4c8d-a045-42ec177ce8ca_1758919084753.png',
    description: 'Traditional Ashtanga with Contemporary Wellbeing. Serene wellness platform blending ancient practices with modern design.',
    metrics: [
      { label: 'Style', value: 'Wellness', icon: <Target className="w-6 h-6" /> },
      { label: 'Build Time', value: '3 days', icon: <Zap className="w-6 h-6" /> }
    ]
  }
];

const categories = ['All', 'Enterprise', 'AI-Built', 'HealthTech', 'SaaS', 'Media'];


export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project =>
        project.type === selectedCategory ||
        project.category.includes(selectedCategory)
      );

  const openCaseStudy = (project: typeof allProjects[0]) => {
    if (project.caseStudyUrl) {
      window.location.href = project.caseStudyUrl;
    } else {
      setSelectedProject(project);
      setShowCaseStudyModal(true);
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Helmet>
          <title>Case Studies & Projects | Paul Gosnell - AI Product Development</title>
          <meta name="description" content="Explore Paul Gosnell's portfolio of enterprise transformations and AI-built products. From banking platforms to fitness apps, see real results and measurable impact." />
          <meta name="keywords" content="AI development projects, enterprise transformation, case studies, product development portfolio" />
          <meta property="og:title" content="Case Studies & Projects | Paul Gosnell" />
          <meta property="og:description" content="Portfolio of enterprise transformations and AI-built products with real results and measurable impact." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/case-studies" />
        </Helmet>

        <HeaderV3Global darkMode={true} />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-black text-white overflow-hidden">
          {/* Simple Background */}
          <div className="absolute inset-0 z-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-20"></div>


          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">Portfolio</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 text-white leading-[1.05] tracking-tight">
                  Case Studies & Projects
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
                  From enterprise transformations to AI-built products, explore a portfolio of real projects
                  with measurable impact across banking, media, health, and technology sectors.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">12+</div>
                    <div className="text-sm text-gray-400 font-light">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">8</div>
                    <div className="text-sm text-gray-400 font-light">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">40+</div>
                    <div className="text-sm text-gray-400 font-light">Team Members Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">80%</div>
                    <div className="text-sm text-gray-400 font-light">Faster with AI</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured: Health & Wellness Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Link to="/health" className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 min-h-[400px] flex items-center border-t border-gray-800"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&auto=format&fit=crop"
                      alt="Health & Wellness"
                      className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-12 md:p-16 w-full">
                    <div className="max-w-4xl">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                        <Heart className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">Featured Portfolio</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
                        Health & Wellness Projects
                      </h2>

                      {/* Description */}
                      <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                        From AI-powered health platforms to government healthcare apps, we've built across the entire health spectrum.
                        Wearable integration, mental wellness, fitness tracking, clinic management, and corporate wellness—see our deep health expertise.
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="border-l border-white/40 pl-4">
                          <div className="text-3xl font-light text-white">6+</div>
                          <div className="text-white/70 text-sm font-light">Health Projects</div>
                        </div>
                        <div className="border-l border-white/40 pl-4">
                          <div className="text-3xl font-light text-white">60K+</div>
                          <div className="text-white/70 text-sm font-light">Active Users</div>
                        </div>
                        <div className="border-l border-white/40 pl-4">
                          <div className="text-3xl font-light text-white">95%</div>
                          <div className="text-white/70 text-sm font-light">Cost Savings</div>
                        </div>
                        <div className="border-l border-white/40 pl-4">
                          <div className="text-3xl font-light text-white">1-3 wks</div>
                          <div className="text-white/70 text-sm font-light">Build Time</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-light hover:bg-gray-100 transition-all group-hover:gap-4 duration-300">
                        <span>Explore Health Portfolio</span>
                        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {['Wearables', 'AI Health', 'Mental Wellness', 'Fitness', 'Clinics', 'Government'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 font-light transition-all ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-gray-800 flex flex-col border-t border-gray-200 dark:border-gray-700"
                    onClick={() => openCaseStudy(project)}
                  >

                      {/* Project Image */}
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />

                        {/* Logo */}
                        {project.logo && (
                          <div className="absolute top-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity">
                            <img
                              src={project.logo}
                              alt={`${project.company} logo`}
                              className="h-6 w-auto filter drop-shadow-lg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 transition-transform duration-300 group-hover:scale-110">
                            <ExternalLink className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col p-4">
                        <div className="flex-1">
                          {/* Badges below image */}
                          <div className="flex gap-2 mb-2">
                            <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                              {project.type}
                            </span>
                            {project.caseStudyUrl && (
                              <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Full Case Study
                              </span>
                            )}
                          </div>

                          <div className="mb-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-light">{project.category}</span>
                          </div>

                          <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-1 transition-colors line-clamp-2">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 font-light mb-2 text-sm">{project.company}</p>

                          <p className="text-gray-700 dark:text-gray-200 text-xs line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        {project.metrics && (
                          <div className="flex gap-3 pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                            {project.metrics.slice(0, 2).map((metric, i) => (
                              <div
                                key={i}
                                className="text-center flex-1"
                              >
                                <div className="text-base font-light text-gray-900 dark:text-gray-100">
                                  {metric.value}
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400 font-light mt-0.5">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
                  Ready to Start Your Next Project?
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                  Whether you need enterprise transformation or rapid AI-powered development,
                  let's discuss how we can deliver exceptional results for your organization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@p0stman.com"
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a
                    href="/about"
                    className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all font-light text-lg"
                  >
                    Learn More About Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />

        <CaseStudyModal
          isOpen={showCaseStudyModal}
          onClose={() => setShowCaseStudyModal(false)}
          project={selectedProject}
        />
      </div>
    </HelmetProvider>
  );
}