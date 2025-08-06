import React from 'react';
import Timeline from '../Timeline';
import { phase3Timeline } from '../../data/timelineData';

export default function PhaseThree() {
  return (
    <div className="space-y-8">
      <Timeline events={phase3Timeline} duration={6} currentWeek={0} />
    </div>
  );
}