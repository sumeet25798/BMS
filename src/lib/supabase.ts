import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export function hasSupabaseConfig(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseConfigError(): string | null {
  if (hasSupabaseConfig()) {
    return null;
  }

  return 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment or Vercel project settings.';
}

export const supabase = hasSupabaseConfig()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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
