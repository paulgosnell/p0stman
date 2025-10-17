import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  client: string;
  project: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'Harmony',
    project: 'Music Collaboration Platform',
    problem: 'Musicians needed a way to collaborate globally and find compatible artists.',
    solution: 'AI-powered matching system connects artists worldwide based on style, genre, and collaboration preferences with real-time collaboration tools.',
    result: '1000+ artists connected globally with AI-powered matching, enabling real-time music collaboration across continents.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png',
    imagePosition: 'left'
  },
  {
    id: 2,
    client: 'ClinicBook',
    project: 'Healthcare Booking System',
    problem: 'Healthcare providers struggled with manual scheduling and inefficient patient management.',
    solution: 'Comprehensive AI-powered booking system with intelligent scheduling optimization, automated reminders, and real-time capacity management.',
    result: '80% efficiency improvement in scheduling, reduced no-shows, significantly improved patient experience.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    imagePosition: 'right'
  },
  {
    id: 3,
    client: 'BFIT Web3',
    project: 'Blockchain Fitness Platform',
    problem: 'Fitness apps lacked incentive mechanisms for consistent health goals.',
    solution: 'Web 3.0 platform with native token, tokenomics model, and blockchain-recorded health data. Users earn crypto rewards for fitness activities.',
    result: 'Successfully launched beta with crypto rewards and native token. Users earn cryptocurrency through fitness while maintaining on-chain records.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    imagePosition: 'left'
  },
  {
    id: 4,
    client: 'ChilledSites',
    project: 'AI Website & DApp Builder',
    problem: 'Building professional websites requires technical expertise most people don\'t have.',
    solution: 'AI-powered platform that turns a prompt, photo, or email into a fully hosted website in minutes. Complete with SEO, analytics, and Web3 deployment.',
    result: 'Users build professional sites in under 10 minutes. 2500+ websites created. £5,000+ cost savings vs traditional agencies.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    imagePosition: 'right'
  }
];

export default function CaseStudiesV3() {
  return (
    <section id="work" className="py-56 md:py-64 px-6 md:px-0 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
            Recent Work
          </h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-28 md:space-y-40">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                study.imagePosition === 'right' ? 'md:auto-cols-fr' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-auto md:h-auto rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 ${
                  study.imagePosition === 'right' ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={study.image}
                  alt={study.project}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = '/assets/images/p0stman-bg.png';
                  }}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 pointer-events-none" />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col space-y-6 ${
                  study.imagePosition === 'right' ? 'md:order-1' : ''
                }`}
              >
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {study.client}
                </p>

                <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 leading-tight">
                  {study.project}
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-200 font-light">
                  {study.problem}
                </p>

                <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {study.solution}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-bold">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to See All Case Studies */}
        <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-light transition-colors group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
