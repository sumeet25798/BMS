import { MapPin, Building2, Users, Calendar } from 'lucide-react';

const stats = [
  { icon: Building2, label: 'Company', value: 'KS NEX POWER LLP' },
  { icon: MapPin, label: 'Location', value: 'Siliguri, West Bengal' },
  { icon: Users, label: 'Brand', value: 'KSO STAR' },
  { icon: Calendar, label: 'Focus', value: 'Lithium LFP Batteries' },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Driving the EV Revolution from Siliguri
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">
                  KS NEX POWER LLP
                </span>{' '}
                is a West Bengal-based enterprise building a future powered by
                clean, efficient lithium battery technology. Under our brand{' '}
                <span className="font-semibold text-emerald-600">KSO STAR</span>
                , we deliver premium LFP battery packs for e-rickshaws,
                electric vehicles, and energy storage systems.
              </p>
              <p>
                We are actively seeking OEM manufacturing partners who share our
                commitment to quality and innovation. Our goal is to build
                long-term relationships with manufacturers who can deliver
                world-class LFP batteries with smart BMS, IoT connectivity, and
                reliable performance.
              </p>
              <p>
                From our base in Siliguri, a growing hub for EV and clean energy
                in Eastern India, we are powering the transition to sustainable
                mobility — one battery pack at a time.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                    <stat.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-emerald-500 p-6 text-white shadow-xl md:block">
              <p className="text-3xl font-bold">4</p>
              <p className="text-sm text-emerald-50">Battery Models</p>
            </div>
            <div className="absolute -right-6 -top-6 hidden rounded-2xl bg-slate-900 p-6 text-white shadow-xl md:block">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-slate-300">LFP Chemistry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
