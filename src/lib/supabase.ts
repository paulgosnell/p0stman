import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Environment variables loaded

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    url: !!supabaseUrl,
    key: !!supabaseAnonKey,
    env: import.meta.env
  });
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Contact {
  id: number;
  created_at: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  hidden?: boolean;
  replied?: boolean;
  replied_at?: string;
  reply_content?: string;
}

interface Message {
  id: number;
  created_at: string;
  contact_id: number;
  content: string;
  ai_response: string;
}

interface ProposalFeedback {
  id?: number;
  created_at?: string;
  proposal_id: string;
  slide_index: number;
  content: string;
  status: 'new' | 'reviewed' | 'addressed';
}

interface ScheduleRequest {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed';
}

interface Affiliate {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  website?: string;
  social_links?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  status?: 'pending' | 'approved' | 'rejected';
  referral_code?: string;
  payment_method?: string;
  payment_details?: {
    paypal_email?: string;
    bank_details?: {
      name: string;
      account: string;
      routing: string;
    };
  };
}

async function saveContact(contact: Omit<Contact, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contact])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function markContactAsReplied(id: number, replyContent: string) {
  const { data, error } = await supabase
    .from('contacts')
    .update([
      {
        replied: true,
        replied_at: new Date().toISOString(),
        reply_content: replyContent
      }
    ])
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function saveMessage(message: Omit<Message, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('messages')
    .insert([message])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function saveFeedback(feedback: Omit<ProposalFeedback, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('proposal_feedback')
    .insert([feedback])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function saveScheduleRequest(request: Omit<ScheduleRequest, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('schedule_requests')
    .insert([request])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function saveAffiliateSignup(affiliate: Omit<Affiliate, 'id' | 'created_at' | 'status' | 'referral_code'>) {
  // Generate unique referral code
  const referralCode = `REF${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  
  const { data, error } = await supabase
    .from('affiliates')
    .insert([{ ...affiliate, referral_code: referralCode }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function hideContact(id: number) {
  const { data, error } = await supabase
    .from('contacts')
    .update({ hidden: true })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteContact(id: number) {
  const { data, error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  form_type?: string;
}

export async function sendContactEmail(emailData: ContactEmailData) {
  const { data, error } = await supabase.functions.invoke('send-contact-email', {
    body: emailData,
  });

  if (error) throw error;
  return data;
}