import { ArrowUpRight } from 'lucide-react';
import { Language, SERVICES, UI_COPY } from '../data/kjsData';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (systemCode: string) => void;
}

export function ServicesSection({ lang, onSelectService }: ServicesSectionProps) {
  const t = UI_COPY[lang].services;

  // Asymmetric 12-column spans to give marquee prominence to MDP and PLC
  const spanMap: Record<string, string> = {
    MDP: 'lg:col-span-7',
    SDP: 'lg:col-span-5',
    MCC: 'lg:col-span-6',
    'CAP BANK': 'lg:col-span-6',
    PLC: 'lg:col-span-7',
    INVERTER: 'lg:col-span-5',
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-[#9A6F14] uppercase">
            {t.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B162C] text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {SERVICES.map((service) => {
            const isFeatured = Boolean(service.featured);
            return (
              <article
                key={service.code}
                className={`${
                  spanMap[service.code] || 'lg:col-span-6'
                } bg-[#F7F8FA] border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-150 hover:border-slate-300`}
              >
                <div className={isFeatured ? 'grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch' : ''}>
                  <div className={isFeatured ? 'md:col-span-7 flex flex-col justify-between' : ''}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="font-semibold text-[#9A6F14] tabular-nums">{service.index}.</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#0B162C]">{service.code}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.subtitle[lang]}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#0B162C]">
                        {service.title[lang]}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {service.description[lang]}
                      </p>
                    </div>

                    <ul className="mt-5 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs font-mono text-slate-600">
                      {service.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <span className="text-[#9A6F14]" aria-hidden="true">—</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isFeatured && (
                    <div className="md:col-span-5 relative min-h-[190px] rounded-lg overflow-hidden border border-slate-200 bg-[#0B162C]">
                      <SafeImage
                        src={service.image}
                        alt={service.title[lang]}
                        fallbackTitle={service.code}
                        className="w-full h-full md:absolute md:inset-0 object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.code)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B162C] hover:text-[#9A6F14] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59326]"
                  >
                    <span>{t.inquireBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
