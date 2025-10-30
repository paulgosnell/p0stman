import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaseHeroLuxury from '../../components/case-studies/CaseHeroLuxury';
import ChallengeLuxury from '../../components/case-studies/ChallengeLuxury';
import SolutionLuxury from '../../components/case-studies/SolutionLuxury';
import BenefitsLuxury from '../../components/case-studies/BenefitsLuxury';
import FooterLuxury from '../../components/case-studies/FooterLuxury';

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

const challenge = {
  title: "Booking Crisis Resolution",
  description: "Etihad Airways faced a critical situation with their booking system failing customers and damaging conversion rates.",
  points: [
    'Replace failing off-the-shelf booking solution',
    'Address poor booking conversion rates urgently',
    'Overcome customer frustration with booking process',
    'Deliver measurable results immediately'
  ]
};

const solution = {
  title: "Custom-Built for Success",
  description: "We recognized that generic solutions couldn't meet Etihad's unique needs. A custom-built booking experience specifically tailored to their customers was the answer.",
  approach: [
    'Analyzed existing booking flow failures in detail',
    'Designed customer-centric booking experience from scratch',
    'Developed custom solution optimized for Etihad needs',
    'Implemented advanced performance optimization',
    'Focused on conversion rate improvements',
    'Delivered rapid deployment for immediate business impact'
  ],
  outcome: "The custom booking system led to a 25% overnight increase in bookings from day one, proving the value of tailored solutions over off-the-shelf alternatives.",
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad2.png",
  technologies,
  features
};

const benefits = {
  title: "Immediate, Measurable Impact",
  description: "Delivered a solution that provided instant business value with measurable results from the first day of deployment.",
  items: [
    {
      title: "Overnight Success",
      description: "Achieved 25% increase in bookings immediately upon deployment",
      metric: "+25%"
    },
    {
      title: "Custom Solution",
      description: "Proved effectiveness of tailored approach over generic alternatives",
      metric: "Custom"
    },
    {
      title: "Enhanced Experience",
      description: "Significantly improved customer satisfaction with intuitive booking flow",
      metric: "High"
    },
    {
      title: "Instant ROI",
      description: "Delivered measurable business results from day one of implementation",
      metric: "Day 1"
    }
  ],
  image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png",
  secondaryImage: "https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad2.png"
};

export default function EtihadAirwaysLuxury() {
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

        <CaseHeroLuxury
          title="Etihad Airways"
          subtitle="Booking System Innovation"
          description="Custom booking system delivered 25% overnight increase in bookings, replacing failing off-the-shelf solution"
          backgroundImage="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png"
          logo="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad-logo.png"
          industry="Airlines & Travel"
          timeline="3 months"
          teamSize="8 specialists"
          stats={[
            { label: 'Booking Increase', value: '+25%', color: 'text-white' },
            { label: 'Duration', value: '3mo', color: 'text-white' },
            { label: 'Team Size', value: '8', color: 'text-white' },
            { label: 'ROI', value: 'Day 1', color: 'text-white' }
          ]}
          prevCase={{
            title: "Al Arabiya",
            path: "/case-study/al-arabiya"
          }}
          nextCase={{
            title: "DoH Health",
            path: "/case-study/doh-health"
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
