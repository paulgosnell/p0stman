import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Contract from './Contract';
import { getContract } from '../lib/supabase/contracts';

// Mock the contracts module
vi.mock('../lib/supabase/contracts', () => ({
  getContract: vi.fn()
}));

describe('Contract Page', () => {
  it('should render loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/contracts/CON-2024-071']}>
        <Routes>
          <Route path="/contracts/:id" element={<Contract />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render contract details correctly', async () => {
    const mockContract = {
      id: '123',
      contract_number: 'CON-2024-071',
      issue_date: '2024-03-27',
      client: {
        name: 'John Doe',
        company_name: 'Test Company',
        address: 'Test Address'
      },
      project_name: 'Test Project',
      project_scope: 'Test project scope',
      project_out_of_scope: ['Item 1', 'Item 2'],
      project_timeline_duration: '6 weeks',
      project_milestones: [
        {
          name: 'Phase 1',
          deliverable: 'Initial setup',
          percentage: '25%',
          amount: '$10,000'
        }
      ],
      total_amount: 40000,
      status: 'draft',
      client_signature: null,
      provider_signature: null,
      created_at: new Date().toISOString()
    };

    (getContract as any).mockResolvedValue(mockContract);

    render(
      <MemoryRouter initialEntries={['/contracts/CON-2024-071']}>
        <Routes>
          <Route path="/contracts/:id" element={<Contract />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for contract to load and verify content
    await waitFor(() => {
      expect(screen.getByText('Contract Agreement')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Test Company')).toBeInTheDocument();
      expect(screen.getByText('Test project scope')).toBeInTheDocument();
    });
  });

  it('should handle contract not found', async () => {
    (getContract as any).mockRejectedValue(new Error('Contract not found'));

    render(
      <MemoryRouter initialEntries={['/contracts/invalid']}>
        <Routes>
          <Route path="/contracts/:id" element={<Contract />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Contract Not Found')).toBeInTheDocument();
    });
  });
});