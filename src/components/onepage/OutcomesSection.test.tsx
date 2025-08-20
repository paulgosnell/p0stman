import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import OutcomesSection from './OutcomesSection';
import { OutcomesContent } from '../../types/onepage';

const mockContent: OutcomesContent = {
  metrics: [
    { label: 'Support AHT', value: '↓ 28%', description: 'Reduced average handling time' },
    { label: 'Fraud FPs', value: '↓ 40%', description: 'Decreased false positives' },
    { label: 'Dev cycle time', value: '↓ 35%', description: 'Faster development cycles' }
  ]
};

describe('OutcomesSection', () => {
  it('renders the section title', () => {
    render(<OutcomesSection content={mockContent} />);
    expect(screen.getByText('Proven Outcomes')).toBeInTheDocument();
  });

  it('renders all metrics', () => {
    render(<OutcomesSection content={mockContent} />);
    
    expect(screen.getByText('↓ 28%')).toBeInTheDocument();
    expect(screen.getByText('↓ 40%')).toBeInTheDocument();
    expect(screen.getByText('↓ 35%')).toBeInTheDocument();
    
    expect(screen.getByText('Support AHT')).toBeInTheDocument();
    expect(screen.getByText('Fraud FPs')).toBeInTheDocument();
    expect(screen.getByText('Dev cycle time')).toBeInTheDocument();
  });

  it('renders metric descriptions', () => {
    render(<OutcomesSection content={mockContent} />);
    
    expect(screen.getByText('Reduced average handling time')).toBeInTheDocument();
    expect(screen.getByText('Decreased false positives')).toBeInTheDocument();
    expect(screen.getByText('Faster development cycles')).toBeInTheDocument();
  });
});