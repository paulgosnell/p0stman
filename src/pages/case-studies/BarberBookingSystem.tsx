import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

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
    'Inefficient manual appointment booking processes',
    'Disconnected systems for client management',
    'Lack of digital presence for service offerings',
    'Poor visibility into business performance',
    'Limited tools for client retention',
    'Difficulty managing staff schedules and resources'
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
  points: [
    '40% increase in appointment bookings',
    'Reduced no-shows with automated reminders',
    'Enhanced client loyalty and retention',
    'Streamlined staff scheduling and management',
    'Improved inventory tracking and management',
    'Data-driven business decisions',
    'Enhanced marketing campaign effectiveness',
    'Simplified financial reporting and analytics'
  ]
};

export default function BarberBookingSystemCase() {
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
        </Helmet>
        
        <CaseHero
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