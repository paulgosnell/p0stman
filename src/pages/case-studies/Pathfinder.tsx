import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Next.js 15 & React',
  'OpenAI GPT-4o-mini',
  'ElevenLabs Conversational AI',
  'Vercel AI SDK v5',
  'Supabase PostgreSQL',
  'TypeScript',
  'WebRTC Voice Streaming',
  'GROW Model Framework'
];

const features = [
  'Evidence-Based GROW Model Coaching',
  'Real-time Crisis Detection',
  'Dual Voice + Text Interface',
  'Multi-Child Profile Management',
  'Session State Tracking',
  'Time-Adaptive Coaching',
  'GDPR Compliance',
  'ADHD-Friendly Design'
];

const challenge = {
  title: "Breaking the Generic Advice Cycle",
  description: "Parents of ADHD children face constant overwhelm from behavioral challenges, limited access to professional coaches (£100-200/session), and generic online advice that doesn't fit their specific situation.",
  points: [
    'Professional ADHD coaches use proven frameworks but cost £400-800/month. AI chatbots are affordable but provide shallow, transactional advice',
    'Parent burnout can escalate to crisis situations requiring every message to be screened with emergency resources provided immediately',
    'Real families have multiple ADHD children with different needs, requiring independent tracking and strategies per child',
    'Parents need both thoughtful reflection (text) and natural conversation (voice) using the same therapeutic methodology'
  ]
};

const solution = {
  title: "Evidence-Based Coaching Meets Conversational AI",
  description: "Built a production-ready therapeutic platform using Next.js 15, OpenAI GPT-4o-mini, and ElevenLabs voice AI. The system implements professional coaching methodologies through a multi-agent architecture that prioritizes safety and enforces therapeutic depth.",
  approach: [
    'Built crisis-first multi-agent architecture screening every message before processing, with instant emergency resources for high-risk situations',
    'Implemented GROW Model framework: Goal setting, Reality exploration (enforced minimum 10-15 exchanges), Options generation, Will action planning',
    'Created dual interface with unified storage: reflective text chat and real-time voice mode (~300ms latency) saving to same conversation history',
    'Redesigned database schema for multi-child support with independent tracking of challenges, strengths, medication, and strategies per child',
    'Achieved 95% gross margin with $0.01/session text and $0.40/session voice costs while maintaining professional-quality therapeutic outcomes'
  ],
  outcome: "Platform achieved production readiness with 5 active families, 9 children supported, and 162+ coaching exchanges. Zero critical safety incidents. Ready for public launch with waitlist system and sustainable business model.",
  image: "/agents/pathfinder-2.png",
  technologies,
  features
};

const benefits = {
  title: "Measurable Impact on Families and Business Viability",
  description: "Transformed ADHD parent support from transactional advice-giving to evidence-based therapeutic coaching, achieving professional-quality outcomes at a fraction of traditional costs.",
  items: [
    {
      title: "Professional Coaching at AI Scale",
      description: "50-minute therapeutic sessions for $0.01 vs. £100-200 for human coaches. 95% gross margin enables sustainable scaling",
      metric: "95%"
    },
    {
      title: "Crisis-Safe Design",
      description: "Zero critical safety incidents across 162+ messages. Every message screened with instant emergency resources",
      metric: "0"
    },
    {
      title: "Multi-Child Family Support",
      description: "9 children tracked across 5 families with independent profiles, strategies, and progress tracking per child",
      metric: "9"
    },
    {
      title: "Dual Interface Flexibility",
      description: "Chat + voice modes with unified conversation history. 300ms voice latency for real-time conversation quality",
      metric: "300ms"
    }
  ],
  image: "/agents/pathfinder-3.png",
  secondaryImage: "/agents/pathfinder-mobile-1.png"
};

export default function Pathfinder() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Pathfinder ADHD Support | Evidence-Based AI Coaching Platform Case Study</title>
          <meta name="description" content="Professional ADHD parent coaching powered by AI. Evidence-based GROW Model framework delivering 50-minute therapeutic sessions for $0.01 with zero critical safety incidents." />
          <meta name="keywords" content="ADHD coaching, mental health AI, therapeutic platform, parent support, healthcare technology, evidence-based coaching" />
          <meta property="og:title" content="Pathfinder - Professional ADHD Parent Coaching, Powered by AI" />
          <meta property="og:description" content="Evidence-based AI coaching platform helping parents of ADHD children through professional therapeutic frameworks." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/agents/pathfinder-1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pathfinder - AI-Powered ADHD Parent Coaching Platform" />
          <meta name="twitter:description" content="Professional ADHD coaching at AI scale with evidence-based therapeutic frameworks." />
          <meta name="twitter:image" content="https://p0stman.com/agents/pathfinder-1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/pathfinder" />
        </Helmet>

        <CaseHeroLuxury
          title="Pathfinder"
          subtitle="Professional ADHD Parent Coaching, Powered by AI"
          description="Evidence-based AI coaching platform helping parents of ADHD children discover their own solutions through professional therapeutic frameworks"
          backgroundVideo="https://videos.pexels.com/video-files/856694/856694-hd_1920_1080_25fps.mp4"
          logo="/agents/pathfinder.png"
          logoInvert={false}
          industry="Healthcare Technology"
          timeline="10 months"
          teamSize="Solo + AI"
          stats={[
            { label: 'Coaching Sessions', value: '162+', color: 'text-white' },
            { label: 'Safety Incidents', value: '0', color: 'text-white' },
            { label: 'Cost/Session', value: '$0.01', color: 'text-white' },
            { label: 'Children Supported', value: '9', color: 'text-white' }
          ]}
          prevCase={{
            title: "YachtOS Command",
            path: "/case-study/yachtos"
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
            title: "YachtOS Command",
            path: "/case-study/yachtos"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
