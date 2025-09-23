-- Allow public SELECT on contracts where status = 'sent'

-- Up
-- Ensure RLS is enabled, then add a policy for public selects on 'sent' contracts
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;

CREATE POLICY if_not_exists_select_sent ON public.contracts
  FOR SELECT
  USING (status = 'sent');

-- Down
-- DROP POLICY if exists
-- DROP POLICY if_exists_select_sent ON public.contracts;
-- ALTER TABLE public.contracts DISABLE ROW LEVEL SECURITY;
