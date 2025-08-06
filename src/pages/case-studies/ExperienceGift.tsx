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
  'Supabase',
  'OpenAI API',
  'Stripe Payments',
  'Netlify'
];

const features = [
  'AI Gift Recommendations',
  'Smart Search & Filters',
  'Booking Management',
  'Recipient Profiles',
  'Digital Gift Cards',
  'Experience Categories'
];

const aiIntegrations = [
  'Smart Gift Matching',
  'Personalized Suggestions',
  'Sentiment Analysis',
  'Preference Learning',
  'Dynamic Pricing',
  'Trend Predictions'
];

const challenge = {
  title: "Revolutionizing Gift Experiences",
  description: "Traditional gift-giving platforms often fail to provide truly personalized experiences:",
  points: [
    'Limited personalization options',
    'Complex booking processes',
    'Poor gift recommendation systems',
    'Lack of digital integration',
    'Inefficient search capabilities',
    'Manual scheduling systems'
  ]
};

const solution = {
  title: "AI-Powered Gift Platform",
  description: "ExperienceAGift transforms how people discover and book unique experiences as gifts through intelligent personalization and seamless booking.",
  image: "https://mediacdn.carrd.co/assets/images/image01.png",
  liveUrl: "https://experienceagift-staging1.netlify.app/"
};

const benefits = {
  title: "Transforming Gift Giving",
  description: "ExperienceAGift delivers measurable improvements in the gift-giving experience:",
  image: "https://mediacdn.carrd.co/assets/images/image01.png",
  points: [
    '85% faster gift selection',
    'Increased booking completion',
    'Higher recipient satisfaction',
    'Reduced support inquiries',
    'Improved gift personalization',
    'Enhanced user engagement',
    'Better inventory utilization',
    'Increased repeat customers'
  ]
};

export default function ExperienceGift() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Experience A Gift Case Study | AI-Powered Gifting Platform</title>
          <meta name="description" content="See how we revolutionized personalized gifting with AI-driven design and seamless booking experiences in just 1 week." />
          <meta name="keywords" content="gifting platform, experience gifts, AI development, case study" />
          <meta property="og:title" content="Experience A Gift Case Study | AI-Powered Gifting Platform" />
          <meta property="og:description" content="AI-powered gifting platform built in 1 week using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image01.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Experience A Gift Case Study | AI-Powered Gifting Platform" />
          <meta name="twitter:description" content="AI-powered gifting platform built in 1 week using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image01.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/experience-a-gift" />
        </Helmet>
      <CaseHero
        title="Experience A Gift"
        description="Revolutionizing personalized gifting with AI-driven design and seamless booking experiences."
        backgroundVideo="https://cdn.pixabay.com/video/2022/08/27/129251-743827334_large.mp4"
        overlayColor="from-rose-900/60 to-purple-900/40"
        stats={[
          { label: 'Build Time', value: '1 week' },
          { label: 'Team Size', value: '1' },
          { label: 'Build Tool', value: 'Bolt' },
          { label: 'Cost', value: '$10k' }
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
        prevCase={{
          title: "Rhythm",
          path: "/case-study/rhythm"
        }}
        nextCase={{
          title: "Chilled CRM",
          path: "/case-study/chilled-crm"
        }}
      />
      </div>
    </HelmetProvider>
  );
}