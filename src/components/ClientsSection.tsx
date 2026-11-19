import { CLIENTS, Language, UI_COPY } from '../data/kjsData';

interface ClientsSectionProps {
  lang: Language;
}

export function ClientsSection({ lang }: ClientsSectionProps) {
  const t = UI_COPY[lang].clients;

  return (
    <section id="clients" className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
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

        {/* Clean 3x3 Corporate Client Directory */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {CLIENTS.map((client) => (
            <div
              key={client.index}
              className="p-6 border-r border-b border-slate-200 bg-[#F7F8FA]/50 hover:bg-[#F7F8FA] transition-colors duration-150"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs font-semibold text-[#9A6F14] tabular-nums">
                  {client.index}
                </span>
                <span className="text-xs text-slate-500">
                  {client.sector[lang]}
                </span>
              </div>
              <p className="mt-3 font-display text-base sm:text-lg font-bold text-[#0B162C]">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
