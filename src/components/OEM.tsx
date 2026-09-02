import {
  Factory,
  PackageSearch,
  Wrench,
  Truck,
  ShieldCheck,
  Cpu,
  Wifi,
  BatteryCharging,
} from 'lucide-react';

const requirements = [
  {
    icon: PackageSearch,
    title: 'MOQ & Pricing',
    desc: 'Best OEM pricing with minimum order quantities per model',
  },
  {
    icon: Cpu,
    title: 'LFP Cell Specs',
    desc: 'Detailed cell specifications and brand information',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Terms',
    desc: 'Comprehensive warranty coverage for every model',
  },
  {
    icon: Wifi,
    title: 'BMS & IoT Kit',
    desc: 'Smart BMS specs with IoT kit pricing and 2-year subscription',
  },
  {
    icon: BatteryCharging,
    title: 'Charger Options',
    desc: 'Compatible charger pricing and availability',
  },
  {
    icon: Wrench,
    title: 'Branding & Packaging',
    desc: 'Custom KSO STAR labeling, branding, and packaging options',
  },
  {
    icon: Truck,
    title: 'Lead Time',
    desc: 'Production and delivery timelines for planning',
  },
  {
    icon: Factory,
    title: 'Long-term Partnership',
    desc: 'Looking forward to a lasting OEM business relationship',
  },
];

export default function OEM() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="oem" className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">
            OEM Manufacturing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            OEM Partnership Program
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            KS NEX POWER LLP is seeking OEM manufacturing partners for Lithium
            LFP batteries under the KSO STAR brand. Here's what we're looking
            for:
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { voltage: '51.2V', capacity: '105Ah' },
            { voltage: '51.2V', capacity: '132Ah' },
            { voltage: '60.2V', capacity: '105Ah' },
            { voltage: '64.4V', capacity: '105Ah' },
          ].map((model) => (
            <div
              key={`${model.voltage}-${model.capacity}`}
              className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-white">{model.voltage}</p>
              <p className="mt-1 text-sm text-emerald-300">{model.capacity}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((req) => (
            <div
              key={req.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 transition-colors group-hover:bg-emerald-500/30">
                <req.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">{req.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {req.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Brand:</span> KSO STAR
              <span className="mx-3 text-slate-600">|</span>
              <span className="font-semibold text-white">Company:</span> KS NEX
              POWER LLP
              <span className="mx-3 text-slate-600">|</span>
              <span className="font-semibold text-white">Location:</span>{' '}
              Siliguri, West Bengal
            </p>
          </div>
          <div className="mt-8">
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Share Your Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
