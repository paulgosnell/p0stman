import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Clock, DollarSign } from 'lucide-react';
import { downloadAsPDF } from '../../../lib/downloadUtils';

const phases = [
  {
    title: "Phase 1: Core Platform",
    duration: "4 weeks",
    cost: "$16,000",
    description: "MVP with internal staff and vendor support",
    deliverables: [
      "Dashboard with ticketing/Kanban views and status summaries",
      "Work order management with labor hours, materials, photos tracking",
      "Propertyware integration for tenant and property data",
      "AI-powered predictive maintenance alerts",
      "Basic reporting tools",
      "Inventory management system"
    ]
  },
  {
    title: "Phase 2: Enhanced Features",
    duration: "4 weeks",
    cost: "$16,000",
    description: "Advanced AI capabilities and vendor tools",
    deliverables: [
      "Vendor communication tools",
      "Advanced scheduling system",
      "Enhanced AI capabilities for field guidance",
      "AI comments enhancement",
      "Performance analytics",
      "Inventory automation with UPC scanning"
    ]
  },
  {
    title: "Phase 3: Platform Completion",
    duration: "6 weeks",
    cost: "$24,000",
    description: "Full platform with tenant features",
    deliverables: [
      "Tenant chatbot system",
      "External vendor portal",
      "Advanced analytics and reporting",
      "Asset tracking with QR codes",
      "AI workflow automation",
      "Complete system integration"
    ]
  }
];

const userPersonas = [
  {
    title: "Admin",
    description: "System manager overseeing operations",
    goals: [
      "Assign and manage roles",
      "Monitor system performance",
      "Access comprehensive reports",
      "Handle escalations"
    ]
  },
  {
    title: "Internal Staff",
    description: "Team members managing work orders",
    goals: [
      "Create and assign work orders",
      "Track progress and status",
      "Generate reports",
      "Communicate with vendors"
    ]
  },
  {
    title: "Vendors/Contractors",
    description: "External partners executing work orders",
    goals: [
      "Access assigned tasks",
      "Provide updates",
      "Communicate with staff",
      "Manage schedules"
    ]
  },
  {
    title: "Tenant",
    description: "End-users requesting services",
    goals: [
      "Report maintenance issues",
      "Receive status updates",
      "Get timely resolutions"
    ]
  }
];

export default function WorkOrderProposal() {
  const handleDownload = () => {
    downloadAsPDF('proposal-content', 'work-order-platform-proposal');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div id="proposal-content" className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Work Order Management Platform</h1>
          <p className="text-xl text-gray-600">Project Proposal & Implementation Plan</p>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="text-gray-600">
            This proposal outlines a comprehensive solution for a Work Order/Maintenance platform, 
            leveraging cutting-edge AI technology to streamline operations and improve efficiency.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold">14 Weeks</div>
              <div className="text-gray-600">Total Duration</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <DollarSign className="w-6 h-6 text-green-600 mb-2" />
              <div className="text-2xl font-bold">$56,000</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Bot className="w-6 h-6 text-purple-600 mb-2" />
              <div className="text-2xl font-bold">3 Phases</div>
              <div className="text-gray-600">Delivery Plan</div>
            </div>
          </div>
        </div>

        {/* User Personas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">User Personas</h2>
          <div className="grid grid-cols-2 gap-6">
            {userPersonas.map((persona, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                <p className="text-gray-600 mb-4">{persona.description}</p>
                <ul className="space-y-2">
                  {persona.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                      <span className="text-gray-600">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Implementation Phases</h2>
          {phases.map((phase, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{phase.cost}</div>
                  <div className="text-gray-600">{phase.duration}</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Deliverables:</h4>
                <ul className="grid grid-cols-2 gap-4">
                  {phase.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                      <span className="text-gray-600">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t pt-8 text-center text-gray-500 text-sm">
          <p>Prepared by POSTMAN (AI-Powered Product Studio)</p>
          <p>Contact: hello@p0stman.com</p>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}