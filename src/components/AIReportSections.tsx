import React from 'react';
import { ArrowTrendingUpIcon, BuildingOffice2Icon, HeartIcon, BanknotesIcon, BoltIcon, TruckIcon, AcademicCapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

// Section Cover Component
export const SectionCover: React.FC<{ 
  title: string; 
  stat: string; 
  quote: string; 
  author: string; 
  role: string;
  icon?: React.ReactNode;
}> = ({ title, stat, quote, author, role, icon }) => (
  <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
    <div className="container mx-auto px-8 py-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {icon && (
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-blue-500/10 rounded-full border border-blue-500/20">
              {icon}
            </div>
          </div>
        )}
        <h1 className="text-6xl md:text-8xl font-thin mb-12">{title}</h1>
        <div className="text-4xl font-light text-blue-400 mb-16">{stat}</div>
        
        {/* Quote Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-900/80 p-12 rounded-3xl border border-blue-500/30">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 mb-8">
              "{quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <div className="text-center">
                <cite className="text-xl text-blue-400 font-medium block">{author}</cite>
                <div className="text-gray-500 mt-1">{role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Opportunity Section Component
export const OpportunitySection: React.FC<{
  title: string;
  narrative: string;
  statCard: { stat: string; description: string };
  chartData?: any;
}> = ({ title, narrative, statCard }) => (
  <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
    <div className="container mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-thin mb-8">{title}</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">{narrative}</p>
          
          {/* Stat Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800">
              <div className="text-4xl font-thin text-green-400 mb-4">{statCard.stat}</div>
              <div className="text-lg text-gray-300">{statCard.description}</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Placeholder for chart */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <ArrowTrendingUpIcon className="w-16 h-16 mx-auto mb-4" />
              <div>AI Investment Growth Chart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Use Cases Section Component
export const UseCasesSection: React.FC<{
  title: string;
  useCases: Array<{ title: string; description: string; icon: React.ReactNode }>;
  highlight: string;
}> = ({ title, useCases, highlight }) => (
  <section className="min-h-screen bg-black flex items-center">
    <div className="container mx-auto px-8 py-20">
      <h2 className="text-5xl font-thin text-center mb-16">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {useCases.map((useCase, index) => (
          <div key={index} className="group">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-light text-white">{useCase.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Highlight */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-8 py-4 rounded-full border border-blue-500/30">
          <span className="text-lg text-blue-300">{highlight}</span>
        </div>
      </div>
    </div>
  </section>
);

// Challenges Section Component
export const ChallengesSection: React.FC<{
  title: string;
  narrative: string;
  challenges: Array<{ title: string; description: string }>;
}> = ({ title, narrative, challenges }) => (
  <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center">
    <div className="container mx-auto px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-thin text-center mb-8">{title}</h2>
        <p className="text-xl text-gray-300 leading-relaxed text-center mb-16">{narrative}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-800/30">
              <h3 className="text-xl font-light text-red-300 mb-4">{challenge.title}</h3>
              <p className="text-gray-400 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
        
        {/* Risk Radar Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 max-w-md mx-auto">
            <div className="text-gray-500">Risk Assessment Radar</div>
            <div className="text-sm text-gray-600 mt-2">Trust • Data • Talent • Regulation</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Table of Contents Component
export const TableOfContents: React.FC = () => {
  const sections = [
    { number: "01", title: "Government & Smart Cities", icon: <BuildingOffice2Icon className="w-6 h-6" /> },
    { number: "02", title: "Healthcare", icon: <HeartIcon className="w-6 h-6" /> },
    { number: "03", title: "Financial Services", icon: <BanknotesIcon className="w-6 h-6" /> },
    { number: "04", title: "Energy & Sustainability", icon: <BoltIcon className="w-6 h-6" /> },
    { number: "05", title: "Transport & Mobility", icon: <TruckIcon className="w-6 h-6" /> },
    { number: "06", title: "Education & Skills", icon: <AcademicCapIcon className="w-6 h-6" /> },
    { number: "07", title: "Retail & Consumer", icon: <ShoppingBagIcon className="w-6 h-6" /> },
  ];

  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-8 py-20">
        <h2 className="text-6xl font-thin text-center mb-20">Table of Contents</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="text-3xl font-thin text-blue-400">{section.number}</div>
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    {section.icon}
                  </div>
                  <div className="text-xl font-light text-white">{section.title}</div>
                </div>
                <ArrowTrendingUpIcon className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};