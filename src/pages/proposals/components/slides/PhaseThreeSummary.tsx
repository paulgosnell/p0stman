import React from 'react';
import { Clock, DollarSign, Bot } from 'lucide-react';

export default function PhaseThreeSummary() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-semibold">Phase 3 Summary</h3>
        </div>

        <p className="text-lg text-gray-200 mb-8">
          Finalize the platform with tenant-facing tools, comprehensive vendor access, and advanced analytics for decision-making.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-sm text-gray-300">Duration</div>
                <div className="text-2xl font-bold">6 Weeks</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4">
              <DollarSign className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-sm text-gray-300">Investment</div>
                <div className="text-2xl font-bold">$24,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}