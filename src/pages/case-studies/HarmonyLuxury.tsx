import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'React Native',
  'Node.js & Express',
  'Firebase & Firestore',
  'TensorFlow.js',
  'Plaid API',
  'Stripe Payments'
];

const features = [
  'Personalized Budgeting',
  'Expense Tracking',
  'Goal Setting',
  'Investment Insights',
  'Bill Management',
  'Rewards Program'
];

const aiIntegrations = [
  'AI Financial Advisor',
  'Smart Spending Insights',
  'Automated Categorization',
  'Investment Recommendations',
  'Fraud Detection',
  'Personalized Goals'
];

const challenge = {
  title: "Financial Wellness Gap",
  description: "Traditional banking and financial management tools often fail to address the holistic nature of financial well-being and its connection to personal health:",
  points: [
    'Disconnected financial and wellness tracking with no unified approach',
    'Limited personalized financial guidance and poor financial literacy',
    'High stress around money management with missing behavioral change support',
    'No connection between wealth and health for holistic well-being'
  ]
};

const solution = {
  title: "Holistic Financial Wellness Platform",
  description: "Harmony bridges the gap between financial health and personal well-being through an innovative, AI-powered platform that provides personalized guidance and support.",
  image: "https://mediacdn.carrd.co/assets/images/image15.png",
  liveUrl: "https://ai-banking-app.netlify.app/",
  mobileOptimized: true
};

const benefits = {
  title: "Creating Financial Peace of Mind",
  description: "Harmony helps users achieve both financial success and personal well-being through its innovative approach:",
  image: "https://mediacdn.carrd.co/assets/images/image18.png",
  secondaryImage: "https://mediacdn.carrd.co/assets/images/image17.png",
  items: [
    {
      title: "Improved Decision-Making",
      description: "Enhanced financial decision-making and better spending habits through AI-powered insights",
      metric: "85% satisfaction"
    },
    {
      title: "Stress Reduction",
      description: "Significantly reduced financial stress and improved work-life balance",
      metric: "70% less anxiety"
    },
    {
      title: "Increased Savings",
      description: "Higher savings rates and sustainable wealth building practices",
      metric: "40% more saved"
    },
    {
      title: "Financial Literacy",
      description: "Enhanced financial literacy and stronger money mindset for long-term success",
      metric: "90% educated"
    }
  ]
};

export default function HarmonyLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Harmony Case Study | AI-Powered Financial Wellness Platform</title>
          <meta name="description" content="Discover how we built Harmony - a next-generation financial wellness app blending money management with personal well-being." />
          <meta name="keywords" content="fintech app, financial wellness, AI development, case study" />
          <meta property="og:title" content="Harmony Case Study | AI-Powered Financial Wellness Platform" />
          <meta property="og:description" content="Next-generation financial wellness app built with AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image15.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Harmony Case Study | AI-Powered Financial Wellness Platform" />
          <meta name="twitter:description" content="Next-generation financial wellness app built with AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image15.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/harmony" />
        </Helmet>
        <CaseHeroLuxury
          title="Harmony"
          description="Next-generation financial wellness app blending money management with personal well-being."
          backgroundVideo="https://cdn.pixabay.com/video/2022/03/03/109471-685078475_large.mp4"
          theme="dark"
          overlayColor="from-purple-900/80 to-blue-900/60"
          logo="https://mediacdn.carrd.co/assets/images/image21.svg"
          logoInvert={false}
          stats={[
            { label: 'Team Size', value: '1' },
            { label: 'Build Tool', value: 'Bolt' },
            { label: 'Build Time', value: '4 weeks' },
            { label: 'Cost', value: '$40k' }
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
