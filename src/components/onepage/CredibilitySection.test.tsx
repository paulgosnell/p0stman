import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CredibilitySection from './CredibilitySection';
import { CredibilityContent } from '../../types/onepage';

const mockContent: CredibilityContent = {
  experience: '20+ yrs in MEA',
  highlights: ['Production-ready code', 'Arabic-first', 'Security/Gov'],
  testimonials: [
    {
      quote: 'Outstanding AI implementation expertise',
      author: 'John Doe',
      company: 'Tech Corp'
    }
  ]
};

describe('CredibilitySection', () => {
  it('renders the section title', () => {
    render(<CredibilitySection content={mockContent} />);
    expect(screen.getByText('Proven Expertise')).toBeInTheDocument();
  });

  it('renders experience highlight', () => {
    render(<CredibilitySection content={mockContent} />);
    expect(screen.getByText('20+ yrs in MEA')).toBeInTheDocument();
  });

  it('renders all highlights', () => {
    render(<CredibilitySection content={mockContent} />);
    
    expect(screen.getByText('Production-ready code')).toBeInTheDocument();
    expect(screen.getByText('Arabic-first')).toBeInTheDocument();
    expect(screen.getByText('Security/Gov')).toBeInTheDocument();
  });

  it('renders testimonials when provided', () => {
    render(<CredibilitySection content={mockContent} />);
    
    expect(screen.getByText('"Outstanding AI implementation expertise"')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
  });

  it('renders social proof metrics', () => {
    render(<CredibilitySection content={mockContent} />);
    
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});