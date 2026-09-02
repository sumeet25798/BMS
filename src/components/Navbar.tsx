import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Energy Solutions', href: '#technology' },
  { label: 'Projects', href: '#oem' },
  { label: 'Clients', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-[#10243e]/95'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 text-white"
        >
          <div className="text-left">
            <span className={`block text-xl font-black leading-none tracking-tight ${scrolled ? 'text-[#10243e]' : 'text-white'}`}>
              KSO STAR
            </span>
            <span className={`block text-[10px] font-medium italic tracking-[0.14em] ${scrolled ? 'text-[#69ad43]' : 'text-[#b8e36d]'}`}>
              Power your life
            </span>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-semibold transition-colors hover:text-[#69ad43] ${scrolled ? 'text-[#43566e]' : 'text-slate-200'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="flex items-center gap-2 rounded-lg bg-[#69ad43] px-4 py-2 text-sm font-bold text-[#10243e] transition-all hover:bg-[#b8e36d] hover:shadow-lg hover:shadow-[#69ad43]/30"
          >
            <Phone className="h-4 w-4" />
            Get Quote
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-[#10243e]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#10243e] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-[#b8e36d]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#69ad43] px-4 py-3 text-sm font-semibold text-[#10243e]"
            >
              <Phone className="h-4 w-4" />
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
