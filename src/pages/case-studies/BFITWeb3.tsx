import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'Blockchain Technology',
  'Web 3.0 Architecture',
  'Native Token Creation',
  'Tokenomics Design',
  'iOS & Android Apps',
  'Cryptocurrency Integration'
];

const features = [
  'Web 3.0 Fitness Platform',
  'Native Token Economy',
  'Blockchain Health Data',
  'Cryptocurrency Rewards',
  'Beta Testing Platform',
  'Tokenomics Model'
];

const results = [
  'Successfully created native token and tokenomics model',
  'Redesigned Fitlink for Web 3.0 blockchain functionality',
  'Launched beta platform recording health data to blockchain',
  'Enabled users to earn cryptocurrency through fitness',
  'Assembled specialized Web 3.0 development team',
  'Project highly successful with keen anticipation for future'
];

const challenge = {
  title: "Web 3.0 Fitness Revolution",
  description: "Fitlink needed assistance transitioning to the Web 3.0 world, including redesigning and rebuilding their backend, API, and both iOS and Android apps to function on blockchain:",
  points: [
    'Transition existing fitness app to Web 3.0 blockchain',
    'Redesign and rebuild backend for blockchain compatibility',
    'Rebuild iOS and Android apps for Web 3.0 functionality',
    'Create native token and tokenomics model',
    'Work in relatively new Web 3.0 environment',
    'Enable cryptocurrency earning through fitness activities'
  ]
};

const solution = {
  title: "Blockchain Fitness Innovation",
  description: "Assembled a specialized team capable of working in the relatively new Web 3.0 environment to deliver comprehensive blockchain fitness platform.",
  approach: [
    'Assembled specialized Web 3.0 development team',
    'Created native token for fitness ecosystem',
    'Designed comprehensive tokenomics model',
    'Developed blockchain-compatible backend architecture',
    'Rebuilt mobile apps for Web 3.0 functionality',
    'Created launch plan for beta testing phase'
  ],
  outcome: "Successfully created a native token, designed a tokenomics model, and created a launch plan. The redesigned Fitlink is now in beta, recording health data to a blockchain and allowing users to earn cryptocurrency."
};

const benefits = {
  title: "Web 3.0 Pioneer Success",
  description: "Successfully pioneered fitness industry transition to Web 3.0, creating innovative blockchain-based health tracking with cryptocurrency rewards.",
  items: [
    {
      title: "Native Token Creation",
      description: "Successfully created and launched native cryptocurrency token for fitness ecosystem",
      metric: "Token launched"
    },
    {
      title: "Tokenomics Innovation",
      description: "Designed comprehensive tokenomics model for sustainable cryptocurrency rewards",
      metric: "Economic model"
    },
    {
      title: "Beta Platform Success",
      description: "Live beta platform successfully recording health data to blockchain",
      metric: "Beta live"
    },
    {
      title: "Cryptocurrency Rewards",
      description: "Users actively earning cryptocurrency through fitness activities",
      metric: "Crypto earnings active"
    }
  ]
};

export default function BFITWeb3() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>BFIT Web3 Fitness | Blockchain Cryptocurrency Rewards Case Study</title>
          <meta name="description" content="Transitioned Fitlink to Web 3.0 blockchain platform with native token, cryptocurrency rewards, and live beta testing." />
          <meta name="keywords" content="Web3 fitness, blockchain health, cryptocurrency rewards, native token, tokenomics, fitness app" />
          <meta property="og:title" content="BFIT Web3 - Blockchain Fitness Revolution" />
          <meta property="og:description" content="Web 3.0 fitness platform with cryptocurrency rewards and blockchain health tracking." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="BFIT Web3 Fitness Case Study" />
          <meta name="twitter:description" content="Blockchain fitness platform with cryptocurrency rewards and native token." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/bfit-web3" />
        </Helmet>
      <CaseHero
        title="BFIT by Fitlink"
        subtitle="Web 3.0 Fitness Revolution"
        description="Blockchain-powered fitness app with native token, cryptocurrency rewards, and health data recorded to blockchain"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png"
        logo="https://img.icons8.com/color/96/blockchain-technology.png"
        industry="Web3 & Fitness"
        timeline="10 months"
        teamSize="15 Web3 specialists"
        technologies={technologies}
        features={features}
        results={results}
        prevCase={{
          title: "DoH Health",
          path: "/case-study/doh-health"
        }}
        nextCase={{
          title: "Arabian Malls",
          path: "/case-study/arabian-malls"
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit3.png"
      />
      <Footer 
        prevCase={{
          title: "DoH Health",
          path: "/case-study/doh-health"
        }}
        nextCase={{
          title: "Arabian Malls",
          path: "/case-study/arabian-malls"
        }}
      />
      </div>
    </HelmetProvider>
  );
}