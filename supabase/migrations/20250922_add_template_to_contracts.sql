-- Add `template` column to contracts to store UK|UAE template selection
-- Up: add column
ALTER TABLE public.contracts
  ADD COLUMN IF NOT EXISTS template text;

-- Down: remove column (rollback)
-- ALTER TABLE public.contracts
--   DROP COLUMN IF EXISTS template;
