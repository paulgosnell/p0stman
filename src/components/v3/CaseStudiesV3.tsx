import React from 'react';
import chilledCrmDash from '../../assets/images/case-studies/chilledcrm-dashboard.png';
import harmonyDash from '../../assets/images/case-studies/harmony-dashboard.png';
import harmonyMobile from '../../assets/images/case-studies/harmony-mobileapp.png';

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
    client: 'ChilledSites',
    project: 'AI Website Generator',
    problem: 'Web design took weeks, cost thousands',
    solution: 'Built multi-model code agent that generates full sites in minutes',
    result: '70+ sites built, shipping in 2 minutes instead of 2 weeks',
    image: chilledCrmDash,
    imagePosition: 'left'
  },
  {
    id: 2,
    client: 'Al Arabiya',
    project: 'Content Generation AI',
    problem: 'Manual content creation was bottlenecking editorial workflow',
    solution: 'Deployed AI agent to automate news article research and drafting',
    result: '60% reduction in editorial turnaround time, 3x content volume',
    image: harmonyDash,
    imagePosition: 'right'
  },
  {
    id: 3,
    client: 'Harmony',
    project: 'Voice-First Patient Portal',
    problem: 'Low adoption of digital health platform due to complexity',
    solution: 'Added voice agent for appointment booking and health queries',
    result: '45% increase in engagement, 80% of users now prefer voice interaction',
    image: harmonyMobile,
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
                className={`relative h-80 md:h-96 rounded-xl overflow-hidden bg-gray-100 ${
                  study.imagePosition === 'right' ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={study.image}
                  alt={study.project}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = '/assets/images/p0stman-bg.png';
                  }}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-gray-200" />
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
