import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'React & Next.js',
  'GraphQL & APIs',
  'Content Management System',
  'Responsive Design',
  'Real-time Updates',
  'Multi-platform Architecture'
];

const features = [
  'Personalized News Experience',
  'Customizable Interface',
  'Multi-platform Support',
  'Real-time Content Management',
  'International Team Coordination',
  'COVID-19 Remote Delivery'
];

const results = [
  'Successfully delivered complete platform redesign during pandemic',
  'Led global team across multiple time zones and lockdowns',
  'Created future-ready, customizable multi-platform experience',
  'Achieved high user satisfaction and stakeholder approval',
  'Improved page load speeds by 40%',
  'Enhanced brand loyalty among viewers'
];

const challenge = {
  title: "News Platform Modernization During Crisis",
  description: "Al Arabiya needed to update their digital presence to align with rebranding efforts and meet evolving news consumption habits during unprecedented global events:",
  points: [
    'Modernize digital presence during global pandemic',
    'Align with comprehensive rebranding efforts',
    'Meet evolving news consumption habits',
    'Coordinate international team remotely',
    'Deliver during COVID-19 constraints',
    'Create scalable, future-ready platform'
  ]
};

const solution = {
  title: "Global Team Leadership and Platform Innovation",
  description: "Worked closely with senior stakeholders and led a diverse, international team of 20, including UX/UI designers, web/mobile developers, testers, and content managers.",
  approach: [
    'Led international team of 20 across multiple disciplines',
    'Coordinated with in-house teams and external IBM resources',
    'Adapted swiftly to remote work due to COVID-19',
    'Created personalized and customizable news web experience',
    'Redesigned platform from ground up for all platforms',
    'Ensured continuity and successful delivery during crisis'
  ],
  outcome: "Successfully launched a modern, user-centric digital presence for Al Arabiya, earning praise from the team and stakeholders, and enhancing brand loyalty among viewers."
};

const benefits = {
  title: "Crisis Leadership and Digital Excellence",
  description: "Demonstrated exceptional leadership during challenging times while delivering a world-class news platform transformation.",
  items: [
    {
      title: "International Team Leadership",
      description: "Successfully led diverse team of 20 across multiple time zones during pandemic",
      metric: "20 team members"
    },
    {
      title: "Performance Improvement",
      description: "Achieved significant page load speed improvements for better user experience",
      metric: "40% faster loading"
    },
    {
      title: "Remote Delivery Success",
      description: "Adapted to COVID-19 constraints while maintaining delivery excellence",
      metric: "100% remote delivery"
    },
    {
      title: "Stakeholder Satisfaction",
      description: "Earned high praise from team and stakeholders for exceptional results",
      metric: "High satisfaction"
    }
  ]
};

export default function AlArabiya() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Al Arabiya News Platform | International Team Leadership Case Study</title>
          <meta name="description" content="Led international team of 20 to modernize Al Arabiya's news platform during COVID-19, achieving 40% performance improvement." />
          <meta name="keywords" content="news platform, international team, COVID-19 delivery, Al Arabiya, remote leadership" />
          <meta property="og:title" content="Al Arabiya News Platform Transformation" />
          <meta property="og:description" content="International team leadership during COVID-19 for major news platform redesign." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Al Arabiya News Platform Case Study" />
          <meta name="twitter:description" content="Leading international teams during crisis for digital transformation." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/al-arabiya" />
        </Helmet>
      <CaseHero
        title="Al Arabiya"
        subtitle="News Platform Modernization"
        description="Led international team of 20 to modernize leading news brand during COVID-19, creating personalized news experience from ground up"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
        industry="Media & Broadcasting"
        timeline="8 months"
        teamSize="20 international team"
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia3.png"
      />
      <Footer 
        prevCase={{
          title: "FAB Bank",
          path: "/case-study/fab-bank"
        }}
        nextCase={{
          title: "Etihad Airways",
          path: "/case-study/etihad-airways"
        }}
      />
      </div>
    </HelmetProvider>
  );
}