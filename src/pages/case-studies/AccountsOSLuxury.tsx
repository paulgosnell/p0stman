import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Next.js',
  'TypeScript',
  'Supabase',
  'Gemini 2.5',
  'Claude AI',
  'OpenAI',
  'Companies House API',
  'HMRC MTD'
];

const features = [
  'AI Chat Interface',
  'Receipt Scanning',
  'Voice Notes',
  'Bank Statement Import',
  'VAT MTD Submission',
  'Corporation Tax CT600',
  'Annual Accounts Wizard',
  'Bank Reconciliation',
  'Professional Invoicing',
  'Dividend Tracking'
];

const aiIntegrations = [
  'Multi-Model AI (Gemini, Claude, OpenAI)',
  'Natural Language Tax Queries',
  'Intelligent Receipt Categorization',
  'Predictive Expense Analysis',
  'WhatsApp & Slack Integration',
  'Claude Desktop MCP Server'
];

const challenge = {
  title: "The UK Founder's Accounting Burden",
  description: "UK founders face a fragmented, expensive landscape of financial tools and services that drain time and money:",
  points: [
    'Traditional accountants charge £100-300/month for basic bookkeeping and advice',
    'Founders juggle 4-5 separate tools: accounting software, receipt scanners, invoicing, payroll',
    'Tax questions require expensive consultations or unreliable Google searches',
    'Manual data entry and categorization consume hours better spent building the business'
  ]
};

const solution = {
  title: "AI Accountant for £9/month",
  description: "AccountsOS consolidates everything a UK Ltd company needs into one AI-native platform. Chat with your books naturally, snap receipts on WhatsApp, get instant tax answers, and file VAT directly to HMRC — all powered by best-in-class AI models.",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-home.png",
  liveUrl: "https://accounts-os.com",
  mobileOptimized: true
};

const benefits = {
  title: "Transforming UK Business Finance",
  description: "AccountsOS delivers measurable value for UK founders and small business owners:",
  image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-dashboard.png",
  secondaryImage: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-integrations.png",
  items: [
    {
      title: "Annual Savings",
      description: "Save up to £4,750/year compared to traditional accountants and separate software subscriptions",
      metric: "£4,750"
    },
    {
      title: "Cost Reduction",
      description: "Replace £155-405/month in combined accountant and software fees with a single £9/month subscription",
      metric: "95%"
    },
    {
      title: "Tax Deductible",
      description: "100% tax deductible business expense — effectively ~£7/month after Corporation Tax relief",
      metric: "100%"
    }
  ]
};

export default function AccountsOSLuxury() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>AccountsOS Case Study | AI Accountant for UK Founders</title>
          <meta name="description" content="How we built AccountsOS - an AI-powered accounting platform that replaces traditional accountants for UK Ltd companies at £9/month." />
          <meta name="keywords" content="AI accountant, UK accounting software, fintech, case study, small business accounting" />
          <meta property="og:title" content="AccountsOS Case Study | AI Accountant for UK Founders" />
          <meta property="og:description" content="AI-powered accounting that replaces £200/month accountants for just £9/month." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-home.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AccountsOS Case Study | AI Accountant for UK Founders" />
          <meta name="twitter:description" content="AI-powered accounting that replaces £200/month accountants for just £9/month." />
          <meta name="twitter:image" content="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-home.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/accounts-os" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "AccountsOS Case Study | AI Accountant for UK Founders",
              "description": "How we built AccountsOS - an AI-powered accounting platform that replaces traditional accountants for UK Ltd companies at £9/month.",
              "image": "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-home.png",
              "author": { "@type": "Person", "name": "Paul Gosnell" },
              "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "datePublished": "2026-01-27",
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
                { "@type": "ListItem", "position": 3, "name": "AccountsOS", "item": "https://p0stman.com/case-study/accounts-os" }
              ]
            })}
          </script>
        </Helmet>
        <CaseHeroLuxury
          title="AccountsOS"
          description="AI accountant for UK founders. Chat with your books, snap receipts, file VAT — everything a Ltd company needs for £9/month."
          backgroundVideo="https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/accountsos-video.mp4"
          theme="light"
          overlayColor="from-violet-900/70 to-indigo-900/50"
          stats={[
            { label: 'Timeline', value: '8 weeks' },
            { label: 'Team', value: '1 person' },
            { label: 'Platform', value: 'Web' },
            { label: 'AI Models', value: '3 LLMs' }
          ]}
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Chilled Sites",
            path: "/case-study/chilled-sites"
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
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Chilled Sites",
            path: "/case-study/chilled-sites"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
