import { useState, useEffect, FormEvent } from 'react';
import { CheckCircle2, FileDown, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, Language, UI_COPY } from '../data/kjsData';

interface ContactSectionProps {
  lang: Language;
  preselectedSystem: string;
  preselectedNotes: string;
}

const SYSTEM_OPTIONS = [
  'MDP — Main Distribution Panel',
  'SDP — Sub Distribution Panel',
  'MCC — Motor Control Center',
  'CAP BANK — Capacitor Bank',
  'PLC & HMI Automation System',
  'INVERTER / VSD Drive Panel',
  'Panel Pompa Hidrant / Banjir',
  'Instalasi Gedung & Cable Tray',
  'Desain AutoCAD & Custom Panel',
];

export function ContactSection({ lang, preselectedSystem, preselectedNotes }: ContactSectionProps) {
  const t = UI_COPY[lang].contact;

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [system, setSystem] = useState(SYSTEM_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    if (preselectedSystem) {
      const matched = SYSTEM_OPTIONS.find((opt) =>
        opt.toUpperCase().includes(preselectedSystem.toUpperCase())
      );
      if (matched) {
        setSystem(matched);
      }
    }
  }, [preselectedSystem]);

  useEffect(() => {
    if (preselectedNotes) {
      setNotes(preselectedNotes);
    }
  }, [preselectedNotes]);

  const buildSummaryText = () => {
    const lines = [
      `Halo CV. Karya Jaya Sinergi,`,
      `Saya ingin mengajukan permintaan penawaran teknis (RFQ):`,
      `- Nama / PIC: ${name.trim()}`,
      `- Perusahaan: ${company.trim()}`,
      phone.trim() ? `- No. Telp / WA: ${phone.trim()}` : '',
      email.trim() ? `- Email: ${email.trim()}` : '',
      `- Sistem yang Dibutuhkan: ${system}`,
      notes.trim() ? `- Catatan Spesifikasi: ${notes.trim()}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const hasValidEmail = email.trim().length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const hasContact = phone.trim().length >= 7 || (email.trim().length > 0 && hasValidEmail);

    if (!name.trim() || !company.trim() || !hasContact || !hasValidEmail) {
      setError(t.validationError);
      return;
    }

    const msg = buildSummaryText();
    setSubmittedMessage(msg);
  };

  const whatsappHref = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    submittedMessage || buildSummaryText()
  )}`;

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `RFQ ${system} - ${company.trim() || 'Calon Mitra'}`
  )}&body=${encodeURIComponent(submittedMessage || buildSummaryText())}`;

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#091326] text-white arch-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Engineering Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#D4A438] uppercase">
                {t.kicker}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                {t.title}
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-5 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#D4A438] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{t.officeLabel}</p>
                  <p className="mt-1 text-slate-300 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#D4A438] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{t.phoneLabel}</p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-mono text-slate-200 hover:text-[#D4A438] transition-colors tabular-nums"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#D4A438] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{t.emailLabel}</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-1 inline-block font-mono text-slate-200 hover:text-[#D4A438] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={COMPANY_INFO.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#D4A438]" />
                <span>{UI_COPY[lang].hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7 bg-white text-[#0B162C] rounded-xl p-6 sm:p-8 border border-slate-200">
            <h3 className="font-display text-xl font-bold text-[#0B162C]">
              {t.formTitle}
            </h3>

            {submittedMessage ? (
              <div className="mt-6 space-y-6">
                <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-900">{t.successTitle}</p>
                    <p className="mt-1 text-sm text-emerald-800">{t.successBody}</p>
                  </div>
                </div>

                <pre className="p-4 rounded-lg bg-[#F7F8FA] border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {submittedMessage}
                </pre>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D4A438]" />
                    <span>{t.submitBtn}</span>
                  </a>

                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B162C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{t.emailBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedMessage('')}
                    className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-[#0B162C] cursor-pointer"
                  >
                    {t.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="rfq-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.nameLabel} *
                    </label>
                    <input
                      id="rfq-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.companyLabel} *
                    </label>
                    <input
                      id="rfq-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t.companyPlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="rfq-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.phoneInputLabel}
                    </label>
                    <input
                      id="rfq-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm font-mono bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.emailInputLabel}
                    </label>
                    <input
                      id="rfq-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="rfq-system" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.systemLabel}
                  </label>
                  <select
                    id="rfq-system"
                    value={system}
                    onChange={(e) => setSystem(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors"
                  >
                    {SYSTEM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="rfq-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.notesLabel}
                  </label>
                  <textarea
                    id="rfq-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F8FA] border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B162C] focus:bg-white transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 px-3.5 py-2.5 rounded-lg" role="alert">
                    {error}
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D4A438]" />
                    <span>{t.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
