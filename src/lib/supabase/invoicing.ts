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

export interface Invoice {
  id: string;
  created_at: string;
  invoice_number: string;
  client_id: string;
  issue_date: string;
  due_date: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  total_amount: number;
  description?: string;
  client?: Client;
    items?: InvoiceItem[];
}

export interface InvoiceItem {
  id: string;
  invoice_id: string;
  description: string;
  amount: number;
  order_position: number;
  status: 'pending' | 'paid' | 'due';
  created_at: string;
  updated_at: string;
}

// Client functions
export async function getClients(): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function getClient(id: string): Promise<Client> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

// Note: createClient function removed - use the one from clients.ts which has duplicate checking

// Invoice functions
export async function getInvoices(): Promise<Invoice[]> {
  const { data, error } = await supabase
    .from('invoices')
    .select(`
      *,
      client:clients(*),
      items:invoice_items(*)
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getInvoice(id: string): Promise<Invoice & { items: InvoiceItem[] }> {
  const { data: invoice, error: invoiceError } = await supabase
    .from('invoices')
    .select('*, client:clients(*)')
    .eq('invoice_number', id)
    .single();

  if (invoiceError) throw invoiceError;

  const { data: items, error: itemsError } = await supabase
    .from('invoice_items')
    .select('*')
    .eq('invoice_id', invoice.id)
    .order('order_position', { ascending: true });

  if (itemsError) throw itemsError;

  return { ...invoice, items: items || [] };
}

export async function createInvoice(
  invoice: Omit<Invoice, 'id' | 'created_at' | 'invoice_number'>,
  items: Array<Omit<InvoiceItem, 'id' | 'invoice_id' | 'created_at' | 'updated_at'>>
): Promise<Invoice> {
  const { data: newInvoice, error: invoiceError } = await supabase
    .from('invoices')
    .insert([invoice])
    .select()
    .single();

  if (invoiceError) throw invoiceError;

  if (items.length > 0) {
    const { error: itemsError } = await supabase
      .from('invoice_items')
      .insert(items.map(item => ({
        ...item,
        invoice_id: newInvoice.id,
        status: item.status || 'due'
      })));

    if (itemsError) throw itemsError;
  }

  return newInvoice;
}

export async function updateInvoice(
  id: string,
  data: {
    issue_date?: string;
    due_date?: string;
    status: Invoice['status'];
    description?: string;
    items: Array<{
      description: string;
      amount: number;
      order_position: number;
      status: 'pending' | 'paid' | 'due';
    }>;
  }
): Promise<void> {
  // First update invoice status
  const { error: invoiceError } = await supabase
    .from('invoices')
    .update({
      status: data.status,
      issue_date: data.issue_date,
      due_date: data.due_date,
      description: data.description
    })
    .eq('invoice_number', id);

  if (invoiceError) throw invoiceError;

  // Get invoice ID from invoice number
  const { data: invoice, error: getError } = await supabase
    .from('invoices')
    .select('id')
    .eq('invoice_number', id)
    .single();

  if (getError) throw getError;

  // Delete existing items
  const { error: deleteError } = await supabase
    .from('invoice_items')
    .delete()
    .eq('invoice_id', invoice.id);

  if (deleteError) throw deleteError;

  // Insert new items with proper status
  if (data.items.length > 0) {
    // Map items ensuring status is always set
    const itemsToInsert = data.items.map(item => ({
      invoice_id: invoice.id,
      description: item.description,
      amount: Number(item.amount) || 0,
      order_position: item.order_position,
      status: item.status || 'pending'
    }));

    const { error: itemsError } = await supabase
      .from('invoice_items')
      .insert(itemsToInsert);

    if (itemsError) throw itemsError;
  }
}

async function updateInvoiceItemStatus(
  invoiceId: string,
  itemId: string,
  status: InvoiceItem['status']
): Promise<void> {
  const { error } = await supabase
    .from('invoice_items')
    .update({ status })
    .eq('id', itemId)
    .eq('invoice_id', invoiceId);

  if (error) throw error;
}
async function updateInvoiceStatus(id: string, status: Invoice['status']): Promise<void> {
  const { error } = await supabase
    .from('invoices')
    .update({ status })
    .eq('invoice_number', id);

  if (error) throw error;
}

  export async function deleteInvoice(id: string): Promise<void> {
    const { error } = await supabase
      .from('invoices')
      .delete()
      .eq('invoice_number', id);

    if (error) throw error;
  }