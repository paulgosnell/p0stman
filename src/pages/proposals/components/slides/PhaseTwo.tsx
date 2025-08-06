import React from 'react';
import Timeline from '../Timeline';
import { phase2Timeline } from '../../data/timelineData';

export default function PhaseTwo() {
  return (
    <div className="space-y-8">
      <Timeline events={phase2Timeline} duration={4} currentWeek={0} />
    </div>
  );
}