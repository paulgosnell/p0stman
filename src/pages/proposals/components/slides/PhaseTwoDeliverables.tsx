import React from 'react';
import { Bot, CheckCircle } from 'lucide-react';

const deliverables = [
  {
    title: "Vendor Communication Tools",
    description: "Internal chat functionality embedded in work order cards for seamless vendor-staff communication"
  },
  {
    title: "Advanced Scheduling",
    description: "Contractor scheduling linked to properties and tenant notifications"
  },
  {
    title: "Enhanced AI Capabilities",
    description: "In-field AI guidance for contractors and AI comments assistant to reformat field notes for professionalism"
  },
  {
    title: "Expanded Reporting",
    description: "Performance metrics for contractors and labor/material usage analysis"
  },
  {
    title: "Inventory Enhancements",
    description: "Implement UPC scanning for automated inventory input and tracking"
  }
];

export default function PhaseTwoDeliverables() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Bot className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phase 2 Deliverables</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
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