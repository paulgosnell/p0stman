import React from 'react';
import Hero from '../components/Hero';
import BoltPromotion from '../components/BoltPromotion';
import ServicesSection from '../components/ServicesSection';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import ComparisonSection from '../components/ComparisonSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
      <Hero />
      <BoltPromotion />
      <ServicesSection />
      <ComparisonSection />
      <CaseStudy />
      <Contact />
    </div>
  );
}