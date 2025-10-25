import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  project: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  liveUrl?: string;
  fullWidthImage?: boolean; // True for full-width images, false for images with padding
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'FAB Bank',
    project: 'Enterprise Digital Transformation',
    problem: 'First Abu Dhabi Bank needed to scale from a small Innovation Lab project to enterprise-wide digital transformation.',
    solution: 'Strategic scaling from pilot to enterprise transformation. Assembled 40-50 expert team over 18 months, coordinating across multiple departments with reusable systems.',
    result: '40x team growth from 1 pilot to 40+ experts. 18-month partnership delivering enterprise platforms. 60% efficiency improvement through standardization.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png',
    liveUrl: undefined,
    fullWidthImage: true
  },
  {
    id: 2,
    client: 'Al Arabiya',
    project: 'News Platform Modernization',
    problem: 'Al Arabiya needed to modernize their digital presence during COVID-19 while coordinating international teams.',
    solution: 'Led international team of 20 across multiple disciplines to create personalized news experience. Coordinated with in-house teams and external IBM resources, adapting swiftly to remote work.',
    result: 'Successfully delivered during COVID-19 with 100% remote team. 40% performance improvement. Led 20-member international team across multiple time zones.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png',
    liveUrl: undefined,
    fullWidthImage: true
  },
  {
    id: 3,
    client: 'DoH Health',
    project: 'Government Health App',
    problem: 'Department of Health Abu Dhabi needed a standout health app exceeding market standards.',
    solution: 'Partnered with IBM to build innovative health & fitness app with Google Fit and Fitbit integration. Proposed ambitious features to leapfrog existing market offerings.',
    result: 'Successfully launched government health app with IBM partnership. Exceeded market standards. Multi-platform support with Google Fit and Fitbit integration.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png',
    liveUrl: undefined,
    fullWidthImage: true
  },
  {
    id: 4,
    client: 'BFIT Web3',
    project: 'Blockchain Fitness Platform',
    problem: 'Fitness apps lacked incentive mechanisms for consistent health goals.',
    solution: 'Web 3.0 platform with native token, tokenomics model, and blockchain-recorded health data. Users earn crypto rewards for fitness activities.',
    result: 'Successfully launched beta with crypto rewards and native token. Users earn cryptocurrency through fitness while maintaining on-chain records.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    liveUrl: 'https://bfit-web3.netlify.app/',
    fullWidthImage: true
  },
  {
    id: 5,
    client: 'ChilledSites',
    project: 'AI Website & DApp Builder',
    problem: 'Building professional websites requires technical expertise most people don\'t have.',
    solution: 'AI-powered platform that turns a prompt, photo, or email into a fully hosted website in minutes. Complete with SEO, analytics, and Web3 deployment.',
    result: 'Users build professional sites in under 10 minutes. 2500+ websites created. £5,000+ cost savings vs traditional agencies.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    liveUrl: 'https://chilledsites.com',
    fullWidthImage: true
  },
  {
    id: 6,
    client: 'ClinicBook',
    project: 'Healthcare Booking System',
    problem: 'Healthcare providers struggled with manual scheduling and inefficient patient management.',
    solution: 'Comprehensive AI-powered booking system with intelligent scheduling optimization, automated reminders, and real-time capacity management.',
    result: '80% efficiency improvement in scheduling, reduced no-shows, significantly improved patient experience.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    liveUrl: 'https://clinic-book.netlify.app/',
    fullWidthImage: false
  }
];

export default function CaseStudiesV3() {
  return (
    <section id="work" className="py-56 md:py-64 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
            Recent Work
          </h2>
        </div>

        {/* Case Studies Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 flex flex-col hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden aspect-[16/10] ${study.fullWidthImage ? '' : 'p-4'}`}>
                <img
                  src={study.image}
                  alt={study.project}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${study.fullWidthImage ? '' : 'rounded-lg'}`}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/p0stman-bg.png';
                  }}
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 transition-transform duration-300 group-hover:scale-110">
                    <ExternalLink className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Below Image */}
              <div className="flex-1 flex flex-col p-8">
                {/* Client Name */}
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                  {study.client}
                </p>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.project}
                </h3>

                {/* Solution */}
                <p className="text-base font-light text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                  {study.solution}
                </p>

                {/* Result */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  {study.result}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={
                      study.client === 'FAB Bank' ? '/case-study/fab-bank' :
                      study.client === 'Al Arabiya' ? '/case-study/al-arabiya' :
                      study.client === 'DoH Health' ? '/case-study/doh-health' :
                      `/case-study/${study.client.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-light text-sm hover:bg-pink-600 transition-colors group/btn"
                  >
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg font-light text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* CTA to See All Case Studies */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-light transition-colors group text-lg"
          >
            View all case studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
