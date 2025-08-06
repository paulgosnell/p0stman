import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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
    'Manual scheduling processes consuming staff time',
    'Lack of integrated client information systems',
    'Inefficient payment processing workflows',
    'Limited data insights for business decisions',
    'Difficult appointment tracking and management',
    'Poor client communication systems'
  ]
};

const solution = {
  title: "Comprehensive Clinic Management Platform",
  description: "Clinic Book revolutionizes appointment and client management with an AI-powered platform that streamlines operations while enhancing customer experience.",
  image: clinicBookDashboard,
  secondaryImage: clinicBookWebsite,
  liveUrl: "https://clinicbook.co.uk"
};

const benefits = {
  title: "Transforming Clinic Operations",
  description: "Clinic Book delivers measurable improvements across all aspects of clinic management:",
  image: clinicBookWebsite,
  secondaryImage: clinicBookDashboard,
  points: [
    '65% reduction in administrative workload',
    'Increased appointment attendance rates',
    'Improved client satisfaction scores',
    'Enhanced cash flow with integrated payments',
    'Data-driven business insights',
    'Streamlined business operations',
    'Reduced no-shows with automatic reminders',
    'Better client relationship management'
  ]
};

export default function ClinicBookCase() {
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
        </Helmet>
        
        <CaseHero
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
        
        <Challenge {...challenge} />
        
        <Solution
          {...solution}
          technologies={technologies}
          features={features}
          aiIntegrations={aiIntegrations}
        />
        
        <Benefits {...benefits} />
        
        <Footer
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