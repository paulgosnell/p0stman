import React from 'react';
import { Package, CheckCircle, Bot } from 'lucide-react';

const deliverables = [
  {
    title: "Week 1-2",
    items: [
      "Project setup & configuration",
      "Core feature implementation",
      "Basic UI components",
      "Initial integration"
    ]
  },
  {
    title: "Week 3-4",
    items: [
      "Advanced features",
      "UI/UX refinements",
      "Performance optimization",
      "Testing & QA"
    ]
  },
  {
    title: "Week 5-6",
    items: [
      "Final features",
      "Documentation",
      "Deployment setup",
      "User training"
    ]
  }
];

export default function DeliverableSlide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Package className="w-8 h-8 text-blue-400" />
          <h3 className="text-2xl font-semibold">Project Deliverables</h3>
        </div>

        <p className="text-lg text-gray-200 mb-8">
          Clear milestones and deliverables ensure transparent progress tracking and predictable outcomes.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {deliverables.map((phase, index) => (
            <div key={index} className="bg-gray-50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-blue-400" />
                <h4 className="font-medium">{phase.title}</h4>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
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