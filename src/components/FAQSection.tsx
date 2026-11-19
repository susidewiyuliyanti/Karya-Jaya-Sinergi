import { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { FAQCategory, FAQS, Language, UI_COPY } from '../data/kjsData';

interface FAQSectionProps {
  lang: Language;
  onConsultMaintenance: (topicSummary: string) => void;
}

export function FAQSection({ lang, onConsultMaintenance }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('all');
  const [openId, setOpenId] = useState<string>(FAQS[0].id);
  const t = UI_COPY[lang].faq;

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((item) => item.category === activeCategory);

  const handleFilterChange = (category: FAQCategory) => {
    setActiveCategory(category);
    const nextList = category === 'all' ? FAQS : FAQS.filter((item) => item.category === category);
    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id);
    }
  };

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Context Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#9A6F14] uppercase">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B162C] text-balance leading-tight">
                {t.title}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Functional Topic Filter */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl w-fit"
              role="tablist"
              aria-label="Filter topik FAQ"
            >
              {t.filters.map((filter) => {
                const isActive = activeCategory === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilterChange(filter.key)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#C59326] ${
                      isActive
                        ? 'bg-[#0B162C] text-white'
                        : 'text-slate-600 hover:text-[#0B162C] hover:bg-slate-100'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Direct Maintenance / Audit CTA Block */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 space-y-4">
              <p className="text-sm font-medium text-[#0B162C] leading-relaxed">
                {t.footerPrompt}
              </p>
              <button
                type="button"
                onClick={() =>
                  onConsultMaintenance(
                    lang === 'id'
                      ? 'Permintaan konsultasi Preventive Maintenance panel / troubleshooting PLC & audit K3.'
                      : 'Request consultation for electrical panel preventive maintenance / PLC troubleshooting & HSE audit.'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59326]"
              >
                <span>{t.footerCta}</span>
                <ArrowRight className="w-4 h-4 text-[#D4A438]" />
              </button>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const triggerId = `faq-trigger-${item.id}`;

              return (
                <article
                  key={item.id}
                  className={`bg-white border rounded-xl transition-colors duration-150 ${
                    isOpen ? 'border-[#0B162C]/35' : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59326] rounded-xl"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                          <span className="font-semibold text-[#9A6F14] tabular-nums">
                            {item.number}.
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{item.categoryLabel[lang]}</span>
                        </div>
                        <span className="block font-display text-base sm:text-lg font-bold text-[#0B162C] leading-snug">
                          {item.question[lang]}
                        </span>
                      </div>

                      <span
                        className={`mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors duration-150 ${
                          isOpen
                            ? 'bg-[#0B162C] text-white'
                            : 'bg-[#F7F8FA] text-[#0B162C] border border-slate-200'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="px-6 pb-6 pt-1 border-t border-slate-100"
                    >
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.answer[lang]}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-500">
                        {item.highlights.map((highlight, idx) => (
                          <span key={highlight} className="inline-flex items-center gap-2">
                            {idx > 0 && (
                              <span aria-hidden="true" className="text-[#9A6F14]">
                                ·
                              </span>
                            )}
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
