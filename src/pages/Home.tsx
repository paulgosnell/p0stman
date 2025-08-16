import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../components/Hero';
import BoltPromotion from '../components/BoltPromotion';
import ServicesSection from '../components/ServicesSection';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import ComparisonSection from '../components/ComparisonSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
        <Helmet>
          <title>P0STMAN | AI-Powered Product Development Studio</title>
          <meta name="description" content="Transform your ideas into reality with AI-powered development. Expert product strategy, rapid prototyping, and enterprise solutions delivered 10x faster than traditional methods." />
          <meta name="keywords" content="AI development, product strategy, rapid prototyping, enterprise solutions, Dubai tech, AI-powered development, product studio" />
          <meta property="og:title" content="P0STMAN | AI-Powered Product Development Studio" />
          <meta property="og:description" content="Transform your ideas into reality with AI-powered development. Expert solutions delivered 10x faster." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://p0stman.com" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta property="og:site_name" content="P0STMAN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="P0STMAN | AI-Powered Product Development Studio" />
          <meta name="twitter:description" content="Transform your ideas into reality with AI-powered development. Expert solutions delivered 10x faster." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:creator" content="@paulgosnell" />
          <link rel="canonical" href="https://p0stman.com" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Paul Gosnell" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#2563eb" />
        </Helmet>
        <Hero />
        <BoltPromotion />
        <ServicesSection />
        <ComparisonSection />
        <CaseStudy />
        <Contact />
      </div>
    </HelmetProvider>
  );
}