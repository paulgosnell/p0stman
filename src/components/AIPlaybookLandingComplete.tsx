// Content Card Component
const ContentCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="group">
      <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-light mb-4 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { ArrowDownTrayIcon, CheckCircleIcon, DocumentTextIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';

const AIPlaybookLandingComplete: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL!,
        import.meta.env.VITE_SUPABASE_ANON_KEY!
      );

      // Only send valid columns: email, source
      const { data, error } = await supabase
        .from('ai_playbook_leads')
        .insert([{ 
          email,
          source: 'AI Playbook Landing Page'
        }]);

      if (error) {
        console.error('Supabase error:', error);
        alert(`Supabase error: ${error.message}\nDetails: ${JSON.stringify(error)}`);
        throw error;
      }

  console.log('Lead captured successfully:', { email, data });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error capturing lead:', error);
  const err: any = error;
  alert(`Error capturing lead: ${err && err.message ? err.message : JSON.stringify(err)}`);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AIPlaybookSEO page="landing" />
      <div className="min-h-screen bg-black text-white">
        
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <AIAnimatedBackground />

          <div className="relative z-10 container mx-auto px-6 md:px-8 py-24 md:py-28">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className={`text-6xl md:text-9xl font-thin tracking-tight mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI in the
                <span className="block font-light text-gray-300">Middle East</span>
                <span className="block text-4xl md:text-7xl text-blue-400 font-extralight">2025</span>
              </h1>
              <p className={`text-xl md:text-3xl font-light text-gray-400 mb-12 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                The GenAI playbook for Marketing, Product, HR & Engineering
              </p>

              <button
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg px-12 py-6 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
                aria-label="Get the free report"
              >
                Get the Free Report
              </button>
            </div>
          </div>
          </section>

        {/* Credibility Section */}
  <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden flex items-center">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 leading-tight">Why leaders download this report</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <ul className="space-y-6">
                    {[
                      'Built for enterprise teams: Marketing, Product, HR & Engineering',
                      'Real GenAI use cases that ship: agents, RAG, code‑gen, analytics',
                      'Playbooks & templates you can run in weeks, not quarters',
                      'Arabic‑first & sovereign‑friendly patterns (data, governance, risk)',
                      '$320B regional AI impact by 2030 — why GenAI is the lever'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-900/80 p-8 rounded-3xl border border-blue-500/30">
                    <blockquote className="text-2xl font-light leading-relaxed text-gray-200 mb-6">
                      "AI is going to be the new lifeblood for governments and the private sector as well."
                    </blockquote>
                    <cite className="text-lg text-blue-400 font-medium">
                      — H.E. Omar Sultan Al Olama, UAE Minister of State for AI
                    </cite>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:shadow-lg px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Claim Your Copy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Preview */}
  <section className="min-h-screen bg-black flex items-center">
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28">
            <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 leading-tight">What's inside (sneak peek)</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <ContentCard 
                icon={<ChartBarIcon className="w-12 h-12 text-blue-400" />}
                title="Marketing & Product"
                description="Personalisation at scale, creative automation, rapid product discovery"
              />
              <ContentCard 
                icon={<DocumentTextIcon className="w-12 h-12 text-purple-400" />}
                title="People Ops & HR"
                description="Recruiting copilots, onboarding agents, L&D content in Arabic/English"
              />
              <ContentCard 
                icon={<ClipboardDocumentCheckIcon className="w-12 h-12 text-green-400" />}
                title="Engineering & Code"
                description="Code‑gen, test‑gen, RAG patterns, evals & governance that pass audit"
              />
            </div>

            <div className="text-center">
              <button
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Get the full 40‑page report
              </button>
            </div>
          </div>
        </section>

        {/* Target Personas */}
  <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden flex items-center">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            src="https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28 relative z-10">
            <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 leading-tight">Who Is This For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'CMOs & Growth Leaders', description: 'Ship personalisation that performs' },
                { title: 'CPOs & Product Leaders', description: 'Shorten discovery → delivery' },
                { title: 'CHROs & People Ops', description: 'Automate hiring, onboarding, L&D' },
                { title: 'CTOs & Engineering Leaders', description: 'Accelerate code with governance' }
              ].map((persona, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-gray-700">
                  <h3 className="text-xl font-light text-white mb-3">{persona.title}</h3>
                  <p className="text-gray-400">{persona.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <button
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Get the free report
              </button>
            </div>
          </div>
        </section>

          {/* Download Form Section */}
          <section id="download-form" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left - Reassurance */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-thin mb-8 leading-tight">The Offer</h2>
                  <div className="space-y-6">
                    {[
                      '100% free — instant access',
                      'No fluff: insights, stats, and actions only',
                      'One email. No spam. Unsubscribe anytime.'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <CheckCircleIcon className="w-6 h-6 text-green-400" />
                        <span className="text-lg text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Form */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                  
                  {!isSubmitted ? (
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
                      <div className="text-center mb-8">
                        <ArrowDownTrayIcon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                        <h3 className="text-2xl font-light mb-2">Get Instant Access</h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            aria-label="Email address"
                            autoComplete="email"
                            className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            required
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          {isLoading ? 'Processing...' : 'Send Me the Report'}
                        </button>
                      </form>

                      <div className="mt-6 text-center text-sm text-gray-500">
                        No spam. Unsubscribe anytime. Your data is secure. Read our <a href="/privacy" className="underline text-gray-400 hover:text-gray-200">Privacy Policy</a>.
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-green-800">
                      <div className="text-center">
                        <CheckCircleIcon className="w-16 h-16 mx-auto text-green-400 mb-6" />
                        <h3 className="text-2xl font-light mb-4">Report Sent!</h3>
                        <p className="text-gray-300 mb-8">
                          Check your inbox for your download link to <em>AI in the Middle East 2025</em>. If it’s not there, check spam/promotions.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          </section>

        {/* FOMO Closing Section */}
  <section className="min-h-screen relative overflow-hidden flex items-center">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-thin mb-12 leading-tight">Don't Be Left Behind.</h2>
              <p className="text-lg md:text-2xl font-light text-gray-300 leading-relaxed mb-4">GenAI is rewriting how the Middle East builds, markets, and operates.</p>
              <p className="text-lg md:text-2xl font-light text-gray-300 leading-relaxed mb-4">Leaders are shipping real agents, copilots, and code in weeks.</p>
              <p className="text-base md:text-xl font-light text-gray-400 leading-relaxed mb-12">The only question: will your team lead or follow?</p>
              <button
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Get the free report
              </button>
            </div>
          </div>
        </section>

      {/* About POSTMAN Section */}
        <section className="min-h-screen relative overflow-hidden flex items-center">
          <div className="container mx-auto px-6 md:px-8 py-24 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Copy + badges + CTAs */}
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 text-xs tracking-widest uppercase bg-white/5 border border-gray-200 rounded-full text-gray-300">Built in the Middle East</span>
                  <span className="px-3 py-1 text-xs tracking-widest uppercase bg-white/5 border border-gray-200 rounded-full text-gray-300">Gov • Enterprise • Startup</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-thin text-white mb-6 leading-tight">POSTMAN — AI product studio for the bold</h2>
                <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6">
                  We build AI products that ship. From strategy to working software, we partner with governments, enterprises and startups to turn vision into production in weeks, not quarters.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-gray-300">Sovereign & Arabic‑first AI, enterprise‑grade engineering</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-gray-300">Playbooks for marketing, product, HR & engineering</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-300">Security, governance, and measurable ROI baked in</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href="/about"
                    className="inline-flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-[1.02] text-white"
                  >
                    Learn more about POSTMAN
                  </a>
                  <button
                    onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-gray-200 text-base md:text-lg font-medium text-white/90 hover:text-white hover:border-white/40 hover:bg-gray-50 transition-all duration-300"
                  >
                    Get the free report
                  </button>
                </div>

                {/* Small stat chips */}
                <div className="mt-8 flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-gray-200 text-gray-300">40+ AI products shipped</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-gray-200 text-gray-300">7+ sectors</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-gray-200 text-gray-300"><span className="tabular-nums">6–8</span>wks avg. to PoC</span>
                </div>
              </div>

              {/* Right: Tilted product card with glow ring */}
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-blue-600/40 via-purple-600/30 to-cyan-500/30 blur-2xl z-0" />
                {/* Background video - higher opacity and z-10 */}
                <div className="relative bg-black/50 border border-gray-200 rounded-[28px] p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 z-20">
                  <div className="aspect-[4/3] rounded-2xl relative flex items-center justify-center overflow-hidden">
                    {/* Video sits behind all card content */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60 z-0 pointer-events-none"
                      src="https://videos.pexels.com/video-files/4410402/4410402-hd_1920_1080_30fps.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="relative z-10 text-center px-6">
                      <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Studio Snapshot</p>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">Applied AI that ships</h3>
                      <p className="text-gray-400">Agents & copilots, RAG & data pipelines, code‑gen & test‑gen, evals & observability — delivered end‑to‑end.</p>
                    </div>
                  </div>

                  {/* Floating chips */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs shadow-lg">Arabic‑first</div>
                  <div className="absolute -bottom-4 right-6 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs shadow-lg">Enterprise‑grade</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  </>
  );
};
export default AIPlaybookLandingComplete;