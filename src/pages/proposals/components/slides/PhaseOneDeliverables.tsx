import React from 'react';
import { Bot, CheckCircle } from 'lucide-react';

const deliverables = [
  {
    title: "Dashboard",
    description: "User-friendly interface with ticketing/Kanban views and status summaries"
  },
  {
    title: "Work Order Management",
    description: "Task creation and tracking with details like labor hours, materials, photos, and follow-ups. Full audit trail of modifications."
  },
  {
    title: "Propertyware Integration",
    description: "Read-only data import for tenants, properties, and historical work orders"
  },
  {
    title: "AI-Powered Predictive Maintenance",
    description: "Alerts for overdue tasks and maintenance data analysis for repetitive issues"
  },
  {
    title: "Basic Reporting Tools",
    description: "Generate reports on work order status, labor hours, and materials used"
  },
  {
    title: "Inventory Management",
    description: "Track items, costs, and usage with automatic stock reduction"
  }
];

export default function PhaseOneDeliverables() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phase 1 Deliverables</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">{deliverable.title}</h4>
                  <p className="text-sm text-gray-600">{deliverable.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}