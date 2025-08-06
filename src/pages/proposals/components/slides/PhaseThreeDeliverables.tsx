import React from 'react';
import { Bot, CheckCircle } from 'lucide-react';

const deliverables = [
  {
    title: "Tenant Chatbot",
    description: "AI-driven issue reporting and troubleshooting with automated work order creation pending staff approval"
  },
  {
    title: "External Vendor Portal",
    description: "Simplified interface for work order acceptance, route planning, and communication"
  },
  {
    title: "Advanced Analytics",
    description: "Comprehensive reporting on contractor performance, tenant satisfaction, and cost management"
  },
  {
    title: "Asset Tracking",
    description: "QR code-based tagging and deployment tracking system"
  },
  {
    title: "Workflow Automation",
    description: "AI-assisted scheduling and automated follow-up notifications"
  }
];

export default function PhaseThreeDeliverables() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Bot className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Phase 3 Deliverables</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
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