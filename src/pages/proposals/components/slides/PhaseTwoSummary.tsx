import React from 'react';
import { Clock, DollarSign, Bot } from 'lucide-react';

export default function PhaseTwoSummary() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-semibold">Phase 2 Summary</h3>
        </div>

        <p className="text-lg text-gray-200 mb-8">
          Expand platform capabilities to external vendors and enhance operational workflows with AI-driven insights and advanced scheduling tools.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-purple-400" />
              <div>
                <div className="text-sm text-gray-300">Duration</div>
                <div className="text-2xl font-bold">4 Weeks</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4">
              <DollarSign className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-sm text-gray-300">Investment</div>
                <div className="text-2xl font-bold">$16,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}