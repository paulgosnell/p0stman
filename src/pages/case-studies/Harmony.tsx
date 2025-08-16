import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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
    'Disconnected financial and wellness tracking',
    'Lack of personalized financial guidance',
    'High stress around money management',
    'Poor financial literacy and education',
    'Limited support for behavioral change',
    'Missing connection between wealth and health'
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
  points: [
    'Improved financial decision-making',
    'Reduced financial stress',
    'Better spending habits',
    'Increased savings rates',
    'Enhanced financial literacy',
    'Stronger money mindset',
    'Better work-life balance',
    'Sustainable wealth building'
  ]
};

export default function HarmonyCase() {
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
      <CaseHero
        title="Harmony"
        description="Next-generation financial wellness app blending money management with personal well-being."
        backgroundVideo="https://cdn.pixabay.com/video/2022/03/03/109471-685078475_large.mp4"
        theme="dark"
        overlayColor="from-purple-900/80 to-blue-900/60"
        logo="https://mediacdn.carrd.co/assets/images/image21.svg"
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
      <Challenge {...challenge} theme="dark" />
      <Solution
        {...solution}
        technologies={technologies}
        features={features}
        aiIntegrations={aiIntegrations}
        theme="dark"
      />
      <Benefits {...benefits} theme="dark" />
      <Footer
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