import React from 'react';
import { Users, Target, CheckSquare } from 'lucide-react';

const personas = [
  {
    title: "Admin",
    description: "System manager overseeing operations and maintaining system integrity.",
    goals: [
      "Assign and manage roles and permissions",
      "Monitor system performance",
      "Access comprehensive reports",
      "Handle escalations"
    ],
    features: [
      "Role management",
      "Centralized dashboard",
      "Advanced reporting",
      "API management",
      "Workflow automation"
    ]
  },
  {
    title: "Internal Staff",
    description: "Team members creating, assigning, and overseeing work orders.",
    goals: [
      "Create and assign work orders",
      "Track progress and status",
      "Generate operational reports",
      "Communicate with vendors"
    ],
    features: [
      "Work order management",
      "Kanban dashboard",
      "Reporting tools",
      "Communication system"
    ]
  },
  {
    title: "Vendors/Contractors",
    description: "External partners executing work orders and providing updates.",
    goals: [
      "Access assigned tasks",
      "Provide updates and documentation",
      "Communicate with staff",
      "Manage schedules"
    ],
    features: [
      "Vendor portal",
      "Mobile interface",
      "Status updates",
      "Task notifications"
    ]
  },
  {
    title: "Tenant",
    description: "End-users who request services or report issues.",
    goals: [
      "Report maintenance issues",
      "Receive status updates",
      "Get timely resolutions"
    ],
    features: [
      "Email/SMS updates",
      "Status notifications",
      "Feedback system"
    ]
  },
  {
    title: "Finance Team",
    description: "Members tracking financials and managing vendor payments.",
    goals: [
      "Monitor operational costs",
      "Generate financial reports",
      "Ensure expense transparency"
    ],
    features: [
      "Financial reporting",
      "Data export tools",
      "Financial dashboards"
    ]
  }
];

export default function PersonasSlide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">User Personas</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Understanding the key users and their needs is crucial for delivering a solution that works for everyone.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-gray-900 mb-3">{persona.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{persona.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                    <Target className="w-4 h-4 text-indigo-600" />
                    Goals
                  </div>
                  <ul className="space-y-1">
                    {persona.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 mt-1.5 bg-indigo-600 rounded-full flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                    <CheckSquare className="w-4 h-4 text-indigo-600" />
                    Features
                  </div>
                  <ul className="space-y-1">
                    {persona.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 mt-1.5 bg-purple-600 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}