import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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

const results = [
  'Successfully launched standout health app for government',
  'Provided valuable wellness resource for Abu Dhabi residents',
  'Exceeded market standards in app development',
  'Integrated with major fitness platforms',
  'Delivered ambitious, innovative features',
  'Solidified partnership with IBM and DoH'
];

const challenge = {
  title: "Government Health App Excellence",
  description: "Partnered with IBM, we were tasked by the Department of Health (DoH), Abu Dhabi, to build a standout health and fitness app for local residents:",
  points: [
    'Build standout app for government health initiative',
    'Partner effectively with IBM on delivery',
    'Serve Abu Dhabi residents with quality solution',
    'Exceed existing market offerings',
    'Integrate with popular fitness platforms',
    'Meet government standards and compliance'
  ]
};

const solution = {
  title: "Innovative Health Platform Development",
  description: "We suggested ambitious, innovative features to leapfrog existing market offerings, with a senior development team leading delivery and coordinating with offshore resources.",
  approach: [
    'Proposed ambitious features to exceed market standards',
    'Assembled senior development team for leadership',
    'Coordinated effectively with offshore development team',
    'Integrated with Google Fit and Fitbit platforms',
    'Focused on personalized wellness experience',
    'Delivered comprehensive health tracking capabilities'
  ],
  outcome: "The app was a hit, providing a valuable wellness resource for Abu Dhabi residents, and solidifying our ability to exceed market standards in app development."
};

const benefits = {
  title: "Government Partnership Success",
  description: "Delivered a market-leading health app that serves as a valuable resource for Abu Dhabi residents while demonstrating excellence in government project delivery.",
  items: [
    {
      title: "IBM Partnership",
      description: "Successfully collaborated with IBM on high-profile government project",
      metric: "Strategic partnership"
    },
    {
      title: "Government Client Success",
      description: "Delivered excellence for Department of Health Abu Dhabi",
      metric: "Government approval"
    },
    {
      title: "Market-Leading Features",
      description: "Exceeded existing market offerings with innovative wellness features",
      metric: "Above market standards"
    },
    {
      title: "Platform Integration",
      description: "Seamlessly integrated with Google Fit and Fitbit for comprehensive tracking",
      metric: "Multi-platform support"
    }
  ]
};

export default function DoHHealth() {
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
      <CaseHero
        title="My Health Coach (DoH)"
        subtitle="Government Health App"
        description="Partnered with IBM to build standout health & fitness app for Abu Dhabi residents, exceeding market standards"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png"
        logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png"
        industry="Government & Healthcare"
        timeline="6 months"
        teamSize="12 specialists"
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh3.png"
      />
      <Footer 
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