import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, TrendingUp, Zap, Target, Users, DollarSign } from 'lucide-react';

const ClarityPitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'Clarity',
      subtitle: 'AI Transformation Made Simple',
      tagline: '"We don\'t sell AI hype. We cut costs fast with AI — guaranteed."',
      background: 'from-blue-900 via-purple-900 to-indigo-900'
    },
    {
      id: 'problem',
      title: 'The Problem',
      content: [
        'AI is urgent. But 8 out of 10 AI projects fail.',
        'Wasted budgets, wasted time, frustrated teams.',
        '78% of Middle East companies say they need AI — most don\'t know where to start.',
        'The result: money lost every day to manual, broken processes.'
      ],
      background: 'from-red-900 via-gray-900 to-black',
      stat: '80%',
      statLabel: 'AI Projects Fail'
    },
    {
      id: 'promise',
      title: 'The Clarity Promise',
      content: [
        'We make AI simple, fast, and guaranteed.',
        'We find where AI saves you money.',
        'We build working solutions in weeks, not months.',
        'If we don\'t deliver ROI in 90 days → you get your money back.'
      ],
      background: 'from-green-900 via-blue-900 to-purple-900',
      icon: CheckCircle
    },
    {
      id: 'process',
      title: 'The Clarity Process',
      subtitle: 'Three steps to AI ROI:',
      steps: [
        { phase: 'Audit', weeks: 'Weeks 1–2', description: 'We find your leaks' },
        { phase: 'Build', weeks: 'Weeks 3–6', description: 'We plug them fast' },
        { phase: 'Scale', weeks: 'Ongoing', description: 'We turn savings into systems' }
      ],
      background: 'from-purple-900 via-blue-900 to-indigo-900'
    },
    {
      id: 'audit',
      title: 'Phase 1: Audit',
      subtitle: '"Where is AI costing you money?"',
      points: [
        'Shadow key workflows',
        'Map wasted time & budget',
        'Identify 3–5 automation opportunities',
        'Quantify ROI for each'
      ],
      deliverable: 'AI Opportunity Report with clear roadmap',
      background: 'from-orange-900 via-red-900 to-purple-900',
      icon: Target
    },
    {
      id: 'build',
      title: 'Phase 2: Build',
      subtitle: '"We build your highest-impact solution first"',
      points: [
        'Develop MVP in weeks, not months',
        'Test & validate with your team',
        'Deploy a production-ready solution'
      ],
      deliverable: 'Working AI saving measurable time & money',
      background: 'from-blue-900 via-indigo-900 to-purple-900',
      icon: Zap
    },
    {
      id: 'scale',
      title: 'Phase 3: Scale',
      subtitle: '"Expand what works, optimize what doesn\'t"',
      points: [
        'Monthly performance reviews',
        'Continuous optimization & expansion',
        'Train your team in AI-first workflows'
      ],
      deliverable: 'Self-sustaining AI transformation',
      background: 'from-green-900 via-teal-900 to-blue-900',
      icon: TrendingUp
    },
    {
      id: 'pricing',
      title: 'Pricing',
      packages: [
        {
          name: 'Clarity Starter',
          price: 'AED 50,000',
          features: [
            'Audit, roadmap & 1 working solution',
            '30-day optimization',
            'ROI Guarantee: 3x return in Year 1'
          ]
        },
        {
          name: 'Clarity Partnership',
          price: 'AED 15,000/month',
          features: [
            'Ongoing AI solution development',
            'Monthly reviews & optimization',
            'Team training + quarterly strategy',
            'Priority support'
          ]
        }
      ],
      footer: 'One fixed fee. No surprises.',
      background: 'from-purple-900 via-pink-900 to-red-900'
    },
    {
      id: 'why',
      title: 'Why Clarity Works',
      subtitle: 'Speed. Certainty. Expertise.',
      advantages: [
        { title: 'Speed', description: 'Deploy in 4–6 weeks (70% faster than industry)' },
        { title: 'Certainty', description: 'ROI guarantee, fixed pricing, clear success metrics' },
        { title: 'Expertise', description: '20+ years consultancy experience, 20+ AI builds in 2024, ground-floor at AI unicorn' }
      ],
      background: 'from-cyan-900 via-blue-900 to-indigo-900'
    },
    {
      id: 'success',
      title: 'Success Stories',
      stories: [
        { client: 'Dubai Retailer', solution: 'Automated inventory', result: 'Saved AED 240K annually (built in 5 days)' },
        { client: 'Abu Dhabi Manufacturer', solution: 'AI quality control', result: 'Reduced defects by 85% (ROI in 3 months)' },
        { client: 'Saudi Services Firm', solution: 'Client onboarding automation', result: '3 days down to 3 hours' }
      ],
      background: 'from-emerald-900 via-green-900 to-teal-900'
    },
    {
      id: 'competitive',
      title: 'Competitive Advantage',
      competitors: [
        { type: 'Big Consultancies', weakness: 'Slow, expensive, PowerPoints' },
        { type: 'AI Agencies', weakness: 'Strategy without delivery' },
        { type: 'Internal Teams', weakness: 'Lack speed & external perspective' }
      ],
      advantage: 'Clarity: Startup speed, guaranteed ROI, execution first.',
      background: 'from-violet-900 via-purple-900 to-indigo-900'
    },
    {
      id: 'next-steps',
      title: 'Next Steps',
      roadmap: [
        { phase: 'Market Entry', detail: '5 Dubai family businesses (pilot)' },
        { phase: 'Partner Network', detail: '3 consultancies white-labelling Clarity' },
        { phase: 'Regional Scale', detail: 'Saudi, Kuwait, Qatar by Q2 2025' },
        { phase: 'Target', detail: '10 active clients → AED 2M ARR by end of 2025' }
      ],
      footer: 'Clarity: AI that pays for itself in weeks.',
      background: 'from-blue-900 via-indigo-900 to-purple-900'
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.background} opacity-90 transition-all duration-1000`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg animate-ping"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 h-full flex items-center justify-center p-8 transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Title Slide */}
          {slide.id === 'title' && (
            <div className="space-y-8 animate-fadeInUp">
              <h1 className="text-8xl md:text-9xl font-thin tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-white/90">
                {slide.subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
                {slide.tagline}
              </p>
            </div>
          )}

          {/* Problem Slide */}
          {slide.id === 'problem' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-white mb-8">
                {slide.title}
              </h1>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="text-8xl font-thin text-red-400 mb-4">{slide.stat}</div>
                  <div className="text-2xl text-red-300">{slide.statLabel}</div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  {slide.content?.map((item, index) => (
                    <p key={index} className={`text-xl text-gray-700 leading-relaxed animate-slideInRight delay-${index * 200}`}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Promise Slide */}
          {slide.id === 'promise' && (
            <div className="space-y-12 animate-fadeInUp">
              <div className="flex items-center justify-center gap-4 mb-8">
                {slide.icon && <slide.icon className="w-16 h-16 text-green-400" />}
                <h1 className="text-6xl md:text-7xl font-thin text-white">
                  {slide.title}
                </h1>
              </div>
              <div className="grid gap-8 max-w-4xl mx-auto">
                {slide.content?.map((item, index) => (
                  <div key={index} className={`bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 animate-slideInUp delay-${index * 150}`}>
                    <p className="text-xl text-white leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Slide */}
          {slide.id === 'process' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-2xl text-gray-700 mb-12">{slide.subtitle}</p>
              <div className="grid md:grid-cols-3 gap-8">
                {slide.steps?.map((step, index) => (
                  <div key={index} className={`bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 animate-slideInUp delay-${index * 200} hover:scale-105 transition-transform duration-300`}>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{index + 1}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.phase}</h3>
                    <p className="text-lg text-blue-300 mb-4">{step.weeks}</p>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase Slides */}
          {(slide.id === 'audit' || slide.id === 'build' || slide.id === 'scale') && (
            <div className="space-y-12 animate-fadeInUp">
              <div className="flex items-center justify-center gap-4 mb-8">
                {slide.icon && <slide.icon className="w-16 h-16 text-blue-400" />}
                <h1 className="text-6xl md:text-7xl font-thin text-white">
                  {slide.title}
                </h1>
              </div>
              <p className="text-2xl text-blue-300 mb-12">{slide.subtitle}</p>
              <div className="grid gap-6 max-w-4xl mx-auto">
                {slide.points?.map((point, index) => (
                  <div key={index} className={`flex items-center gap-4 bg-gray-50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 animate-slideInLeft delay-${index * 150}`}>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-xl text-white">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                <p className="text-lg text-blue-300">
                  <strong>Deliverable:</strong> {slide.deliverable}
                </p>
              </div>
            </div>
          )}

          {/* Pricing Slide */}
          {slide.id === 'pricing' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-gray-900 mb-12">
                {slide.title}
              </h1>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {slide.packages?.map((pkg, index) => (
                  <div key={index} className={`bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 animate-slideInUp delay-${index * 200} hover:scale-105 transition-transform duration-300`}>
                    <h3 className="text-3xl font-semibold text-white mb-4">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-6">{pkg.price}</div>
                    <div className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <p className="text-white/90">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl text-yellow-300 font-semibold mt-8">{slide.footer}</p>
            </div>
          )}

          {/* Why Clarity Slide */}
          {slide.id === 'why' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-3xl text-cyan-300 mb-12">{slide.subtitle}</p>
              <div className="grid gap-8 max-w-5xl mx-auto">
                {slide.advantages?.map((advantage, index) => (
                  <div key={index} className={`bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 animate-slideInUp delay-${index * 200}`}>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">{advantage.title}</h3>
                    <p className="text-xl text-white/90">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Stories Slide */}
          {slide.id === 'success' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-gray-900 mb-12">
                {slide.title}
              </h1>
              <div className="grid gap-8 max-w-5xl mx-auto">
                {slide.stories?.map((story, index) => (
                  <div key={index} className={`bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 animate-slideInUp delay-${index * 200}`}>
                    <h3 className="text-2xl font-bold text-green-300 mb-2">{story.client}</h3>
                    <p className="text-lg text-gray-700 mb-2">{story.solution}</p>
                    <p className="text-xl text-white font-semibold">{story.result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competitive Advantage Slide */}
          {slide.id === 'competitive' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-gray-900 mb-12">
                {slide.title}
              </h1>
              <div className="grid gap-6 max-w-4xl mx-auto mb-12">
                {slide.competitors?.map((competitor, index) => (
                  <div key={index} className={`bg-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 animate-slideInLeft delay-${index * 150}`}>
                    <h3 className="text-xl font-semibold text-red-300 mb-2">{competitor.type}</h3>
                    <p className="text-gray-700">{competitor.weakness}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/50">
                <p className="text-2xl text-white font-bold">{slide.advantage}</p>
              </div>
            </div>
          )}

          {/* Next Steps Slide */}
          {slide.id === 'next-steps' && (
            <div className="space-y-12 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-thin text-gray-900 mb-12">
                {slide.title}
              </h1>
              <div className="grid gap-6 max-w-4xl mx-auto">
                {slide.roadmap?.map((item, index) => (
                  <div key={index} className={`flex items-center gap-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 animate-slideInRight delay-${index * 150}`}>
                    <div className="text-2xl font-bold text-blue-400">{index + 1}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.phase}</h3>
                      <p className="text-gray-700">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
                <p className="text-2xl text-yellow-300 font-bold">{slide.footer}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 border border-gray-200 transition-all duration-200"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 border border-gray-200 transition-all duration-200"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 z-20">
        <span className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default ClarityPitchDeck;