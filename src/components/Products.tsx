import { ArrowUpRight, BatteryCharging, Home, PlugZap, Truck } from 'lucide-react';

const solutions = [
  { icon: BatteryCharging, name: 'Energy Storage Systems', label: 'ESS', image: 'https://images.pexels.com/photos/37177072/pexels-photo-37177072.jpeg?auto=compress&cs=tinysrgb&w=900', description: 'Modular storage for residential, commercial and industrial energy needs.', benefits: 'High efficiency · Smart monitoring' },
  { icon: PlugZap, name: 'Solar Batteries', label: 'SOLAR', image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=900', description: 'Store clean solar energy for dependable power when you need it.', benefits: 'Backup power · Smart BMS' },
  { icon: Home, name: 'Inverter Batteries', label: 'BACKUP', image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=900', description: 'Efficient battery solutions for everyday residential and business backup.', benefits: 'Long life · High efficiency' },
  { icon: Truck, name: 'E-Rickshaw Batteries', label: 'MOBILITY', image: 'https://images.pexels.com/photos/37210821/pexels-photo-37210821.jpeg?auto=compress&cs=tinysrgb&w=900', description: 'Reliable energy solutions built for electric mobility applications.', benefits: 'Fast charging · Rugged design' },
];

export default function Products() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="products" className="bg-[#f4f8fb] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl"><span className="text-sm font-bold uppercase tracking-[0.2em] text-[#69ad43]">KSO STAR solutions</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#10243e] md:text-5xl">Our Energy Solutions</h2><p className="mt-4 text-lg leading-relaxed text-[#52677d]">Powering homes, businesses and mobility with advanced lithium energy solutions.</p></div>
          <button onClick={() => scrollTo('#contact')} className="inline-flex items-center gap-2 self-start border-b-2 border-[#69ad43] pb-2 text-sm font-bold text-[#10243e] transition-colors hover:text-[#69ad43] md:self-auto">Discuss your requirement <ArrowUpRight className="h-4 w-4" /></button>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => <article key={solution.name} className="group overflow-hidden rounded-2xl border border-[#dce7ee] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#69ad43] hover:shadow-xl hover:shadow-[#10243e]/10"><div className="relative h-52 overflow-hidden bg-[#10243e]"><img src={solution.image} alt={solution.name} className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#10243e] via-transparent to-transparent" /><span className="absolute left-5 top-5 rounded-md bg-[#b8e36d] px-2.5 py-1 text-[10px] font-black tracking-[0.16em] text-[#10243e]">{solution.label}</span><solution.icon className="absolute bottom-5 left-5 h-7 w-7 text-white" /></div><div className="p-6"><h3 className="text-xl font-bold text-[#10243e]">{solution.name}</h3><p className="mt-3 min-h-[52px] text-sm leading-relaxed text-[#52677d]">{solution.description}</p><p className="mt-5 border-t border-[#e5edf2] pt-4 text-xs font-bold text-[#1d72a8]">{solution.benefits}</p><button onClick={() => scrollTo('#contact')} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#10243e] hover:text-[#69ad43]">View details <ArrowUpRight className="h-4 w-4" /></button></div></article>)}
        </div>
      </div>
    </section>
  );
}
