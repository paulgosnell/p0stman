import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ArrowTrendingUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';
import { SpaceBackground, DesertBackground, CityscapeBackground, TechBackground } from './PremiumBackgrounds';

const AIPlaybookPresentationComplete: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const totalSlides = 8;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToDownload = () => {
    window.open('/ai-playbook', '_blank');
  };

  return (
    <>
      <AIPlaybookSEO page="presentation" />
      <div className="bg-black text-white overflow-hidden relative">
        
        {/* Navigation Controls */}
        <div className="fixed top-1/2 left-4 z-50 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide 1 - Hero/Cover */}
        {currentSlide === 0 && (
          <SpaceBackground>
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
              <AIAnimatedBackground />
              <div className="relative z-10 text-center px-8 max-w-6xl">
              <h1 className={`text-7xl md:text-9xl font-thin tracking-tight mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI in the
                <span className="block font-light text-gray-300">Middle East</span>
                <span className="block text-5xl md:text-7xl text-blue-400 font-extralight">2025</span>
              </h1>
              <p className={`text-2xl md:text-3xl font-light text-gray-400 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                The Playbook for People & Business
              </p>
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button 
                  onClick={scrollToDownload}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 mr-6"
                >
                  Download Full Report
                </button>
              </div>
            </div>
            </section>
          </SpaceBackground>
        )}

        {/* Slide 2 - Executive Abstract */}
        {currentSlide === 1 && (
          <TechBackground>
            <section className="min-h-screen flex items-center relative overflow-hidden">
              <AIAnimatedBackground />
            <div className="container mx-auto px-8 py-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-6xl font-thin mb-12 text-white">Executive Abstract</h2>
                  <div className="space-y-8">
                    <StatBlock number="$320B" label="Economic Impact by 2030" />
                    <StatBlock number="$7.2B" label="AI Investment by 2026" />
                    <StatBlock number="18,000" label="Blackwell GPUs in HUMAIN" />
                    <StatBlock number="854MW" label="Compute Infrastructure Growth" />
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 rounded-2xl border border-gray-800">
                    <blockquote className="text-2xl font-light leading-relaxed text-gray-300">
                      "AI is going to be the new lifeblood for governments and the private sector as well."
                    </blockquote>
                    <cite className="block mt-6 text-lg text-blue-400 font-medium">
                      — H.E. Omar Sultan Al Olama, UAE AI Minister
                    </cite>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </TechBackground>
        )}

        {/* Slide 3 - By the Numbers */}
        {currentSlide === 2 && (
          <DesertBackground>
            <section className="min-h-screen relative overflow-hidden">
              <AIAnimatedBackground />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
            <div className="relative z-10 container mx-auto px-8 py-20">
              <h2 className="text-7xl font-thin text-center mb-20">By the Numbers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <BigNumberCard 
                  number="$320B"
                  subtitle="Regional AI Impact"
                  trend="+2,400%"
                />
                <BigNumberCard 
                  number="$7.2B"
                  subtitle="Investment Forecast"
                  trend="+340%"
                />
              </div>

              <div className="mt-20 text-center">
                <div className="inline-flex items-center space-x-4 bg-gray-900/50 px-8 py-4 rounded-full border border-gray-800">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-light">Exponential Growth Trajectory</span>
                </div>
              </div>
            </div>
            </section>
          </DesertBackground>
        )}

        {/* Slide 4 - Infrastructure Build-Out */}
        {currentSlide === 3 && (
          <CityscapeBackground>
            <section className="min-h-screen flex items-center">
            <div className="container mx-auto px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-6xl font-thin mb-12">Infrastructure Build-Out</h2>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <h3 className="text-2xl font-light text-blue-300 mb-4">UAE Compute Growth</h3>
                      <ComputeMetric before="345MW" after="854MW" growth="+147%" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-light text-purple-300 mb-4">Saudi Compute Growth</h3>
                      <ComputeMetric before="429MW" after="841MW" growth="+96%" />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 p-8 rounded-3xl border border-gray-700">
                    <h3 className="text-2xl font-light mb-4 text-purple-300">HUMAIN Initiative</h3>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-thin text-blue-400 mb-2">18,000</div>
                      <div className="text-lg text-gray-300">Blackwell GPUs</div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Launched by PIF (2025). Positioning Saudi Arabia as a global AI compute hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </CityscapeBackground>
        )}

        {/* Slide 5 - Visionary Leadership */}
        {currentSlide === 4 && (
          <section className="min-h-screen bg-black relative">
            <div className="container mx-auto px-8 py-20">
              <h2 className="text-6xl font-thin text-center mb-20">Visionary Leadership</h2>
              
              <div className="max-w-4xl mx-auto space-y-16">
                <QuoteCard 
                  quote="For emerging economies, AI is a game‑changer. It enables better services without the constraints of conventional development."
                  author="H.E. Omar Sultan Al Olama"
                  title="UAE AI Minister"
                />
                
                <QuoteCard 
                  quote="We should expect a lot more AI ministers around the world in the coming years."
                  author="H.E. Omar Sultan Al Olama"
                  title="Atlantic Council, 2024"
                />
              </div>
            </div>
          </section>
        )}

        {/* Slide 6 - Energy Infrastructure */}
        {currentSlide === 5 && (
          <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
            <div className="container mx-auto px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-6xl font-thin mb-12">Energy Infrastructure</h2>
                  <h3 className="text-3xl font-light text-orange-300 mb-8">Power for AI</h3>
                  
                  <div className="space-y-6">
                    <EnergyMetric label="Data Center Capacity" value="2.5GW" growth="+180%" />
                    <EnergyMetric label="Renewable Integration" value="65%" growth="+45%" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-12 rounded-3xl border border-gray-800">
                    <blockquote className="text-2xl font-light leading-relaxed text-gray-300 mb-8">
                      "We will have the ability to expand our energy infrastructure based on the need of the data centres."
                    </blockquote>
                    <cite className="text-lg text-orange-400 font-medium">
                      — H.E. Omar Sultan Al Olama
                    </cite>
                    <div className="mt-4 text-sm text-gray-500">Reuters Interview</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 7 - 12-Month Action Plan */}
        {currentSlide === 6 && (
          <section className="min-h-screen bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 flex items-center">
            <div className="container mx-auto px-8 py-20">
              <h2 className="text-6xl font-thin text-center mb-20">12-Month Action Plan</h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <ActionItem quarter="Q1" title="Infrastructure Assessment" />
                  <ActionItem quarter="Q2" title="Talent Acquisition" />
                  <ActionItem quarter="Q3" title="Partnership Development" />
                  <ActionItem quarter="Q4" title="Implementation & Scale" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  <ActionItem quarter="2025" title="Market Leadership" />
                  <ActionItem quarter="2026" title="Regional Expansion" />
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={scrollToDownload}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Download the Full Playbook
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 8 - Closing/FOMO CTA */}
        {currentSlide === 7 && (
          <section className="min-h-screen bg-gradient-to-br from-red-900/20 via-black to-orange-900/20 flex items-center">
            <div className="container mx-auto px-8 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-7xl font-thin mb-8">Don't Be Left Behind.</h2>
                <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-8">
                  AI is reshaping economies at exponential speed.
                </p>
                <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed mb-16">
                  This report shows where the Middle East stands—and what you must do to stay ahead.
                </p>
                <button 
                  onClick={scrollToDownload}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-16 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse"
                >
                  Get the Free Report Now
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

// Component definitions
const StatBlock: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="border-l-4 border-blue-400 pl-6 group hover:border-blue-300 transition-all duration-300">
    <div className="text-4xl font-thin text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">{number}</div>
    <div className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
  </div>
);

const BigNumberCard: React.FC<{ number: string; subtitle: string; trend: string }> = ({ number, subtitle, trend }) => (
  <div className="relative group hover-lift">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-ai-breathe"></div>
    <div className="relative bg-gray-900/80 p-12 rounded-3xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-center">
      <div className="text-7xl font-thin text-white mb-4">{number}</div>
      <div className="text-2xl text-gray-400 mb-6">{subtitle}</div>
      <div className="inline-flex items-center space-x-2 text-green-400 animate-pulse">
        <ArrowTrendingUpIcon className="w-5 h-5 animate-bounce" />
        <span className="font-medium">{trend}</span>
      </div>
    </div>
  </div>
);

const ComputeMetric: React.FC<{ before: string; after: string; growth: string }> = ({ before, after, growth }) => (
  <div className="flex items-center justify-between p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
    <div className="flex items-center space-x-4">
      <span className="text-2xl text-gray-500 line-through">{before}</span>
      <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />
      <span className="text-3xl font-light text-white">{after}</span>
    </div>
    <div className="text-right">
      <div className="text-green-400 font-medium">{growth}</div>
    </div>
  </div>
);

const QuoteCard: React.FC<{ quote: string; author: string; title: string }> = ({ quote, author, title }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-3xl"></div>
    <div className="relative bg-gray-900/30 p-12 rounded-3xl border border-gray-800">
      <div className="text-6xl text-blue-400/20 mb-4">"</div>
      <blockquote className="text-3xl font-light leading-relaxed text-gray-200 mb-8">
        {quote}
      </blockquote>
      <div className="flex items-center space-x-4">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
        <div>
          <cite className="text-xl text-blue-400 font-medium block">{author}</cite>
          <div className="text-gray-500 mt-1">{title}</div>
        </div>
      </div>
    </div>
  </div>
);

const EnergyMetric: React.FC<{ label: string; value: string; growth: string }> = ({ label, value, growth }) => (
  <div className="flex items-center justify-between p-6 bg-gray-900/30 rounded-xl border border-gray-800">
    <div>
      <div className="text-lg text-gray-400">{label}</div>
      <div className="text-2xl font-light text-white">{value}</div>
    </div>
    <div className="text-right">
      <div className="text-green-400 font-medium">{growth}</div>
      <div className="text-sm text-gray-500">Growth</div>
    </div>
  </div>
);

const ActionItem: React.FC<{ quarter: string; title: string }> = ({ quarter, title }) => (
  <div className="group cursor-pointer">
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
      <div className="text-3xl font-thin text-blue-400 mb-3">{quarter}</div>
      <div className="text-lg text-gray-300">{title}</div>
    </div>
  </div>
);

export default AIPlaybookPresentationComplete;