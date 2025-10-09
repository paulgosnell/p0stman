-- Create table for AI Playbook email leads
CREATE TABLE ai_playbook_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  role VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'AI Playbook Download',
  downloaded BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Add RLS (Row Level Security)
ALTER TABLE ai_playbook_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON ai_playbook_leads
  FOR INSERT WITH CHECK (true);

-- Create policy for admin access (you'll need to be authenticated)
CREATE POLICY "Allow admin access" ON ai_playbook_leads
  FOR ALL USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX idx_ai_playbook_leads_email ON ai_playbook_leads(email);
CREATE INDEX idx_ai_playbook_leads_created_at ON ai_playbook_leads(created_at DESC);