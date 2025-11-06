import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'React & TypeScript',
  'Node.js & Express',
  'PostgreSQL & Prisma',
  'TailwindCSS',
  'Stripe Connect',
  'AWS Services'
];

const features = [
  'Multi-tenant Architecture',
  'Real-time Notifications',
  'Custom Pipelines',
  'Document Management',
  'Email Integration',
  'Analytics Dashboard'
];

const aiIntegrations = [
  'OpenAI GPT-4 for Smart Insights',
  'AI-powered Lead Scoring',
  'Automated Data Enrichment',
  'Smart Email Suggestions',
  'Sentiment Analysis',
  'Predictive Analytics'
];

const challenge = {
  title: "Traditional CRM Limitations",
  description: "Modern businesses face significant challenges with traditional CRM systems that are expensive, complex, and fail to leverage the power of AI:",
  points: [
    'High implementation and maintenance costs drain budgets',
    'Complex setup requiring dedicated IT teams and lengthy deployments',
    'Limited automation capabilities and disconnected data silos',
    'Poor user adoption rates and lack of intelligent insights'
  ]
};

const solution = {
  title: "AI-Powered CRM Platform",
  description: "Chilled CRM revolutionizes customer relationship management by leveraging AI to automate tasks, provide intelligent insights, and streamline workflows.",
  image: "https://mediacdn.carrd.co/assets/images/image06.png",
  liveUrl: "https://chilledcrm.com"
};

const benefits = {
  title: "Transforming Business Operations",
  description: "Chilled CRM delivers measurable improvements across all aspects of customer relationship management:",
  image: "https://mediacdn.carrd.co/assets/images/image06.png?v=4617e869",
  items: [
    {
      title: 'Automated Efficiency',
      description: 'Eliminate manual data entry and repetitive tasks with AI-powered automation',
      metric: '70% reduction in manual work'
    },
    {
      title: 'Sales Performance',
      description: 'Boost conversion rates with intelligent lead scoring and predictive analytics',
      metric: 'Increased conversion rates'
    },
    {
      title: 'Enhanced Collaboration',
      description: 'Streamlined workflows and real-time insights improve team coordination',
      metric: 'Better team productivity'
    },
    {
      title: 'Cost Optimization',
      description: 'Significant savings through reduced IT overhead and faster implementation',
      metric: 'Substantial cost savings'
    }
  ]
};

export default function ChilledCRMLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Chilled CRM Case Study | Built in 6 Weeks with AI</title>
          <meta name="description" content="See how we built a complete CRM system in just 6 weeks using AI-powered development. 70% cost reduction compared to traditional development." />
          <meta name="keywords" content="CRM development, AI development, rapid development, case study" />
          <meta property="og:title" content="Chilled CRM Case Study | Built in 6 Weeks with AI" />
          <meta property="og:description" content="Complete CRM system built in 6 weeks using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image06.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chilled CRM Case Study | Built in 6 Weeks with AI" />
          <meta name="twitter:description" content="Complete CRM system built in 6 weeks using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image06.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/chilled-crm" />
        </Helmet>
      <CaseHeroLuxury
        title="Chilled CRM"
        description="A next-generation CRM system built with AI at its core, delivering unprecedented efficiency and insights."
        backgroundVideo="https://cdn.pixabay.com/video/2021/07/14/81457-576317119_large.mp4"
        stats={[
          { label: 'Development Time', value: '4 Weeks' },
          { label: 'Team Size', value: '1 Dev' },
          { label: 'Cost Savings', value: '70%' },
          { label: 'Manual Work Reduced', value: '70%' }
        ]}
        prevCase={{
          title: "Genieology",
          path: "/case-study/genieology"
        }}
        nextCase={{
          title: "Harmony",
          path: "/case-study/harmony"
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
          title: "Harmony",
          path: "/case-study/harmony"
        }}
      />
      </div>
    </HelmetProvider>
  );
}
