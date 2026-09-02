import { ArrowRight, Check } from 'lucide-react';
import { batteryModels } from '@/data/products';

export default function Products() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Our Product Range
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            KSO STAR Battery Models
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four premium LFP battery packs designed for e-rickshaws, electric
            vehicles, and energy storage applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {batteryModels.map((model) => (
            <div
              key={model.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="https://images.pexels.com/photos/37177072/pexels-photo-37177072.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={`${model.name} battery pack`}
                  className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {model.application}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{model.name}</h3>

                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Voltage
                    </p>
                    <p className="text-xl font-bold text-slate-900">{model.voltage}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Capacity
                    </p>
                    <p className="text-xl font-bold text-slate-900">{model.capacity}</p>
                  </div>
                </div>

                <ul className="mt-5 flex-1 space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
