import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MotionShowcase from './MotionShowcase';
import { ShowcaseContent } from '../../types/onepage';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  useInView: () => true,
  useAnimation: () => ({
    start: vi.fn(),
  }),
}));

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}));

const mockShowcaseContent: ShowcaseContent = {
  mockups: [
    {
      id: '1',
      title: 'Test Dashboard',
      image: '/test-image.png',
      category: 'dashboard',
      animationDelay: 0,
    },
    {
      id: '2',
      title: 'Test Mobile App',
      image: '',
      category: 'mobile',
      animationDelay: 0.15,
    },
  ],
  capabilities: [
    { id: '1', label: 'AI Strategy', category: 'strategy' },
    { id: '2', label: 'Implementation', category: 'implementation' },
  ],
  animationTrigger: 'scroll',
};

describe('MotionShowcase', () => {
  it('renders the showcase section with title', () => {
    render(<MotionShowcase content={mockShowcaseContent} />);
    
    expect(screen.getByText(/Proven/)).toBeInTheDocument();
    expect(screen.getByText(/AI Delivery/)).toBeInTheDocument();
  });

  it('displays capability chips', () => {
    render(<MotionShowcase content={mockShowcaseContent} />);
    
    expect(screen.getByText('AI Strategy')).toBeInTheDocument();
    expect(screen.getByText('Implementation')).toBeInTheDocument();
  });

  it('displays project mockups', () => {
    render(<MotionShowcase content={mockShowcaseContent} />);
    
    expect(screen.getByText('Test Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Test Mobile App')).toBeInTheDocument();
  });

  it('displays metrics with counters', () => {
    render(<MotionShowcase content={mockShowcaseContent} />);
    
    expect(screen.getByText('AI Projects')).toBeInTheDocument();
    expect(screen.getByText('Years in MEA')).toBeInTheDocument();
    expect(screen.getByText('Success Rate')).toBeInTheDocument();
    expect(screen.getByText('Implementations')).toBeInTheDocument();
  });

  it('displays call-to-action buttons', () => {
    render(<MotionShowcase content={mockShowcaseContent} />);
    
    expect(screen.getByText('Start Your AI Journey')).toBeInTheDocument();
    expect(screen.getByText('View Case Studies')).toBeInTheDocument();
  });

  it('handles empty mockups gracefully', () => {
    const emptyContent: ShowcaseContent = {
      ...mockShowcaseContent,
      mockups: [],
    };
    
    render(<MotionShowcase content={emptyContent} />);
    
    // Should still render the section
    expect(screen.getByText(/Proven/)).toBeInTheDocument();
  });
});