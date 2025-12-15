import React from 'react';
import { Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 px-6 bg-white w-full"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]">
                Chi<br />
                <span className="text-brand-yellow">Sono</span>
              </h2>
              <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
              <p className="text-deep-black text-xl border-l-4 border-brand-yellow pl-6">
                Ho gestito budget marketing superiori a 1M€ generando oltre 15.000 lead qualificati per aziende come Wave Murano Glass, Store Cucine e Il Fanale Group.
              </p>
              <p className="pl-6">
                La mia expertise spazia dalla strategia di posizionamento alla gestione operativa di campagne <span className="bg-brand-yellow/30 px-1">Google Ads, Meta e TikTok</span>, con focus costante sul ROI e sulla crescita sostenibile del business.
              </p>
              <p className="pl-6">
                La mia formazione classica e la laurea in Marketing e Comunicazione mi hanno fornito <span className="bg-brand-yellow/30 px-1">visione strategica e capacità analitica</span>, competenze che applico quotidianamente nella gestione di progetti complessi e team multidisciplinari.
              </p>
              <p className="pl-6">
                Esploratore di nuovi mondi e differenti culture, ho vissuto in Australia, viaggiato e studiato in contesti di respiro internazionale come la Venice International University. Questa apertura mentale mi permette di approcciare progetti con prospettiva globale.
              </p>
              <p className="pl-6">
                In ambito professionale ho ricoperto diversi ruoli nel Marketing per aziende del settore <span className="font-bold text-deep-black">luxury, retail e manifattura</span>, arrivando negli ultimi 8 anni a gestire tutte le attività di Comunicazione Aziendale come Marketing Manager.
              </p>
            </div>

            <div className="pt-8 pl-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/albertopasinati/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-sm font-bold hover:bg-[#006399] hover:shadow-xl active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0077b5]/50"
              >
                <Linkedin
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;