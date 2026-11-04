import React from 'react';
import SectionTitle from './SectionTitle';
import Method from './Method';

interface ServiceGroup {
  area: string;
  items: string[];
}

const serviceGroups: ServiceGroup[] = [
  {
    area: 'Strategia',
    items: ['Marketing Strategy & Posizionamento', 'Budget Planning & Ottimizzazione ROI'],
  },
  {
    area: 'Digital & Performance',
    items: [
      'Performance Marketing Multi-Canale',
      'Web Analytics & Business Intelligence',
      'Digital Presence & Conversion Strategy',
    ],
  },
  {
    area: 'Management',
    items: [
      'Event Marketing & Gestione Fiere',
      'Team Leadership & Project Management',
      'Gestione Fornitori & Partnership',
    ],
  },
];

// Servizi e metodo in un'unica sezione: cosa faccio (3 aree) e come lo faccio (4 fasi)
const Services: React.FC = () => (
  <section id="cosa-faccio" className="py-16 md:py-24 px-6 bg-off-white w-full">
    <div className="max-w-7xl mx-auto">

      <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="lg:col-span-5">
          <SectionTitle top="Come" accent="Lavoro" />
        </div>
        <div className="lg:col-span-7 flex items-center">
          <p className="text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
            Dalla definizione della strategia alla gestione operativa: un approccio a 360° che unisce visione di business, esecuzione data-driven e leadership di team.
          </p>
        </div>
      </div>

      <ul className="border-b border-deep-black/20">
        {serviceGroups.map((group) => (
          <li
            key={group.area}
            className="reveal grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-x-10 gap-y-3 py-6 md:py-7 border-t border-deep-black/20"
          >
            <h3 className="font-display font-black text-2xl md:text-3xl uppercase leading-tight text-deep-black">
              {group.area}
            </h3>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-1 text-lg text-stone-700 leading-snug">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="before:content-[''] before:inline-block before:size-1.5 before:mr-3 before:align-middle before:bg-brand-terracotta"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <Method />
    </div>
  </section>
);

export default Services;
