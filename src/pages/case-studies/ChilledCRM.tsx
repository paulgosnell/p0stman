import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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
    'High implementation and maintenance costs',
    'Complex setup requiring dedicated IT teams',
    'Limited automation capabilities',
    'Poor user adoption rates',
    'Lack of intelligent insights',
    'Disconnected data silos'
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
  points: [
    '70% reduction in manual data entry',
    'Increased sales conversion rates',
    'Improved customer satisfaction',
    'Better team collaboration',
    'Real-time business insights',
    'Streamlined workflows',
    'Enhanced decision making',
    'Significant cost savings'
  ]
};

export default function ChilledCRMCase() {
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
      <CaseHero
        title="Chilled CRM"
        description="A next-generation CRM system built with AI at its core, delivering unprecedented efficiency and insights."
        backgroundVideo="https://cdn.pixabay.com/video/2021/07/14/81457-576317119_large.mp4"
        stats={[
          { label: 'Team Size', value: '1' },
          { label: 'Build Tool', value: 'Bolt' },
          { label: 'Build Time', value: '4 weeks' },
          { label: 'Cost', value: '$40k' }
        ]}
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
          title: "Harmony",
          path: "/case-study/harmony"
        }}
      />
      </div>
    </HelmetProvider>
  );
}