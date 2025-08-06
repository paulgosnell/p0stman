import React from 'react';
import { Bot, Moon, Sun, MessageSquare, ArrowLeft, ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function GuideIntro({ isDark }: { isDark: boolean }) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-4 md:p-6 mb-8`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <Bot className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Welcome to the Bolt Builder's Guide
          </h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
        >
          {isExpanded ? (
            <ChevronUp className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          ) : (
            <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          )}
        </button>
      </div>

      {isExpanded && (
        <div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            This guide is a living document that evolves alongside Bolt. It's designed to help you master AI-powered development and bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Features</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className={`p-1 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg mt-0.5`}>
                    <Moon className="w-4 h-4" />
                    <Sun className="w-4 h-4 hidden" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Dark/Light Mode</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Toggle between dark and light themes using the button in the top-right corner
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className={`p-1 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg mt-0.5`}>
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Notes & Highlights</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Select text to create notes or click the notes icon to manage them
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className={`p-1 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg mt-0.5`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Reading Time</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Estimated reading time shown for each section
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Navigation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className={`p-1 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg mt-0.5 flex gap-1`}>
                    <ArrowLeft className="w-4 h-4" />
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Keyboard Navigation</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Use left/right arrow keys to move between sections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className={`w-6 h-1.5 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full mt-2`}>
                    <div className="w-1/3 h-full bg-blue-600 rounded-full" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Progress Bar</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Track your reading progress at the top of each section
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className={`p-1 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg mt-0.5`}>
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Living Document</span>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Regular updates as Bolt evolves - check back often for new content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}