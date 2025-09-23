-- Add currency fields to contracts

-- Up
ALTER TABLE public.contracts
  ADD COLUMN IF NOT EXISTS currency text,
  ADD COLUMN IF NOT EXISTS currency_symbol text;

-- Down
-- ALTER TABLE public.contracts
--   DROP COLUMN IF EXISTS currency_symbol,
--   DROP COLUMN IF EXISTS currency;
