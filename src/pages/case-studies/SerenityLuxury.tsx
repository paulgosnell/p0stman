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
  'WebRTC',
  'Netlify'
];

const features = [
  'Guided Meditations',
  'Sleep Stories',
  'Breathing Exercises',
  'Progress Tracking',
  'Community Features',
  'Group Sessions'
];

const aiIntegrations = [
  'Personalized Recommendations',
  'Mood Analysis',
  'Sleep Pattern Detection',
  'Voice-guided Meditation',
  'Smart Content Curation',
  'Progress Predictions'
];

const challenge = {
  title: "Mental Health in the Modern World",
  description: "In today's fast-paced world, mental health challenges are increasingly common, yet many people struggle to find effective ways to manage their well-being. While proven practices like meditation, mindfulness, and breathing exercises exist, there are significant barriers to adoption.",
  points: [
    "Lack of awareness about effective mental health practices and limited access to professional guidance create significant obstacles for those seeking help.",
    "Difficulty maintaining consistent wellness routines due to time constraints in busy modern lifestyles and overwhelming unstructured information.",
    "Isolation and lack of community support prevent individuals from building sustainable mental wellness habits and staying motivated.",
    "One-size-fits-all approaches fail to address individual mental health needs, patterns, and preferences for effective long-term wellness."
  ]
};

const solution = {
  title: "AI-Powered Mental Wellness Platform",
  description: "Serenity is a comprehensive mental wellness platform that combines ancient wisdom with modern technology. Through AI-powered personalization and engaging features, we make mental health practices accessible, enjoyable, and effective for everyone.",
  image: "https://mediacdn.carrd.co/assets/images/image07.png",
  liveUrl: "https://ai-wellbeing-app.netlify.app/",
  mobileOptimized: true
};

const benefits = {
  title: "Creating Lasting Impact",
  description: "Serenity is transforming how people approach mental wellness, delivering measurable improvements in users' lives through personalized AI-driven experiences.",
  image: "https://mediacdn.carrd.co/assets/images/image19.png?v=4617e869",
  secondaryImage: "https://mediacdn.carrd.co/assets/images/image07.png?v=4617e869",
  items: [
    {
      title: "Stress Reduction",
      description: "Reduced stress and anxiety levels through personalized meditation and breathing exercises",
      metric: "45% decrease in reported stress"
    },
    {
      title: "Sleep Quality",
      description: "Improved sleep quality and patterns with AI-powered sleep stories and relaxation techniques",
      metric: "60% better sleep quality"
    },
    {
      title: "Enhanced Focus",
      description: "Enhanced focus and productivity through mindfulness practices and progress tracking",
      metric: "35% productivity increase"
    },
    {
      title: "Emotional Resilience",
      description: "Stronger emotional resilience and sustainable mental wellness habits with community support",
      metric: "80% habit retention rate"
    }
  ]
};

export default function SerenityLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Serenity Case Study | AI-Enhanced Mindfulness Platform</title>
          <meta name="description" content="Learn how we built Serenity - an AI-enhanced mindfulness platform combining meditation, movement, and mental wellness." />
          <meta name="keywords" content="mindfulness app, wellness platform, AI development, case study" />
          <meta property="og:title" content="Serenity Case Study | AI-Enhanced Mindfulness Platform" />
          <meta property="og:description" content="AI-enhanced mindfulness platform built in 2 weeks using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image07.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Serenity Case Study | AI-Enhanced Mindfulness Platform" />
          <meta name="twitter:description" content="AI-enhanced mindfulness platform built in 2 weeks using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image07.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/serenity" />
        </Helmet>
        <CaseHeroLuxury
          title="Serenity"
          description="AI-enhanced mindfulness platform combining meditation, movement, and mental wellness."
          backgroundVideo="https://cdn.pixabay.com/video/2018/10/02/18534-293472901_large.mp4"
          overlayColor="from-teal-900/60 to-blue-900/40"
          logo="https://mediacdn.carrd.co/assets/images/image20.svg?v=4617e869"
          logoInvert={false}
          stats={[
            { label: 'Active Users', value: '10K+' },
            { label: 'Meditation Sessions', value: '50K+' },
            { label: 'Avg. Session Time', value: '15 min' },
            { label: 'User Satisfaction', value: '4.8/5' }
          ]}
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Fitlink",
            path: "/case-study/fitlink"
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
            title: "Fitlink",
            path: "/case-study/fitlink"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
