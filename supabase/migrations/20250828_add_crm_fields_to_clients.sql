-- Add CRM fields to clients table for outreach management
ALTER TABLE clients ADD COLUMN status VARCHAR(50) DEFAULT 'prospecting';
ALTER TABLE clients ADD COLUMN value DECIMAL(10,2);
ALTER TABLE clients ADD COLUMN linkedin_url VARCHAR(255);
ALTER TABLE clients ADD COLUMN twitter_handle VARCHAR(100);
ALTER TABLE clients ADD COLUMN phone VARCHAR(50);
ALTER TABLE clients ADD COLUMN notes TEXT;
ALTER TABLE clients ADD COLUMN last_contact TIMESTAMP WITH TIME ZONE;
ALTER TABLE clients ADD COLUMN next_followup TIMESTAMP WITH TIME ZONE;
ALTER TABLE clients ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add check constraint for status values
ALTER TABLE clients ADD CONSTRAINT clients_status_check
  CHECK (status IN ('prospecting', 'pitching', 'won', 'live', 'old', 'lost'));

-- Create index for status filtering
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_next_followup ON clients(next_followup);
CREATE INDEX idx_clients_updated_at ON clients(updated_at DESC);
