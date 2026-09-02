import { Cpu, ShieldCheck, Zap, Recycle, Thermometer, Wifi } from 'lucide-react';

const techFeatures = [
  {
    icon: Cpu,
    title: 'Advanced BMS',
    desc: 'Intelligent Battery Management System with cell balancing, over-charge and over-discharge protection, and real-time diagnostics.',
  },
  {
    icon: Wifi,
    title: 'IoT Connectivity',
    desc: 'Built-in IoT kit enables remote monitoring of battery health, state of charge, and performance data via mobile app.',
  },
  {
    icon: ShieldCheck,
    title: 'LFP Chemistry',
    desc: 'Lithium Iron Phosphate (LiFePO4) cells offer superior thermal stability, higher safety margins, and longer cycle life.',
  },
  {
    icon: Zap,
    title: 'Fast Charging',
    desc: 'Optimized charging architecture supports rapid charge cycles without compromising battery longevity.',
  },
  {
    icon: Thermometer,
    title: 'Thermal Management',
    desc: 'Engineered thermal dissipation design ensures stable performance across extreme temperature conditions.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    desc: 'LFP cells are non-toxic, cobalt-free, and recyclable — a cleaner energy solution for a sustainable future.',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-[#eef5f8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Energy Solutions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Smarter storage for a changing energy landscape
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From residential backup to commercial and industrial storage, KSO STAR solutions bring together high efficiency, advanced safety and dependable performance.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/36594160/pexels-photo-36594160.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial battery inspection facility"
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-xl bg-[#10243e] p-5 text-white"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b8e36d]">Built around your application</p><p className="mt-2 text-sm leading-relaxed text-slate-300">Modular, scalable and clean energy storage for the way you work and live.</p></div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {techFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
