import { supabase } from './index';

export interface Client {
  id: string;
  created_at: string;
  name: string; 
  company_name: string; 
  address: string;
  email: string;
}

// Get all clients
export async function getClients(): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

// Get a single client
async function getClient(id: string): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

// Create a new client
async function createClient(client: Omit<Client, 'id' | 'created_at'>): Promise<Client> {
  // First check if client already exists with same email
  const { data: existing, error: searchError } = await supabase
    .from('clients')
    .select('*')
    .eq('email', client.email)
    .single();

  if (searchError && searchError.code !== 'PGRST116') { // PGRST116 is "not found" error
    throw searchError;
  }

  if (existing) {
    // Update existing client with new details if they changed
    if (
      existing.name !== client.name ||
      existing.company_name !== client.company_name ||
      existing.address !== client.address
    ) {
      const { data: updated, error: updateError } = await supabase
        .from('clients')
        .update({
          name: client.name,
          company_name: client.company_name,
          address: client.address
        })
        .eq('id', existing.id)
        .select()
        .single();

      if (updateError) throw updateError;
      return updated;
    }
    return existing;
  }

  // Create new client if doesn't exist
  const { data, error } = await supabase
    .from('clients')
    .insert([client])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Update a client
async function updateClient(id: string, updates: Partial<Client>): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Delete a client
async function deleteClient(id: string): Promise<void> {
  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Search clients by email
export async function searchClientByEmail(email: string): Promise<Client | null> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }
  
  return data;
}

// Search clients by name or company
export async function searchClients(query: string): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .or(`name.ilike.%${query}%,company_name.ilike.%${query}%,email.ilike.%${query}%`)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) throw error;
  return data || [];
}