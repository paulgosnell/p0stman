import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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
    'Static Content Bottleneck: Every copy change required developer intervention, creating weeks of delay for seasonal promotions or new destination launches',
    'Lost Lead Intelligence: Contact forms captured emails but lost all context about what the visitor was actually interested in—which destinations, themes, or content they engaged with',
    'Delayed Engagement: The gap between "I\'m interested" and "Let\'s talk" stretched into days or weeks, causing 60-70% of leads to cool off or explore competitors',
    'Fragmented Experience: Destinations, storytellers, and experiences lived in separate silos with no intelligent connection between them',
    'Content Management Chaos: Marketing teams maintained content across 12+ HTML files, press coverage in spreadsheets, team bios in documents—no single source of truth',
    'Mobile Experience Gap: Interactive map and AI features needed to work seamlessly across devices, but traditional implementations felt clunky on mobile'
  ]
};

const solution = {
  title: "AI-First Luxury Travel Architecture",
  description: "Built a sophisticated platform that transforms passive browsing into intelligent, context-aware conversations while empowering the team with enterprise-grade content management. The platform centers on LIV (Luxury Itinerary Visionary), an OpenAI GPT-4o-powered AI concierge that captures context from every interaction. When a visitor clicks Stockholm on the interactive map, LIV opens with personalized greetings and instantly knows their interests. Behind this intelligent frontend sits a complete CMS built on Supabase, giving the marketing team control over every aspect: destinations, storyteller profiles, press coverage, team bios, pricing, FAQs, and inline editing of website copy without touching code.",
  image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&auto=format&fit=crop"
};

const benefits = {
  title: "Transforming Luxury Travel Operations",
  description: "The platform eliminated the bottleneck between visitor interest and meaningful engagement while giving the marketing team unprecedented agility. Where changes previously took weeks of developer time, content updates now happen in minutes through the admin dashboard or inline editing. The AI concierge captures 10x more context than traditional forms—not just contact details but conversation history, destination interests, and booking intent.",
  image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop",
  points: [
    '70% Reduction in Content Update Time: Changes that required developer intervention (2-5 days) now complete in minutes via inline editing or admin panel',
    '10x Richer Lead Context: AI conversations capture 15-20 data points including conversation history, clicked destinations, themes of interest, seasonal preferences, budget signals, and special requests',
    'Real-Time Engagement vs. Days of Delay: Visitors get immediate, intelligent responses instead of "We\'ll get back to you in 24-48 hours"',
    '90%+ Development Cost Savings: Built on Supabase free tier ($0/month) instead of custom backend ($5K-15K build + $200-500/month hosting)',
    'Zero Server Maintenance: Static frontend + Supabase managed backend = no server updates, no security patches, no downtime management',
    'Single Source of Truth: All content lives in structured database with version control, search, and instant updates across all pages—no more spreadsheet chaos'
  ]
};

export default function LuxuryTravelSwedenCase() {
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
          <meta property="og:image" content="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&auto=format&fit=crop" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Luxury Travel Sweden Case Study | AI-Powered Travel Platform" />
          <meta name="twitter:description" content="AI-powered luxury travel platform built in 8 weeks with comprehensive CMS." />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&auto=format&fit=crop" />
          <link rel="canonical" href="https://p0stman.com/case-study/luxury-travel-sweden" />
        </Helmet>
      <CaseHero
        title="Luxury Travel Sweden"
        subtitle="AI-Powered CMS Platform"
        description="A sophisticated luxury travel website combining interactive destination mapping, real-time AI concierge services, and comprehensive content management."
        backgroundVideo="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&auto=format&fit=crop"
        stats={[
          { label: 'Build Time', value: '8 Weeks' },
          { label: 'Infrastructure', value: '$0-25/mo' },
          { label: 'Team Size', value: '1 Dev' },
          { label: 'Lines of Code', value: '10,000+' }
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
          title: "Chilled CRM",
          path: "/case-study/chilled-crm"
        }}
      />
      </div>
    </HelmetProvider>
  );
}
