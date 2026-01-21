import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'React & TypeScript',
  'Node.js',
  'Azure Cloud',
  'Design Systems',
  'Microservices',
  'DevOps & CI/CD'
];

const features = [
  'Innovation Lab Platform',
  'Multi-department Coordination',
  'Enterprise-grade Architecture',
  'Unified Design Systems',
  'Scalable Infrastructure',
  'Cross-functional Team Management'
];

const challenge = {
  title: "From Innovation Lab to Enterprise Transformation",
  description: "First Abu Dhabi Bank required a partner who could start small with their Innovation Lab and prove capability before scaling to enterprise-wide digital transformation.",
  points: [
    'Begin with a focused Innovation Lab project to demonstrate capability',
    'Prove exceptional value to gain trust from other bank departments',
    'Scale from a single pilot to enterprise-wide transformation',
    'Navigate complex organizational structures across multiple departments',
    'Maintain stringent security and regulatory compliance standards',
    'Build sustainable, reusable systems for long-term value'
  ]
};

const solution = {
  title: "Strategic Scaling Through Excellence",
  description: "We delivered an exceptional initial Innovation Lab project that captivated stakeholders across the organization, opening doors to significant expansion opportunities and establishing a transformative 18-month partnership.",
  approach: [
    'Delivered a standout Innovation Lab project that exceeded expectations',
    'Demonstrated measurable results that impressed leadership across departments',
    'Systematically expanded scope as trust and capability were proven',
    'Assembled and coordinated a team of 40-50 specialists over 18 months',
    'Architected and delivered multiple enterprise digital platforms',
    'Established sustainable partnerships across various bank divisions'
  ],
  outcome: "Created an ongoing, mutually beneficial partnership with First Abu Dhabi Bank, contributing significantly to their digital transformation journey while establishing one of the region's most significant digital innovation programs.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab2.png",
  technologies,
  features
};

const benefits = {
  title: "Transformative Enterprise Impact",
  description: "What began as a single innovation lab initiative evolved into one of the Middle East region's most significant digital transformation programs, delivering measurable impact across every dimension.",
  items: [
    {
      title: "Unprecedented Team Scaling",
      description: "Successfully grew from a single pilot project to coordinating 40+ expert team members across multiple specializations",
      metric: "1 → 40+"
    },
    {
      title: "Long-term Strategic Partnership",
      description: "Sustained 18-month engagement with continuous innovation delivery and expanding scope",
      metric: "18 Months"
    },
    {
      title: "Operational Efficiency",
      description: "Improved development efficiency through standardization, reusable systems, and unified design language",
      metric: "+60%"
    },
    {
      title: "Cross-Department Success",
      description: "Expanded from Innovation Lab to multiple bank departments with consistent, high-quality delivery",
      metric: "Multi-Dept"
    },
    {
      title: "Enterprise Platforms Delivered",
      description: "Launched multiple production-grade platforms serving thousands of users",
      metric: "Multiple"
    },
    {
      title: "Regional Significance",
      description: "Established as one of the region's largest and most successful digital transformations",
      metric: "Top Tier"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab3.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png"
};

export default function FABBankLuxury() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>First Abu Dhabi Bank — Digital Transformation | Case Study</title>
          <meta name="description" content="From Innovation Lab pilot to 18-month enterprise transformation with 40+ experts. A flagship digital transformation program for the Middle East region's leading bank." />
          <meta name="keywords" content="digital transformation, enterprise banking, innovation lab, team scaling, FAB bank, enterprise architecture" />
          <meta property="og:title" content="FAB Bank Digital Transformation — Enterprise Case Study" />
          <meta property="og:description" content="How we scaled from Innovation Lab project to 18-month enterprise transformation with 40+ experts at First Abu Dhabi Bank." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FAB Bank Digital Transformation Case Study" />
          <meta name="twitter:description" content="Enterprise transformation success story with First Abu Dhabi Bank." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/fab-bank" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "FAB Bank Case Study | Enterprise Digital Transformation",
              "description": "From Innovation Lab pilot to 18-month enterprise transformation with 40+ experts. A flagship digital transformation program for the Middle East region's leading bank.",
              "image": "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png",
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
                { "@type": "ListItem", "position": 3, "name": "FAB Bank", "item": "https://p0stman.com/case-study/fab-bank" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="First Abu Dhabi Bank"
          subtitle="Enterprise Digital Transformation"
          description="From Innovation Lab project to 18-month enterprise transformation with 40+ experts across multiple departments"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
          industry="Banking & Finance"
          timeline="18 months"
          teamSize="40+ experts"
          stats={[
            { label: 'Team Growth', value: '1 → 40+', color: 'text-white' },
            { label: 'Duration', value: '18mo', color: 'text-white' },
            { label: 'Efficiency', value: '+60%', color: 'text-white' },
            { label: 'Departments', value: 'Multiple', color: 'text-white' }
          ]}
          nextCase={{
            title: "Al Arabiya",
            path: "/case-study/al-arabiya"
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
          nextCase={{
            title: "Al Arabiya",
            path: "/case-study/al-arabiya"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
