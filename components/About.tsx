import React from 'react';
import { Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useSectionTracking } from '../hooks/useConversionTracking';

const About: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const sectionRef = useSectionTracking('chi_sono', 0.5);

  return (
    <section
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
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
              <h2
                aria-label="Chi è Alberto Pasinati — Marketing Manager Senior e Consulente Strategico con oltre 10 anni di esperienza"
                className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]"
              >
                Chi<br />
                <span className="text-brand-yellow">Sono</span>
              </h2>
              <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
              <p className="about-speakable text-deep-black text-xl border-l-4 border-brand-yellow pl-6">
                Ho gestito budget marketing superiori a 1M€ generando oltre 15.000 lead qualificati per aziende come Wave Murano Glass, Store Cucine e Il Fanale Group.
              </p>
              <p className="pl-6">
                Il mio lavoro va dalla definizione della strategia di posizionamento alla gestione operativa delle campagne — <span className="bg-brand-yellow/30 px-1">Google Ads, Meta e TikTok</span> — con un focus costante sul ROI e su ogni euro che entra nel funnel.
              </p>
              <p className="pl-6">
                Laureato in <span className="bg-brand-yellow/30 px-1">Marketing e Comunicazione all'Università Ca' Foscari di Venezia</span>, ho affinato nel tempo un metodo che mette insieme analisi dei dati, intuizione di brand e coordinamento di team.
              </p>
              <p className="pl-6">
                Non gestisco solo campagne: definisco priorità, alloco budget, scelgo i partner giusti e tengo insieme visione e operatività. È questa capacità di muoversi su più livelli che distingue un Marketing Manager da uno specialista di canale.
              </p>
              <p className="pl-6">
                Ho guidato il marketing di brand del settore <span className="font-bold text-deep-black">luxury, retail e manifattura</span> come Marketing Manager a tempo pieno, con responsabilità diretta su strategia, team, budget e risultati misurabili.
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

            {/* Tool Stack */}
            <div className="pt-10 pl-6 border-t border-stone-100 mt-10">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Tool & Piattaforme</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads',
                  'Google Analytics 4', 'Search Console', 'HubSpot', 'Shopify',
                  'WordPress', 'Webflow', 'MS Clarity', 'Semrush',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-bold bg-stone-100 text-stone-600 rounded-sm hover:bg-brand-yellow hover:text-deep-black transition-colors duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;