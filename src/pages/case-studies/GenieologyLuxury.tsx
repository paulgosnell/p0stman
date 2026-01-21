import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

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

const challenge = {
  title: "Creative Agency Evolution",
  description: "Genieology's outdated website no longer reflected their growth as a creative agency. They needed a modern digital presence.",
  points: [
    'Redesign outdated website to reflect agency growth',
    'Enhance content management capabilities significantly',
    'Modernize brand presentation for competitive market',
    'Increase sales conversion potential through design'
  ]
};

const solution = {
  title: "Research-Driven Excellence",
  description: "Conducted extensive research and created comprehensive mood boards to understand the client's vision, then designed multiple iterations before finalizing the optimal solution.",
  approach: [
    'Conducted extensive research on client needs and market',
    'Created comprehensive mood boards for design direction',
    'Designed multiple iterations of homepage and pages',
    'Built responsive website with API-powered CMS',
    'Fine-tuned animations and transitions for enhanced UX',
    'Optimized for sales conversions and engagement'
  ],
  outcome: "The revamped website was an instant success with the client and visitors, contributing to increased sales conversions and perfectly representing the agency's capabilities.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/genie2.png",
  technologies,
  features
};

const benefits = {
  title: "Instant Success",
  description: "Delivered a modern, conversion-optimized website that immediately improved the agency's digital presence and business results.",
  items: [
    {
      title: "Instant Success",
      description: "Website was immediately successful with both client and their visitors",
      metric: "Instant"
    },
    {
      title: "Sales Increase",
      description: "Contributed to measurable increase in sales conversions for agency",
      metric: "Up"
    },
    {
      title: "Enhanced UX",
      description: "Fine-tuned animations significantly improved user experience",
      metric: "Enhanced"
    },
    {
      title: "API CMS",
      description: "API-powered content management provided flexible content control",
      metric: "API"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/genie3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png"
};

export default function GenieologyLuxury() {
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Genieology Case Study | API-Powered CMS Website Redesign",
              "description": "Redesigned Genieology's website with API-powered CMS, achieving instant success and increased sales conversions.",
              "image": "https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png",
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
                { "@type": "ListItem", "position": 3, "name": "Genieology", "item": "https://p0stman.com/case-study/genieology" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Genieology"
          subtitle="Creative Agency Transformation"
          description="Responsive website with API-powered CMS achieving instant success and increased sales conversions"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png"
          logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/genieology-logo.webp"
          logoInvert={false}
          industry="Digital Agency & Design"
          timeline="3 months"
          teamSize="6 specialists"
          stats={[
            { label: 'Success', value: 'Instant', color: 'text-white' },
            { label: 'Duration', value: '3mo', color: 'text-white' },
            { label: 'Team Size', value: '6', color: 'text-white' },
            { label: 'CMS', value: 'API', color: 'text-white' }
          ]}
          prevCase={{
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
            title: "Arabian Malls",
            path: "/case-study/arabian-malls"
          }}
          nextCase={{
            title: "YachtOS Command",
            path: "/case-study/yachtos"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
