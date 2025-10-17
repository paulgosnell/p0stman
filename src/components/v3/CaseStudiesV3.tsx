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
    client: 'First Abu Dhabi Bank',
    project: 'Enterprise Digital Transformation',
    problem: 'FAB needed to modernize their digital infrastructure and create scalable, reusable systems across multiple departments while maintaining security and compliance standards.',
    solution: 'Built enterprise-grade platforms with unified design systems and code libraries. Established cross-functional teams and agile delivery processes to ensure consistent, high-quality output.',
    result: 'Scaled from 1 pilot project to 40+ person transformation team. Delivered enterprise-grade platforms across multiple departments with 60% improved efficiency.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png',
    imagePosition: 'left'
  },
  {
    id: 2,
    client: 'Al Arabiya',
    project: 'News Platform Redesign',
    problem: 'Al Arabiya needed a modern, scalable news platform that could handle high traffic loads while providing a customizable, multi-platform experience during unprecedented global events.',
    solution: 'Led a global team through UX research, development, testing, and content delivery. Implemented a future-ready architecture with customizable components and multi-platform support.',
    result: 'Successfully delivered complete platform redesign during pandemic. Improved page load speeds by 40% and achieved high user satisfaction.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png',
    imagePosition: 'right'
  },
  {
    id: 3,
    client: 'Department of Health Abu Dhabi',
    project: 'My Health Coach',
    problem: 'Build a standout health app for government that exceeds market standards while partnering with IBM.',
    solution: 'Suggested ambitious, innovative features to leapfrog existing market offerings with senior development team leadership.',
    result: 'Successfully launched standout health app for government. Integrated with major fitness platforms and exceeded market standards in app development.',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png',
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
