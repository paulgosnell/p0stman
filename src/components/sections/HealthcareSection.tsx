import React from 'react';
import { HeartIcon, ChartBarIcon, UserGroupIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { SectionCover, OpportunitySection, UseCasesSection, ChallengesSection } from '../AIReportSections';

const HealthcareSection: React.FC = () => {
  const useCases = [
    {
      title: "AI-Powered Radiology",
      description: "Faster scans with 95% accuracy improvement, reducing diagnostic errors and wait times across regional hospitals.",
      icon: <ChartBarIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Predictive Analytics",
      description: "Population health management using AI to predict disease outbreaks and optimize resource allocation.",
      icon: <UserGroupIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Virtual Health Assistants",
      description: "Arabic and English AI assistants providing 24/7 patient support and preliminary health assessments.",
      icon: <CpuChipIcon className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Smart Hospitals & Robotics",
      description: "Automated surgery systems and IoT-enabled hospital management reducing costs by 30%.",
      icon: <HeartIcon className="w-6 h-6 text-blue-400" />
    }
  ];

  const challenges = [
    {
      title: "Data Fragmentation",
      description: "Patient data scattered across multiple hospital systems, hindering comprehensive AI analysis and treatment optimization."
    },
    {
      title: "AI Clinician Shortage",
      description: "Critical need for healthcare professionals trained in AI tools and interpretation of algorithmic recommendations."
    },
    {
      title: "Patient Trust",
      description: "Building confidence in AI-driven diagnoses while maintaining the human element in healthcare delivery."
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating complex medical device regulations and ensuring AI systems meet safety and efficacy standards."
    }
  ];

  return (
    <div>
      {/* Section Cover */}
      <SectionCover
        title="Healthcare"
        stat="45% of hospitals adopting AI by 2026"
        quote="AI is not just transforming diagnosis and treatment—it's redefining the patient experience."
        author="Dr. Fatima Al Kaabi"
        role="Consultant, UAE Ministry of Health"
        icon={<HeartIcon className="w-16 h-16 text-blue-400" />}
      />

      {/* The Opportunity */}
      <OpportunitySection
        title="The Opportunity"
        narrative="AI is accelerating precision medicine, telehealth, and population health management. In the Middle East, governments are investing heavily to reduce healthcare costs while improving quality of care. The region's young, tech-savvy population is driving demand for digital health solutions."
        statCard={{
          stat: "45%",
          description: "of regional hospitals plan AI adoption by 2026"
        }}
      />

      {/* Key Use Cases */}
      <UseCasesSection
        title="Key Use Cases"
        useCases={useCases}
        highlight="Dubai's AI Health Strategy expects AI to handle 30% of diagnostics by 2030"
      />

      {/* Challenges & Risks */}
      <ChallengesSection
        title="Challenges & Risks"
        narrative="While progress is rapid, healthcare AI adoption faces significant hurdles that must be addressed for successful implementation:"
        challenges={challenges}
      />
    </div>
  );
};

export default HealthcareSection;