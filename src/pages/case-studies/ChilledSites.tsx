import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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

const results = [
  'Users launched live sites in under 10 minutes',
  'Agencies adopted Chilled Sites to speed up client delivery',
  'Delivered a full infrastructure layer (tokens, hosting, analytics, SEO) around the AI build',
  '1000+ active users successfully launched websites',
  '2500+ websites built and deployed',
  'Cost savings of £5,000+ compared to traditional agency builds',
  'Reduced website creation time from weeks to minutes'
];

const challenge = {
  title: "The Website Creation Bottleneck",
  description: "Most small businesses and founders struggle with the time, cost, and creativity needed to launch a professional website:",
  points: [
    'Traditional template builders feel generic and limited',
    'Custom development agencies are expensive (£5,000+) and slow (weeks/months)',
    'Technical barriers prevent non-developers from creating unique sites',
    'Lack of integrated hosting, SEO, and analytics solutions',
    'Creative block when trying to design from scratch',
    'Time-consuming setup and configuration processes'
  ]
};

const solution = {
  title: "AI-First Website Generation Platform",
  description: "We built Chilled Sites, an AI-first platform that generates unique websites from simple inputs like a prompt, image, or email. Users can edit, publish, and grow their site with built-in hosting, SEO, and analytics.",
  approach: [
    'Developed AI models that understand design intent from minimal input',
    'Created prompt-to-website, image-to-website, and email-to-website workflows',
    'Built integrated hosting infrastructure with automatic deployment',
    'Implemented real-time editing with AI-powered suggestions',
    'Added comprehensive SEO optimization and analytics tracking',
    'Designed token-based system for scalable AI generation'
  ],
  outcome: "Launched a complete AI website builder that enables anyone to create professional websites in minutes, not weeks, with full hosting and growth tools included."
};

const benefits = {
  title: "Transforming Website Creation",
  description: "Chilled Sites revolutionizes how websites are built, making professional web presence accessible to everyone.",
  items: [
    {
      title: "Lightning Fast Creation",
      description: "Generate and launch professional websites in under 10 minutes",
      metric: "< 10 minutes"
    },
    {
      title: "Massive Cost Savings",
      description: "Save thousands compared to traditional agency builds",
      metric: "£5,000+ savings"
    },
    {
      title: "Growing User Base",
      description: "1000+ active users and 2500+ websites successfully built and deployed",
      metric: "1000+ users, 2500+ sites"
    },
    {
      title: "Agency Adoption",
      description: "Professional agencies use Chilled Sites to accelerate client delivery",
      metric: "Agency partnerships"
    }
  ]
};

export default function ChilledSites() {
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
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chilled Sites Case Study | AI Website Builder" />
          <meta name="twitter:description" content="AI-powered website builder that turns prompts into professional websites in minutes." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/chilled-sites" />
        </Helmet>
        
        <CaseHero
          title="Chilled Sites"
          subtitle="AI Website Builder"
          description="AI-powered website builder that turns a prompt, photo, or email into a fully hosted website in minutes — complete with SEO, analytics, and forms."
          backgroundVideo="https://videos.pexels.com/video-files/3995973/3995973-uhd_2560_1440_25fps.mp4"
          logo="https://chilledsites.com/images/logo.svg"
          logoInvert={false}
          theme="dark"
          overlayColor="from-blue-600/80 to-purple-600/60"
          stats={[
            { label: 'Time to First Site', value: '< 10 min', color: 'text-blue-400' },
            { label: 'Cost Savings', value: '£5,000+', color: 'text-green-400' },
            { label: 'Active Users', value: '1000+', color: 'text-purple-400' },
            { label: 'Websites Built', value: '2500+', color: 'text-cyan-400' }
          ]}
          technologies={technologies}
          features={features}
          liveUrl="https://chilledsites.com"
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Rhythm AI",
            path: "/case-study/rhythm"
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
          image="https://chilledsites.com/images/chilledsites-edit.png"
          technologies={technologies}
          features={features}
          liveUrl="https://chilledsites.com"
        />

        <Benefits
          title={benefits.title}
          description={benefits.description}
          items={benefits.items}
          points={results}
          image="https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png"
          secondaryImage="https://chilledsites.com/images/chilledsites-grow.png"
        />

        <Footer
          prevCase={{
            title: "Harmony",
            path: "/case-study/harmony"
          }}
          nextCase={{
            title: "Rhythm AI",
            path: "/case-study/rhythm"
          }}
        />
      </div>
    </HelmetProvider>
  );
}