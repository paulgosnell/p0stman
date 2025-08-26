-- Create events table for tracking delivery page interactions
CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  path TEXT NOT NULL,
  agency TEXT NOT NULL,
  event TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_events_timestamp ON events(timestamp);
CREATE INDEX IF NOT EXISTS idx_events_agency ON events(agency);
CREATE INDEX IF NOT EXISTS idx_events_event ON events(event);
CREATE INDEX IF NOT EXISTS idx_events_path ON events(path);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for tracking)
CREATE POLICY "Allow public inserts" ON events
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow authenticated reads" ON events
  FOR SELECT
  USING (auth.role() = 'authenticated');