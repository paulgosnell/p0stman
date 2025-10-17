import { supabase } from './index';
import type { ConversationRecord, ConversationAnalytics } from '../../types/elevenlabs';

/**
 * Supabase helper functions for ElevenLabs conversation data
 */

export interface ConversationFilters {
  page_section?: string;
  interest_level?: string;
  has_email?: boolean;
  date_from?: string;
  date_to?: string;
  limit?: number;
  offset?: number;
}

/**
 * Fetch all conversations with optional filters
 */
export async function getConversations(filters: ConversationFilters = {}) {
  let query = supabase
    .from('elevenlabs_conversations')
    .select('*')
    .order('created_at', { ascending: false });

  // Apply filters
  if (filters.page_section) {
    query = query.eq('page_section', filters.page_section);
  }

  if (filters.interest_level) {
    query = query.eq('interest_level', filters.interest_level);
  }

  if (filters.has_email) {
    query = query.not('email', 'is', null);
  }

  if (filters.date_from) {
    query = query.gte('created_at', filters.date_from);
  }

  if (filters.date_to) {
    query = query.lte('created_at', filters.date_to);
  }

  if (filters.limit) {
    query = query.limit(filters.limit);
  }

  if (filters.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching conversations:', error);
    throw error;
  }

  return data as ConversationRecord[];
}

/**
 * Get a single conversation by ID
 */
export async function getConversationById(conversationId: string) {
  const { data, error } = await supabase
    .from('elevenlabs_conversations')
    .select('*')
    .eq('conversation_id', conversationId)
    .single();

  if (error) {
    console.error('Error fetching conversation:', error);
    throw error;
  }

  return data as ConversationRecord;
}

/**
 * Get conversation analytics
 */
export async function getConversationAnalytics(dateRange?: { from: string; to: string }) {
  let query = supabase
    .from('elevenlabs_conversation_analytics')
    .select('*')
    .order('date', { ascending: false });

  if (dateRange) {
    query = query
      .gte('date', dateRange.from)
      .lte('date', dateRange.to);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }

  return data as ConversationAnalytics[];
}

/**
 * Get summary statistics
 */
export async function getConversationSummary(dateRange?: { from: string; to: string }) {
  let query = supabase
    .from('elevenlabs_conversations')
    .select('*');

  if (dateRange) {
    query = query
      .gte('created_at', dateRange.from)
      .lte('created_at', dateRange.to);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching conversation summary:', error);
    throw error;
  }

  const conversations = data as ConversationRecord[];

  return {
    total_conversations: conversations.length,
    emails_collected: conversations.filter(c => c.email).length,
    email_collection_rate: conversations.length > 0
      ? conversations.filter(c => c.email).length / conversations.length
      : 0,
    avg_duration: conversations.length > 0
      ? conversations.reduce((sum, c) => sum + c.call_duration_secs, 0) / conversations.length
      : 0,
    high_interest_leads: conversations.filter(c => c.interest_level === 'high').length,
    by_section: conversations.reduce((acc, c) => {
      const section = c.page_section || 'unknown';
      acc[section] = (acc[section] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    by_interest: conversations.reduce((acc, c) => {
      const level = c.interest_level || 'unknown';
      acc[level] = (acc[level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };
}

/**
 * Get recent high-interest leads
 */
export async function getHighInterestLeads(limit = 10) {
  const { data, error } = await supabase
    .from('elevenlabs_conversations')
    .select('*')
    .eq('interest_level', 'high')
    .not('email', 'is', null)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching high-interest leads:', error);
    throw error;
  }

  return data as ConversationRecord[];
}

/**
 * Search conversations by email or name
 */
export async function searchConversations(searchTerm: string) {
  const { data, error } = await supabase
    .from('elevenlabs_conversations')
    .select('*')
    .or(`email.ilike.%${searchTerm}%,name.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`)
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('Error searching conversations:', error);
    throw error;
  }

  return data as ConversationRecord[];
}

/**
 * Get conversations grouped by date
 */
export async function getConversationsByDate(days = 30) {
  const dateFrom = new Date();
  dateFrom.setDate(dateFrom.getDate() - days);

  const { data, error } = await supabase
    .from('elevenlabs_conversations')
    .select('created_at')
    .gte('created_at', dateFrom.toISOString())
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching conversations by date:', error);
    throw error;
  }

  // Group by date
  const groupedByDate = (data as ConversationRecord[]).reduce((acc, conv) => {
    const date = new Date(conv.created_at!).toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(groupedByDate).map(([date, count]) => ({
    date,
    count,
  }));
}

/**
 * Export conversations to CSV format
 */
export function exportToCSV(conversations: ConversationRecord[]): string {
  const headers = [
    'Conversation ID',
    'Date',
    'Name',
    'Email',
    'Company',
    'Phone',
    'Interest Level',
    'Budget Range',
    'Timeline',
    'Specific Interest',
    'Page Section',
    'Duration (sec)',
    'Language',
    'Successful'
  ];

  const rows = conversations.map(c => [
    c.conversation_id,
    c.created_at || '',
    c.name || '',
    c.email || '',
    c.company || '',
    c.phone || '',
    c.interest_level || '',
    c.budget_range || '',
    c.timeline || '',
    c.specific_interest || '',
    c.page_section || '',
    c.call_duration_secs.toString(),
    c.main_language || '',
    c.call_successful ? 'Yes' : 'No'
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  return csvContent;
}
