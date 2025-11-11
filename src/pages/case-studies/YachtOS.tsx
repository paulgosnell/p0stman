import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Next.js 14 App Router',
  'Claude Sonnet 4.5 AI',
  'ElevenLabs Voice AI v2',
  'OpenAI Whisper API',
  'Vercel AI SDK 5.0',
  'Supabase PostgreSQL',
  'TypeScript & React 18',
  'Tailwind CSS',
  'Shadcn UI Components',
  'OpenWeather Marine API',
  'Leaflet Interactive Maps',
  '6 PWA Manifests',
  'Vercel Edge (295 PoPs)',
  'Role-based Routing'
];

const features = [
  'Voice AI Agent (COMMAND)',
  '6 Intelligent AI Tools',
  'Multi-Vessel Analytics (FLEET)',
  'AI Cost Optimization',
  'Berth Management (HARBOR)',
  'Live Vessel Tracking (OWNER)',
  'Luxury Concierge AI (GUEST)',
  'Offline PWA Capability',
  'Weather Forecasting',
  'Maintenance Vision Analysis',
  'Supplier Search & Booking',
  'Crew Management',
  'Compliance Tracking',
  'Cabin Climate Control',
  'Real-time Fleet Health',
  'Global Edge Deployment'
];

const challenge = {
  title: "Fragmented Tools Across Five Distinct User Groups",
  description: "The yacht industry serves five distinct user groups - captains, fleet managers, harbor operators, owners, and charter guests - each requiring specialized interfaces and workflows. Traditional solutions force all users into generic dashboards, creating friction and confusion. Captains need voice-first operations tools, fleet managers require analytics across vessels, harbor teams manage berth logistics, owners want oversight without complexity, and guests expect luxury concierge services.",
  points: [
    'No single platform serves all five stakeholder types with role-optimized experiences, forcing operations across disconnected systems.',
    'Captains require hands-free voice operation while underway, but traditional maritime software demands screen interaction and manual data entry.',
    'Fleet managers lack AI-powered cost optimization insights across multiple vessels, making it impossible to spot efficiency opportunities or overspending patterns.',
    'Charter guests expect luxury hotel-level digital experiences, but yacht systems typically provide outdated interfaces or require crew mediation.'
  ]
};

const solution = {
  title: "Five AI-Native Apps, One Unified Platform",
  description: "YachtOS delivers five specialized Progressive Web Apps sharing a unified codebase and AI infrastructure: COMMAND for captain voice operations with 6 intelligent tools, FLEET for multi-vessel management with AI cost optimization, HARBOR for marina berth coordination and port logistics, OWNER for vessel oversight with real-time tracking and financials, and GUEST for luxury concierge experiences with cabin control. All five apps run on Next.js 14, leveraging Claude Sonnet 4.5 for intelligence, ElevenLabs Conversational AI for voice interaction, and Vercel Edge deployment across 295 global points of presence for sub-200ms latency worldwide.",
  approach: [
    'Architected modular Next.js codebase with role-based routing serving five distinct user experiences from shared components and AI infrastructure.',
    'Implemented voice-first COMMAND app with Claude integration, 6 AI tools, and ElevenLabs voice agent for hands-free captain operations.',
    'Built FLEET analytics dashboard with AI cost insights, vessel health scoring, and compliance tracking across multi-yacht portfolios.',
    'Created HARBOR berth management system, OWNER oversight portal with live tracking, and GUEST luxury concierge with cabin automation.'
  ],
  outcome: "Delivered working multi-app platform serving 5 distinct user personas with role-optimized interfaces, shared AI intelligence, unified data layer, offline PWA capability, and global edge deployment, reducing development time by 80% versus building 5 separate applications.",
  image: "/agents/yachtos-2.png",
  technologies,
  features
};

