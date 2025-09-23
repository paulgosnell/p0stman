-- Migration: add provider fields to contracts
-- UP
BEGIN;

ALTER TABLE public.contracts
  ADD COLUMN provider_name text,
  ADD COLUMN provider_company text,
  ADD COLUMN provider_legal_entity text,
  ADD COLUMN provider_address text,
  ADD COLUMN provider_contact text;

COMMIT;

-- DOWN
-- To roll back, run the statements below
-- BEGIN;
-- ALTER TABLE public.contracts
--   DROP COLUMN IF EXISTS provider_name,
--   DROP COLUMN IF EXISTS provider_company,
--   DROP COLUMN IF EXISTS provider_legal_entity,
--   DROP COLUMN IF EXISTS provider_address,
--   DROP COLUMN IF EXISTS provider_contact;
-- COMMIT;
