import React from 'react';
import Timeline from '../Timeline';
import { phase1Timeline } from '../../data/timelineData';

export default function PhaseOne() {
  return (
    <div className="space-y-8">
      <Timeline events={phase1Timeline} duration={4} currentWeek={0} />
    </div>
  );
}