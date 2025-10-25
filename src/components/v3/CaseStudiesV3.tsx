import React, { useState } from 'react';
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
    liveUrl: 'https://ai-banking-app.netlify.app/'
  },
  {
    id: 2,
    client: 'ClinicBook',
    project: 'Healthcare Booking System',
    problem: 'Healthcare providers struggled with manual scheduling and inefficient patient management.',
    solution: 'Comprehensive AI-powered booking system with intelligent scheduling optimization, automated reminders, and real-time capacity management.',
    result: '80% efficiency improvement in scheduling, reduced no-shows, significantly improved patient experience.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    liveUrl: 'https://clinic-book.netlify.app/'
  },
  {
    id: 3,
    client: 'BFIT Web3',
    project: 'Blockchain Fitness Platform',
    problem: 'Fitness apps lacked incentive mechanisms for consistent health goals.',
    solution: 'Web 3.0 platform with native token, tokenomics model, and blockchain-recorded health data. Users earn crypto rewards for fitness activities.',
    result: 'Successfully launched beta with crypto rewards and native token. Users earn cryptocurrency through fitness while maintaining on-chain records.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    liveUrl: 'https://bfit-web3.netlify.app/'
  },
  {
    id: 4,
    client: 'ChilledSites',
    project: 'AI Website & DApp Builder',
    problem: 'Building professional websites requires technical expertise most people don\'t have.',
    solution: 'AI-powered platform that turns a prompt, photo, or email into a fully hosted website in minutes. Complete with SEO, analytics, and Web3 deployment.',
    result: 'Users build professional sites in under 10 minutes. 2500+ websites created. £5,000+ cost savings vs traditional agencies.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    liveUrl: 'https://chilledsites.com'
  },
  {
    id: 5,
    client: 'Rhythm',
    project: 'AI Running Coach',
    problem: 'Traditional running apps lack personalized coaching and real-time feedback.',
    solution: 'AI-powered running coach with adaptive music system and personalized training plans that adjust in real-time based on performance.',
    result: 'Runners improve performance by 35% with personalized AI coaching and dynamic music matching their pace and energy.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/rhythm1.png',
    liveUrl: 'https://ai-running-app.netlify.app/'
  },
  {
    id: 6,
    client: 'Experience A Gift',
    project: 'Gift Experience Platform',
    problem: 'Traditional gifting platforms lack personalization and modern digital experiences.',
    solution: 'AI-powered gift platform with personalized recommendations, seamless booking, and curated experience marketplace.',
    result: 'Revolutionized gift-giving with AI personalization. 10,000+ unique experiences booked, 95% customer satisfaction.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/experienceagift1.png',
    liveUrl: 'https://experienceagift-staging1.netlify.app/'
  }
];

export default function CaseStudiesV3() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-56 md:py-64 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-20 md:mb-28">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
            Recent Work
          </h2>
        </div>

        {/* Case Studies - Stacked Layout */}
        <div className="space-y-32 md:space-y-48">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Minimal Text Above Image */}
              <div className="mb-8 md:mb-10 max-w-4xl">
                <p className="text-xs md:text-sm font-light text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                  {study.client}
                </p>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-100 leading-tight">
                  {study.project}
                </h3>
              </div>

              {/* Large Edge-to-Edge Image with Overlay */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <div className="relative aspect-[16/10] md:aspect-[21/10] bg-gray-100 dark:bg-gray-800">
                  <img
                    src={study.image}
                    alt={study.project}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/images/p0stman-bg.png';
                    }}
                  />

                  {/* Gradient Overlay - Always visible on mobile, hover on desktop */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredId === study.id ? 'opacity-100' : 'opacity-100 md:opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                      {/* Solution Text */}
                      <p className="text-white/90 text-base md:text-xl lg:text-2xl font-light leading-relaxed mb-6 md:mb-8 max-w-4xl">
                        {study.solution}
                      </p>

                      {/* Result */}
                      <p className="text-white font-medium text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-3xl">
                        {study.result}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`/case-study/${study.client.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-sm md:text-base"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>

                        {study.liveUrl && (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 font-medium text-sm md:text-base"
                          >
                            Live Demo
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to See All Case Studies */}
        <div className="mt-32 md:mt-40 pt-24 md:pt-32 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-light transition-colors group text-lg"
          >
            View all case studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
