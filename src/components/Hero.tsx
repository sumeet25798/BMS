import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden bg-[#10243e]"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37177072/pexels-photo-37177072.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="KSO STAR energy storage battery"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243e] via-[#10243e]/85 to-[#10243e]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10243e] via-transparent to-[#10243e]/60" />
      </div>

      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#1d72a8]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 md:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-[#b8e36d]">
              J.P Textile · Manufacturing & Trading
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Powering Businesses with{' '}
            <span className="text-[#b8e36d]">Smarter Energy Solutions</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Reliable lithium battery and energy storage solutions designed for
            performance, efficiency and a sustainable future.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo('#products')}
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#b8e36d] px-8 py-4 text-base font-bold text-[#10243e] shadow-lg shadow-black/20 transition-all hover:bg-white"
            >
              Explore Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-[#b8e36d] hover:bg-white/10"
            >
              OEM Partnership
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Zap, title: '30+', desc: 'Years experience' },
              { icon: ShieldCheck, title: '10,000+', desc: 'Happy clients' },
              { icon: Zap, title: '15–20+', desc: 'Completed projects' },
              { icon: ShieldCheck, title: '₹70 Cr', desc: 'Annual turnover' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                  <item.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4f8fb] to-transparent" />
    </section>
  );
}
