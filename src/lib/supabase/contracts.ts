import { supabase } from './index';

export interface Contract {
  id: string;
  created_at: string;
  contract_number: string;
  client_id: string;
  issue_date: string;
  status: 'draft' | 'sent' | 'signed' | 'expired';
  client_signature: string | null;
  client_signed_at: string | null;
  provider_signature: string | null;
  provider_signed_at: string | null;
  total_amount: number;
  invoice_id: string | null;
  project_name: string;
  project_scope: string;
  project_out_of_scope: string[];
  project_timeline_duration: string;
  project_milestones: Array<{
    name: string;
    deliverable: string;
    percentage: string;
    amount: string;
  }>;
  client?: {
    name: string;
    company_name: string;
    address: string;
    email: string;
  };
}

interface Client {
  id: string;
  name: string;
  company_name: string;
  address: string;
  email: string;
}

export async function getContracts(): Promise<Contract[]> {
  const { data, error } = await supabase
    .from('contracts')
    .select(`
      *,
      client:clients(*)
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getContract(id: string): Promise<Contract> {
  const { data, error } = await supabase
    .from('contracts')
    .select(`
      *,
      client:clients(*),
      project_name,
      project_scope,
      project_out_of_scope,
      project_timeline_duration,
      project_milestones
    `)
    .eq('contract_number', id)
    .single();

  if (error) {
    console.error('Error fetching contract:', error);
    throw new Error('Contract not found');
  }
  
  if (!data) {
    throw new Error('Contract not found');
  }
  
  // Return raw contract data
  return data;
}

export async function createClient(client: Omit<Client, 'id'>): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .insert([client])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createContract(contract: Omit<Contract, 'id' | 'created_at' | 'contract_number'>): Promise<Contract> {
  const { data, error } = await supabase
    .from('contracts')
    .insert([contract])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function updateContract(id: string, data: Partial<Contract>): Promise<void> {
  const { error } = await supabase
    .from('contracts')
    .update(data)
    .eq('contract_number', id);

  if (error) throw error;
}

async function deleteContract(id: string): Promise<void> {
  const { error } = await supabase
    .from('contracts')
    .delete()
    .eq('contract_number', id);

  if (error) throw error;
}