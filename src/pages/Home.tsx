import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import HeroV3 from '../components/v3/HeroV3';
import MetricsV3 from '../components/v3/MetricsV3';
import AgentsV3 from '../components/v3/AgentsV3';
import CaseStudiesV3 from '../components/v3/CaseStudiesV3';
import ClientLogosV3 from '../components/v3/ClientLogosV3';
import ServicesV3 from '../components/v3/ServicesV3';
import CTAV3 from '../components/v3/CTAV3';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

export default function Home() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
        <Helmet>
          <title>P0STMAN | From Vision to Product — Delivered Fast and Brilliantly</title>
          <meta name="description" content="We build and deliver websites, apps, and digital products that make you look good and move your business forward. AI powers our speed, but outcomes are what count." />
          <meta name="keywords" content="AI development, product strategy, rapid prototyping, enterprise solutions, Dubai tech, AI-powered development, product studio" />
          <meta property="og:title" content="P0STMAN | From Vision to Product — Delivered Fast and Brilliantly" />
          <meta property="og:description" content="We build and deliver websites, apps, and digital products that make you look good and move your business forward." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://p0stman.com" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta property="og:site_name" content="P0STMAN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="P0STMAN | From Vision to Product — Delivered Fast and Brilliantly" />
          <meta name="twitter:description" content="We build and deliver websites, apps, and digital products that make you look good and move your business forward." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:creator" content="@paulgosnell" />
          <link rel="canonical" href="https://p0stman.com" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Paul Gosnell" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#2563eb" />
        </Helmet>
        <HeaderV3Global />
        <HeroV3 />
        <MetricsV3 />
        <AgentsV3 />
        <CaseStudiesV3 />
        <ClientLogosV3 />
        <ServicesV3 />
        <CTAV3 />
        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </HelmetProvider>
  );
}