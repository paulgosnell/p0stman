import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getContract } from './contracts';
import { supabase } from './index';

vi.mock('./index', () => ({
  supabase: {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn()
  }
}));

describe('Contract Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getContract', () => {
    it('should fetch contract data correctly', async () => {
      const mockContract = {
        id: '123',
        contract_number: 'CON-2024-071',
        client: {
          name: 'John Doe',
          company_name: 'Test Company',
          address: 'Test Address'
        },
        project_name: 'Test Project',
        project_scope: 'Test Scope',
        project_out_of_scope: ['Item 1', 'Item 2'],
        project_timeline_duration: '6 weeks',
        project_milestones: [
          {
            name: 'Milestone 1',
            deliverable: 'Deliverable 1',
            percentage: '25%',
            amount: '$10,000'
          }
        ]
      };

      // Mock the supabase response
      (supabase.from().select().eq().single as any).mockResolvedValue({
        data: mockContract,
        error: null
      });

      const result = await getContract('CON-2024-071');
      
      // Verify the contract data is returned as-is
      expect(result).toEqual(mockContract);
      
      // Verify supabase was called with correct parameters
      expect(supabase.from).toHaveBeenCalledWith('contracts');
      expect(supabase.select).toHaveBeenCalledWith(`
      *,
      client:clients(*),
      project_name,
      project_scope,
      project_out_of_scope,
      project_timeline_duration,
      project_milestones
    `);
      expect(supabase.eq).toHaveBeenCalledWith('contract_number', 'CON-2024-071');
    });

    it('should throw error when contract not found', async () => {
      // Mock contract not found
      (supabase.from().select().eq().single as any).mockResolvedValue({
        data: null,
        error: { message: 'Contract not found' }
      });

      await expect(getContract('invalid-id')).rejects.toThrow('Contract not found');
    });
  });
});