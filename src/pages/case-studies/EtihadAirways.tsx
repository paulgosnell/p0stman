import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHero from '../../components/case-studies/CaseHero';
import Challenge from '../../components/case-studies/Challenge';
import Solution from '../../components/case-studies/Solution';
import Benefits from '../../components/case-studies/Benefits';
import Footer from '../../components/case-studies/Footer';

const technologies = [
  'Custom Booking System',
  'User Experience Design',
  'Performance Optimization',
  'Customer Journey Mapping',
  'A/B Testing',
  'Conversion Optimization'
];

const features = [
  'Custom Booking Flows',
  'Enhanced User Experience',
  'Performance Optimization',
  'Customer-Centric Design',
  'Immediate Results Delivery',
  'Booking Conversion Improvement'
];

const results = [
  'Achieved 25% overnight increase in bookings',
  'Replaced failing off-the-shelf solution',
  'Enhanced customer booking experience',
  'Delivered immediate and impactful results',
  'Improved customer satisfaction scores',
  'Demonstrated custom solution effectiveness'
];

const challenge = {
  title: "Failing Booking System Crisis",
  description: "Etihad Airways required urgent improvements to their booking flows as their existing off-the-shelf solution was failing to meet customer expectations:",
  points: [
    'Existing booking system was failing customers',
    'Off-the-shelf solution not meeting expectations',
    'Poor booking conversion rates',
    'Customer frustration with booking process',
    'Urgent need for immediate improvements',
    'Requirement for measurable results'
  ]
};

const solution = {
  title: "Custom Booking System Innovation",
  description: "Recognized the need for a custom solution that could specifically cater to Etihad's customer needs and expectations, moving away from generic solutions.",
  approach: [
    'Analyzed existing booking flow failures',
    'Designed customer-centric booking experience',
    'Developed custom solution tailored to Etihad needs',
    'Implemented performance optimization techniques',
    'Focused on conversion rate improvements',
    'Delivered rapid deployment for immediate impact'
  ],
  outcome: "The improved booking system led to a significant boost in bookings, with an overnight increase of 25%. The project highlighted our ability to deliver custom solutions that provide immediate and impactful results."
};

const benefits = {
  title: "Immediate Impact and Measurable Success",
  description: "Delivered a custom booking solution that provided immediate, measurable improvements to Etihad's business performance.",
  items: [
    {
      title: "Overnight Booking Increase",
      description: "Achieved immediate 25% increase in bookings from the first day of deployment",
      metric: "25% increase overnight"
    },
    {
      title: "Custom Solution Success",
      description: "Proved effectiveness of tailored solutions over off-the-shelf alternatives",
      metric: "Custom-built system"
    },
    {
      title: "Customer Experience Enhancement",
      description: "Significantly improved customer satisfaction with booking process",
      metric: "Enhanced UX"
    },
    {
      title: "Immediate Business Impact",
      description: "Delivered measurable business results from day one of implementation",
      metric: "Instant ROI"
    }
  ]
};

export default function EtihadAirways() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Etihad Airways Booking System | 25% Overnight Increase Case Study</title>
          <meta name="description" content="Custom booking system for Etihad Airways delivered 25% overnight booking increase, replacing failing off-the-shelf solution." />
          <meta name="keywords" content="airline booking system, Etihad Airways, conversion optimization, custom solution, booking increase" />
          <meta property="og:title" content="Etihad Airways Booking System Success" />
          <meta property="og:description" content="25% overnight booking increase with custom solution for global airline." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Etihad Airways Booking System Case Study" />
          <meta name="twitter:description" content="Custom booking solution delivering immediate 25% booking increase." />
          <meta name="twitter:image" content="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png" />
          <link rel="canonical" href="https://p0stman.com/case-study/etihad-airways" />
        </Helmet>
      <CaseHero
        title="Etihad Airways"
        subtitle="Booking System Innovation"
        description="Custom booking system delivered 25% overnight increase in bookings, replacing failing off-the-shelf solution"
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png"
        logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad-logo.png"
        industry="Airlines & Travel"
        timeline="3 months"
        teamSize="8 specialists"
        technologies={technologies}
        features={features}
        results={results}
        prevCase={{
          title: "Al Arabiya",
          path: "/case-study/al-arabiya"
        }}
        nextCase={{
          title: "DoH Health",
          path: "/case-study/doh-health"
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
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad2.png"
      />
      <Benefits 
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
        image="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png"
      />
      <Footer 
        prevCase={{
          title: "Al Arabiya",
          path: "/case-study/al-arabiya"
        }}
        nextCase={{
          title: "DoH Health",
          path: "/case-study/doh-health"
        }}
      />
      </div>
    </HelmetProvider>
  );
}