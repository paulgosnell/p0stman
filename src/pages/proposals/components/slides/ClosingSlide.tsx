import React from 'react';
import { Mail, Calendar } from 'lucide-react';

interface ClosingSlideProps {
  onSchedule: () => void;
}

export default function ClosingSlide({ onSchedule }: ClosingSlideProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl">
        <h3 className="text-4xl font-bold text-gray-900">Ready to Transform Your Work Order Management?</h3>
        <p className="text-xl text-gray-600">
          Let's discuss how we can tailor this solution to your specific needs and get started on revolutionizing your maintenance operations.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:hello@p0stman.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@p0stman.com
          </a>
          <button
            onClick={onSchedule}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}