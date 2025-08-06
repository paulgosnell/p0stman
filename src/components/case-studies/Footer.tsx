import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FooterProps {
  prevCase?: {
    title: string;
    path: string;
  };
  nextCase?: {
    title: string;
    path: string;
  };
  theme?: 'light' | 'dark';
}

export default function Footer({ prevCase, nextCase, theme = 'light' }: FooterProps) {
  const bgColor = theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const borderColor = theme === 'light' ? 'border-gray-100' : 'border-gray-800';

  return (
    <footer className={`py-12 ${bgColor} border-t ${borderColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              {prevCase && (
                <Link
                  to={prevCase.path}
                  className={`group inline-flex items-center gap-2 ${textColor} hover:text-blue-600 transition-colors`}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Previous Project</div>
                    <div className="font-medium">{prevCase.title}</div>
                  </div>
                </Link>
              )}
            </div>

            <Link
              to="/"
              className={`${textColor} hover:text-blue-600 transition-colors`}
            >
              Back to Portfolio
            </Link>

            <div>
              {nextCase && (
                <Link
                  to={nextCase.path}
                  className={`group inline-flex items-center gap-2 ${textColor} hover:text-blue-600 transition-colors`}
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Next Project</div>
                    <div className="font-medium">{nextCase.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}