const benefits = {
  title: "Five Apps, One Architecture, Unlimited Scalability",
  description: "YachtOS's multi-app architecture delivers unprecedented value by serving five distinct user groups from a single codebase, reducing development and maintenance costs by 80% compared to building separate applications. The COMMAND app transforms captain operations with voice-first AI reducing administrative time from 3-4 hours to 30 minutes daily. FLEET managers gain AI-powered cost optimization identifying savings opportunities across vessels (average €12k-45k per vessel annually). HARBOR operations streamline berth coordination and service booking. OWNER portals provide real-time oversight without overwhelming complexity. GUEST experiences deliver luxury hotel-grade digital services with instant AI concierge response. All five apps share Claude AI intelligence, unified database, and global edge deployment ensuring consistent sub-200ms performance worldwide.",
  items: [
    {
      title: "Multi-App Efficiency",
      description: "Built 5 distinct role-optimized applications from single codebase, reducing development cost and time by 80% versus separate builds.",
      metric: "80% cost reduction"
    },
    {
      title: "Captain Time Savings",
      description: "Voice-first COMMAND app cuts administrative overhead from 3-4 hours to under 30 minutes daily through AI automation and tool orchestration.",
      metric: "3-4hrs → 30min daily"
    },
    {
      title: "Fleet Cost Optimization",
      description: "AI insights identify spending anomalies and bulk procurement opportunities, delivering €12k-45k annual savings per vessel on average.",
      metric: "€12k-45k per vessel"
    },
    {
      title: "Global Performance",
      description: "Vercel Edge deployment across 295 PoPs ensures sub-200ms response times worldwide with 99.99% uptime for all five applications.",
      metric: "<200ms + 99.99% SLA"
    },
    {
      title: "Unified Intelligence",
      description: "Shared Claude AI, vision analysis, and voice processing across all apps eliminates redundancy and ensures consistent smart features.",
      metric: "1 AI engine, 5 apps"
    },
    {
      title: "PWA Offline Capability",
      description: "All five apps function offline as Progressive Web Apps, maintaining yacht operations in remote waters with limited connectivity.",
      metric: "100% offline capable"
    }
  ],
  image: "/agents/yachtos-3.png",
  secondaryImage: "/agents/yachtos-mobile-1.png"
};

export default function YachtOS() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>YachtOS Platform | Multi-App Maritime AI Suite Case Study</title>
          <meta name="description" content="Five specialized AI-native apps for yachting in one unified platform. Serving captains, fleet managers, harbor ops, owners, and guests with role-optimized experiences." />
          <meta name="keywords" content="yacht management, maritime technology, AI platform, voice AI, yacht operations, superyacht, fleet management, marina management, luxury yacht, progressive web app" />
          <meta property="og:title" content="YachtOS Platform - Five Maritime AI Apps, One Unified Platform" />
          <meta property="og:description" content="AI-native multi-app suite delivering specialized experiences for every yachting role. Built in 2 months with 80% cost savings." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/agents/yachtos-1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YachtOS Platform - Multi-App Maritime AI Suite" />
          <meta name="twitter:description" content="Five specialized AI apps for yachting: COMMAND, FLEET, HARBOR, OWNER, GUEST. One unified platform." />
          <meta name="twitter:image" content="https://p0stman.com/agents/yachtos-1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/yachtos" />
        </Helmet>

        <CaseHeroLuxury
          title="YachtOS Platform"
          subtitle="AI-Native Multi-App Suite For Yachting"
          description="Comprehensive AI platform delivering 5 specialized apps for every yachting role: captain command, fleet management, harbor operations, owner oversight, and guest experiences."
          backgroundVideo="https://cdn.pixabay.com/video/2022/04/19/114445-701051182_large.mp4"
          icon="ship"
          industry="Maritime & Luxury"
          timeline="2 months"
          teamSize="2 contributors"
          stats={[
            { label: 'Platform Applications', value: '5 distinct apps', color: 'text-white' },
            { label: 'Total User Personas', value: '5 roles served', color: 'text-white' },
            { label: 'Development Speed', value: '2 months MVP', color: 'text-white' },
            { label: 'PWA Manifests', value: '6 optimized', color: 'text-white' }
          ]}
          nextCase={{
            title: "Genieology",
            path: "/case-study/genieology"
          }}
        />

        <ChallengeLuxury
          title={challenge.title}
          description={challenge.description}
          points={challenge.points}
        />

        <SolutionLuxury
          title={solution.title}
          description={solution.description}
          approach={solution.approach}
          outcome={solution.outcome}
          image={solution.image}
          technologies={solution.technologies}
          features={solution.features}
        />

        <BenefitsLuxury
          title={benefits.title}
          description={benefits.description}
          items={benefits.items}
          image={benefits.image}
          secondaryImage={benefits.secondaryImage}
        />

        <FooterLuxury
          prevCase={{
            title: "Genieology",
            path: "/case-study/genieology"
          }}
          nextCase={{
            title: "Pathfinder",
            path: "/case-study/pathfinder"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
