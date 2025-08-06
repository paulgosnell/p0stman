import React from 'react';
import { BookOpen, Layers } from 'lucide-react';

const epics = [
  {
    title: "Tenant Chatbot",
    description: "Implement AI-powered tenant communication system.",
    stories: [
      "Report maintenance issues via chatbot",
      "Get automated troubleshooting suggestions",
      "Receive status updates automatically",
      "Schedule maintenance visits",
      "Rate service quality"
    ]
  },
  {
    title: "External Vendor Portal",
    description: "Create streamlined interface for external vendors.",
    stories: [
      "Access simplified work order dashboard",
      "Plan optimal service routes",
      "Communicate with tenants directly",
      "Track job completion status",
      "Submit invoices electronically"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Implement comprehensive reporting and analytics.",
    stories: [
      "Generate contractor performance reports",
      "Track tenant satisfaction metrics",
      "Analyze maintenance costs trends",
      "Monitor system usage patterns",
      "Export custom reports"
    ]
  },
  {
    title: "Asset Management",
    description: "Implement QR-based asset tracking system.",
    stories: [
      "Generate and print QR codes",
      "Scan assets for maintenance history",
      "Track asset deployment locations",
      "Monitor warranty information",
      "Schedule preventive maintenance"
    ]
  },
  {
    title: "AI Workflow Automation",
    description: "Enhance automation with AI capabilities.",
    stories: [
      "Generate optimal maintenance schedules",
      "Automate follow-up communications",
      "Predict maintenance requirements",
      "Optimize resource allocation",
      "Generate smart notifications"
    ]
  },
  {
    title: "System Integration",
    description: "Complete integration of all platform components.",
    stories: [
      "Ensure seamless data flow",
      "Optimize system performance",
      "Monitor integration health",
      "Handle edge cases gracefully",
      "Generate system health reports"
    ]
  }
];

export default function Phase3Epics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phase 3 Epics & User Stories</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Completing the platform with advanced features and comprehensive integration.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {epics.map((epic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-gray-900">{epic.title}</h4>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{epic.description}</p>
              
              <div className="space-y-2">
                {epic.stories.map((story, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 bg-green-100/50 p-2 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 bg-green-600 rounded-full flex-shrink-0" />
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