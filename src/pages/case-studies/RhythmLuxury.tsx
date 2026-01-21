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

const challenge = {
  title: "Revolutionizing Running Training",
  description: "Traditional running apps lack personalization and fail to provide real-time guidance that adapts to individual progress.",
  points: [
    'Generic training plans not adapted to individual progress and capabilities',
    'Lack of real-time feedback and coaching during runs',
    'Poor integration between music tempo and running rhythm',
    'One-size-fits-all approach to training that ignores personal differences'
  ]
};

const solution = {
  title: "AI-Powered Running Coach",
  description: "Rhythm transforms the running experience by combining AI coaching, adaptive music, and real-time feedback into a seamless mobile application that learns from each run.",
  approach: [
    'Built gait analysis AI for real-time pace optimization',
    'Integrated voice recognition for hands-free control',
    'Created adaptive music system that matches running rhythm',
    'Implemented health pattern detection and performance prediction',
    'Developed training plan generation based on personal data',
    'Added achievement system to boost motivation and engagement'
  ],
  outcome: "Delivered an AI-powered running coach that provides personalized, real-time guidance and achieves 45% improvement in training consistency with better form and reduced injury risk.",
  image: "https://mediacdn.carrd.co/assets/images/image13.png",
  technologies,
  features
};

const benefits = {
  title: "Transforming Running Performance",
  description: "Rhythm delivers measurable improvements in running performance and training effectiveness through intelligent personalization.",
  items: [
    {
      title: "Training Consistency",
      description: "45% improvement in training consistency through personalized coaching",
      metric: "+45%"
    },
    {
      title: "Running Form",
      description: "Better running form and efficiency through AI-powered gait analysis",
      metric: "Better"
    },
    {
      title: "Injury Prevention",
      description: "Reduced injury risk through AI monitoring and smart recommendations",
      metric: "Reduced"
    },
    {
      title: "Motivation",
      description: "Increased motivation and more enjoyable running experience",
      metric: "Higher"
    }
  ],
  image: "https://mediacdn.carrd.co/assets/images/image13.png"
};

export default function RhythmLuxury() {
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Rhythm Case Study | AI-Powered Running Coach App",
              "description": "Discover how we built Rhythm - an AI-powered running coach with adaptive music and real-time feedback in just 1 week.",
              "image": "https://mediacdn.carrd.co/assets/images/image13.png",
              "author": {
                "@type": "Person",
                "name": "Paul Gosnell"
              },
              "publisher": {
                "@type": "Organization",
                "name": "POSTMAN",
                "url": "https://p0stman.com"
              },
              "datePublished": "2025-01-01",
              "dateModified": "2026-01-21"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://p0stman.com/case-studies" },
                { "@type": "ListItem", "position": 3, "name": "Rhythm", "item": "https://p0stman.com/case-study/rhythm" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Rhythm"
          subtitle="AI-Powered Running Coach"
          description="Find your perfect running rhythm with AI-powered coaching and adaptive music that learns from every run"
          backgroundVideo="https://cdn.pixabay.com/video/2023/11/19/189734-886596182_large.mp4"
          logo="https://ai-running-app.netlify.app/favicon.svg"
          logoInvert={false}
          industry="Fitness Technology"
          timeline="1 week"
          teamSize="Solo + Bolt"
          stats={[
            { label: 'Build Time', value: '1wk', color: 'text-white' },
            { label: 'Team Size', value: '1', color: 'text-white' },
            { label: 'Build Tool', value: 'Bolt', color: 'text-white' },
            { label: 'Cost', value: '$10K', color: 'text-white' }
          ]}
          prevCase={{
            title: "Chilled Sites",
            path: "/case-study/chilled-sites"
          }}
          nextCase={{
            title: "Experience A Gift",
            path: "/case-study/experience-a-gift"
          }}
        />

        <ChallengeLuxury
          title={challenge.title}
          description={challenge.description}
          points={challenge.points}
        />

        <SolutionLuxury
          title={solution.title}
          description={solution.description}
          approach={solution.approach}
          outcome={solution.outcome}
          image={solution.image}
          technologies={solution.technologies}
          features={solution.features}
        />

        <BenefitsLuxury
          title={benefits.title}
          description={benefits.description}
          items={benefits.items}
          image={benefits.image}
        />

        <FooterLuxury
          prevCase={{
            title: "Chilled Sites",
            path: "/case-study/chilled-sites"
          }}
          nextCase={{
            title: "Experience A Gift",
            path: "/case-study/experience-a-gift"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
