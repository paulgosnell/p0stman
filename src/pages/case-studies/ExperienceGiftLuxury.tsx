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
    "Traditional platforms offered generic recommendations without understanding individual preferences or the unique relationship between giver and recipient.",
    "Inefficient search capabilities and manual scheduling systems created friction in the booking and gift selection process.",
    "Lack of digital integration and seamless payment systems resulted in abandoned purchases and frustrated users.",
    "Existing gift recommendation systems failed to learn from user behavior or adapt to changing trends and preferences."
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
  items: [
    {
      metric: '85%',
      title: 'Faster Gift Selection',
      description: 'AI-powered recommendations and intelligent search dramatically reduced time spent finding the perfect gift, leading to increased booking completion rates.'
    },
    {
      metric: '92%',
      title: 'Recipient Satisfaction',
      description: 'Highly personalized gift matching resulted in exceptional satisfaction scores and significantly improved user engagement across the platform.'
    },
    {
      metric: '60%',
      title: 'Reduced Support Inquiries',
      description: 'Intuitive design and seamless booking process minimized customer support needs while enhancing the overall user experience.'
    },
    {
      metric: '3x',
      title: 'Increased Repeat Customers',
      description: 'Superior personalization and inventory utilization drove remarkable growth in customer loyalty and repeat purchase behavior.'
    }
  ]
};

export default function ExperienceGiftLuxury() {
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
        <CaseHeroLuxury
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
          prevCase={{
            title: "Rhythm",
            path: "/case-study/rhythm"
          }}
          nextCase={{
            title: "FAB Bank",
            path: "/case-study/fab-bank"
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
