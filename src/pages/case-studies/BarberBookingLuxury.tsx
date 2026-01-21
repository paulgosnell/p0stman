import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

import barberBookingWebsite from '../../assets/images/case-studies/barberflow-website.png';
import barberBookingDashboard from '../../assets/images/case-studies/barber-booking-dashboard1.png';

const technologies = [
  'React & TypeScript',
  'Node.js & Express',
  'PostgreSQL (Supabase)',
  'TailwindCSS',
  'Stripe Payments',
  'Netlify'
];

const features = [
  'Online Booking System',
  'Admin & Store Panels',
  'Client Management',
  'Loyalty Program',
  'Marketing Tools',
  'Analytics Dashboard'
];

const aiIntegrations = [
  'Smart Slot Recommendation',
  'Automated Notifications',
  'Customer Segmentation',
  'Demand Prediction',
  'Business Intelligence',
  'Revenue Optimization'
];

const challenge = {
  title: "Modernizing Barber Shop Management",
  description: "Traditional barber shops face significant operational challenges that limit growth and customer satisfaction:",
  points: [
    {
      title: 'Operational Inefficiency',
      description: 'Manual appointment booking and disconnected client management systems create bottlenecks and reduce productivity'
    },
    {
      title: 'Limited Digital Presence',
      description: 'Lack of online booking and service showcase prevents shops from reaching modern, tech-savvy customers'
    },
    {
      title: 'Poor Business Intelligence',
      description: 'No visibility into performance metrics, making it difficult to optimize operations and drive growth'
    },
    {
      title: 'Resource Management',
      description: 'Difficulty managing staff schedules, client retention tools, and inventory tracking across multiple locations'
    }
  ]
};

const solution = {
  title: "Comprehensive Barber Shop Management Platform",
  description: "Barber Booking System transforms the way barber shops operate with a complete platform for appointments, client management, and business analytics.",
  image: barberBookingDashboard,
  secondaryImage: "https://mediacdn.carrd.co/assets/images/image25.png",
  liveUrl: "#" // Replace with actual URL if available
};

const benefits = {
  title: "Revolutionizing Barber Shop Operations",
  description: "The Barber Booking System delivers significant improvements across all aspects of business operations:",
  image: barberBookingWebsite,
  secondaryImage: "https://mediacdn.carrd.co/assets/images/image25.png",
  items: [
    {
      metric: '40%',
      label: 'Increase in Bookings',
      description: 'Online appointment system drives significant growth in customer bookings with 24/7 availability'
    },
    {
      metric: '85%',
      label: 'Reduction in No-Shows',
      description: 'Automated reminders and confirmations dramatically decrease missed appointments and lost revenue'
    },
    {
      metric: '3x',
      label: 'Client Retention',
      description: 'Loyalty programs and personalized marketing campaigns keep customers coming back regularly'
    },
    {
      metric: '60%',
      label: 'Time Savings',
      description: 'Streamlined scheduling, inventory tracking, and reporting free up time for customer service'
    }
  ]
};

export default function BarberBookingLuxuryCase() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Barber Booking System | AI-Powered Salon Management</title>
          <meta name="description" content="See how we built a comprehensive barber booking system with AI-powered scheduling, client management, and business analytics for modern barber shops." />
          <meta name="keywords" content="barber booking, salon management, appointment scheduling, client management, case study" />
          <meta property="og:title" content="Barber Booking System | AI-Powered Salon Management" />
          <meta property="og:description" content="Comprehensive barber booking and management platform built using AI-powered development." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://mediacdn.carrd.co/assets/images/image24.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Barber Booking System | AI-Powered Salon Management" />
          <meta name="twitter:description" content="Comprehensive barber booking and management platform built using AI-powered development." />
          <meta name="twitter:image" content="https://mediacdn.carrd.co/assets/images/image24.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/barber-booking" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Barber Booking System | AI-Powered Salon Management",
              "description": "See how we built a comprehensive barber booking system with AI-powered scheduling, client management, and business analytics for modern barber shops.",
              "image": "https://mediacdn.carrd.co/assets/images/image24.png",
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
                { "@type": "ListItem", "position": 3, "name": "Barber Booking", "item": "https://p0stman.com/case-study/barber-booking" }
              ]
            })}
          </script>
        </Helmet>

        <CaseHeroLuxury
          title="Barber Booking System"
          description="AI-powered appointment and management platform for modern barber shops."
          backgroundVideo="https://cdn.pixabay.com/video/2020/12/06/58444-488804243_large.mp4"
          overlayColor="from-slate-900/70 to-blue-900/50"
          stats={[
            { label: 'Build Time', value: '6 weeks' },
            { label: 'Team Size', value: '1' },
            { label: 'Build Tool', value: 'Bolt' },
            { label: 'Cost Savings', value: '$25k' }
          ]}
          prevCase={{
            title: "Clinic Book",
            path: "/case-study/clinic-book"
          }}
          nextCase={{
            title: "Rhythm",
            path: "/case-study/rhythm"
          }}
        />

        <ChallengeLuxury {...challenge} />

        <SolutionLuxury
          {...solution}
          technologies={technologies}
          features={features}
          aiIntegrations={aiIntegrations}
        />

        <BenefitsLuxury {...benefits} />

        <FooterLuxury
          prevCase={{
            title: "Clinic Book",
            path: "/case-study/clinic-book"
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
