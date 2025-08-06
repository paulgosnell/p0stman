import React from 'react';
import { List, ArrowRight } from 'lucide-react';

const sections = [
  { number: "01", title: "Project Overview", description: "Project scope and approach" },
  { number: "02", title: "User Personas", description: "Key stakeholders and their needs" },
  { number: "03", title: "Phase 1", subsections: [
    "Core Platform Epics",
    "Platform Development",
    "Timeline & Deliverables"
  ]},
  { number: "04", title: "Phase 2", subsections: [
    "Epics & User Stories",
    "Advanced Features",
    "Timeline & Deliverables"
  ]},
  { number: "05", title: "Phase 3", subsections: [
    "Epics & User Stories",
    "Platform Completion",
    "Timeline & Deliverables"
  ]},
  { number: "06", title: "Next Steps", description: "Project kickoff and timeline" }
];

export default function ContentsSlide() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-lg">
            <List className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Project Proposal Contents</h3>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">{section.number}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{section.title}</h4>
                  {section.description && (
                    <p className="text-gray-600">{section.description}</p>
                  )}
                  {section.subsections && (
                    <div className="mt-3 space-y-2">
                      {section.subsections.map((subsection, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                          {subsection}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}