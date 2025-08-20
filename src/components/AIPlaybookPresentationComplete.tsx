import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ArrowTrendingUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';
// Remove import of SpaceBackground, will use CustomSpaceBackground below

// Custom SpaceBackground for slide 1 with video and circles
const CustomSpaceBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-full h-full min-h-screen overflow-hidden">
    {/* Background Video (updated) */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 bg-black"
      src="https://videos.pexels.com/video-files/18458403/18458403-hd_1920_1080_24fps.mp4"
      poster="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1920&q=80"
    />
    {/* Blurred Pulses */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 opacity-40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-400 opacity-40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-2/3 w-56 h-56 bg-pink-400 opacity-40 rounded-full blur-3xl animate-pulse" />
    </div>
    {/* Content */}
    <div className="relative z-30">
      {children}
    </div>
  </div>
);

function AIPlaybookPresentationComplete() {
  // Slide state
  const totalSlides = 9;
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  // Visibility animation for hero text
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  // Main render
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
          <CustomSpaceBackground>
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
              {/* Animated circles overlay for better visibility */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/40 blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-400/40 blur-2xl animate-pulse" />
                <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-pink-400/40 blur-2xl animate-pulse" />
              </div>
              <AIAnimatedBackground />
              <div className="relative z-10 text-center px-8 max-w-6xl">
                <h1 className={`text-7xl md:text-9xl font-thin tracking-tight mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  AI in the
                  <span className="block font-light text-gray-300">Middle East</span>
                  <span className="block text-5xl md:text-7xl text-blue-400 font-extralight">2025</span>
                </h1>
                <p className={`text-2xl md:text-3xl font-light text-gray-400 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  The GenAI playbook for Marketing, Product, HR & Engineering
                </p>
                {/* CTA removed */}
              </div>
            </section>
          </CustomSpaceBackground>
        )}

        {/* Slide 2 - Executive Teaser */}
        {currentSlide === 1 && (
          <section className="min-h-screen flex items-center relative overflow-hidden">
            <AIAnimatedBackground />
            <div className="container mx-auto px-8 py-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-6xl font-thin mb-12 text-white">The GenAI gold rush has begun.</h2>
                  <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm tracking-wide">
                      Built for enterprise teams: Marketing, Product, HR & Engineering
                    </span>
                  </div>
                  <div className="space-y-8">
                    <StatBlock number="$320B" label="GenAI-driven prize by 2030" />
                    <StatBlock number="$7.2B" label="GenAI adoption surge" />
                    <StatBlock number="18,000" label="LLM compute lit up (Blackwell)" />
                    <StatBlock number="854MW" label="LLM compute growth (UAE & KSA)" />
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
        )}

        {/* Slide 3 - Shock Numbers */}
        {currentSlide === 2 && (
          <section className="min-h-screen relative overflow-hidden">
            <AIAnimatedBackground />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
            <div className="relative z-10 container mx-auto px-8 py-20">
              <h2 className="text-7xl font-thin text-center mb-20">GenAI growth like the world has never seen.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <BigNumberCard 
                  number="$320B"
                  subtitle="GenAI upside"
                  trend="+2,400%"
                />
                <BigNumberCard 
                  number="$7.2B"
                  subtitle="GenAI investment trajectory"
                  trend="+340%"
                />
              </div>
              <div className="mt-20 text-center">
                <div className="inline-flex items-center space-x-4 bg-gray-900/50 px-8 py-4 rounded-full border border-gray-800">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-light">This is exponential. Are you ready to ride it?</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 4 - Infrastructure Arms Race */}
        {currentSlide === 3 && (
          <section className="min-h-screen flex items-center">
            <div className="container mx-auto px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-6xl font-thin mb-12">LLM compute is the new oil.</h2>
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
                    <h3 className="text-2xl font-light mb-4 text-purple-300">HUMAIN: Saudi's GPU spring</h3>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-thin text-blue-400 mb-2">18,000</div>
                      <div className="text-lg text-gray-300">Blackwell GPUs</div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      PIF lit 18,000 Blackwell GPUs (2025). A new global AI compute benchmark.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 5 - Visionary Leadership */}
        {currentSlide === 4 && (
          <section className="min-h-screen bg-black relative">
            <div className="container mx-auto px-8 py-20">
              <h2 className="text-6xl font-thin text-center mb-20">Visionaries are setting the pace.</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
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
            </div>
          </section>
        )}

        {/* Slide 5A – Success Signals */}
        {currentSlide === 5 && (
          <section className="min-h-screen bg-gradient-to-br from-emerald-900/10 via-black to-blue-900/10 flex items-center">
            <div className="container mx-auto px-8 py-20">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-6xl font-thin mb-6">Success Signals</h2>
                <p className="text-xl text-gray-400">Measured outcomes from GenAI in the enterprise — fast wins your board will care about.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/70 p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-5xl font-thin text-emerald-300 mb-2">↓ 28%</div>
                    <div className="text-gray-300 text-lg mb-2">Support AHT</div>
                    <div className="text-gray-500 text-sm">GenAI agent for Tier‑1 queries</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/70 p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-5xl font-thin text-blue-300 mb-2">↓ 40%</div>
                    <div className="text-gray-300 text-lg mb-2">Fraud false positives</div>
                    <div className="text-gray-500 text-sm">RAG + behavioral features</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-sky-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/70 p-8 rounded-2xl border border-gray-800 text-center">
                    <div className="text-5xl font-thin text-cyan-300 mb-2">↓ 35%</div>
                    <div className="text-gray-300 text-lg mb-2">Dev cycle time</div>
                    <div className="text-gray-500 text-sm">Code‑gen & test‑gen adoption</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-3 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-light text-gray-300">These are the kinds of deltas we target in phase one.</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 6 – Enterprise GenAI Stack */}
        {currentSlide === 6 && (
          <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
            <div className="container mx-auto px-8 py-20">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-6xl font-thin mb-6">Your Enterprise GenAI Stack</h2>
                <p className="text-xl text-gray-400">Everything you need to ship agents, copilots, and RAG—safely—inside the enterprise.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StackCard title="Data Layer" desc="Vector stores, feature stores, observability; PII boundaries in your VPC" tag="Secure data" />
                <StackCard title="Model Layer" desc="Arabic‑capable LLMs, sovereign/hosted options; prompt routing & caching" tag="Arabic‑first" />
                <StackCard title="Orchestration" desc="Agent frameworks, tools, retrieval; workflow graphs & function calling" tag="Agents" />
                <StackCard title="Safety & Gov" desc="Guardrails, evals, red‑teaming, audit trails; human‑in‑the‑loop" tag="Trust" />
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-3 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-blue-400" />
                  <span className="text-lg font-light text-gray-300">This is how teams ship GenAI in weeks, not quarters.</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Slide 7 - Teaser */}
        {currentSlide === 7 && (
          <section className="min-h-screen bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 flex items-center">
            <div className="container mx-auto px-8 py-20">
              <h2 className="text-6xl font-thin text-center mb-20">The 12‑Month Action Plan</h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <ActionItem quarter="Marketing" title="Personalisation at scale, creative automation" />
                  <ActionItem quarter="Product" title="Discovery → delivery in weeks, not quarters" />
                  <ActionItem quarter="HR" title="Recruiting & onboarding agents, L&D copilots" />
                  <ActionItem quarter="Engineering" title="Code‑gen, test‑gen, RAG with governance" />
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center space-x-3 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800">
                    <ArrowTrendingUpIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-lg font-light text-gray-300">Don’t just watch it happen. Get the full playbook.</span>
                  </div>
                </div>
                
                {/* CTA removed */}
              </div>
            </div>
          </section>
        )}

        {/* Slide 8 - Closing/FOMO CTA */}
        {currentSlide === 8 && (
          <section className="min-h-screen bg-gradient-to-br from-red-900/20 via-black to-orange-900/20 flex items-center relative overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
              src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="container mx-auto px-8 py-20 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-7xl font-thin mb-8">Don’t Be Left Behind.</h2>
                <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-2">GenAI is rewriting how the Middle East builds, markets, and operates.</p>
                <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-2">Leaders are shipping real agents, copilots, and code in weeks.</p>
                <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed mb-16">The only question: will your team lead or follow?</p>
                {/* CTA removed */}
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

const StackCard: React.FC<{ title: string; desc: string; tag: string }> = ({ title, desc, tag }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative bg-gray-900/70 p-6 rounded-2xl border border-gray-800 group-hover:border-blue-500/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-light text-white">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{tag}</span>
      </div>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default AIPlaybookPresentationComplete;