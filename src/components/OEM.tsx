import { ArrowUpRight, Building2, Factory, Globe2, ShieldCheck, Zap } from 'lucide-react';

const strengths = [
  { icon: Factory, title: 'Manufacturing & Trading', desc: 'J.P Textile brings practical experience across both disciplines.' },
  { icon: Globe2, title: 'Multi-Region Presence', desc: 'Serving business requirements across Nepal, Assam, Bengal and Bihar.' },
  { icon: Building2, title: 'Energy Storage', desc: 'Residential, commercial and industrial storage applications.' },
  { icon: ShieldCheck, title: 'Advanced Safety', desc: 'A core KSO STAR catalogue-supported product strength.' },
  { icon: Zap, title: 'Fast Charging', desc: 'Designed for energy and mobility applications.' },
  { icon: Building2, title: '15–20+ Projects', desc: 'Completed projects across the business journey.' },
];

export default function OEM() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="oem" className="relative overflow-hidden bg-[#10243e] py-20 md:py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#1d72a8]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b8e36d]">Energy & project experience</span><h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">Built for the work ahead.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">J.P Textile combines manufacturing and trading experience with KSO STAR energy solutions for residential, commercial, industrial and mobility applications.</p><div className="mt-8 flex flex-wrap gap-3"><div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4"><p className="text-3xl font-black text-[#b8e36d]">15–20+</p><p className="mt-1 text-xs uppercase tracking-wide text-slate-300">Completed projects</p></div><div className="rounded-lg border border-white/10 bg-white/5 px-5 py-4"><p className="text-3xl font-black text-[#b8e36d]">30+</p><p className="mt-1 text-xs uppercase tracking-wide text-slate-300">Years experience</p></div></div></div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{strengths.map((item) => <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-[#69ad43]/60"><item.icon className="h-6 w-6 text-[#b8e36d]" /><h3 className="mt-4 font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p></div>)}</div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"><p className="text-sm text-slate-300"><strong className="text-white">KSO STAR</strong> · Power your life</p><button onClick={() => scrollTo('#contact')} className="inline-flex items-center gap-2 rounded-lg bg-[#b8e36d] px-6 py-3 text-sm font-bold text-[#10243e] transition-colors hover:bg-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></button></div>
      </div>
    </section>
  );
}
