-- Allow public SELECT on clients when they have at least one sent contract

-- Up
-- Ensure RLS is enabled on clients, then allow public SELECT where a related contract is 'sent'
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY if_not_exists_select_clients_for_sent_contracts ON public.clients
  FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.contracts c
    WHERE c.client_id = public.clients.id
      AND c.status = 'sent'
  ));

-- Down
-- DROP POLICY if exists
-- DROP POLICY if_exists_select_clients_for_sent_contracts ON public.clients;
-- ALTER TABLE public.clients DISABLE ROW LEVEL SECURITY;
