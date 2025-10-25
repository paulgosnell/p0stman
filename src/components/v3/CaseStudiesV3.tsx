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
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={study.image}
                  alt={study.project}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                    href={`/case-study/${study.client.toLowerCase().replace(/\s+/g, '-')}`}
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
