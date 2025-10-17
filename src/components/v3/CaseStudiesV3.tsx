import React from 'react';

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
    problem: 'Musicians needed a way to collaborate globally, find compatible artists, and work together in real-time without geographic constraints.',
    solution: 'Built revolutionary AI-powered matching system that connects artists worldwide with intelligent pairing based on style, genre, and collaboration preferences. Integrated real-time collaboration tools for seamless creative workflow.',
    result: 'Platform connected 1000+ artists globally with AI-powered matching enabling real-time music collaboration and creative partnerships across continents.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png',
    imagePosition: 'left'
  },
  {
    id: 2,
    client: 'ClinicBook',
    project: 'Healthcare Booking System',
    problem: 'Healthcare providers struggled with manual scheduling, double-bookings, and inefficient patient management, leading to poor resource allocation and patient experience.',
    solution: 'Developed comprehensive AI-powered booking and management system with intelligent scheduling optimization, automated reminders, and real-time capacity management. Streamlined patient intake and provider workflows.',
    result: 'Achieved 80% efficiency improvement in scheduling, reduced no-shows by implementing smart reminders, and significantly improved patient experience with seamless booking.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    imagePosition: 'right'
  },
  {
    id: 3,
    client: 'BFIT Web3',
    project: 'Blockchain Fitness Platform',
    problem: 'The fitness industry lacked incentive mechanisms for users to track and maintain consistent health goals. Traditional apps couldn\'t offer real value exchange for user health data.',
    solution: 'Transitioned platform to Web 3.0 with native cryptocurrency token, tokenomics model, and blockchain-recorded health data. Created earn-while-you-move incentive system where users receive crypto rewards for fitness activities.',
    result: 'Successfully launched beta platform with crypto rewards, created native token and tokenomics model, enabled users to earn cryptocurrency through fitness activities while maintaining on-chain health records.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    imagePosition: 'left'
  }
];

export default function CaseStudiesV3() {
  return (
    <section id="work" className="py-40 md:py-48 px-6 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
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
                className={`relative h-auto md:h-auto rounded-xl overflow-hidden bg-white border border-gray-200 p-6 md:p-8 ${
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
                <div className="absolute inset-0 rounded-xl ring-1 ring-gray-200 pointer-events-none" />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col space-y-6 ${
                  study.imagePosition === 'right' ? 'md:order-1' : ''
                }`}
              >
                <p className="text-sm font-light text-gray-500 uppercase tracking-wide">
                  {study.client}
                </p>

                <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                  {study.project}
                </h3>

                <p className="text-lg text-gray-700 font-light">
                  {study.problem}
                </p>

                <p className="text-base text-gray-600 font-light leading-relaxed">
                  {study.solution}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg text-blue-600 font-bold">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
