import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProposalHeader from './components/ProposalHeader';
import ProposalSlide from './components/ProposalSlide';
import HeroSlide from './components/slides/HeroSlide';
import WhyUsSlide from './components/slides/WhyUsSlide';
import AICapabilitiesSlide from './components/slides/AICapabilitiesSlide';
import MethodologySlide from './components/slides/MethodologySlide';
import SprintSlide from './components/slides/SprintSlide';
import CaseStudiesSlide from './components/slides/CaseStudiesSlide';
import TechnologySlide from './components/slides/TechnologySlide';
import TeamSlide from './components/slides/TeamSlide';
import InvestmentSlide from './components/slides/InvestmentSlide';
import DeliverableSlide from './components/slides/DeliverableSlide';
import NavigationControls from './components/NavigationControls';
import ScheduleModal from '../../components/ScheduleModal';
import ClosingSlide from './components/slides/ClosingSlide';

const slides = [
  {
    title: "Transform Your Ideas",
    component: HeroSlide
  },
  {
    title: "Why Choose Us",
    component: WhyUsSlide
  },
  {
    title: "AI-Powered Development",
    component: AICapabilitiesSlide
  },
  {
    title: "Our Methodology",
    component: MethodologySlide
  },
  {
    title: "Sprint Structure",
    component: SprintSlide
  },
  {
    title: "Success Stories",
    component: CaseStudiesSlide
  },
  {
    title: "Technology Stack",
    component: TechnologySlide
  },
  {
    title: "Our Team",
    component: TeamSlide
  },
  {
    title: "Investment & ROI",
    component: InvestmentSlide
  },
  {
    title: "Project Deliverables",
    component: DeliverableSlide
  },
  {
    title: "Let's Build Together",
    component: ClosingSlide
  }
];

export default function GenericProposal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      window.scrollTo(0, 0);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <ProposalHeader />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProposalSlide
                title={slides[currentSlide].title}
                content={
                  <CurrentSlideComponent
                    onSchedule={() => setShowScheduleModal(true)}
                  />
                }
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <ScheduleModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </div>
  );
}