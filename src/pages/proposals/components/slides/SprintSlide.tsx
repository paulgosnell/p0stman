import React from 'react';
import { Clock, CheckCircle, Bot, Zap } from 'lucide-react';

const sprintSteps = [
  {
    day: "Day 1",
    title: "Sprint Planning",
    activities: [
      "Review objectives",
      "Define deliverables",
      "Assign tasks",
      "Set up tools"
    ]
  },
  {
    day: "Days 2-4",
    title: "Development",
    activities: [
      "AI-powered coding",
      "Regular commits",
      "Progress tracking",
      "Issue resolution"
    ]
  },
  {
    day: "Day 5",
    title: "Review & Demo",
    activities: [
      "Code review",
      "Feature demo",
      "Feedback collection",
      "Sprint retrospective"
    ]
  }
];

export default function SprintSlide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-semibold">Sprint Structure</h3>
        </div>

        <p className="text-lg text-gray-200 mb-8">
          Our one-week sprints are designed for maximum efficiency and transparency, with daily updates and end-of-week demos.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sprintSteps.map((step, index) => (
            <div key={index} className="bg-gray-50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {index === 0 ? <Clock className="w-5 h-5 text-green-400" /> :
                 index === 1 ? <Bot className="w-5 h-5 text-green-400" /> :
                 <Zap className="w-5 h-5 text-green-400" />}
                <div>
                  <div className="text-sm text-green-200">{step.day}</div>
                  <h4 className="font-medium">{step.title}</h4>
                </div>
              </div>
              <ul className="space-y-3">
                {step.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{activity}</span>
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