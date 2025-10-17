import React from 'react';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';

const phases = [
  {
    title: "Phase 1: Core Platform",
    duration: "4 weeks",
    cost: "$16,000",
    description: "MVP with internal staff and vendor support",
    status: "Ready to start"
  },
  {
    title: "Phase 2: Enhanced Features",
    duration: "4 weeks",
    cost: "$16,000",
    description: "Advanced AI capabilities and vendor tools",
    status: "Follows Phase 1"
  },
  {
    title: "Phase 3: Platform Completion",
    duration: "6 weeks",
    cost: "$24,000",
    description: "Full platform with tenant features",
    status: "Final phase"
  }
];

export default function PhaseSummary() {
  const totalCost = "$56,000";
  const totalDuration = "14 weeks";

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Project Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center gap-4 bg-gray-50 backdrop-blur-sm rounded-xl p-6">
            <Clock className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-sm text-gray-300">Total Duration</div>
              <div className="text-2xl font-bold">{totalDuration}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-gray-50 backdrop-blur-sm rounded-xl p-6">
            <DollarSign className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-sm text-gray-300">Total Investment</div>
              <div className="text-2xl font-bold">{totalCost}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{phase.status}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{phase.description}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{phase.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span>{phase.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}