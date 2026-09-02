/*
# Create quote_inquiries table for KSO STAR website

## Purpose
Stores OEM/quote inquiries submitted through the website's "Get Quote" form.
This is a single-tenant, no-auth public website — any visitor can submit a quote request.

## New Tables
- `quote_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `company` (text) — submitter's company name
  - `email` (text, not null) — submitter's email
  - `phone` (text, not null) — submitter's phone number
  - `city` (text) — submitter's city
  - `product_model` (text) — which battery model they're interested in (e.g. "51.2V - 105Ah")
  - `message` (text) — additional details / requirements
  - `status` (text, default 'new') — inquiry status: new, contacted, closed
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on `quote_inquiries`.
- Public read/write via anon + authenticated (intentionally public form submissions).
- Anyone can submit an inquiry; anyone can read inquiry records (public business directory model).
*/

CREATE TABLE IF NOT EXISTS quote_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text NOT NULL,
  city text,
  product_model text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_inquiries" ON quote_inquiries;
CREATE POLICY "anon_select_inquiries" ON quote_inquiries
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON quote_inquiries;
CREATE POLICY "anon_insert_inquiries" ON quote_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON quote_inquiries;
CREATE POLICY "anon_update_inquiries" ON quote_inquiries
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON quote_inquiries;
CREATE POLICY "anon_delete_inquiries" ON quote_inquiries
  FOR DELETE TO anon, authenticated USING (true);