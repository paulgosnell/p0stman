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
  description: "In today's fast-paced world, mental health challenges are increasingly common, yet many people struggle to find effective ways to manage their well-being. While proven practices like meditation, mindfulness, and breathing exercises exist, there are significant barriers to adoption:",
  points: [
    'Lack of awareness about effective mental health practices',
    'Difficulty maintaining consistent wellness routines',
    'Limited access to professional guidance',
    'Overwhelming amount of unstructured information',
    'Isolation and lack of community support',
    'Time constraints in busy modern lifestyles'
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
  description: "Serenity is transforming how people approach mental wellness, delivering measurable improvements in users' lives:",
  image: "https://mediacdn.carrd.co/assets/images/image19.png?v=4617e869",
  secondaryImage: "https://mediacdn.carrd.co/assets/images/image07.png?v=4617e869",
  points: [
    'Reduced stress and anxiety levels',
    'Improved sleep quality and patterns',
    'Enhanced focus and productivity',
    'Stronger emotional resilience',
    'Better work-life balance',
    'Increased mindfulness in daily life',
    'Stronger sense of community and support',
    'Sustainable mental wellness habits'
  ]
};

export default function SerenityCase() {
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
      <CaseHero
        title="Serenity"
        description="AI-enhanced mindfulness platform combining meditation, movement, and mental wellness."
        backgroundVideo="https://cdn.pixabay.com/video/2018/10/02/18534-293472901_large.mp4"
        overlayColor="from-teal-900/60 to-blue-900/40"
        logo="https://mediacdn.carrd.co/assets/images/image20.svg?v=4617e869"
        stats={[
          { label: 'Team Size', value: '1' },
          { label: 'Build Tool', value: 'Bolt' },
          { label: 'Build Time', value: '2 weeks' },
          { label: 'Cost', value: '$20k' }
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