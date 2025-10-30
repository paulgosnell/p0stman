import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

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

const challenge = {
  title: "Fitness Meets Blockchain",
  description: "Fitlink needed to transition their fitness platform into the Web 3.0 world with blockchain functionality and cryptocurrency rewards.",
  points: [
    'Transition existing fitness app to Web 3.0 blockchain',
    'Create native token and comprehensive tokenomics model',
    'Rebuild backend, API, and mobile apps for blockchain',
    'Enable cryptocurrency earning through fitness activities'
  ]
};

const solution = {
  title: "Web 3.0 Pioneer Innovation",
  description: "Assembled a specialized team capable of working in the relatively new Web 3.0 environment to deliver comprehensive blockchain fitness platform with native token and cryptocurrency rewards.",
  approach: [
    'Assembled specialized Web 3.0 development team',
    'Created native fitness token and tokenomics model',
    'Developed blockchain-compatible backend architecture',
    'Rebuilt iOS and Android apps for Web 3.0',
    'Integrated cryptocurrency earning mechanisms',
    'Launched beta platform with blockchain health tracking'
  ],
  outcome: "Successfully created a native token, designed a tokenomics model, and launched beta platform. BFIT now records health data to blockchain and allows users to earn cryptocurrency through fitness.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit2.png",
  technologies,
  features
};

const benefits = {
  title: "Web 3.0 Pioneer Success",
  description: "Successfully pioneered the fitness industry's transition to Web 3.0, creating innovative blockchain-based health tracking with cryptocurrency rewards.",
  items: [
    {
      title: "Native Token",
      description: "Successfully created and launched native cryptocurrency token for fitness ecosystem",
      metric: "Token"
    },
    {
      title: "Tokenomics",
      description: "Designed comprehensive tokenomics model for sustainable cryptocurrency rewards",
      metric: "Model"
    },
    {
      title: "Beta Live",
      description: "Live beta platform successfully recording health data to blockchain",
      metric: "Beta"
    },
    {
      title: "Crypto Rewards",
      description: "Users actively earning cryptocurrency through fitness activities",
      metric: "Active"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png"
};

export default function BFITWeb3Luxury() {
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

        <CaseHeroLuxury
          title="BFIT by Fitlink"
          subtitle="Web 3.0 Fitness Revolution"
          description="Blockchain-powered fitness app with native token, cryptocurrency rewards, and health data recorded to blockchain"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png"
          logo="https://img.icons8.com/color/96/blockchain-technology.png"
          logoInvert={false}
          industry="Web3 & Fitness"
          timeline="10 months"
          teamSize="15 Web3 specialists"
          stats={[
            { label: 'Technology', value: 'Web3', color: 'text-white' },
            { label: 'Duration', value: '10mo', color: 'text-white' },
            { label: 'Team Size', value: '15', color: 'text-white' },
            { label: 'Status', value: 'Beta', color: 'text-white' }
          ]}
          prevCase={{
            title: "DoH Health",
            path: "/case-study/doh-health"
          }}
          nextCase={{
            title: "Arabian Malls",
            path: "/case-study/arabian-malls"
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
          secondaryImage={benefits.secondaryImage}
        />

        <FooterLuxury
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
