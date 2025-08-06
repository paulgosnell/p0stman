import React from 'react';
import { BookOpen, Layers } from 'lucide-react';

const epics = [
  {
    title: "User Roles and Authentication",
    description: "Implement a secure system for user authentication and role-based permissions.",
    stories: [
      "Create and manage users with appropriate roles",
      "Secure login system for all users",
      "View role-specific dashboards and features",
      "Password reset functionality"
    ]
  },
  {
    title: "Work Order Management",
    description: "Enable creation, assignment, and tracking of work orders.",
    stories: [
      "Create new work orders with detailed information",
      "Assign tasks to vendors or contractors",
      "Update work order status and track progress",
      "Upload photos and documents",
      "Monitor task completion and deadlines"
    ]
  },
  {
    title: "Kanban-Style Dashboard",
    description: "Provide an intuitive dashboard for task tracking.",
    stories: [
      "View work orders in Kanban layout",
      "Drag and drop tasks between status columns",
      "Filter tasks by various parameters",
      "Overview of all work orders and progress"
    ]
  },
  {
    title: "Propertyware API Integration",
    description: "Sync data between the platform and Propertyware.",
    stories: [
      "Import existing work order data",
      "Real-time data synchronization",
      "Error handling and notifications",
      "Maintain data consistency across systems"
    ]
  },
  {
    title: "Basic Reporting Tools",
    description: "Provide reporting capabilities for analysis.",
    stories: [
      "Generate task progress reports",
      "Filter reports by various parameters",
      "Export data in multiple formats",
      "Track key performance metrics"
    ]
  },
  {
    title: "Vendor Mobile Interface",
    description: "Mobile-responsive interface for vendors.",
    stories: [
      "Mobile-friendly task management",
      "Update task status on-the-go",
      "Upload photos from mobile devices",
      "Real-time notifications and updates"
    ]
  }
];

export default function UserStoriesSlide() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Epics & User Stories</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Breaking down the project into manageable pieces ensures clear deliverables and tracking of progress.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {epics.map((epic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">{epic.title}</h4>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{epic.description}</p>
              
              <div className="space-y-2">
                {epic.stories.map((story, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 bg-blue-100/50 p-2 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 bg-blue-600 rounded-full flex-shrink-0" />
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