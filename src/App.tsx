/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSafetySection } from './components/AboutSafetySection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { Language } from './data/kjsData';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [preselectedSystem, setPreselectedSystem] = useState('');
  const [preselectedNotes, setPreselectedNotes] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (systemCode: string) => {
    setPreselectedSystem(systemCode);
    scrollToContact();
  };

  const handleDiscussProject = (projectTitle: string) => {
    const prefix =
      lang === 'id'
        ? `Referensi proyek serupa: ${projectTitle}. Mohon informasi estimasi spesifikasi & penawaran.`
        : `Reference similar project: ${projectTitle}. Please share specification options and quotation details.`;
    setPreselectedNotes(prefix);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#0B162C]">
      <Navbar lang={lang} onRequestQuote={scrollToContact} />
      <main className="flex-1">
        <HeroSection
          lang={lang}
          onChangeLang={setLang}
          onRequestQuote={scrollToContact}
        />
        <AboutSafetySection lang={lang} />
        <ServicesSection lang={lang} onSelectService={handleSelectService} />
        <PortfolioSection lang={lang} onDiscussProject={handleDiscussProject} />
        <ClientsSection lang={lang} />
        <FAQSection
          lang={lang}
          onConsultMaintenance={(topicSummary) => {
            setPreselectedNotes(topicSummary);
            scrollToContact();
          }}
        />
        <ContactSection
          lang={lang}
          preselectedSystem={preselectedSystem}
          preselectedNotes={preselectedNotes}
        />
      </main>
      <Footer lang={lang} onChangeLang={setLang} />
    </div>
  );
}
