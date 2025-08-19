import React, { useState } from 'react';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';

const AIPlaybookLanding: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        .insert([{ ...form, source: 'AI Playbook Download' }]);
      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl font-thin leading-tight mb-4">
                  <span className="block text-blue-400 animate-glow">AI in the Middle East 2025</span>
                  <span className="block text-3xl md:text-4xl text-white font-light mt-2">The Playbook for People &amp; Business</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-4">
                  The must-read report for business leaders, policymakers, and innovators navigating the AI revolution in the region.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg animate-pulse-glow mb-6">
                  Get the Free Report
                </button>
                <div className="border-t border-gray-800 my-8"></div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-light text-blue-300 mb-2">Why Download This Report?</h2>
                  <ul className="space-y-2 text-gray-300 text-lg">
                    <li>• $320B economic impact of AI by 2030.</li>
                    <li>• $7.2B AI investment forecast by 2026.</li>
                    <li>• Exclusive insights from regional leaders (incl. UAE AI Minister).</li>
                    <li>• Real-world use cases in healthcare, finance, energy, and smart cities.</li>
                    <li>• Action checklists for boards, startups, and governments.</li>
                  </ul>
                  <blockquote className="text-xl md:text-2xl font-light text-blue-400 mt-6 mb-2">“AI is going to be the new lifeblood for governments and the private sector as well.”</blockquote>
                  <div className="text-right text-blue-300 text-base mb-4">— H.E. Omar Sultan Al Olama</div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-base font-medium shadow animate-pulse-glow">👉 Claim Your Copy Now</button>
                </div>
              </div>
              {/* Right Column - Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                {!isSubmitted ? (
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800">
                    <div className="text-center mb-8">
                      <ArrowDownTrayIcon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                      <h3 className="text-2xl font-light mb-2">Get Instant Access</h3>
                      <p className="text-gray-400">Immediate download after signup</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 mb-2" required />
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 mb-2" required />
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 mb-2" required />
                      <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="Role" className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 mb-2" required />
                      <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-glow">
                        {isLoading ? 'Processing...' : 'Send Me the Report'}
                      </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-500">No spam. Unsubscribe anytime. Your data is secure.</div>
                  </div>
                ) : (
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-green-800">
                    <div className="text-center">
                      <CheckCircleIcon className="w-16 h-16 mx-auto text-green-400 mb-6" />
                      <h3 className="text-2xl font-light mb-4">Download Ready!</h3>
                      <p className="text-gray-300 mb-8">Check your email for the download link to the AI in the Middle East 2025 Playbook.</p>
                      <button className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-3 rounded-xl font-medium">Open Email</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Content Preview Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl md:text-6xl font-thin text-center mb-16">What’s Inside</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PreviewCard title="By the Numbers" description="Investment, growth, adoption." highlight="Stats" />
              <PreviewCard title="Industry Deep Dives" description="Healthcare, finance, energy, transport." highlight="Sectors" />
              <PreviewCard title="The Playbook" description="What people and businesses must do now." highlight="Actions" />
            </div>
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg animate-pulse-glow">📊 Download the Full 40-page Report</button>
            </div>
          </div>
        </section>
        {/* Target Personas Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-thin mb-8">Who Is This For?</h2>
            <ul className="space-y-4 text-xl text-gray-300 max-w-2xl mx-auto">
              <li>• Executives – stay ahead of disruption.</li>
              <li>• Policy Leaders – shape national strategies.</li>
              <li>• Entrepreneurs – spot new opportunities.</li>
              <li>• Investors – identify where capital flows next.</li>
            </ul>
          </div>
        </section>
        {/* Offer Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-thin mb-8">The Offer</h2>
            <ul className="space-y-4 text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              <li>• 100% free.</li>
              <li>• No fluff, just insights, stats, and actions.</li>
              <li>• Immediate download after signup.</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg animate-pulse-glow">🚀 Get Instant Access</button>
          </div>
        </section>
        {/* Closing Section (FOMO) */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-thin mb-6">Don’t Be Left Behind.</h2>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-8">AI is reshaping economies at exponential speed. This report shows where the Middle East stands—and what you must do to stay ahead.</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg animate-pulse-glow">🔥 Download Free Report Now</button>
          </div>
        </section>
      </div>
    </>
  );
};

// Component definitions
const StatPreview: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover-lift">
    <div className="text-2xl md:text-3xl font-thin text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">{number}</div>
    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
  </div>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start space-x-3">
    <CheckCircleIcon className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
    <span className="text-gray-300">{text}</span>
  </div>
);

const PreviewCard: React.FC<{ title: string; description: string; highlight: string }> = ({ title, description, highlight }) => (
  <div className="group cursor-pointer">
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
      <div className="text-sm text-blue-400 font-medium mb-3">{highlight}</div>
      <h3 className="text-xl font-light mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default AIPlaybookLanding;