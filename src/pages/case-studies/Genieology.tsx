import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'Responsive Web Design',
  'API-powered CMS',
  'Advanced Animations',
  'Performance Optimization',
  'Content Management',
  'Conversion Optimization'
];

const features = [
  'Responsive Website Design',
  'API-powered Content Management',
  'Enhanced Animation System',
  'Improved User Experience',
  'Content Management Capabilities',
  'Sales Conversion Optimization'
];

const results = [
  'Instant success with client and visitors',
  'Contributed to increased sales conversions',
  'Successfully reflected agency growth and capabilities',
  'Enhanced content management capabilities',
  'Fine-tuned animations improved user experience',
  'Delivered modern, professional digital presence'
];

const challenge = {
  title: "Creative Agency Digital Transformation",
  description: "Genieology needed to redesign their outdated website to reflect their growth and enhanced content management capabilities:",
  points: [
    'Redesign outdated website to reflect agency growth',
    'Enhance content management capabilities',
    'Improve digital presence for creative agency',
    'Reflect expanded service offerings',
    'Modernize brand presentation',
    'Increase sales conversion potential'
  ]
};

const solution = {
  title: "Research-Driven Design and Development",
  description: "Conducted extensive research and created mood boards to understand client needs, then designed multiple iterations before finalizing the optimal solution.",
  approach: [
    'Conducted extensive research on client needs and market',
    'Created comprehensive mood boards for design direction',
    'Designed multiple iterations of homepage and inner pages',
    'Built responsive website with API-powered CMS',
    'Fine-tuned animations and transitions for enhanced UX',
    'Optimized for sales conversions and user engagement'
  ],
  outcome: "The revamped website was an instant success with the client and its visitors, contributing to increased sales conversions and better representing the agency's capabilities."
};

const benefits = {
  title: "Creative Agency Success Story",
  description: "Delivered a modern, conversion-optimized website that immediately improved the agency's digital presence and business results.",
  items: [
    {
      title: "Instant Client Success",
      description: "Website was immediately successful with both client and their visitors",
      metric: "Instant success"
    },
    {
      title: "Increased Conversions",
      description: "Contributed to measurable increase in sales conversions for the agency",
      metric: "Sales increase"
    },
    {
      title: "Enhanced UX",
      description: "Fine-tuned animations and transitions significantly improved user experience",
      metric: "UX enhancement"
    },
    {
      title: "Modern CMS",
      description: "API-powered content management system provided flexible content control",
      metric: "API-powered CMS"
    }
  ]
};

export default function Genieology() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Genieology Creative Agency | Website Redesign Success Case Study</title>
          <meta name="description" content="Redesigned Genieology's website with API-powered CMS, achieving instant success and increased sales conversions." />
          <meta name="keywords" content="creative agency website, Genieology, API CMS, conversion optimization, agency redesign, responsive design" />
          <meta property="og:title" content="Genieology - Creative Agency Digital Transformation" />
          <meta property="og:description" content="Website redesign delivering instant success and increased conversions for creative agency." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Genieology Creative Agency Case Study" />
          <meta name="twitter:description" content="API-powered website redesign achieving instant success and conversion growth." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/genieology" />
        </Helmet>
      <CaseHero
        title="Genieology"
        subtitle="Creative Agency Transformation"
        description="Responsive website with API-powered CMS achieving instant success and increased sales conversions"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png"
        logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/genieology-logo.webp"
        industry="Digital Agency & Design"
        timeline="3 months"
        teamSize="6 specialists"
        technologies={technologies}
        features={features}
        results={results}
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie3.png"
      />
      <Footer 
        prevCase={{
          title: "Arabian Malls",
          path: "/case-study/arabian-malls"
        }}
        nextCase={{
          title: "FAB Bank",
          path: "/case-study/fab-bank"
        }}
      />
      </div>
    </HelmetProvider>
  );
}