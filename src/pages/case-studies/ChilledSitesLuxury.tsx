import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

const technologies = [
  'Supabase',
  'Next.js',
  'Tailwind CSS',
  'Mamopay',
  'OpenAI',
  'Claude AI',
  'Claude Code'
];

const features = [
  'AI Website Generation',
  'Prompt-to-Website',
  'Image-to-Website',
  'Email-to-Website',
  'Built-in Hosting',
  'SEO Optimization',
  'Analytics Dashboard',
  'Form Builder',
  'Real-time Editing',
  'Custom Domains'
];

const challenge = {
  title: "The Website Creation Bottleneck",
  description: "Most small businesses and founders struggle with the time, cost, and creativity needed to launch a professional website.",
  points: [
    'Traditional template builders feel generic and limited, while custom agencies cost £5,000+ and take weeks',
    'Technical barriers prevent non-developers from creating unique, professional sites',
    'Time-consuming setup and configuration processes slow down launch speed',
    'Lack of integrated hosting, SEO, and analytics solutions requiring multiple platforms'
  ]
};

const solution = {
  title: "AI-First Website Generation Platform",
  description: "Built Chilled Sites, an AI-first platform that generates unique websites from simple inputs like a prompt, image, or email. Users can edit, publish, and grow their site with built-in hosting, SEO, and analytics.",
  approach: [
    'Developed AI models that understand design intent from minimal input',
    'Created prompt-to-website, image-to-website, and email-to-website workflows',
    'Built integrated hosting infrastructure with automatic deployment',
    'Implemented real-time editing with AI-powered suggestions',
    'Added comprehensive SEO optimization and analytics tracking',
    'Designed token-based system for scalable AI generation'
  ],
  outcome: "Launched a complete AI website builder that enables anyone to create professional websites in minutes, not weeks, with full hosting and growth tools included. Platform serves 1000+ active users who have built 2500+ websites.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/canvas.png",
  technologies,
  features
};

const benefits = {
  title: "Transforming Website Creation",
  description: "Chilled Sites revolutionizes how websites are built, making professional web presence accessible to everyone at a fraction of traditional costs.",
  items: [
    {
      title: "Lightning Fast Creation",
      description: "Generate and launch professional websites in under 10 minutes instead of weeks",
      metric: "<10min"
    },
    {
      title: "Massive Cost Savings",
      description: "Save thousands compared to traditional agency builds",
      metric: "£5K+"
    },
    {
      title: "Growing User Base",
      description: "1000+ active users and 2500+ websites successfully built and deployed",
      metric: "2500+"
    },
    {
      title: "Agency Adoption",
      description: "Professional agencies use Chilled Sites to accelerate client delivery",
      metric: "Agencies"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/dashboard.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/workflow.png"
};

export default function ChilledSitesLuxury() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Chilled Sites Case Study | AI Website Builder Platform</title>
          <meta name="description" content="How we built Chilled Sites - an AI-powered website builder that creates professional websites from prompts, photos, or emails in under 10 minutes." />
          <meta name="keywords" content="AI website builder, no-code platform, website generation, AI development, SaaS case study" />
          <meta property="og:title" content="Chilled Sites Case Study | AI Website Builder" />
          <meta property="og:description" content="AI-powered website builder that turns prompts into professional websites in minutes." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chilled Sites Case Study | AI Website Builder" />
          <meta name="twitter:description" content="AI-powered website builder that turns prompts into professional websites in minutes." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/chilled-sites" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Chilled Sites Case Study | AI Website Builder Platform",
              "description": "How we built Chilled Sites - an AI-powered website builder that creates professional websites from prompts, photos, or emails in under 10 minutes.",
              "image": "https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites.png",
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
                { "@type": "ListItem", "position": 3, "name": "Chilled Sites", "item": "https://p0stman.com/case-study/chilled-sites" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Chilled Sites"
          subtitle="AI Website Builder"
          description="AI-powered website builder that turns a prompt, photo, or email into a fully hosted website in minutes — complete with SEO, analytics, and forms"
          backgroundVideo="https://videos.pexels.com/video-files/3995973/3995973-uhd_2560_1440_25fps.mp4"
          logo="https://chilledsites.com/images/logo.svg"
          logoInvert={false}
          industry="SaaS & No-Code"
          timeline="Ongoing"
          teamSize="Solo + AI"
          stats={[
            { label: 'Time to Launch', value: '<10min', color: 'text-white' },
            { label: 'Cost Savings', value: '£5K+', color: 'text-white' },
            { label: 'Active Users', value: '1000+', color: 'text-white' },
            { label: 'Websites Built', value: '2500+', color: 'text-white' }
          ]}
          liveUrl="https://chilledsites.com"
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Rhythm",
            path: "/case-study/rhythm"
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
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Rhythm",
            path: "/case-study/rhythm"
          }}
        />
      </div>
    </HelmetProvider>
  );
}
