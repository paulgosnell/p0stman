import React from 'react';
import { Bot, Repeat, Zap } from 'lucide-react';

const phases = [
  {
    title: "Discovery & Planning",
    duration: "Week 1",
    activities: [
      "Requirements gathering",
      "Technical planning",
      "Sprint planning",
      "Initial setup"
    ]
  },
  {
    title: "Core Development",
    duration: "Weeks 2-3",
    activities: [
      "MVP development",
      "Daily progress updates",
      "Regular demos",
      "Feedback integration"
    ]
  },
  {
    title: "Enhancement",
    duration: "Weeks 4-5",
    activities: [
      "Feature expansion",
      "Performance optimization",
      "User testing",
      "Refinements"
    ]
  },
  {
    title: "Launch & Support",
    duration: "Week 6",
    activities: [
      "Final testing",
      "Deployment",
      "Documentation",
      "30 days support"
    ]
  }
];

export default function MethodologySlide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Repeat className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-semibold">Agile Development Process</h3>
        </div>

        <p className="text-lg text-gray-200 mb-8">
          Our agile methodology combines short sprints with continuous feedback to ensure rapid, high-quality delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {index === 0 ? <Bot className="w-5 h-5 text-purple-400" /> :
                 index === 1 ? <Zap className="w-5 h-5 text-purple-400" /> :
                 index === 2 ? <Repeat className="w-5 h-5 text-purple-400" /> :
                 <Bot className="w-5 h-5 text-purple-400" />}
                <h4 className="font-medium">{phase.title}</h4>
              </div>
              <div className="text-sm text-purple-200 mb-4">{phase.duration}</div>
              <ul className="space-y-2">
                {phase.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 mt-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}