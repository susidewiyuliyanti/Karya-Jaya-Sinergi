import { useState, useEffect } from 'react';
import { ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { Language, ProjectCategory, ProjectItem, PROJECTS, UI_COPY } from '../data/kjsData';
import { SafeImage } from './SafeImage';

interface PortfolioSectionProps {
  lang: Language;
  onDiscussProject: (projectTitle: string) => void;
}

export function PortfolioSection({ lang, onDiscussProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = UI_COPY[lang].portfolio;

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
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

          {/* Functional Segmented Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl"
            role="tablist"
            aria-label="Filter proyek"
          >
            {t.filters.map((filter) => {
              const isActive = activeCategory === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(filter.key)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#C59326] ${
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
        </div>

        {/* Project Archive Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-slate-300"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block w-full aspect-[16/10] bg-[#0B162C] overflow-hidden cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59326]"
                  aria-label={`${t.inspectLabel}: ${project.title[lang]}`}
                >
                  <SafeImage
                    src={project.image}
                    alt={project.title[lang]}
                    fallbackTitle={project.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091326]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#091326]/85 text-white text-xs font-medium backdrop-blur-xs">
                    <ZoomIn className="w-3.5 h-3.5 text-[#D4A438]" />
                    <span>{t.inspectLabel}</span>
                  </span>
                </button>

                <div className="p-6">
                  {/* Zero-pill metadata kicker */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#9A6F14]">{project.categoryLabel[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.subtitle[lang]}</span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-[#0B162C] leading-snug">
                    {project.title[lang]}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 truncate max-w-[65%]">
                  {project.components[0]} · {project.components[1]}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B162C] hover:text-[#9A6F14] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{t.inspectLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Inspection Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#091326]/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2 text-xs text-slate-500 min-w-0">
                <span className="font-semibold text-[#9A6F14] whitespace-nowrap">
                  {selectedProject.categoryLabel[lang]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{selectedProject.subtitle[lang]}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-[#0B162C] hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                aria-label={t.modalClose}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
              <div className="lg:col-span-7 bg-[#091326] rounded-lg overflow-hidden border border-slate-200">
                <SafeImage
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  fallbackTitle={selectedProject.title[lang]}
                  className="w-full h-full max-h-[460px] object-contain mx-auto"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <h3 id="project-modal-title" className="font-display text-2xl font-bold text-[#0B162C]">
                    {selectedProject.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {selectedProject.description[lang]}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {t.modalScope}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-[#0B162C]">
                      {selectedProject.scope[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {t.modalComponents}
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-sm font-mono text-slate-700">
                      {selectedProject.components.map((comp) => (
                        <li key={comp} className="flex items-center gap-2">
                          <span className="text-[#9A6F14]" aria-hidden="true">—</span>
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title[lang];
                      setSelectedProject(null);
                      onDiscussProject(title);
                    }}
                    className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-[#0B162C] hover:bg-[#15284D] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {t.modalCta}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-4 text-sm font-medium text-slate-600 hover:text-[#0B162C] border border-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {t.modalClose}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
