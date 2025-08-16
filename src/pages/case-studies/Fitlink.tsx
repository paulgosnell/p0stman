import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'React & TypeScript',
  'Node.js & GraphQL',
  'PostgreSQL & Redis',
  'Docker & Kubernetes',
  'AWS Services',
  'Stripe Connect'
];

const features = [
  'Team Challenges',
  'Activity Tracking',
  'Rewards System',
  'Social Feed',
  'Analytics Dashboard',
  'Corporate Programs'
];

const aiIntegrations = [
  'Smart Activity Recognition',
  'Personalized Goals',
  'Team Matching Algorithm',
  'Performance Predictions',
  'Content Recommendations',
  'Engagement Analysis'
];

const challenge = {
  title: "Corporate Wellness Challenges",
  description: "Traditional corporate wellness programs struggle to engage employees and demonstrate measurable results:",
  points: [
    'Low employee participation rates',
    'Difficulty tracking program effectiveness',
    'Limited social interaction and support',
    'Poor integration with existing systems',
    'Lack of personalization',
    'Inconsistent engagement'
  ]
};

const solution = {
  title: "Social Fitness Platform",
  description: "Fitlink revolutionizes corporate wellness by combining social engagement, gamification, and AI-powered personalization to create lasting behavioral change.",
  image: "https://mediacdn.carrd.co/assets/images/image14.png",
  liveUrl: "https://fitlinkteams.com"
};

const benefits = {
  title: "Transforming Corporate Wellness",
  description: "Fitlink delivers measurable improvements in employee health, engagement, and company culture:",
  image: "https://mediacdn.carrd.co/assets/images/image13.png",
  points: [
    'Increased employee engagement',
    'Improved team collaboration',
    'Better health outcomes',
    'Reduced healthcare costs',
    'Enhanced company culture',
    'Higher productivity levels',
    'Measurable ROI',
    'Sustainable behavior change'
  ]
};

export default function FitlinkCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Fitlink Case Study | Corporate Wellness Platform</title>
          <meta name="description" content="Learn how we built Fitlink - a comprehensive health & fitness platform for individuals, teams, and corporations." />
          <meta name="keywords" content="corporate wellness, fitness platform, AI development, case study" />
          <meta property="og:title" content="Fitlink Case Study | Corporate Wellness Platform" />
          <meta property="og:description" content="Comprehensive health & fitness platform built using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image14.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fitlink Case Study | Corporate Wellness Platform" />
          <meta name="twitter:description" content="Comprehensive health & fitness platform built using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image14.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/fitlink" />
        </Helmet>
      <CaseHero
        title="Fitlink"
        description="Comprehensive health & fitness platform for individuals, teams, and corporations."
        backgroundVideo="https://cdn.pixabay.com/video/2023/11/19/189731-886596163_large.mp4"
        overlayColor="from-blue-900/60 to-indigo-900/40"
        stats={[
          { label: 'Active Users', value: '60k' },
          { label: 'Corporate Savings', value: '35%' },
          { label: 'Team Engagement', value: '54%' },
          { label: 'Active Teams', value: '50+' }
        ]}
        prevCase={{
          title: "Serenity",
          path: "/case-study/serenity"
        }}
        nextCase={{
          title: "Clinic Book",
          path: "/case-study/clinic-book"
        }}
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
          title: "Serenity",
          path: "/case-study/serenity"
        }}
        nextCase={{
          title: "ExperienceAGift",
          path: "/case-study/experience-a-gift"
        }}
      />
      </div>
    </HelmetProvider>
  );
}