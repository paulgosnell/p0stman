import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ProposalHeader from './components/ProposalHeader';
import ProposalSlide from './components/ProposalSlide';
import ContentsSlide from './components/slides/ContentsSlide';
import PhaseTitleSlide from './components/slides/PhaseTitleSlide';
import NavigationControls from './components/NavigationControls';
import PhaseOneDeliverables from './components/slides/PhaseOneDeliverables';
import PhaseOneSummary from './components/slides/PhaseOneSummary';
import PhaseTwoDeliverables from './components/slides/PhaseTwoDeliverables';
import PhaseTwoSummary from './components/slides/PhaseTwoSummary';
import PhaseThreeDeliverables from './components/slides/PhaseThreeDeliverables';
import PhaseThreeSummary from './components/slides/PhaseThreeSummary';
import Phase2Epics from './components/slides/Phase2Epics';
import Phase3Epics from './components/slides/Phase3Epics';
import PersonasSlide from './components/slides/PersonasSlide';
import UserStoriesSlide from './components/slides/UserStoriesSlide';
import ScheduleModal from '../../components/ScheduleModal';
import ProjectOverview from './components/slides/ProjectOverview';
import PhaseOne from './components/slides/PhaseOne';
import PhaseTwo from './components/slides/PhaseTwo';
import PhaseThree from './components/slides/PhaseThree';
import PhaseSummary from './components/slides/PhaseSummary';
import ClosingSlide from './components/slides/ClosingSlide';

const slides = [
  {
    title: "Project Overview",
    component: ProjectOverview
  },
  {
    title: "Contents",
    component: ContentsSlide
  },
  {
    title: "User Personas",
    component: PersonasSlide
  },
  {
    title: "Phase 1",
    component: () => <PhaseTitleSlide phase={1} />
  },
  {
    title: "Phase 1: Core Platform Epics",
    component: UserStoriesSlide
  },
  {
    title: "Phase 1: Deliverables",
    component: PhaseOneDeliverables
  },
  {
    title: "Phase 1: Core Platform Development",
    component: PhaseOne
  },
  {
    title: "Phase 1: Summary",
    component: PhaseOneSummary
  },
  {
    title: "Phase 2",
    component: () => <PhaseTitleSlide phase={2} />
  },
  {
    title: "Phase 2: Epics & User Stories",
    component: Phase2Epics
  },
  {
    title: "Phase 2: Deliverables",
    component: PhaseTwoDeliverables
  },
  {
    title: "Phase 2: Advanced Features and AI Integration",
    component: PhaseTwo
  },
  {
    title: "Phase 2: Summary",
    component: PhaseTwoSummary
  },
  {
    title: "Phase 3",
    component: () => <PhaseTitleSlide phase={3} />
  },
  {
    title: "Phase 3: Epics & User Stories",
    component: Phase3Epics
  },
  {
    title: "Phase 3: Deliverables",
    component: PhaseThreeDeliverables
  },
  {
    title: "Phase 3: Advanced Reporting and Automation",
    component: PhaseThree
  },
  {
    title: "Phase 3: Summary",
    component: PhaseThreeSummary
  },
  {
    title: "Project Summary",
    component: PhaseSummary
  },
  {
    title: "Let's Build Together",
    component: ClosingSlide
  },
];

export default function ClientProposal() {
  const { id } = useParams();
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