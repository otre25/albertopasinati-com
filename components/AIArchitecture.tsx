import React from 'react';
import { BookOpen, BarChart3 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface PersonalProject {
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

const personalProjectsData: PersonalProject[] = [
  {
    title: 'Liberamente: Letture in libertà',
    description: 'Un progetto in cui ho riversato tutto il mio percorso educativo e professionale. Dal nome, frutto dei miei studi classici, alla lettura mia grande passione. Per finire con l\'execution figlia del mio percorso professionale.',
    category: 'Podcast',
    icon: BookOpen,
    imageUrl: '/liberamente-podcast.webp',
    linkUrl: 'https://open.spotify.com/show/41HmxcogbVPNuUh5p3kKSA?si=06cf5de8692e4054',
    linkText: 'Ascolta il podcast'
  },
  {
    title: 'BI Dashboard Retail',
    description: 'Piattaforma di Business Intelligence per l\'analisi delle performance di vendita e marketing nel settore retail. Dashboard interattiva con KPI real-time, grafici dinamici, integrazione API per Meta Ads, Google Ads e TikTok. Progetto open source sviluppato con React 19, TypeScript e Tailwind CSS.',
    category: 'Web Development',
    icon: BarChart3,
    imageUrl: '/dashboard-bi-retail.webp',
    linkUrl: 'https://otre25.github.io/BI-dashboard-retail/',
    linkText: 'Vedi Demo Live'
  }
];

const PersonalProjects: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6 w-full bg-white"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
       <div className="max-w-7xl mx-auto mb-12 text-center">
         <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 text-brand-dark">I miei progetti personali</h2>
         <div className="w-16 h-1 bg-brand-yellow mx-auto"></div>
       </div>

       <div className="max-w-4xl mx-auto space-y-8">
         {personalProjectsData.map((project, index) => (
           <div
             key={index}
             className="bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row"
             style={{
               opacity: isInView ? 1 : 0,
               transform: isInView ? 'translateY(0)' : 'translateY(20px)',
               transition: `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`
             }}
           >
              {/* Visual Side */}
              <div className="w-full md:w-1/2 bg-brand-yellow flex items-center justify-center relative overflow-hidden aspect-video md:aspect-auto md:min-h-[400px]">
                 <img
                   src={project.imageUrl}
                   alt={project.title}
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                 <div className="flex items-center gap-2 text-brand-light font-bold uppercase tracking-wider text-xs md:text-sm mb-3 md:mb-4">
                   <project.icon size={16} /> {project.category}
                 </div>
                 <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">{project.title}</h3>
                 <p className="text-stone-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                   {project.description}
                 </p>
                 <a
                   href={project.linkUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-brand-dark text-white px-6 md:px-8 py-3 font-bold uppercase text-xs md:text-sm w-full md:w-auto text-center hover:bg-brand-yellow hover:text-black active:scale-95 transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                 >
                   {project.linkText}
                 </a>
              </div>
           </div>
         ))}
       </div>
    </section>
  );
};

export default PersonalProjects;