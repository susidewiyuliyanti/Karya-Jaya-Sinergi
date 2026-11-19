import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, UI_COPY } from '../data/kjsData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  lang: Language;
  onRequestQuote: () => void;
}

export function Navbar({ lang, onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = UI_COPY[lang].nav;

  const navItems = [
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#portfolio', label: t.portfolio },
    { href: '#clients', label: t.clients },
  ];

  const handleCtaClick = () => {
    setMobileOpen(false);
    onRequestQuote();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 flex items-center justify-between gap-5">
        <BrandLogo />
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-[#0B162C] border-b border-transparent hover:border-[#C59326] py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59326]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <button type="button" onClick={handleCtaClick} className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59326]">
            {t.cta}
          </button>
          <button type="button" onClick={() => setMobileOpen((prev) => !prev)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#0B162C] hover:bg-slate-100 transition-colors cursor-pointer" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0B162C] hover:bg-slate-50 rounded-lg">
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button type="button" onClick={handleCtaClick} className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors cursor-pointer">
              {t.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
