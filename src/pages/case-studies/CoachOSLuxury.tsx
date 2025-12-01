import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'React & TypeScript',
  'GPT-4o Chat',
  'Gemini 2.5 Flash',
  'Whisper Speech Recognition',
  'ElevenLabs Voice Synthesis',
  'Supabase PostgreSQL',
  'RAG & Semantic Search',
  'WebRTC Voice'
];

const features = [
  'Voice-First Conversation Interface',
  'Long-Term Memory & Context',
  'Automatic Action Extraction',
  'GROW Model Coaching Framework',
  'SWOT Analysis Integration',
  'OKR Goal Tracking',
  'Eisenhower Matrix Prioritization',
  'Daily & Weekly Progress Summaries'
];

const aiIntegrations = [
  'Multi-Model Orchestration (GPT-4o + Gemini)',
  'RAG-Powered Conversation Memory',
  'Semantic Search for Context Retrieval',
  'Real-time Voice Streaming',
  'Automatic Commitment Extraction',
  'Framework-Based Response Generation'
];

const challenge = {
  title: "Breaking the Executive Coaching Bottleneck",
  description: "High-performing executives and founders need strategic guidance but face fundamental constraints: scheduling friction, prohibitive costs, and the challenge of finding a coach who truly understands their business context.",
  points: [
    'Scheduling Friction: Executive coaching requires weeks of advance booking, making it impossible to get support during critical decision moments',
    'Context Loss: Traditional coaches spend valuable session time re-establishing context from previous conversations',
    'Cost Barriers: Quality executive coaching costs £500-1,500/month, limiting access to well-funded executives',
    'Generic Frameworks: Most coaching applies one-size-fits-all methodologies without adapting to individual business contexts'
  ]
};

const solution = {
  title: "AI-Native Executive Coaching Platform",
  description: "Built an on-demand business coaching application that combines conversational AI with professional coaching methodologies. The platform features natural voice interaction with full contextual awareness, using RAG and semantic search to recall past conversations and track progress over time. Multiple AI models (GPT-4o for strategic reasoning, Gemini for fast analysis) work together to deliver nuanced coaching that adapts to each executive's unique situation.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-home.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-app1.png"
};

const benefits = {
  title: "Transforming Executive Performance",
  description: "Coach OS delivers professional-quality strategic guidance with instant availability, complete context retention, and structured frameworks—all at a fraction of traditional coaching costs while maintaining the depth expected by senior executives.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-app2.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-progress.png",
  items: [
    {
      title: 'Instant Strategic Access',
      description: '24/7 availability eliminates scheduling friction, enabling executives to get guidance during critical decision moments',
      metric: 'Zero wait time'
    },
    {
      title: 'Perfect Memory Retention',
      description: 'RAG-powered memory recalls every past conversation, goal, and commitment without executives repeating context',
      metric: '100% context'
    },
    {
      title: 'Multi-Framework Coaching',
      description: 'Applies GROW, SWOT, OKRs, Eisenhower Matrix, and Force Field Analysis based on situational needs',
      metric: '6+ frameworks'
    },
    {
      title: 'Automatic Accountability',
      description: 'Extracts and tracks commitments from conversations, generating daily and weekly progress summaries',
      metric: 'Auto-tracked'
    },
    {
      title: 'Voice-First Experience',
      description: 'Natural conversation via Whisper + ElevenLabs enables strategic discussions while multitasking',
      metric: 'Real-time voice'
    },
    {
      title: 'Cost Revolution',
      description: 'Enterprise-grade coaching at a fraction of traditional costs, democratizing access to strategic guidance',
      metric: '90% savings'
    }
  ]
};

export default function CoachOSLuxury() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Coach OS Case Study | AI-Powered Executive Coaching Platform</title>
          <meta name="description" content="On-demand AI business coaching for executives and founders. Strategic guidance with voice interface, long-term memory, and professional coaching frameworks." />
          <meta name="keywords" content="executive coaching, AI coaching, business strategy, CEO coaching, leadership development, case study" />
          <meta property="og:title" content="Coach OS Case Study | AI-Powered Executive Coaching Platform" />
          <meta property="og:description" content="On-demand AI business coaching with voice interface and professional coaching frameworks." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-home.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coach OS Case Study | AI-Powered Executive Coaching Platform" />
          <meta name="twitter:description" content="On-demand AI business coaching for executives with voice interface and memory." />
          <meta name="twitter:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-home.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/coach-os" />
        </Helmet>

        <CaseHeroLuxury
          title="Coach OS"
          subtitle="AI-Powered Executive Coaching"
          description="On-demand business coaching for executives and founders with voice interface, long-term memory, and professional coaching frameworks"
          backgroundVideo="https://cdn.pixabay.com/video/2020/07/30/46026-446300721_large.mp4"
          stats={[
            { label: 'Availability', value: '24/7' },
            { label: 'Response Time', value: 'Instant' },
            { label: 'Team Size', value: '1 Dev' },
            { label: 'Frameworks', value: '6+' }
          ]}
          prevCase={{
            title: "Luxury Travel Sweden",
            path: "/case-study/luxury-travel-sweden"
          }}
          nextCase={{
            title: "Mamori HealthOS",
            path: "/case-study/mamori-healthos"
          }}
        />

        <ChallengeLuxury {...challenge} />

        <SolutionLuxury
          {...solution}
          technologies={technologies}
          features={features}
          aiIntegrations={aiIntegrations}
        />

        <BenefitsLuxury {...benefits} />

        <FooterLuxury
          nextCase={{
            title: "Mamori HealthOS",
            path: "/case-study/mamori-healthos"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
