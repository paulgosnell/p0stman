import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../components/v3/HeaderV3';
import HeroV3 from '../components/v3/HeroV3';
import MetricsV3 from '../components/v3/MetricsV3';
import AgentsV3 from '../components/v3/AgentsV3';
import CaseStudiesV3 from '../components/v3/CaseStudiesV3';
import ServicesV3 from '../components/v3/ServicesV3';
import CTAV3 from '../components/v3/CTAV3';
import FooterV3 from '../components/v3/FooterV3';

export default function HomeV3() {
  return (
    <>
      <Helmet>
        <title>P0STMAN | AI-Powered Product Studio | Ship Faster</title>
        <meta name="description" content="Ship production-ready products 40% faster than agencies. AI agents, websites, mobile apps. All three: speed, quality, price. Faster than your agency can think." />
        <meta property="og:title" content="P0STMAN | AI-Powered Product Studio" />
        <meta property="og:description" content="Ship production-ready products 40% faster. AI agents, websites, mobile apps. All three: speed, quality, price." />
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <HeaderV3 />
        <HeroV3 />
        <MetricsV3 />
        <AgentsV3 />
        <CaseStudiesV3 />
        <ServicesV3 />
        <CTAV3 />
        <FooterV3 />
      </div>
    </>
  );
}
