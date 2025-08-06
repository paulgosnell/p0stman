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
  'TensorFlow.js',
  'WebRTC',
  'Spotify API',
  'HealthKit/Google Fit'
];

const features = [
  'Real-time AI Coaching',
  'Adaptive Music System',
  'Voice Commands',
  'Health Analytics',
  'Goal Tracking',
  'Achievement System'
];

const aiIntegrations = [
  'Gait Analysis AI',
  'Pace Optimization',
  'Voice Recognition',
  'Health Pattern Detection',
  'Training Plan Generation',
  'Performance Prediction'
];

const challenge = {
  title: "Revolutionizing Running Training",
  description: "Traditional running apps lack personalization and fail to provide real-time guidance:",
  points: [
    'Generic training plans not adapted to individual progress',
    'Lack of real-time feedback and coaching',
    'Poor integration between music and running rhythm',
    'Limited motivation and engagement features',
    'Disconnected health and performance tracking',
    'One-size-fits-all approach to training'
  ]
};

const solution = {
  title: "AI-Powered Running Coach",
  description: "Rhythm transforms the running experience by combining AI coaching, adaptive music, and real-time feedback into a seamless mobile application.",
  image: "https://mediacdn.carrd.co/assets/images/image13.png",
  liveUrl: "https://ai-running-app.netlify.app/"
};

const benefits = {
  title: "Transforming Running Performance",
  description: "Rhythm delivers measurable improvements in running performance and training effectiveness:",
  image: "https://mediacdn.carrd.co/assets/images/image13.png",
  points: [
    '45% improvement in training consistency',
    'Better running form and efficiency',
    'Reduced injury risk through AI monitoring',
    'Increased motivation and engagement',
    'More enjoyable running experience',
    'Personalized progress tracking',
    'Enhanced goal achievement',
    'Improved running technique'
  ]
};

export default function Rhythm() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Rhythm Case Study | AI-Powered Running Coach App</title>
          <meta name="description" content="Discover how we built Rhythm - an AI-powered running coach with adaptive music and real-time feedback in just 1 week." />
          <meta name="keywords" content="running app, fitness tech, AI development, case study" />
          <meta property="og:title" content="Rhythm Case Study | AI-Powered Running Coach App" />
          <meta property="og:description" content="AI-powered running coach app built in 1 week using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image13.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Rhythm Case Study | AI-Powered Running Coach App" />
          <meta name="twitter:description" content="AI-powered running coach app built in 1 week using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image13.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/rhythm" />
        </Helmet>
      <CaseHero
        title="Rhythm"
        description="Find your perfect running rhythm with AI-powered coaching and adaptive music."
        backgroundVideo="https://cdn.pixabay.com/video/2023/11/19/189734-886596182_large.mp4"
        logo="https://ai-running-app.netlify.app/favicon.svg"
        overlayColor="from-blue-900/60 to-indigo-900/40"
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
        nextCase={{
          title: "Experience A Gift",
          path: "/case-study/experience-a-gift"
        }}
      />
      </div>
    </HelmetProvider>
  );
}