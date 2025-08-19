import React, { useState } from 'react';
import AIPlaybookPresentation from '../components/AIPlaybookPresentation';
import AIPlaybookLandingComplete from '../components/AIPlaybookLandingComplete';
import AIFullReport from '../components/AIFullReport';

const AIPlaybook: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'presentation' | 'full-report'>('landing');

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-light text-white">AI Middle East 2025</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView('landing')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'landing' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Landing Page
              </button>
              <button
                onClick={() => setCurrentView('presentation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'presentation' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Presentation
              </button>
              <button
                onClick={() => setCurrentView('full-report')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'full-report' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Full Report
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">
        {currentView === 'landing' && <AIPlaybookLandingComplete />}
        {currentView === 'presentation' && <AIPlaybookPresentation />}
        {currentView === 'full-report' && <AIFullReport />}
      </main>
    </div>
  );
};

export default AIPlaybook;