import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

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

const challenge = {
  title: "Leading Through Crisis",
  description: "Al Arabiya needed to modernize their digital presence during unprecedented global events while coordinating an international team remotely.",
  points: [
    'Lead diverse international team of 20 across multiple time zones',
    'Deliver complete platform redesign during COVID-19 pandemic',
    'Align digital presence with comprehensive rebranding efforts',
    'Meet evolving news consumption habits and user expectations'
  ]
};

const solution = {
  title: "Global Excellence Under Pressure",
  description: "Led a diverse international team of 20 specialists including UX/UI designers, web/mobile developers, testers, and content managers—coordinating with in-house teams and external IBM resources while adapting to remote work constraints.",
  approach: [
    'Assembled and led international team across disciplines and time zones',
    'Adapted swiftly to 100% remote delivery during pandemic',
    'Created personalized and customizable news experience',
    'Redesigned platform from ground up for all digital touchpoints',
    'Ensured continuity and excellence during unprecedented crisis'
  ],
  outcome: "Successfully launched a modern, user-centric digital presence for Al Arabiya, earning praise from stakeholders and enhancing brand loyalty among viewers worldwide.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia2.png",
  technologies,
  features
};

const benefits = {
  title: "Crisis Leadership, World-Class Results",
  description: "Demonstrated exceptional leadership during challenging times while delivering a transformative news platform that set new standards.",
  items: [
    {
      title: "International Leadership",
      description: "Successfully led diverse team of 20 across multiple time zones during pandemic constraints",
      metric: "20"
    },
    {
      title: "Performance Gains",
      description: "Achieved significant improvements in page load speeds for enhanced user experience",
      metric: "+40%"
    },
    {
      title: "Remote Excellence",
      description: "Adapted to COVID-19 and delivered 100% remotely without compromising quality",
      metric: "100%"
    },
    {
      title: "Stakeholder Praise",
      description: "Earned high satisfaction from team and stakeholders for exceptional results",
      metric: "High"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png"
};

export default function AlArabiyaLuxury() {
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Al Arabiya News Platform | International Team Leadership Case Study",
              "description": "Led international team of 20 to modernize Al Arabiya's news platform during COVID-19, achieving 40% performance improvement.",
              "image": "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png",
              "author": { "@type": "Person", "name": "Paul Gosnell" },
              "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
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
                { "@type": "ListItem", "position": 3, "name": "Al Arabiya", "item": "https://p0stman.com/case-study/al-arabiya" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Al Arabiya"
          subtitle="News Platform Modernization"
          description="Led international team of 20 to modernize leading news brand during COVID-19, creating personalized experience from ground up"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
          industry="Media & Broadcasting"
          timeline="8 months"
          teamSize="20 international team"
          stats={[
            { label: 'Team Size', value: '20', color: 'text-white' },
            { label: 'Duration', value: '8mo', color: 'text-white' },
            { label: 'Performance', value: '+40%', color: 'text-white' },
            { label: 'Remote', value: '100%', color: 'text-white' }
          ]}
          prevCase={{
            title: "First Abu Dhabi Bank",
            path: "/case-study/fab-bank"
          }}
          nextCase={{
            title: "Etihad Airways",
            path: "/case-study/etihad-airways"
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
            title: "First Abu Dhabi Bank",
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
