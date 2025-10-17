/**
 * Type definitions for voice agent components
 */

export type VoiceAgentPlacement = 'inline' | 'floating';

export type VoiceAgentColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink';

export type VoiceAgentSection =
  | 'cta'
  | 'services'
  | 'pricing'
  | 'process'
  | 'case-studies'
  | 'contact'
  | 'home';

export interface VoiceAgentCallbacks {
  onConversationStart?: () => void;
  onConversationEnd?: (conversationId?: string) => void;
  onError?: (error: any) => void;
  onMessage?: (message: VoiceAgentMessage) => void;
}

export interface VoiceAgentMessage {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
  source?: 'audio' | 'text';
}

export interface VoiceAgentConfig {
  prompt: string;
  firstMessage: string;
  buttonText?: string;
  color?: VoiceAgentColor;
  icon?: string;
}

export interface ConversationMetadata {
  conversationId?: string;
  startTime?: number;
  endTime?: number;
  duration?: number;
  section?: string;
  language?: string;
}

export interface ConversationOverrides {
  agent?: {
    prompt?: {
      prompt: string;
    };
    firstMessage?: string;
    language?: string;
  };
  conversation?: {
    textOnly?: boolean;
  };
  tts?: {
    voiceId?: string;
  };
}

export interface ElevenLabsConversation {
  status: 'idle' | 'connecting' | 'connected' | 'disconnected';
  isSpeaking: boolean;
  isListening: boolean;
  startSession: (config: any) => Promise<void>;
  endSession: () => void;
  getOutputByteFrequencyData: () => Uint8Array | null;
}

export interface DataCollectionResult {
  user_email?: string;
  user_name?: string;
  company_name?: string;
  phone_number?: string;
  interest_level?: 'high' | 'medium' | 'low' | 'none';
  budget_range?: 'under_15k' | '15k_to_50k' | '50k_to_75k' | 'over_75k' | 'not_discussed';
  timeline?: 'urgent' | 'normal' | 'flexible' | 'not_discussed';
  specific_interest?: string;
  page_section?: string;
  has_existing_system?: boolean;
  team_size?: 'solo' | 'small' | 'medium' | 'large' | 'not_discussed';
  preferred_contact_method?: 'email' | 'phone' | 'video_call' | 'not_specified';
}

export interface ConversationAnalytics {
  total_conversations: number;
  email_collection_rate: number;
  avg_duration_seconds: number;
  interest_breakdown: Array<{ level: string; count: number }>;
  conversations_by_section: Array<{ section: string; count: number }>;
  conversations_over_time: Array<{ date: string; count: number }>;
  top_interests: Array<{ interest: string; count: number }>;
  conversion_rate: number;
}

export interface WebhookPayload {
  conversation_id: string;
  agent_id: string;
  status: 'initiated' | 'in-progress' | 'processing' | 'done' | 'failed';
  transcript: Array<{
    role: 'user' | 'agent';
    message: string | null;
    time_in_call_secs: number;
    source_medium?: 'audio' | 'text';
    interrupted?: boolean;
  }>;
  analysis: {
    call_successful: string;
    data_collection: DataCollectionResult;
    evaluation_criteria_results?: Record<string, any>;
  } | null;
  metadata: {
    start_time_unix_secs: number;
    call_duration_secs: number;
    main_language: string | null;
    termination_reason?: string;
    charging?: {
      total_tokens: number;
      total_cost_cents: number;
    };
  };
  has_audio?: boolean;
  has_user_audio?: boolean;
  has_response_audio?: boolean;
}

export interface SectionVoiceAgentProps {
  section: string;
  prompt: string;
  firstMessage?: string;
  placement?: VoiceAgentPlacement;
  buttonText?: string;
  textOnly?: boolean;
  showTranscript?: boolean;
  color?: VoiceAgentColor;
  icon?: string;
  autoStart?: boolean;
  onConversationStart?: () => void;
  onConversationEnd?: (conversationId?: string) => void;
  onError?: (error: any) => void;
}

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  disabled?: boolean;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}
