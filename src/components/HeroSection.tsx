import { ArrowRight, FileDown } from 'lucide-react';
import { COMPANY_INFO, Language, UI_COPY } from '../data/kjsData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onRequestQuote: () => void;
}

export function HeroSection({ lang, onChangeLang, onRequestQuote }: HeroSectionProps) {
  const t = UI_COPY[lang].hero;
  const kpis = UI_COPY[lang].kpis;

  return (
    <section id="top" className="relative bg-[#091326] text-white arch-grid-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        {/* Sub-bar: Unboxed metadata & functional ID/EN segmented switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/projects/kjs_emblem.png"
              alt="Logo CV. Karya Jaya Sinergi"
              referrerPolicy="no-referrer"
              className="h-9 w-auto object-contain rounded-sm"
            />
            <p className="text-xs sm:text-sm text-slate-300 tracking-wide">
              {t.meta}
            </p>
          </div>

          <div
            className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-lg"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => onChangeLang('id')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                lang === 'id'
                  ? 'bg-[#D4A438] text-[#091326]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                lang === 'en'
                  ? 'bg-[#D4A438] text-[#091326]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Main 2-column split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pt-10 lg:pt-14 pb-12">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1
                className="font-display font-bold tracking-tight text-white text-balance leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                {t.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t.subheadline}
              </p>

              {/* Primary CTA + Secondary PDF Download */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#091326] bg-[#D4A438] hover:bg-[#E2B44B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{t.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white border border-white/15 hover:border-[#D4A438]/60 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A438]"
                >
                  <FileDown className="w-4 h-4 text-[#D4A438]" />
                  <span>{t.secondaryCta}</span>
                </a>
              </div>
            </div>

            {/* Clean inline system discipline summary */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300">
              <span>MDP</span>
              <span aria-hidden="true" className="text-[#D4A438]">·</span>
              <span>SDP</span>
              <span aria-hidden="true" className="text-[#D4A438]">·</span>
              <span>MCC</span>
              <span aria-hidden="true" className="text-[#D4A438]">·</span>
              <span>CAP BANK</span>
              <span aria-hidden="true" className="text-[#D4A438]">·</span>
              <span>PLC &amp; HMI</span>
              <span aria-hidden="true" className="text-[#D4A438]">·</span>
              <span>INVERTER VSD</span>
            </div>
          </div>

          {/* Right Media Column: Full-height workshop panel photograph */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[340px] lg:min-h-[460px] rounded-xl overflow-hidden border border-white/15 bg-[#0E1B36]">
              <SafeImage
                src="/assets/projects/panel_kontrol_workshop.jpg"
                alt={t.captionTitle}
                fallbackTitle={t.captionTitle}
                className="w-full h-full lg:absolute lg:inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091326]/90 via-[#091326]/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <p className="text-sm font-semibold text-white">{t.captionTitle}</p>
                <p className="mt-1 text-xs text-slate-300">{t.captionMeta}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip below hero split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15 pt-8 gap-6 lg:gap-8">
          {kpis.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#D4A438] tabular-nums">
                {item.value}
              </p>
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="text-xs font-mono text-slate-400 tabular-nums">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
