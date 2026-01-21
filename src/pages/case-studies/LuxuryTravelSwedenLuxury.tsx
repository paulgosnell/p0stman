import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Vanilla JavaScript & HTML5',
  'Supabase & PostgreSQL',
  'OpenAI GPT-4o',
  'Leaflet.js Maps',
  'Quill.js Rich Text Editor',
  'Service Worker Caching',
  'JWT Authentication',
  'Static Hosting & CDN'
];

const features = [
  'Context-Aware AI Concierge (LIV)',
  'Interactive Destination Map',
  'Comprehensive Admin CMS',
  'Inline Content Editor',
  'Intelligent Lead Management',
  'Component Architecture'
];

const aiIntegrations = [
  'OpenAI GPT-4o Streaming with Server-Sent Events',
  'Dynamic Knowledge Base with Database Integration',
  'Context Injection from User Behavior',
  'Dual-Mode Operation (Planning + Discovery)',
  'Lead Intelligence with Auto-Capture'
];

const challenge = {
  title: "Breaking Traditional Luxury Travel Limitations",
  description: "Luxury travel companies face a fundamental problem: their websites are beautiful but static. Visitors browse stunning imagery but can't engage meaningfully until they fill out a contact form and wait days for a response.",
  points: [
    'Static Content Bottleneck: Every change required developer intervention, creating weeks of delay',
    'Lost Lead Intelligence: Contact forms captured emails but lost all context about visitor interests',
    'Delayed Engagement: 60-70% of leads cool off during the days-long response gap',
    'Fragmented Experience: Destinations and experiences lived in separate silos with no intelligent connections'
  ]
};

const solution = {
  title: "AI-First Luxury Travel Architecture",
  description: "Built a sophisticated platform that transforms passive browsing into intelligent, context-aware conversations while empowering the team with enterprise-grade content management. The platform centers on LIV (Luxury Itinerary Visionary), an OpenAI GPT-4o-powered AI concierge that captures context from every interaction. When a visitor clicks Stockholm on the interactive map, LIV opens with personalized greetings and instantly knows their interests. Behind this intelligent frontend sits a complete CMS built on Supabase, giving the marketing team control over every aspect without touching code.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-homepage-casestudy.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-chat-casestudy.png"
};

const benefits = {
  title: "Transforming Luxury Travel Operations",
  description: "The platform eliminated the bottleneck between visitor interest and meaningful engagement while giving the marketing team unprecedented agility. Where changes previously took weeks of developer time, content updates now happen in minutes through the admin dashboard or inline editing. The AI concierge captures 10x more context than traditional forms—not just contact details but conversation history, destination interests, and booking intent.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-cms-casestudy.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-map-casestudy.png",
  items: [
    {
      title: 'Content Update Revolution',
      description: 'Changes that required developer intervention (2-5 days) now complete in minutes via inline editing or admin panel',
      metric: '70% time reduction'
    },
    {
      title: 'Lead Intelligence Amplification',
      description: 'AI conversations capture 15-20 data points including conversation history, clicked destinations, themes, seasonal preferences, and budget signals',
      metric: '10x richer context'
    },
    {
      title: 'Real-Time Engagement',
      description: 'Visitors get immediate, intelligent responses instead of waiting 24-48 hours for email replies',
      metric: 'Instant conversations'
    },
    {
      title: 'Infrastructure Cost Optimization',
      description: 'Built on Supabase free tier instead of custom backend requiring $5K-15K build plus $200-500/month hosting',
      metric: '90%+ cost savings'
    },
    {
      title: 'Zero Maintenance Overhead',
      description: 'Static frontend + Supabase managed backend eliminates server updates, security patches, and downtime management',
      metric: 'Zero server maintenance'
    },
    {
      title: 'Unified Content Source',
      description: 'All content lives in structured database with version control, search, and instant updates across all pages',
      metric: 'Single source of truth'
    }
  ]
};

export default function LuxuryTravelSwedenLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Luxury Travel Sweden Case Study | AI-Powered Travel Platform</title>
          <meta name="description" content="See how we built an AI-powered luxury travel platform with CMS in 8 weeks. 70% faster content updates and 10x richer lead intelligence." />
          <meta name="keywords" content="luxury travel platform, AI concierge, travel CMS, case study" />
          <meta property="og:title" content="Luxury Travel Sweden Case Study | AI-Powered Travel Platform" />
          <meta property="og:description" content="AI-powered luxury travel platform built in 8 weeks with comprehensive CMS." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-homepage-casestudy.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Luxury Travel Sweden Case Study | AI-Powered Travel Platform" />
          <meta name="twitter:description" content="AI-powered luxury travel platform built in 8 weeks with comprehensive CMS." />
          <meta name="twitter:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-homepage-casestudy.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/luxury-travel-sweden" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Luxury Travel Sweden Case Study | AI-Powered Travel Platform",
              "description": "See how we built an AI-powered luxury travel platform with CMS in 8 weeks. 70% faster content updates and 10x richer lead intelligence.",
              "image": "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-homepage-casestudy.png",
              "author": { "@type": "Person", "name": "Paul Gosnell" },
              "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "datePublished": "2025-01-01",
              "dateModified": "2026-01-21"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://p0stman.com/case-studies" },
                { "@type": "ListItem", "position": 3, "name": "Luxury Travel Sweden", "item": "https://p0stman.com/case-study/luxury-travel-sweden" }
              ]
            })}
          </script>
        </Helmet>
      <CaseHeroLuxury
        title="Luxury Travel Sweden"
        subtitle="AI-Powered CMS Platform"
        description="A sophisticated luxury travel website combining interactive destination mapping, real-time AI concierge services, and comprehensive content management."
        backgroundVideo="https://cdn.pixabay.com/video/2022/11/24/140352-774824285_large.mp4"
        stats={[
          { label: 'Development Time', value: '8 Weeks' },
          { label: 'Infrastructure Cost', value: '$0-25/mo' },
          { label: 'Team Size', value: '1 Dev' },
          { label: 'Codebase', value: '10K+ Lines' }
        ]}
        prevCase={{
          title: "Mamori HealthOS",
          path: "/case-study/mamori-healthos"
        }}
        nextCase={{
          title: "Chilled CRM",
          path: "/case-study/chilled-crm"
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
          title: "Chilled CRM",
          path: "/case-study/chilled-crm"
        }}
      />
      </div>
    </HelmetProvider>
  );
}
