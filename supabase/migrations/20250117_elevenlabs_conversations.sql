-- Create table for storing ElevenLabs conversation data
CREATE TABLE IF NOT EXISTS elevenlabs_conversations (
  id BIGSERIAL PRIMARY KEY,
  conversation_id TEXT UNIQUE NOT NULL,
  agent_id TEXT NOT NULL,
  status TEXT NOT NULL,

  -- Contact information collected
  email TEXT,
  name TEXT,
  company TEXT,
  phone TEXT,

  -- Lead qualification data
  interest_level TEXT CHECK (interest_level IN ('high', 'medium', 'low', 'none')),
  budget_range TEXT,
  timeline TEXT,
  specific_interest TEXT,
  page_section TEXT,

  -- Call metadata
  call_duration_secs INTEGER NOT NULL DEFAULT 0,
  main_language TEXT,
  call_successful BOOLEAN DEFAULT false,

  -- Full data storage
  transcript JSONB,
  full_data JSONB,

  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_elevenlabs_conversations_conversation_id
  ON elevenlabs_conversations(conversation_id);

CREATE INDEX IF NOT EXISTS idx_elevenlabs_conversations_email
  ON elevenlabs_conversations(email) WHERE email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_elevenlabs_conversations_interest_level
  ON elevenlabs_conversations(interest_level) WHERE interest_level IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_elevenlabs_conversations_created_at
  ON elevenlabs_conversations(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_elevenlabs_conversations_page_section
  ON elevenlabs_conversations(page_section) WHERE page_section IS NOT NULL;

-- Enable Row Level Security (RLS)
ALTER TABLE elevenlabs_conversations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything"
  ON elevenlabs_conversations
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can view all records (for admin dashboard)
CREATE POLICY "Authenticated users can view all"
  ON elevenlabs_conversations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_elevenlabs_conversations_updated_at
  BEFORE UPDATE ON elevenlabs_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create view for analytics (useful for dashboard)
CREATE OR REPLACE VIEW elevenlabs_conversation_analytics AS
SELECT
  DATE(created_at) as date,
  page_section,
  interest_level,
  COUNT(*) as total_conversations,
  COUNT(email) as emails_collected,
  COUNT(email)::FLOAT / COUNT(*) as collection_rate,
  AVG(call_duration_secs) as avg_duration,
  COUNT(CASE WHEN call_successful THEN 1 END) as successful_calls,
  COUNT(CASE WHEN interest_level = 'high' THEN 1 END) as high_interest_leads
FROM elevenlabs_conversations
GROUP BY DATE(created_at), page_section, interest_level
ORDER BY date DESC;

-- Grant access to the view
GRANT SELECT ON elevenlabs_conversation_analytics TO authenticated;
GRANT SELECT ON elevenlabs_conversation_analytics TO service_role;

-- Add comments for documentation
COMMENT ON TABLE elevenlabs_conversations IS 'Stores conversation data from ElevenLabs voice agent webhooks';
COMMENT ON COLUMN elevenlabs_conversations.conversation_id IS 'Unique conversation ID from ElevenLabs';
COMMENT ON COLUMN elevenlabs_conversations.email IS 'User email collected during conversation';
COMMENT ON COLUMN elevenlabs_conversations.interest_level IS 'Lead qualification: high, medium, low, or none';
COMMENT ON COLUMN elevenlabs_conversations.transcript IS 'Full conversation transcript in JSON format';
COMMENT ON COLUMN elevenlabs_conversations.full_data IS 'All collected data from ElevenLabs data collection feature';
