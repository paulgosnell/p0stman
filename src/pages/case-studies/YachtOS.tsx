import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Anthropic Claude Sonnet 4.5',
  'ElevenLabs Conversational AI',
  'OpenAI Whisper',
  'Vercel AI SDK',
  'Next.js 14 & React 18',
  'Supabase Real-time',
  'OpenWeather Marine API',
  'TypeScript'
];

const features = [
  'Natural Language Voice Commands',
  'Real-time AI Transcription',
  'Marine Weather Forecasts',
  'Live AIS Vessel Tracking',
  'Computer Vision Maintenance',
  'Automated Work Orders',
  'Supplier Search & Booking',
  'Real-time Dashboard'
];

const challenge = {
  title: "Modernizing Superyacht Operations in a Legacy Industry",
  description: "Superyacht captains manage complex operations across weather monitoring, maintenance scheduling, crew coordination, supplier relationships, and guest services—often juggling multiple apps, phone calls, and manual processes.",
  points: [
    'Captains switch between 8-12 different apps for weather, suppliers, maintenance logs, and crew management, leading to inefficiency and errors',
    'Weather windows, port schedules, and guest arrivals require instant access to information and rapid coordination across multiple stakeholders',
    'Traditional maintenance logs are reactive rather than predictive, and visual inspections require expert knowledge',
    'Finding and coordinating services across different ports involves dozens of phone calls, email chains, and manual quote comparisons'
  ]
};

const solution = {
  title: "AI-Native Operating System for Maritime Excellence",
  description: "YachtOS Command is a voice-first, AI-powered platform that consolidates all yacht operations into a single intelligent interface. Using Claude Sonnet 4.5, ElevenLabs Conversational AI, and computer vision, the system understands natural language commands and executes complex multi-step operations autonomously.",
  approach: [
    'Built conversational AI interface using ElevenLabs for natural dialogue and OpenAI Whisper for transcription',
    'Developed 7 specialized AI agent tools: weather forecasts, vessel tracking, vision analysis, work orders, supplier discovery, guest parsing, and service scheduling',
    'Implemented Claude Vision to analyze equipment photos, identify parts, detect issues, and automatically create maintenance tickets',
    'Built unified command center with live weather forecasts, active work orders, crew task kanban board, and supply tracking',
    'Created voice-first architecture for hands-free operation while navigating or managing yacht operations'
  ],
  outcome: "Created a production-ready MVP that handles complex multi-step operations through simple voice commands. Example: 'Monaco Thursday weather, need hull cleaning, generator making noise' triggers weather API calls, supplier searches, work order creation, and crew assignments—all in under 3 seconds.",
  image: "/agents/yachtos-2.png",
  technologies,
  features
};

const benefits = {
  title: "Transforming Yacht Operations Through AI",
  description: "YachtOS Command delivers measurable improvements in operational efficiency, safety, and crew productivity by automating routine tasks and providing intelligent decision support.",
  items: [
    {
      title: "Hours Saved Weekly",
      description: "Automated supplier coordination, maintenance logging, and weather checks eliminate manual research and phone calls",
      metric: "10-15hr"
    },
    {
      title: "Faster Task Execution",
      description: "Voice commands trigger multi-step operations instantly. What took 30+ minutes now happens in seconds",
      metric: "85%"
    },
    {
      title: "Predictive Maintenance",
      description: "AI vision analysis identifies equipment issues before critical failures, reducing emergency repairs and downtime",
      metric: "40%"
    },
    {
      title: "Operational Visibility",
      description: "Unified dashboard provides instant access to weather, crew tasks, work orders, and supplies—eliminating information silos",
      metric: "100%"
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
          <title>YachtOS Command | AI-Native Yacht Operations Platform Case Study</title>
          <meta name="description" content="Voice-powered maritime intelligence system for superyacht captains. AI-native platform delivering 10+ hours saved weekly through conversational AI and computer vision." />
          <meta name="keywords" content="yacht management, maritime technology, AI platform, voice AI, yacht operations, superyacht, maritime AI" />
          <meta property="og:title" content="YachtOS Command - Voice-Powered Maritime Intelligence System" />
          <meta property="og:description" content="AI-native operating system for superyacht captains with voice commands, computer vision, and real-time operations." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/agents/yachtos-1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YachtOS Command - AI-Native Yacht Operations Platform" />
          <meta name="twitter:description" content="Voice-powered maritime intelligence system for superyacht operations." />
          <meta name="twitter:image" content="https://p0stman.com/agents/yachtos-1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/yachtos" />
        </Helmet>

        <CaseHeroLuxury
          title="YachtOS Command"
          subtitle="Voice-Powered Maritime Intelligence"
          description="The first AI-native operating system for superyacht captains. Voice-powered intelligence platform transforming yacht operations through conversational AI and computer vision"
          backgroundVideo="https://videos.pexels.com/video-files/2711239/2711239-uhd_2560_1440_30fps.mp4"
          logo="/agents/yachtos-icon.png"
          logoInvert={true}
          industry="Maritime Technology"
          timeline="12 weeks"
          teamSize="Solo + AI"
          stats={[
            { label: 'Time Saved', value: '10+hr', color: 'text-white' },
            { label: 'AI Tools', value: '7', color: 'text-white' },
            { label: 'AI Assistant', value: '24/7', color: 'text-white' },
            { label: 'Response Time', value: '3sec', color: 'text-white' }
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
