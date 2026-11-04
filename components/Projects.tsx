import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from './ImageWithSkeleton';
import ProjectsStructuredData from './ProjectsStructuredData';
import { projectsData } from '../data/projects';
import { trackCTAClick } from './Analytics';
import SectionTitle from './SectionTitle';

interface Brand {
  name: string;
  logo: { src: string; width: number; height: number; className: string };
}

// Aziende con cui ho lavorato senza una scheda dedicata. Loghi presi dai siti ufficiali.
const otherBrands: Brand[] = [
  { name: "Piovan", logo: { src: "/logos/piovan.svg", width: 406, height: 100, className: "h-14 md:h-20" } },
  { name: "Valcucine", logo: { src: "/logos/valcucine.png", width: 1130, height: 178, className: "h-6 md:h-8" } },
  { name: "Università Ca' Foscari Venezia", logo: { src: "/logos/ca-foscari.png", width: 121, height: 121, className: "h-14 md:h-[4.5rem]" } },
  { name: "Lago", logo: { src: "/logos/lago.png", width: 200, height: 54, className: "h-7 md:h-9" } },
];

const Projects: React.FC = () => {
  return (
    <>
      {/* Structured Data for Projects */}
      <ProjectsStructuredData projects={projectsData} />

      {/* Esperienza: indice editoriale delle aziende */}
      <section id="portfolio" className="py-16 md:py-24 bg-off-white">
        <div className="px-6">
          <div className="reveal max-w-7xl mx-auto mb-10 md:mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
            <div className="lg:col-span-5">
              <SectionTitle top="La Mia" accent="Esperienza" />
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
                Ho lavorato con aziende del lusso, retail e artigianato veneziano, gestendo strategie di marketing integrate
                e progetti di comunicazione a 360°.
              </p>
            </div>
          </div>

          <ol className="max-w-7xl mx-auto border-b border-deep-black/20">
            {projectsData.map((project) => (
              <li key={project.id} className="reveal border-t border-deep-black/20">
                <Link
                  to={`/portfolio/${project.slug}`}
                  unstable_viewTransition
                  onClick={() => trackCTAClick(project.title, 'Projects Grid')}
                  className="group grid grid-cols-[2.25rem_1fr_4.5rem] sm:grid-cols-[4rem_1fr_9rem] lg:grid-cols-[6rem_1fr_17rem_5rem] gap-x-4 md:gap-x-8 items-start py-6 md:py-8 transition-colors duration-300 hover:bg-paper focus-visible:bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-inset"
                >
                  <span className="font-display font-black text-2xl md:text-5xl text-stone-500 group-hover:text-brand-amber transition-colors tabular-nums">
                    {project.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black uppercase leading-[0.95] transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-stone-600 uppercase tracking-wider mt-2">
                      {project.category} · {project.year}
                    </p>
                    {project.kpis?.[0] && (
                      <p className="mt-3 text-sm md:text-base font-bold text-deep-black">
                        {project.kpis[0]}
                      </p>
                    )}
                  </div>

                  <div
                    className="aspect-[4/3] overflow-hidden rounded-sm bg-stone-200"
                    style={{ viewTransitionName: `project-${project.slug}` }}
                  >
                    <ImageWithSkeleton
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.category}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover saturate-[.6] sepia-[.15] transition-[filter,transform] duration-700 group-hover:saturate-100 group-hover:sepia-0 group-hover:scale-105"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden lg:flex self-center justify-end text-deep-black group-hover:text-brand-amber transition-colors"
                  >
                    <ArrowUpRight size={32} strokeWidth={1.5} />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          {/* Altre aziende, senza pagina di dettaglio: stesso elenco, solo logo */}
          <div className="reveal max-w-7xl mx-auto mt-10 md:mt-14">
            <ul aria-label="Altre aziende con cui ho lavorato" className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-deep-black/15">
              {otherBrands.map((brand) => (
                <li
                  key={brand.name}
                  className="h-24 md:h-28 px-5 md:px-8 flex items-center justify-center border-r border-b border-deep-black/15"
                >
                  <img
                    src={brand.logo.src}
                    alt={brand.name}
                    width={brand.logo.width}
                    height={brand.logo.height}
                    loading="lazy"
                    decoding="async"
                    className={`${brand.logo.className} w-auto max-w-full object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
