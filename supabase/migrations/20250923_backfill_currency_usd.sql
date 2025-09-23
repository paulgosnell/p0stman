-- Backfill existing contracts to USD

-- Up
UPDATE public.contracts
SET currency = 'USD', currency_symbol = '$'
WHERE currency IS NULL OR currency = '';

-- Down
-- (irreversible): To reverse, you'd need to set values back to NULL or previous values if known.
