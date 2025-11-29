import React from 'react';
import { BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

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
       <div className="max-w-7xl mx-auto mb-8 text-center">
         <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 text-brand-dark">I miei progetti personali</h2>
         <div className="w-16 h-1 bg-brand-yellow mx-auto"></div>
       </div>

       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row" style={{ maxHeight: '400px' }}>
          {/* Visual Side */}
          <div className="md:w-1/2 bg-brand-yellow flex items-center justify-center relative overflow-hidden" style={{ maxHeight: '400px' }}>
             <img
               src="/liberamente-podcast.jpg"
               alt="Liberamente Podcast"
               className="w-full h-full object-cover"
             />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
             <div className="flex items-center gap-2 text-brand-light font-bold uppercase tracking-wider text-sm mb-4">
               <BookOpen size={16} /> Podcast
             </div>
             <h3 className="text-3xl font-display font-bold mb-4">Liberamente: Letture in libertà</h3>
             <p className="text-stone-700 mb-6 leading-relaxed">
               Un progetto in cui ho riversato tutto il mio percorso educativo e professionale.
               Dal nome, frutto dei miei studi classici, alla lettura mia grande passione.
               Per finire con l'execution figlia del mio percorso professionale.
             </p>
             <a href="https://open.spotify.com/show/41HmxcogbVPNuUh5p3kKSA?si=06cf5de8692e4054" target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-8 py-3 font-bold uppercase text-sm self-start hover:bg-brand-yellow hover:text-black transition-colors inline-block text-center">
               Scopri di più
             </a>
          </div>
       </div>
    </section>
  );
};

export default PersonalProjects;