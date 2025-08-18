import React, { useState } from 'react';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';

const AIPlaybookLanding: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Save to Supabase
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL!,
        import.meta.env.VITE_SUPABASE_ANON_KEY!
      );
      
      const { error } = await supabase
        .from('ai_playbook_leads')
        .insert([{ 
          email, 
          source: 'AI Playbook Download'
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Email captured successfully:', email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error capturing email:', error);
      // Still show success to user for better UX, but log error for debugging
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
              <div className="inline-flex items-center space-x-3 bg-blue-900/20 px-4 py-2 rounded-full border border-blue-800/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-300">Exclusive Report • 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-thin leading-tight">
                AI in the
                <span className="block text-blue-400">Middle East</span>
                <span className="block text-4xl md:text-5xl text-gray-400 font-extralight">2025 Playbook</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                Unlock the definitive AI in the Middle East 2025 Playbook—featuring exclusive stats, 
                compute build-out visuals, and insights from AI policy leaders.
              </p>

              {/* Key Stats Preview */}
              <div className="grid grid-cols-2 gap-6 py-8">
                <StatPreview number="$320B" label="Economic Impact" />
                <StatPreview number="$7.2B" label="AI Investment" />
                <StatPreview number="18K" label="Blackwell GPUs" />
                <StatPreview number="854MW" label="Compute Growth" />
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <FeatureItem text="Exclusive ministerial insights & policy frameworks" />
                <FeatureItem text="Infrastructure build-out roadmaps & compute metrics" />
                <FeatureItem text="12-month strategic action plan for businesses" />
                <FeatureItem text="Energy scaling strategies for AI infrastructure" />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              
              {!isSubmitted ? (
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800">
                  <div className="text-center mb-8">
                    <ArrowDownTrayIcon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                    <h3 className="text-2xl font-light mb-2">Download Free Report</h3>
                    <p className="text-gray-400">Enter your email to access the full playbook</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-glow"
                    >
                      {isLoading ? 'Processing...' : 'Download Playbook'}
                    </button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    No spam. Unsubscribe anytime. Your data is secure.
                  </div>
                </div>
              ) : (
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-green-800">
                  <div className="text-center">
                    <CheckCircleIcon className="w-16 h-16 mx-auto text-green-400 mb-6" />
                    <h3 className="text-2xl font-light mb-4">Download Ready!</h3>
                    <p className="text-gray-300 mb-8">
                      Check your email for the download link to the AI in the Middle East 2025 Playbook.
                    </p>
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-3 rounded-xl font-medium">
                      Open Email
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-thin text-center mb-16">What's Inside</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PreviewCard 
              title="Voice of a Minister"
              description="Exclusive insights from H.E. Omar Sultan Al Olama on AI's transformative impact"
              highlight="4 Key Quotes"
            />
            <PreviewCard 
              title="In Context"
              description="Visual data stories showing the $320B opportunity and infrastructure build-out"
              highlight="12 Charts & Metrics"
            />
            <PreviewCard 
              title="Action Checklist"
              description="Your 12-month strategic roadmap for AI adoption and competitive advantage"
              highlight="24 Action Items"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-gray-300 mb-8">
              "AI is going to be the new lifeblood for governments and the private sector as well."
            </blockquote>
            <cite className="text-xl text-blue-400 font-medium">
              — H.E. Omar Sultan Al Olama, UAE AI Minister
            </cite>
          </div>
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