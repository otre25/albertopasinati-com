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
            <div className="text-lg text-stone-700 leading-relaxed">
              <p className="about-speakable text-deep-black text-xl border-l-4 border-brand-yellow pl-6">
                Ho guidato la funzione marketing di brand del lusso, retail e manifattura italiana — con responsabilità diretta su strategia, team e budget superiori a €1M/anno — portando crescita misurabile su mercati italiani ed europei.
              </p>
              <dl className="mt-8 pl-6 space-y-5">
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-1 items-baseline">
                  <dt className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">Approccio</dt>
                  <dd className="text-base font-medium text-stone-700 leading-snug">
                    Marketing come <span className="font-bold text-deep-black">funzione strategica integrata</span>, non canali da ottimizzare uno per uno.
                  </dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-1 items-baseline">
                  <dt className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">Formazione</dt>
                  <dd className="text-base font-medium text-stone-700 leading-snug">
                    Laurea in Marketing e Comunicazione, <span className="font-bold text-deep-black">Ca' Foscari Venezia</span>.
                  </dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-1 items-baseline">
                  <dt className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">Livello</dt>
                  <dd className="text-base font-medium text-stone-700 leading-snug">
                    Priorità, risorse, partner, team — <span className="font-bold text-deep-black">allineati su obiettivi misurabili</span>.
                  </dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-x-4 gap-y-1 items-baseline">
                  <dt className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">Track record</dt>
                  <dd className="text-base font-medium text-stone-700 leading-snug">
                    <span className="font-bold text-deep-black">Salone del Mobile</span>, <span className="font-bold text-deep-black">Maison&Objet</span>, scaling su mercati EMEA.
                  </dd>
                </div>
              </dl>
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
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Ecosistema tecnologico supervisionato</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Performance Marketing', 'Marketing Automation', 'CRM & Lead Management',
                  'Analytics & Data', 'E-commerce', 'SEO & Content',
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-xs font-bold bg-stone-100 text-stone-600 rounded-sm hover:bg-brand-yellow hover:text-deep-black transition-colors duration-200 cursor-default"
                  >
                    {area}
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