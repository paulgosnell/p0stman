import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Plaid API',
  'OpenAI'
];

const features = [
  'Smart Budgeting',
  'Spending Analytics',
  'Financial Wellbeing Score',
  'Bill Tracking',
  'Savings Goals',
  'Category Insights'
];

const aiIntegrations = [
  'AI Money Coach',
  'Intelligent Categorization',
  'Spending Pattern Analysis',
  'Personalized Recommendations',
  'Predictive Alerts',
  'Natural Language Queries'
];

const challenge = {
  title: "Beyond Basic Budgeting",
  description: "Most personal finance apps focus purely on numbers, missing the emotional and behavioral aspects of money management:",
  points: [
    'Users abandon budgeting apps within weeks due to guilt-driven interfaces',
    'Generic financial advice fails to account for individual spending patterns',
    'No connection between financial habits and overall wellbeing',
    'Complex dashboards overwhelm rather than empower users'
  ]
};

const solution = {
  title: "Finance Meets Mindfulness",
  description: "Harmony reimagines personal finance through the lens of wellbeing. Instead of shaming users for overspending, it celebrates progress and provides gentle, AI-powered guidance that adapts to each person's financial journey.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-home.png",
  liveUrl: "https://harmony-finance.netlify.app/",
  mobileOptimized: true
};

const benefits = {
  title: "Results That Matter",
  description: "Harmony's mindful approach to money management delivers measurable improvements:",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-dashboard.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-design-system.png",
  items: [
    {
      title: "User Retention",
      description: "Users stay engaged beyond the typical 2-week dropoff seen in competing finance apps",
      metric: "3x longer"
    },
    {
      title: "Budget Adherence",
      description: "Users who engage with the AI coach stay closer to their monthly spending targets",
      metric: "23% better"
    },
    {
      title: "Wellbeing Score",
      description: "Average improvement in Financial Wellbeing Score after 30 days of active use",
      metric: "+12 points"
    }
  ]
};

export default function HarmonyLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Harmony Case Study | AI-Powered Financial Wellness Platform</title>
          <meta name="description" content="How we built Harmony - a financial wellness app that combines AI-powered insights with mindful money management for lasting behavioral change." />
          <meta name="keywords" content="fintech app, financial wellness, AI development, case study, budgeting app" />
          <meta property="og:title" content="Harmony Case Study | AI-Powered Financial Wellness Platform" />
          <meta property="og:description" content="A financial wellness app combining AI insights with mindful money management." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-home.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Harmony Case Study | AI-Powered Financial Wellness Platform" />
          <meta name="twitter:description" content="A financial wellness app combining AI insights with mindful money management." />
          <meta name="twitter:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-home.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/harmony" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Harmony Case Study | AI-Powered Financial Wellness Platform",
              "description": "How we built Harmony - a financial wellness app that combines AI-powered insights with mindful money management for lasting behavioral change.",
              "image": "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-home.png",
              "author": { "@type": "Person", "name": "Paul Gosnell" },
              "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "datePublished": "2025-01-01",
              "dateModified": "2026-01-27"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://p0stman.com/case-studies" },
                { "@type": "ListItem", "position": 3, "name": "Harmony", "item": "https://p0stman.com/case-study/harmony" }
              ]
            })}
          </script>
        </Helmet>
        <CaseHeroLuxury
          title="Harmony"
          description="Where finance meets mindfulness. An AI-powered app that transforms how people relate to their money."
          backgroundVideo="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/harmony-video.mp4"
          theme="dark"
          overlayColor="from-purple-900/80 to-indigo-900/60"
          logo="https://mediacdn.carrd.co/assets/images/image21.svg"
          logoInvert={false}
          stats={[
            { label: 'Timeline', value: '6 weeks' },
            { label: 'Team', value: '2 people' },
            { label: 'Platform', value: 'Web + Mobile' },
            { label: 'AI Model', value: 'GPT-4' }
          ]}
          prevCase={{
            title: "Chilled CRM",
            path: "/case-study/chilled-crm"
          }}
          nextCase={{
            title: "Serenity",
            path: "/case-study/serenity"
          }}
        />
        <ChallengeLuxury {...challenge} theme="dark" />
        <SolutionLuxury
          {...solution}
          technologies={technologies}
          features={features}
          aiIntegrations={aiIntegrations}
          theme="dark"
        />
        <BenefitsLuxury {...benefits} theme="dark" />
        <FooterLuxury
          prevCase={{
            title: "Chilled CRM",
            path: "/case-study/chilled-crm"
          }}
          nextCase={{
            title: "Serenity",
            path: "/case-study/serenity"
          }}
          theme="dark"
        />
      </div>
    </HelmetProvider>
  );
}
