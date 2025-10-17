/**
 * Type definitions for ElevenLabs Voice Agent webhooks and conversation data
 * Based on ElevenLabs API documentation (January 2025)
 */

export interface TranscriptEntry {
  role: 'user' | 'agent';
  message: string | null;
  time_in_call_secs: number;
  source_medium?: 'audio' | 'text';
  interrupted?: boolean;
  tool_calls?: any[];
  tool_results?: any[];
}

export interface DataCollection {
  user_email?: string;
  user_name?: string;
  company_name?: string;
  phone_number?: string;
  interest_level?: 'high' | 'medium' | 'low' | 'none';
  budget_range?: string;
  timeline?: string;
  specific_interest?: string;
  page_section?: string;
  has_existing_system?: boolean;
  team_size?: string;
  preferred_contact_method?: string;
  [key: string]: any;
}

export interface ConversationAnalysis {
  call_successful: string;
  data_collection: DataCollection;
  evaluation_criteria_results?: Record<string, any>;
}

export interface ConversationMetadata {
  start_time_unix_secs: number;
  call_duration_secs: number;
  main_language: string | null;
  termination_reason?: string;
  charging?: {
    total_tokens: number;
    total_cost_cents: number;
  };
  features_usage?: {
    language_detection_enabled: boolean;
    language_detection_used: boolean;
    transfers_enabled: boolean;
    multivoice_enabled: boolean;
    dtmf_enabled: boolean;
  };
}

export interface ElevenLabsWebhookPayload {
  conversation_id: string;
  agent_id: string;
  status: 'initiated' | 'in-progress' | 'processing' | 'done' | 'failed';
  user_id?: string | null;
  transcript: TranscriptEntry[];
  analysis: ConversationAnalysis | null;
  metadata: ConversationMetadata;
  has_audio?: boolean;
  has_user_audio?: boolean;
  has_response_audio?: boolean;
}

export interface ConversationRecord {
  id?: number;
  conversation_id: string;
  agent_id: string;
  status: string;
  email: string | null;
  name: string | null;
  company: string | null;
  phone: string | null;
  interest_level: 'high' | 'medium' | 'low' | 'none' | null;
  budget_range: string | null;
  timeline: string | null;
  specific_interest: string | null;
  page_section: string | null;
  call_duration_secs: number;
  main_language: string | null;
  call_successful: boolean;
  transcript: TranscriptEntry[];
  full_data: DataCollection;
  created_at?: string;
  updated_at?: string;
}

export interface ConversationAnalytics {
  date: string;
  page_section: string | null;
  interest_level: string | null;
  total_conversations: number;
  emails_collected: number;
  collection_rate: number;
  avg_duration: number;
  successful_calls: number;
  high_interest_leads: number;
}
