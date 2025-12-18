import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { useInView } from '../hooks/useInView';
import ImageWithSkeleton from './ImageWithSkeleton';
import ProjectsStructuredData from './ProjectsStructuredData';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Store Cucine',
    category: 'Marketing Management B2C',
    imageUrl: '/kitchen.webp',
    year: '2018-2023',
    number: '01',
    description: 'Marketing Manager per Store Cucine, retailer nel settore cucine componibili e arredamento contract con 20 negozi in Italia. Gestione strategia marketing omnicanale con focus su digital advertising e lead generation.',
    client: 'Store Cucine',
    services: ['Marketing Strategy & Planning', 'Digital Advertising (Google Ads, Meta)', 'Lead Generation & CRM', 'Event Marketing', 'Team Coordination'],
    mockupUrl: '/kitchen.webp'
  },
  {
    id: '2',
    title: 'Wave Murano Glass',
    category: 'Marketing Management B2B2C',
    imageUrl: '/murano-glass.webp',
    year: '2023-2024',
    number: '02',
    description: 'Direzione Marketing per Wave Murano Glass, brand dell\'artigianato vetrario veneziano con distribuzione internazionale. Sviluppo strategia di posizionamento sui mercati EMEA, gestione eventi fieristici di alto profilo e campagne digital multi-lingua.',
    client: 'Wave Murano Glass',
    services: ['International Marketing Strategy', 'Event Marketing & Trade Shows', 'Digital Communication Multi-language', 'Brand Positioning Luxury', 'SEO Internazionale', 'Partnership Management'],
    mockupUrl: '/murano-glass.webp'
  },
  {
    id: '3',
    title: 'Il Fanale Group',
    category: 'Marketing Management B2B',
    imageUrl: '/lighting-design.webp',
    year: '2015-2017',
    number: '03',
    description: 'Marketing Management per Il Fanale Group, azienda nel settore illuminazione di design e forniture contract. Pianificazione strategica annuale, coordinamento partecipazione Salone del Mobile Milano e gestione campagne marketing B2B per network dealer nazionali e internazionali.',
    client: 'Il Fanale Group',
    services: ['Marketing Strategy B2B', 'Trade Fair Management (Salone del Mobile)', 'CRM Implementation & Automation', 'Dealer Network Communication', 'Content Marketing & Video Production', 'Budget Management'],
    mockupUrl: '/lighting-design.webp'
  },
  {
    id: '4',
    title: 'Atelier Alessandra',
    category: 'Brand Identity & E-Commerce',
    imageUrl: '/Alessandra-Atelier-original-Murano-glass-jewels.webp',
    year: '2022',
    number: '04',
    description: 'Progetto completo di rebranding e lancio e-commerce per Atelier Alessandra, brand di gioielli da donna in vetro di Murano. Sviluppo brand identity, realizzazione e-commerce Shopify con focus UX/UI, strategia SEO on-page.',
    client: 'Atelier Alessandra',
    services: ['Brand Identity Design', 'E-Commerce Development (Shopify)', 'UX/UI Design', 'SEO Strategy', 'Performance Marketing (Meta + Google Shopping)', 'Email Marketing Automation', 'Social Media Strategy'],
    websiteUrl: 'https://alessandratelier.it/',
    mockupUrl: '/Alessandra-Atelier-original-Murano-glass-jewels.webp'
  }
];

const brands = [
  "Wave Murano Glass",
  "Store Cucine",
  "Il Fanale Group",
  "Piovan",
  "Valcucine",
  "Università Cà Foscari",
  "Lago"
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const experienceView = useInView({ threshold: 0.15 });
  const portfolioView = useInView({ threshold: 0.1 });

  const currentProjectIndex = selectedProject
    ? projectsData.findIndex(p => p.id === selectedProject.id)
    : -1;

  const handleNext = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      setSelectedProject(projectsData[currentProjectIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(projectsData[currentProjectIndex - 1]);
    }
  };

  return (
    <>
      {/* Structured Data for Projects */}
      <ProjectsStructuredData projects={projectsData} />

      {/* La Mia Esperienza Section - White Background */}
      <section
        ref={experienceView.ref as React.RefObject<HTMLElement>}
        className="py-16 md:py-20 bg-white"
        style={{
          opacity: experienceView.isInView ? 1 : 0,
          transform: experienceView.isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-4">
                <h3 className="text-5xl md:text-6xl font-display font-black uppercase leading-[0.85]">
                  La Mia<br />
                  <span className="text-brand-yellow">Esperienza</span>
                </h3>
                <div className="h-2 w-20 bg-brand-yellow mt-4 md:mt-6"></div>
              </div>
              <div className="lg:col-span-8 flex items-center">
                <p className="text-lg text-stone-700 leading-relaxed border-l-4 border-brand-yellow pl-6">
                  Ho lavorato con aziende del lusso, retail e artigianato veneziano, gestendo strategie di marketing integrate
                  e progetti di comunicazione a 360°.
                </p>
              </div>
            </div>
          </div>

          {/* Infinite scrolling brands */}
          <div className="relative py-6 md:py-8">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="mx-8 md:mx-12 text-3xl md:text-6xl font-display font-black text-stone-300 hover:text-brand-yellow transition-colors duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archivio Progetti Section - Off-White Background */}
      <section
        id="portfolio"
        ref={portfolioView.ref as React.RefObject<HTMLElement>}
        className="py-16 md:py-20 bg-off-white min-h-screen"
        style={{
          opacity: portfolioView.isInView ? 1 : 0,
          transform: portfolioView.isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="px-6">
          <div className="max-w-7xl mx-auto mb-10 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between">
            <div>
              <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] text-deep-black">
                Archivio <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">Progetti</span>
              </h2>
            </div>
            <div className="text-right mt-6 md:mt-0 font-mono text-sm text-gray-500">
              STRATEGIA & <br /> CREATIVITÀ APPLICATA
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16">
            {projectsData.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-4 rounded-sm"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Apri dettagli progetto ${project.title}`}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4 rounded-sm">
                  <ImageWithSkeleton
                    src={project.imageUrl}
                    alt={`${project.title} - ${project.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Icon */}
                  <div className="absolute bottom-6 right-6 bg-brand-yellow text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="flex justify-between items-start border-t-2 border-transparent group-hover:border-brand-yellow pt-4 transition-colors">
                  <div>
                    <h3 className="text-3xl font-display font-bold uppercase mb-1">{project.title}</h3>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">{project.category}</p>
                  </div>
                  <span className="font-display font-bold text-gray-300 text-2xl group-hover:text-brand-dark transition-colors">
                    {project.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={currentProjectIndex < projectsData.length - 1}
          hasPrev={currentProjectIndex > 0}
        />
      )}
    </>
  );
};

export default Projects;
