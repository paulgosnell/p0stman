import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

import clinicBookDashboard from '../../assets/images/case-studies/clinicbook-dashboard.png';
import clinicBookWebsite from '../../assets/images/case-studies/clinicbook-website.png';

const technologies = [
  'React & TypeScript',
  'Node.js & Express',
  'PostgreSQL',
  'TailwindCSS',
  'Stripe Payments',
  'AWS Services'
];

const features = [
  'AI-powered Scheduling',
  'Client Management',
  'Automated Reminders',
  'Secure Payment Processing',
  'Detailed Analytics',
  'Mobile-Responsive Design'
];

const aiIntegrations = [
  'Smart Appointment Scheduling',
  'Automated Reminders',
  'Customer Insights',
  'Demand Forecasting',
  'Business Analytics',
  'Performance Optimization'
];

const challenge = {
  title: "Modern Clinic Management Challenges",
  description: "Traditional appointment and client management systems create significant barriers for clinics trying to optimize operations:",
  points: [
    {
      title: "Manual Scheduling Overhead",
      description: "Staff time consumed by manual scheduling processes and appointment tracking, reducing operational efficiency"
    },
    {
      title: "Fragmented Systems",
      description: "Lack of integrated client information systems and inefficient payment processing workflows"
    },
    {
      title: "Limited Business Intelligence",
      description: "Insufficient data insights preventing informed business decisions and performance optimization"
    },
    {
      title: "Poor Client Communication",
      description: "Inadequate client communication systems leading to high no-show rates and reduced satisfaction"
    }
  ]
};

const solution = {
  title: "Comprehensive Clinic Management Platform",
  description: "Clinic Book revolutionizes appointment and client management with an AI-powered platform that streamlines operations while enhancing customer experience.",
  image: clinicBookDashboard,
  secondaryImage: clinicBookWebsite,
  liveUrl: "https://clinicbook.co.uk",
  technologies,
  features,
  aiIntegrations
};

const benefits = {
  title: "Transforming Clinic Operations",
  description: "Clinic Book delivers measurable improvements across all aspects of clinic management:",
  image: clinicBookWebsite,
  secondaryImage: clinicBookDashboard,
  items: [
    {
      title: "Administrative Efficiency",
      description: "Streamlined business operations with automated scheduling and client management systems",
      metric: "65% reduction",
      metricLabel: "in administrative workload"
    },
    {
      title: "Enhanced Attendance",
      description: "Reduced no-shows with automatic reminders and improved client satisfaction scores",
      metric: "Higher attendance",
      metricLabel: "and satisfaction rates"
    },
    {
      title: "Improved Cash Flow",
      description: "Enhanced cash flow with integrated payments and secure payment processing",
      metric: "Faster payments",
      metricLabel: "and better tracking"
    },
    {
      title: "Data-Driven Insights",
      description: "Better client relationship management through comprehensive business analytics and insights",
      metric: "Actionable data",
      metricLabel: "for smart decisions"
    }
  ]
};

export default function ClinicBookLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Clinic Book Case Study | AI-Powered Appointment Platform</title>
          <meta name="description" content="See how we built a complete clinic appointment platform enabling businesses to streamline operations, enhance customer experience, and gain data-driven insights." />
          <meta name="keywords" content="clinic management, appointment scheduling, AI scheduling, business analytics, case study" />
          <meta property="og:title" content="Clinic Book Case Study | AI-Powered Appointment Platform" />
          <meta property="og:description" content="Complete clinic management platform built using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={clinicBookDashboard} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Clinic Book Case Study | AI-Powered Appointment Platform" />
          <meta name="twitter:description" content="Complete clinic management platform built using AI-powered development." />
          <meta name="twitter:image" content={clinicBookDashboard} />
          <link rel="canonical" href="https://p0stman.com/case-study/clinic-book" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Clinic Book Case Study | AI-Powered Appointment Platform",
              "description": "See how we built a complete clinic appointment platform enabling businesses to streamline operations, enhance customer experience, and gain data-driven insights.",
              "image": "https://p0stman.com/assets/clinicbook-dashboard.png",
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
                { "@type": "ListItem", "position": 3, "name": "Clinic Book", "item": "https://p0stman.com/case-study/clinic-book" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Clinic Book"
          description="AI-powered clinic and appointment management platform for modern businesses."
          backgroundVideo="https://cdn.pixabay.com/video/2022/08/21/128648-741747833_large.mp4"
          overlayColor="from-teal-900/70 to-blue-900/50"
          stats={[
            { label: 'Build Time', value: '4-6 weeks' },
            { label: 'Team Size', value: '1' },
            { label: 'Build Tool', value: 'Bolt' },
            { label: 'Cost Savings', value: '$20k' }
          ]}
        />

        <ChallengeLuxury {...challenge} />

        <SolutionLuxury {...solution} />

        <BenefitsLuxury {...benefits} />

        <FooterLuxury
          prevCase={{
            title: "Fitlink",
            path: "/case-study/fitlink"
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
