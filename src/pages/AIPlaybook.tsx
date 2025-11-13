import React, { useState } from 'react';
import AIPlaybookPresentationComplete from '../components/AIPlaybookPresentationComplete';
import AIPlaybookLandingComplete from '../components/AIPlaybookLandingComplete';

const AIPlaybook: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'presentation' | 'full-report'>('landing');

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-light text-gray-900">AI Middle East <span className="text-gray-400">2025</span></h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentView('landing')}
                className={`px-5 py-2 rounded-lg text-sm font-light transition-all duration-300 ${
                  currentView === 'landing'
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentView('presentation')}
                className={`px-5 py-2 rounded-lg text-sm font-light transition-all duration-300 ${
                  currentView === 'presentation'
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                }`}
              >
                Deck
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">
        {currentView === 'landing' && <AIPlaybookLandingComplete />}
        {currentView === 'presentation' && <AIPlaybookPresentationComplete />}
      </main>
    </div>
  );
};

export default AIPlaybook;
