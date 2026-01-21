import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import HeroLuxury from '../components/v3/HeroLuxury';
import ClientLogosV3 from '../components/v3/ClientLogosV3';
import WhatWeBuildV3 from '../components/v3/WhatWeBuildV3';
import CaseStudiesLuxury from '../components/v3/CaseStudiesLuxury';
import MetricsV3 from '../components/v3/MetricsV3';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

export default function Home() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 w-full overflow-x-hidden relative">
        <Helmet>
          <title>POSTMAN | Ideas. Shipped. Vision to Product in Weeks.</title>
          <meta name="description" content="Vision to product. Weeks, not months. 20 years shipping products, AI-native since day one. Strategic partner, builder, trusted advisor." />
          <meta name="keywords" content="AI development, prototype to production, Lovable to production, Bolt to production, rapid product development, AI-native builder, product studio" />
          <meta property="og:title" content="POSTMAN | Ideas. Shipped." />
          <meta property="og:description" content="Vision to product. Weeks, not months. 20 years shipping products, AI-native since day one." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://p0stman.com" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta property="og:site_name" content="POSTMAN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="POSTMAN | Ideas. Shipped." />
          <meta name="twitter:description" content="Vision to product. Weeks, not months. 20 years shipping products, AI-native since day one." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:creator" content="@paulgosnell" />
          <link rel="canonical" href="https://p0stman.com" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Paul Gosnell" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#2563eb" />
        </Helmet>
        <HeaderV3Global darkMode={true} />
        <HeroLuxury />
        <ClientLogosV3 />
        <WhatWeBuildV3 />
        <CaseStudiesLuxury />
        <MetricsV3 />
        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </HelmetProvider>
  );
}