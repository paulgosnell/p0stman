import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'Custom CMS Development',
  'Responsive Web Design',
  'Premium Brand Design',
  'Content Management',
  'Multi-device Optimization',
  'High-end UI/UX'
];

const features = [
  'Premium Brand Experience',
  'Custom Content Management',
  'Enhanced User Experience',
  'Content Discovery Features',
  'Multi-device Compatibility',
  'High-end Design Aesthetics'
];

const results = [
  'Significantly improved client and visitor experience',
  'Received high praise for aesthetic appeal and usability',
  'Enhanced premium brand feel across all devices',
  'Improved content discovery and management capabilities',
  'Delivered modern palette inspired by brand identity',
  'Created seamless user journeys through wireframing'
];

const challenge = {
  title: "Premium Brand Digital Elevation",
  description: "Arabian Center (Al-Futtaim Group) needed to redesign their website to enhance user experience, facilitate content discovery, and enable content management while maintaining high-end, premium feel:",
  points: [
    'Enhance user experience across all touchpoints',
    'Facilitate improved content discovery',
    'Enable comprehensive content management',
    'Maintain high-end, premium brand feel',
    'Ensure consistency across all devices',
    'Elevate digital presence for premium brand'
  ]
};

const solution = {
  title: "Premium Design and Custom CMS Innovation",
  description: "Created a modern palette inspired by the brand, experimented with various high-end design styles, and wireframed the entire website to ensure seamless user journeys.",
  approach: [
    'Created modern palette inspired by Arabian Center brand',
    'Experimented with various high-end design styles',
    'Wireframed entire website for seamless user journeys',
    'Developed responsive website with custom CMS',
    'Applied chosen design style to enhance premium feel',
    'Focused on content management and discovery features'
  ],
  outcome: "The redesigned website significantly improved the client and visitors' experience, receiving high praise for both its aesthetic appeal and usability."
};

const benefits = {
  title: "Premium Brand Digital Success",
  description: "Delivered a premium digital experience that elevated the brand while providing practical content management and discovery capabilities.",
  items: [
    {
      title: "Enhanced User Experience",
      description: "Significantly improved experience for both clients and website visitors",
      metric: "UX improvement"
    },
    {
      title: "Aesthetic Excellence",
      description: "Received high praise for visual design and premium brand feel",
      metric: "High praise received"
    },
    {
      title: "Custom CMS Success",
      description: "Delivered tailored content management system for brand needs",
      metric: "Custom CMS"
    },
    {
      title: "Premium Brand Enhancement",
      description: "Successfully maintained and enhanced high-end brand positioning",
      metric: "Premium feel achieved"
    }
  ]
};

export default function ArabianMalls() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Arabian Center Premium Website | Al-Futtaim Group High-end Brand Design Case Study</title>
          <meta name="description" content="Redesigned Arabian Center website with custom CMS, enhancing premium brand feel and receiving high praise for design excellence." />
          <meta name="keywords" content="premium brand design, Arabian Center, Al-Futtaim Group, custom CMS, luxury website, high-end design, retail branding" />
          <meta property="og:title" content="Arabian Center - Al-Futtaim Group Premium Brand Digital Experience" />
          <meta property="og:description" content="Custom CMS and premium design delivering enhanced user experience for luxury retail brand." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Arabian Center Premium Website Case Study" />
          <meta name="twitter:description" content="High-end brand design with custom CMS for premium retail experience." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/arabian-center" />
        </Helmet>
      <CaseHero
        title="Arabian Center"
        subtitle="Al-Futtaim Group Premium Experience"
        description="Redesigned website with custom CMS, enhancing premium brand feel and receiving high praise for aesthetic excellence"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png"
        logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png"
        industry="Retail & Real Estate"
        timeline="4 months"
        teamSize="8 designers & developers"
        technologies={technologies}
        features={features}
        results={results}
        prevCase={{
          title: "BFIT Web3",
          path: "/case-study/bfit-web3"
        }}
        nextCase={{
          title: "Genieology",
          path: "/case-study/genieology"
        }}
      />
      <Challenge 
        title={challenge.title}
        description={challenge.description}
        points={challenge.points}
      />
      <Solution 
        title={solution.title}
        description={solution.description}
        approach={solution.approach}
        outcome={solution.outcome}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter3.png"
      />
      <Footer 
        prevCase={{
          title: "BFIT Web3",
          path: "/case-study/bfit-web3"
        }}
        nextCase={{
          title: "Genieology",
          path: "/case-study/genieology"
        }}
      />
      </div>
    </HelmetProvider>
  );
}