import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Mobile App Development',
  'Health APIs Integration',
  'Google Fit SDK',
  'Fitbit API',
  'Wellness Tracking',
  'Government Compliance'
];

const features = [
  'Personalized Wellness App',
  'Google Fit Integration',
  'Fitbit Compatibility',
  'Daily Steps Tracking',
  'Mindfulness Minutes',
  'Abu Dhabi Residents Focus'
];

const challenge = {
  title: "Exceeding Government Standards",
  description: "Partnered with IBM to deliver a standout health app for the Department of Health Abu Dhabi that would surpass existing market offerings.",
  points: [
    'Build standout app for government health initiative',
    'Partner effectively with IBM on high-profile delivery',
    'Exceed existing market offerings and standards',
    'Integrate with popular fitness platforms seamlessly'
  ]
};

const solution = {
  title: "Market-Leading Innovation",
  description: "We proposed ambitious, innovative features to leapfrog existing market offerings, with a senior development team leading delivery and coordinating offshore resources.",
  approach: [
    'Proposed ambitious features exceeding market standards',
    'Assembled senior development team for leadership',
    'Coordinated effectively with offshore development resources',
    'Integrated seamlessly with Google Fit and Fitbit',
    'Focused on personalized wellness experience',
    'Delivered comprehensive health tracking capabilities'
  ],
  outcome: "The app became a valuable wellness resource for Abu Dhabi residents, solidifying our ability to exceed market standards and deliver excellence on government projects.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh2.png",
  technologies,
  features
};

const benefits = {
  title: "Government Excellence",
  description: "Delivered a market-leading health app that serves as a valuable resource while demonstrating excellence in government partnership.",
  items: [
    {
      title: "IBM Partnership",
      description: "Successfully collaborated with IBM on high-profile government project",
      metric: "Strategic"
    },
    {
      title: "Government Success",
      description: "Delivered excellence for Department of Health Abu Dhabi",
      metric: "DoH"
    },
    {
      title: "Market-Leading",
      description: "Exceeded existing market offerings with innovative wellness features",
      metric: "Above"
    },
    {
      title: "Multi-Platform",
      description: "Seamlessly integrated with Google Fit and Fitbit for comprehensive tracking",
      metric: "2+"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png"
};

export default function DoHHealthLuxury() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>My Health Coach DoH | Government Health App Case Study</title>
          <meta name="description" content="Partnered with IBM to build standout health app for Abu Dhabi Department of Health, exceeding market standards." />
          <meta name="keywords" content="government health app, DoH Abu Dhabi, IBM partnership, wellness app, health tracking" />
          <meta property="og:title" content="My Health Coach - Government Health App Success" />
          <meta property="og:description" content="IBM partnership delivering market-leading health app for Abu Dhabi government." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DoH Health App Case Study" />
          <meta name="twitter:description" content="Government health app exceeding market standards with IBM partnership." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/doh-health" />
        </Helmet>

        <CaseHeroLuxury
          title="My Health Coach"
          subtitle="Government Health App"
          description="Partnered with IBM to build standout health & fitness app for Abu Dhabi residents, exceeding market standards"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png"
          logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png"
          logoInvert={false}
          industry="Government & Healthcare"
          timeline="6 months"
          teamSize="12 specialists"
          stats={[
            { label: 'Partnership', value: 'IBM', color: 'text-white' },
            { label: 'Duration', value: '6mo', color: 'text-white' },
            { label: 'Team Size', value: '12', color: 'text-white' },
            { label: 'Platforms', value: '2+', color: 'text-white' }
          ]}
          prevCase={{
            title: "Etihad Airways",
            path: "/case-study/etihad-airways"
          }}
          nextCase={{
            title: "BFIT Web3",
            path: "/case-study/bfit-web3"
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
            title: "Etihad Airways",
            path: "/case-study/etihad-airways"
          }}
          nextCase={{
            title: "BFIT Web3",
            path: "/case-study/bfit-web3"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
