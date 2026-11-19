import { COMPANY_INFO, K3_PRINCIPLES, Language, UI_COPY } from '../data/kjsData';

interface AboutSafetySectionProps {
  lang: Language;
}

export function AboutSafetySection({ lang }: AboutSafetySectionProps) {
  const t = UI_COPY[lang].about;

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview & Legal Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-wider text-[#9A6F14] uppercase">
              {t.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B162C] text-balance leading-tight">
              {t.title}
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              {t.body}
            </p>

            {/* Clean Architectural Specs Table */}
            <dl className="mt-8 border-t border-slate-200 divide-y divide-slate-200 text-sm">
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-medium text-slate-500">
                  {lang === 'id' ? 'Badan Usaha' : 'Company Name'}
                </dt>
                <dd className="sm:col-span-2 font-semibold text-[#0B162C]">
                  {COMPANY_INFO.legalName}
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-medium text-slate-500">
                  {lang === 'id' ? 'Bidang Usaha' : 'Line of Business'}
                </dt>
                <dd className="sm:col-span-2 text-slate-700">
                  {COMPANY_INFO.lineOfBusiness[lang]}
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-medium text-slate-500">
                  {lang === 'id' ? 'TDI / Surat Izin' : 'License (TDI)'}
                </dt>
                <dd className="sm:col-span-2 font-mono text-xs sm:text-sm text-[#0B162C] tabular-nums">
                  {COMPANY_INFO.licenseNumber}
                </dd>
              </div>
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-medium text-slate-500">
                  {lang === 'id' ? 'Lokasi Workshop' : 'Facility Location'}
                </dt>
                <dd className="sm:col-span-2 text-slate-700">
                  {COMPANY_INFO.address}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Vision & Mission */}
          <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B162C]">
                01. {t.visionTitle}
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {t.visionBody}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <h3 className="font-display text-lg font-bold text-[#0B162C]">
                02. {t.missionTitle}
              </h3>
              <ol className="mt-4 space-y-3.5">
                {t.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <span className="font-mono text-xs font-semibold text-[#9A6F14] pt-1 tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* HSE / K3 Governance Block */}
        <div className="mt-16 bg-[#0B162C] text-white rounded-xl border border-[#1E3156] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#D4A438] uppercase">
                K3 · HSE Standard
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t.hseHeading}
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              {t.hseNote}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {K3_PRINCIPLES.map((item) => (
              <div key={item.number} className="space-y-2.5">
                <span className="font-mono text-sm font-semibold text-[#D4A438] tabular-nums block">
                  {item.number}.
                </span>
                <h4 className="font-display text-base font-semibold text-white">
                  {item.title[lang]}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
