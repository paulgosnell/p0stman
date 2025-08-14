import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'Digital Strategy',
  'Team Leadership',
  'Enterprise Architecture',
  'Innovation Management',
  'Agile Methodology',
  'Cross-functional Coordination'
];

const features = [
  'Innovation Lab Project',
  'Multi-department Coordination',
  'Enterprise-grade Platforms',
  'Unified Design Systems',
  'Scalable Architecture',
  'Team Scaling (1→40+ experts)'
];

const results = [
  'Scaled from 1 pilot project to 40+ person transformation team',
  'Delivered enterprise-grade platforms across multiple departments',
  'Created reusable design systems and unified code libraries',
  'Established one of the region\'s biggest digital transformations',
  'Improved development efficiency by 60% through standardization',
  'Successfully delivered 18 months of continuous innovation'
];

const challenge = {
  title: "Innovation Lab to Enterprise Transformation",
  description: "First Abu Dhabi Bank needed to initiate a small design and build project for their Innovation Lab, but the challenge was to prove value and scale impact:",
  points: [
    'Start with a small Innovation Lab project',
    'Prove value to impress other departments',
    'Scale from pilot to enterprise-wide transformation',
    'Coordinate across multiple bank departments',
    'Maintain security and compliance standards',
    'Build sustainable, reusable systems'
  ]
};

const solution = {
  title: "Strategic Scaling and Enterprise Delivery",
  description: "Delivered an impressive initial project that captivated other departments within the bank, leading to significant expansion of project opportunities and team growth.",
  approach: [
    'Started with focused Innovation Lab project delivery',
    'Demonstrated exceptional results that impressed stakeholders',
    'Leveraged success to expand into other departments',
    'Assembled large team of 40-50 experts over 18-month period',
    'Designed and built multiple digital transformation projects',
    'Established ongoing partnership across various departments'
  ],
  outcome: "Established an ongoing, successful partnership with FAB, contributing to their digital transformation journey and resulting in a beneficial collaboration for both parties."
};

const benefits = {
  title: "Enterprise Transformation Success",
  description: "The project evolved from a single innovation lab initiative into one of the region's most significant digital transformation programs.",
  items: [
    {
      title: "Team Scaling Success",
      description: "Grew from 1 pilot project to managing 40+ expert team members",
      metric: "40x team growth"
    },
    {
      title: "Multi-Department Impact",
      description: "Expanded across multiple bank departments with consistent delivery",
      metric: "Multiple departments"
    },
    {
      title: "18-Month Partnership",
      description: "Sustained long-term engagement with continuous innovation delivery",
      metric: "18 months duration"
    },
    {
      title: "Efficiency Improvement",
      description: "Improved development efficiency through standardization and reusable systems",
      metric: "60% efficiency gain"
    }
  ]
};

export default function FABBank() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>FAB Bank Digital Transformation | Enterprise Case Study</title>
          <meta name="description" content="How we scaled from Innovation Lab project to 18-month enterprise transformation with 40+ experts at First Abu Dhabi Bank." />
          <meta name="keywords" content="digital transformation, enterprise banking, innovation lab, team scaling, FAB bank" />
          <meta property="og:title" content="FAB Bank Digital Transformation | Enterprise Success Story" />
          <meta property="og:description" content="Scaled from Innovation Lab project to 18-month enterprise transformation with 40+ experts." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FAB Bank Digital Transformation Case Study" />
          <meta name="twitter:description" content="Enterprise transformation success story with First Abu Dhabi Bank." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/fab-bank" />
        </Helmet>
      <CaseHero
        title="First Abu Dhabi Bank"
        subtitle="Enterprise Digital Transformation"
        description="From Innovation Lab project to 18-month enterprise transformation with 40+ experts across multiple departments"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
        industry="Banking & Finance"
        timeline="18 months"
        teamSize="40+ experts"
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab3.png"
      />
      <Footer 
        nextCase={{
          title: "Al Arabiya",
          path: "/case-study/al-arabiya"
        }}
      />
      </div>
    </HelmetProvider>
  );
}