import { supabase } from './index';

export interface Client {
  id: string;
  created_at: string;
  name: string; 
  company_name: string; 
  address: string;
  email: string;
  status: 'prospecting' | 'pitching' | 'won' | 'live' | 'old' | 'lost';
  value?: number;
  linkedin_url?: string;
  twitter_handle?: string;
  phone?: string;
  notes?: string;
  last_contact?: string;
  next_followup?: string;
  updated_at?: string;
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
export async function createClient(client: Omit<Client, 'id' | 'created_at' | 'updated_at'>): Promise<Client> {
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
    const updates: Partial<Client> = {};
    if (existing.name !== client.name) updates.name = client.name;
    if (existing.company_name !== client.company_name) updates.company_name = client.company_name;
    if (existing.address !== client.address) updates.address = client.address;
    if (existing.status !== client.status) updates.status = client.status;
    if (existing.value !== client.value) updates.value = client.value;
    if (existing.linkedin_url !== client.linkedin_url) updates.linkedin_url = client.linkedin_url;
    if (existing.twitter_handle !== client.twitter_handle) updates.twitter_handle = client.twitter_handle;
    if (existing.phone !== client.phone) updates.phone = client.phone;
    if (existing.notes !== client.notes) updates.notes = client.notes;
    if (existing.last_contact !== client.last_contact) updates.last_contact = client.last_contact;
    if (existing.next_followup !== client.next_followup) updates.next_followup = client.next_followup;

    if (Object.keys(updates).length > 0) {
      updates.updated_at = new Date().toISOString();
      const { data: updated, error: updateError } = await supabase
        .from('clients')
        .update(updates)
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
    .insert([{
      ...client,
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Update a client
export async function updateClient(id: string, updates: Partial<Client>): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Delete a client
export async function deleteClient(id: string): Promise<void> {
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