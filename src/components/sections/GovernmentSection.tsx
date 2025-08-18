import React from 'react';
import { BuildingOffice2Icon, MapIcon, ShieldCheckIcon, LightBulbIcon, CameraIcon } from '@heroicons/react/24/outline';
import { SectionCover, OpportunitySection, UseCasesSection, ChallengesSection } from '../AIReportSections';

const GovernmentSection: React.FC = () => {
  const useCases = [
    {
      title: "Smart City Infrastructure",
      description: "AI-powered traffic management, energy optimization, and waste management systems reducing operational costs by 25%.",
      icon: <MapIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Digital Government Services",
      description: "AI chatbots and automated processing reducing citizen service wait times from days to minutes.",
      icon: <LightBulbIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Public Safety & Security",
      description: "Predictive policing and AI-powered surveillance systems enhancing security while protecting privacy.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Urban Planning",
      description: "AI-driven city planning using real-time data to optimize development and resource allocation.",
      icon: <CameraIcon className="w-6 h-6 text-blue-400" />
    }
  ];

  const challenges = [
    {
      title: "Privacy Concerns",
      description: "Balancing smart city benefits with citizen privacy rights and data protection requirements."
    },
    {
      title: "Legacy System Integration",
      description: "Connecting AI solutions with existing government infrastructure and bureaucratic processes."
    },
    {
      title: "Digital Divide",
      description: "Ensuring AI-powered services remain accessible to all citizens regardless of technical literacy."
    },
    {
      title: "Cybersecurity Risks",
      description: "Protecting critical infrastructure from AI-powered cyber attacks and system vulnerabilities."
    }
  ];

  return (
    <div>
      {/* Section Cover */}
      <SectionCover
        title="Government & Smart Cities"
        stat="$12B invested in smart city initiatives"
        quote="We are building cities that think, learn, and adapt to serve our citizens better."
        author="H.E. Omar Sultan Al Olama"
        role="UAE Minister of AI"
        icon={<BuildingOffice2Icon className="w-16 h-16 text-blue-400" />}
      />

      {/* The Opportunity */}
      <OpportunitySection
        title="The Digital Government Revolution"
        narrative="Middle Eastern governments are leading the global smart city transformation. From Dubai's Smart City 2071 initiative to Saudi Arabia's NEOM project, AI is reshaping how governments serve citizens and manage urban infrastructure. These investments are creating more efficient, sustainable, and livable cities."
        statCard={{
          stat: "$12B",
          description: "invested in regional smart city initiatives by 2025"
        }}
      />

      {/* Key Use Cases */}
      <UseCasesSection
        title="Key Applications"
        useCases={useCases}
        highlight="Dubai aims to become the world's smartest city by 2025, with AI handling 90% of government transactions"
      />

      {/* Challenges & Risks */}
      <ChallengesSection
        title="Implementation Challenges"
        narrative="Smart city transformation requires careful navigation of technical, social, and governance challenges:"
        challenges={challenges}
      />
    </div>
  );
};

export default GovernmentSection;