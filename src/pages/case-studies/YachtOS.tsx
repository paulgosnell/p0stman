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
  title: "Five User Groups, Zero Unified Solutions",
  description: "Five distinct user groups—captains, fleet managers, harbor operators, owners, and guests—each need specialized tools. Traditional maritime software forces everyone into generic dashboards, creating friction and inefficiency across the entire operation.",
  points: [
    'No platform serves all five stakeholder types with role-optimized experiences',
    'Captains need hands-free voice operation, but maritime software demands manual screen interaction',
    'Fleet managers lack AI-powered cost insights across vessels, missing efficiency opportunities',
    'Charter guests expect luxury hotel-grade digital experiences, but get outdated interfaces'
  ]
};

const appScreenshots = [
  {
    name: "COMMAND",
    image: "/agents/yachtos-command.png",
    description: "Voice-first captain operations with AI tools for hands-free vessel management"
  },
  {
    name: "FLEET",
    image: "/agents/yachtos-fleet.png",
    description: "Multi-vessel analytics with AI cost optimization and health scoring"
  },
  {
    name: "HARBOR",
    image: "/agents/yachtos-harbor.png",
    description: "Berth coordination and marina operations management"
  },
  {
    name: "OWNER",
    image: "/agents/yachtos-owner.png",
    description: "Real-time oversight and vessel tracking for yacht owners"
  },
  {
    name: "GUEST",
    image: "/agents/yachtos-guest.png",
    description: "Luxury concierge AI with cabin climate control and services"
  }
];

const solution = {
  title: "Five AI-Native Apps, One Unified Platform",
  description: "Five specialized Progressive Web Apps sharing one AI infrastructure: COMMAND (voice-first captain ops), FLEET (multi-vessel analytics + AI cost optimization), HARBOR (berth coordination), OWNER (real-time oversight), GUEST (luxury concierge). Built on Next.js 14 with Claude Sonnet 4.5 and ElevenLabs Voice AI, deployed across 295 global edge locations for sub-200ms worldwide performance.",
  approach: [
    'Architected modular Next.js codebase with role-based routing and shared AI infrastructure',
    'Implemented voice-first COMMAND app with 6 AI tools and ElevenLabs for hands-free operations',
    'Built FLEET analytics with AI cost insights and vessel health scoring across portfolios',
    'Created HARBOR, OWNER, and GUEST apps with specialized workflows and cabin automation'
  ],
  outcome: "Delivered 5 distinct apps with role-optimized interfaces, shared intelligence, offline PWA capability, and global edge deployment—reducing development time 80% versus separate builds.",
  image: "/agents/fleet-map-desktop.png",
  appScreenshots,
  technologies,
  features
};

const benefits = {
  title: "Five Apps, One Architecture, Unlimited Scalability",
  description: "Single codebase serving five user groups cuts development costs 80%. Voice-first COMMAND app reduces captain admin from 3-4 hours to 30 minutes daily. AI-powered FLEET analytics identify €12k-45k annual savings per vessel. All five apps share Claude AI intelligence and Vercel Edge deployment, ensuring consistent sub-200ms performance globally with 99.99% uptime.",
  items: [
    {
      title: "Multi-App Efficiency",
      description: "5 role-optimized apps from one codebase, cutting development cost and time 80% versus building separately.",
      metric: "80% cost reduction"
    },
    {
      title: "Captain Time Savings",
      description: "Voice-first COMMAND app cuts captain admin from 3-4 hours to 30 minutes daily via AI automation.",
      metric: "3-4hrs → 30min daily"
    },
    {
      title: "Fleet Cost Optimization",
      description: "AI identifies spending anomalies and bulk opportunities, delivering €12k-45k annual savings per vessel.",
      metric: "€12k-45k per vessel"
    },
    {
      title: "Global Performance",
      description: "Vercel Edge across 295 PoPs ensures sub-200ms response worldwide with 99.99% uptime for all five apps.",
      metric: "<200ms + 99.99% SLA"
    },
    {
      title: "Unified Intelligence",
      description: "Shared Claude AI, vision, and voice processing across all apps eliminates redundancy and ensures consistency.",
      metric: "1 AI engine, 5 apps"
    },
    {
      title: "PWA Offline Capability",
      description: "All five apps work offline as PWAs, maintaining yacht operations in remote waters with limited connectivity.",
      metric: "100% offline capable"
    }
  ],
  image: "/agents/owner-desktop.png",
  secondaryImage: "/agents/superadmin.png"
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
          <meta property="og:image" content="https://p0stman.com/agents/yachtos-home.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YachtOS Platform - Multi-App Maritime AI Suite" />
          <meta name="twitter:description" content="Five specialized AI apps for yachting: COMMAND, FLEET, HARBOR, OWNER, GUEST. One unified platform." />
          <meta name="twitter:image" content="https://p0stman.com/agents/yachtos-home.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/yachtos" />
        </Helmet>

        <CaseHeroLuxury
          title="YachtOS Platform"
          subtitle="AI-Native Multi-App Suite For Yachting"
          description="Comprehensive AI platform delivering 5 specialized apps for every yachting role: captain command, fleet management, harbor operations, owner oversight, and guest experiences."
          backgroundVideo="https://api.chilledsites.com/storage/v1/object/public/p0stman/Yacht_Gliding_Through_Calm_Sea.mp4"
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
          appScreenshots={solution.appScreenshots}
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
