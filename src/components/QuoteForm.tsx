import { useState } from 'react';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { supabase, getSupabaseConfigError } from '@/lib/supabase';
import type { NewQuoteInquiry } from '@/lib/supabase';
import { batteryModels } from '@/data/products';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<NewQuoteInquiry>({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    product_model: '',
    message: '',
  });

  const update = (key: keyof NewQuoteInquiry, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    const configError = getSupabaseConfigError();
    if (!supabase || configError) {
      setStatus('error');
      setErrorMsg(
        configError ||
          'Quote form is temporarily unavailable because Supabase is not configured.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('quote_inquiries').insert({
      name: form.name,
      company: form.company || null,
      email: form.email,
      phone: form.phone,
      city: form.city || null,
      product_model: form.product_model || null,
      message: form.message || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      city: '',
      product_model: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Request a Quote
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Share your OEM requirements and we'll get back to you with detailed
              pricing, specifications, and partnership terms.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Call Us
                  </p>
                  <p className="text-sm font-semibold text-white">
                    KS NEX POWER LLP, Siliguri
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-white">
                    For OEM inquiries and quotations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Siliguri, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar charging station with EV"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-400" />
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Thank You!
                </h3>
                <p className="mt-3 max-w-sm text-slate-300">
                  Your quote request has been received. Our team will get back to
                  you shortly with detailed OEM pricing and specifications.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Phone <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      City
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                      placeholder="Your city"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Product Model
                    </label>
                    <select
                      value={form.product_model}
                      onChange={(e) => update('product_model', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                    >
                      <option value="" className="bg-slate-800">
                        Select a model
                      </option>
                      {batteryModels.map((model) => (
                        <option
                          key={model.id}
                          value={model.name}
                          className="bg-slate-800"
                        >
                          {model.name}
                        </option>
                      ))}
                      <option value="all" className="bg-slate-800">
                        All Models
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Message / Requirements
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-400 focus:bg-white/10"
                    placeholder="Share your OEM requirements, quantities, timelines, etc."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                    <p className="text-sm text-red-300">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
