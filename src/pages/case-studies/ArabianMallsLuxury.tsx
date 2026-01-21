import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

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

const challenge = {
  title: "Premium Brand Digital Elevation",
  description: "Arabian Center, part of the prestigious Al-Futtaim Group, needed a website redesign that matched their premium brand positioning.",
  points: [
    'Enhance user experience across all digital touchpoints',
    'Enable comprehensive content management capabilities',
    'Maintain high-end, premium brand feel throughout',
    'Facilitate improved content discovery for visitors'
  ]
};

const solution = {
  title: "Premium Design Excellence",
  description: "Created a modern palette inspired by the Arabian Center brand, experimented with various high-end design styles, and wireframed the entire website to ensure seamless user journeys.",
  approach: [
    'Created modern palette inspired by brand identity',
    'Experimented with various high-end design styles',
    'Wireframed entire website for seamless journeys',
    'Developed responsive website with custom CMS',
    'Applied premium design style throughout',
    'Focused on content management and discovery'
  ],
  outcome: "The redesigned website significantly improved the experience for both the client and their visitors, receiving high praise for aesthetic appeal and usability.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter2.png",
  technologies,
  features
};

const benefits = {
  title: "Premium Brand Success",
  description: "Delivered a premium digital experience that elevated the Al-Futtaim Group brand while providing practical content management capabilities.",
  items: [
    {
      title: "Enhanced UX",
      description: "Significantly improved experience for clients and website visitors",
      metric: "High"
    },
    {
      title: "Aesthetic Excellence",
      description: "Received high praise for visual design and premium brand feel",
      metric: "Praised"
    },
    {
      title: "Custom CMS",
      description: "Delivered tailored content management system for brand needs",
      metric: "Custom"
    },
    {
      title: "Premium Feel",
      description: "Successfully maintained and enhanced high-end brand positioning",
      metric: "Premium"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png"
};

export default function ArabianMallsLuxury() {
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Arabian Center Case Study | Premium Website Redesign",
              "description": "Redesigned Arabian Center website with custom CMS, enhancing premium brand feel and receiving high praise for design excellence.",
              "image": "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png",
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
                { "@type": "ListItem", "position": 3, "name": "Arabian Center", "item": "https://p0stman.com/case-study/arabian-center" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Arabian Center"
          subtitle="Al-Futtaim Group Premium Experience"
          description="Redesigned website with custom CMS, enhancing premium brand feel and receiving high praise for aesthetic excellence"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png"
          logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png"
          logoInvert={false}
          industry="Retail & Real Estate"
          timeline="4 months"
          teamSize="8 designers & developers"
          stats={[
            { label: 'Client', value: 'Al-Futtaim', color: 'text-white' },
            { label: 'Duration', value: '4mo', color: 'text-white' },
            { label: 'Team Size', value: '8', color: 'text-white' },
            { label: 'CMS', value: 'Custom', color: 'text-white' }
          ]}
          prevCase={{
            title: "BFIT Web3",
            path: "/case-study/bfit-web3"
          }}
          nextCase={{
            title: "Genieology",
            path: "/case-study/genieology"
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
