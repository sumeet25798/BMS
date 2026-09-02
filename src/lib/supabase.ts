import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type QuoteInquiry = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  city: string | null;
  product_model: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

export type NewQuoteInquiry = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  city?: string;
  product_model?: string;
  message?: string;
};
