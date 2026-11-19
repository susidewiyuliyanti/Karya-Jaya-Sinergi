import { COMPANY_INFO, Language, UI_COPY } from '../data/kjsData';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function Footer({ lang, onChangeLang }: FooterProps) {
  const t = UI_COPY[lang].footer;
  const nav = UI_COPY[lang].nav;

  return (
    <footer className="bg-[#060D1A] text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <p className="font-display text-sm font-semibold text-white">
            {COMPANY_INFO.legalName}
          </p>
          <p className="text-xs text-slate-400">{t.rights}</p>
          <p className="text-xs font-mono text-slate-500 tabular-nums">{t.legal}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">
            {nav.about}
          </a>
          <a href="#services" className="hover:text-white transition-colors whitespace-nowrap">
            {nav.services}
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors whitespace-nowrap">
            {nav.portfolio}
          </a>
          <a href="#clients" className="hover:text-white transition-colors whitespace-nowrap">
            {nav.clients}
          </a>

          <div className="flex items-center gap-2 pl-2 border-l border-white/15">
            <button
              type="button"
              onClick={() => onChangeLang('id')}
              className={`cursor-pointer ${lang === 'id' ? 'text-[#D4A438] font-semibold' : 'hover:text-white'}`}
            >
              ID
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`cursor-pointer ${lang === 'en' ? 'text-[#D4A438] font-semibold' : 'hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
