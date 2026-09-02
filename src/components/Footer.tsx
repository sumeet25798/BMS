import { Battery, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600">
                <Battery className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold leading-none text-white">
                  KSO STAR
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-emerald-400">
                  Lithium LFP Batteries
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Premium lithium iron phosphate battery packs for e-rickshaws,
              electric vehicles, and energy storage. Manufactured by KS NEX
              POWER LLP in Siliguri, West Bengal.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Products', href: '#products' },
                { label: 'OEM Partnership', href: '#oem' },
                { label: 'Technology', href: '#technology' },
                { label: 'About Us', href: '#about' },
                { label: 'Get Quote', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                Siliguri, West Bengal, India
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                KS NEX POWER LLP
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                OEM Inquiries Welcome
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} KSO STAR — KS NEX POWER LLP. All
              rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Brand: KSO STAR | Siliguri, West Bengal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
