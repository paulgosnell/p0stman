import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'React 19 & TypeScript',
  'Supabase & PostgreSQL',
  '11Labs Conversational AI',
  'Claude 3.5 Sonnet Vision',
  'Tailwind CSS',
  'Vercel AI SDK',
  'Zustand State Management',
  'WebRTC Voice'
];

const features = [
  'Voice AI Health Coach',
  'Vision Label Scanner',
  'Unified Health Profile',
  'AI Evidence Engine™',
  'Community Tribes',
  'Session Management'
];

const aiIntegrations = [
  'Multi-model Orchestration (OpenAI + Claude)',
  'Vector Embeddings for Semantic Search',
  'Function Calling for Data Extraction',
  'Real-time Streaming with RAG',
  'Profile Extraction from Conversations',
  'WebRTC Low-latency Voice Processing'
];

const challenge = {
  title: "Traditional Health Information Crisis",
  description: "People are dying from confusion, not disease. The healthcare consumer market faces a fundamental trust and information problem that results in 18 million preventable deaths annually—more than all cancers combined.",
  points: [
    'Information Overload Paralysis: 1 in 4 consumers overwhelmed by conflicting health advice, leading to inaction and health deterioration',
    'Trust Deficit: 73% of consumers distrust health information from influencers; Amazon/Google rank products by payment rather than evidence',
    'Fragmented Data Ecosystem: Consumers own multiple health apps (Oura, Apple Health, Strava, lab results) that don\'t communicate with each other',
    'Low Health Literacy Impact: People with low health literacy face 25% higher mortality rates due to inability to navigate health decisions',
    'Missing Unbiased Navigator: Influencers push supplements, brands make wild claims, clinicians have only 7 minutes per patient—no one provides objective guidance',
    'Monetization vs. Truth Conflict: Existing platforms prioritize paid placements over evidence, creating systemic bias in health recommendations'
  ]
};

const solution = {
  title: "Evidence-First AI Health Platform",
  description: "Mamori built an AI-native operating system that aggregates fragmented health data, applies evidence-based analysis, and delivers personalized guidance through natural conversational interfaces. The platform acts as a unified health trust layer, ingesting data from wearables (Oura, Apple Watch, Whoop), lab results, behavior tracking (food photos via vision AI), and environmental context. It applies a proprietary AI Evidence Engine™ that analyzes clinical trials, product labels, and peer-reviewed studies to generate actionable recommendations tailored to individual health profiles. Unlike existing health apps that solve isolated problems, Mamori creates network effects: more user data improves AI personalization, community outcomes validation increases trust, and comprehensive health profiles create switching costs.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop"
};

const benefits = {
  title: "Transforming Health Decision-Making at Scale",
  description: "Mamori demonstrated that AI-native architecture can deliver enterprise-grade health platforms at unprecedented velocity while maintaining clinical-grade accuracy and user trust. The platform proved the viability of consumer-first, evidence-based health guidance by building what traditionally requires 6-month agency timelines and €500K budgets in just 2-3 weeks with a solo developer.",
  image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop",
  points: [
    '95% Development Cost Reduction: Built production-ready MVP for <€5K vs. traditional €300-500K agency spend through AI-augmented solo development',
    '300% Faster Time-to-Market: 2-3 week build vs. 6-month traditional development cycle, enabling rapid user feedback loops and product-market fit iteration',
    'Zero DevOps Overhead: Serverless Supabase architecture eliminates infrastructure management, scaling automatically from 1K to 1M users without code changes',
    'Sub-2s AI Response Times: Claude Vision analysis and voice AI responses deliver clinical-grade insights faster than traditional human consultation wait times',
    'Infinite Scalability Architecture: WebRTC voice connections, edge function processing, and PostgreSQL with vector embeddings support unlimited concurrent users',
    '70% Component Reusability: Nordic Design Language System and modular React architecture enable rapid feature additions with consistent UX'
  ]
};

export default function MamoriHealthOSCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Mamori HealthOS Case Study | AI-Powered Health Operating System</title>
          <meta name="description" content="See how we built an AI-native health operating system in 2-3 weeks. 95% cost reduction and evidence-based health guidance at scale." />
          <meta name="keywords" content="AI health platform, health tech development, evidence-based medicine, case study" />
          <meta property="og:title" content="Mamori HealthOS Case Study | AI-Powered Health Operating System" />
          <meta property="og:description" content="AI-native health operating system built in 2-3 weeks with 95% cost reduction." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mamori HealthOS Case Study | AI-Powered Health Operating System" />
          <meta name="twitter:description" content="AI-native health operating system built in 2-3 weeks with 95% cost reduction." />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop" />
          <link rel="canonical" href="https://p0stman.com/case-study/mamori-healthos" />
        </Helmet>
      <CaseHero
        title="Mamori HealthOS"
        subtitle="AI-Powered Health Operating System"
        description="Transforming fragmented health data into actionable intelligence through evidence-based guidance."
        backgroundVideo="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&auto=format&fit=crop"
        stats={[
          { label: 'Build Time', value: '2-3 Weeks' },
          { label: 'Cost Reduction', value: '€500K→€5K' },
          { label: 'Team Size', value: '1 Dev' },
          { label: 'Target Users', value: '100K' }
        ]}
        prevCase={{
          title: "Chilled CRM",
          path: "/case-study/chilled-crm"
        }}
        nextCase={{
          title: "Genieology",
          path: "/case-study/genieology"
        }}
      />
      <Challenge {...challenge} />
      <Solution
        {...solution}
        technologies={technologies}
        features={features}
        aiIntegrations={aiIntegrations}
      />
      <Benefits {...benefits} />
      <Footer
        nextCase={{
          title: "Genieology",
          path: "/case-study/genieology"
        }}
      />
      </div>
    </HelmetProvider>
  );
}
