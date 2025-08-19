import React, { useState } from 'react';
import { ArrowDownTrayIcon, CheckCircleIcon, DocumentTextIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';

const AIPlaybookLandingComplete: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL!,
        import.meta.env.VITE_SUPABASE_ANON_KEY!
      );
      
      const { error } = await supabase
        .from('ai_playbook_leads')
        .insert([{ 
          email, 
          name,
          company,
          role,
          source: 'AI Playbook Landing Page'
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Lead captured successfully:', { email, name, company, role });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error capturing lead:', error);
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[url('/ai-infrastructure-bg.jpg')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative z-10 container mx-auto px-8 py-20">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-thin leading-tight mb-8">
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI in the Middle East 2025
                </span>
                <span className="block text-4xl md:text-5xl text-white font-light mt-4">
                  The Playbook for People & Business
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
                The must-read report for business leaders, policymakers, and innovators navigating the AI revolution in the region.
              </p>

              <button 
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow"
              >
                📥 Get the Free Report
              </button>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">Why Download This Report?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <ul className="space-y-6">
                    {[
                      '$320B economic impact of AI by 2030',
                      '$7.2B AI investment forecast by 2026',
                      'Exclusive insights from regional leaders (incl. UAE AI Minister)',
                      'Real-world use cases in healthcare, finance, energy, and smart cities',
                      'Action checklists for boards, startups, and governments'
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
                      — H.E. Omar Sultan Al Olama
                    </cite>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-green-600 to-blue-600 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  👉 Claim Your Copy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Preview */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">What's Inside</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <ContentCard 
                icon={<ChartBarIcon className="w-12 h-12 text-blue-400" />}
                title="By the Numbers"
                description="Investment flows, growth projections, and adoption metrics across the region"
              />
              <ContentCard 
                icon={<DocumentTextIcon className="w-12 h-12 text-purple-400" />}
                title="Industry Deep Dives"
                description="Healthcare, finance, energy, transport, and government transformation stories"
              />
              <ContentCard 
                icon={<ClipboardDocumentCheckIcon className="w-12 h-12 text-green-400" />}
                title="The Playbook"
                description="Actionable strategies for executives, policymakers, and entrepreneurs"
              />
            </div>

            <div className="text-center">
              <button 
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105"
              >
                📊 Download the Full 40-page Report
              </button>
            </div>
          </div>
        </section>

        {/* Target Personas */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">Who Is This For?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Executives', description: 'Stay ahead of disruption' },
                { title: 'Policy Leaders', description: 'Shape national strategies' },
                { title: 'Entrepreneurs', description: 'Spot new opportunities' },
                { title: 'Investors', description: 'Identify where capital flows next' }
              ].map((persona, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-gray-700">
                  <h3 className="text-xl font-light text-white mb-3">{persona.title}</h3>
                  <p className="text-gray-400">{persona.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Form Section */}
        <section id="download-form" className="py-20 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left - Reassurance */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-thin mb-8">The Offer</h2>
                  <div className="space-y-6">
                    {[
                      '100% free',
                      'No fluff, just insights, stats, and actions',
                      'Immediate download after signup'
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
                        <h3 className="text-2xl font-light mb-2">🚀 Get Instant Access</h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company"
                            className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Role/Title"
                            className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          {isLoading ? 'Processing...' : '📥 Send Me the Report'}
                        </button>
                      </form>

                      <div className="mt-6 text-center text-sm text-gray-500">
                        No spam. Unsubscribe anytime. Your data is secure.
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-green-800">
                      <div className="text-center">
                        <CheckCircleIcon className="w-16 h-16 mx-auto text-green-400 mb-6" />
                        <h3 className="text-2xl font-light mb-4">Report Sent!</h3>
                        <p className="text-gray-300 mb-8">
                          Check your email for the download link to the AI in the Middle East 2025 Playbook.
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
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-thin mb-8">Don't Be Left Behind.</h2>
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-12">
                AI is reshaping economies at exponential speed. This report shows where the Middle East stands—and what you must do to stay ahead.
              </p>
              <button 
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                🔥 Download Free Report Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Content Card Component
const ContentCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
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

export default AIPlaybookLandingComplete;