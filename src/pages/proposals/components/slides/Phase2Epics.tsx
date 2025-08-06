import React from 'react';
import { BookOpen, Layers } from 'lucide-react';

const epics = [
  {
    title: "Vendor Communication",
    description: "Implement comprehensive communication tools for vendors.",
    stories: [
      "Send and receive messages within work orders",
      "Real-time chat with internal staff",
      "Notification preferences management",
      "Message history and search"
    ]
  },
  {
    title: "Advanced Scheduling",
    description: "Create sophisticated scheduling system for contractors.",
    stories: [
      "View and manage contractor schedules",
      "Set up recurring maintenance tasks",
      "Handle schedule conflicts automatically",
      "Send automated tenant notifications",
      "Track contractor availability"
    ]
  },
  {
    title: "AI Field Assistance",
    description: "Provide AI-powered guidance for field operations.",
    stories: [
      "Receive AI suggestions for task optimization",
      "Get material recommendations based on job type",
      "Access AI-generated troubleshooting steps",
      "Track task completion efficiency"
    ]
  },
  {
    title: "AI Comments Enhancement",
    description: "Implement AI for professional communication.",
    stories: [
      "Convert field notes to professional format",
      "Generate detailed work summaries",
      "Ensure consistent communication style",
      "Maintain proper terminology"
    ]
  },
  {
    title: "Performance Analytics",
    description: "Track and analyze contractor performance.",
    stories: [
      "Monitor completion rates and times",
      "Track material usage patterns",
      "Generate contractor performance reports",
      "Analyze cost efficiency metrics"
    ]
  },
  {
    title: "Inventory Automation",
    description: "Enhance inventory management with UPC scanning.",
    stories: [
      "Scan items using mobile devices",
      "Automatic inventory updates",
      "Track item usage by contractor",
      "Generate reorder recommendations"
    ]
  }
];

export default function Phase2Epics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phase 2 Epics & User Stories</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Enhancing the platform with advanced features and AI capabilities.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {epics.map((epic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-900">{epic.title}</h4>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{epic.description}</p>
              
              <div className="space-y-2">
                {epic.stories.map((story, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 bg-purple-100/50 p-2 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 bg-purple-600 rounded-full flex-shrink-0" />
                    {story}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}