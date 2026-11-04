import React from 'react';
import SectionTitle from './SectionTitle';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceGroup {
  area: string;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    area: 'Strategia',
    items: [
      {
        title: 'Marketing Strategy & Posizionamento',
        description: 'Dati di mercato tradotti in posizionamento chiaro, roadmap e KPI misurabili.',
      },
      {
        title: 'Budget Planning & Ottimizzazione ROI',
        description: 'Budget oltre €1M/anno allocati per canale, CAC in calo, ROI sotto controllo.',
      },
    ],
  },
  {
    area: 'Digital & Performance',
    items: [
      {
        title: 'Performance Marketing Multi-Canale',
        description: 'Google, Meta, TikTok, LinkedIn: lead qualificati, non solo click.',
      },
      {
        title: 'Web Analytics & Business Intelligence',
        description: 'GA4 e dashboard BI su misura: ogni euro giustificato dai dati.',
      },
      {
        title: 'Digital Presence & Conversion Strategy',
        description: 'Siti, landing page e funnel — WordPress, Shopify, Webflow — che convertono traffico in opportunità.',
      },
    ],
  },
  {
    area: 'Management',
    items: [
      {
        title: 'Event Marketing & Gestione Fiere',
        description: 'Salone del Mobile, Maison&Objet e fiere internazionali gestite end-to-end, dalla logistica ai contatti qualificati.',
      },
      {
        title: 'Team Leadership & Project Management',
        description: 'Team interni e agenzie, guidati con obiettivi chiari e delega reale.',
      },
      {
        title: 'Gestione Fornitori & Partnership',
        description: 'Agenzie, freelance e fornitori tech selezionati e negoziati per qualità e costi sotto controllo.',
      },
    ],
  },
];

const Services: React.FC = () => (
  <section className="py-16 md:py-24 px-6 bg-off-white w-full">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
        <div className="lg:col-span-5">
          <SectionTitle top="Di Cosa" accent="Mi Occupo" />
        </div>
        <div className="lg:col-span-7 flex items-center">
          <p className="text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
            Dalla definizione della strategia alla gestione operativa: un approccio a 360° che unisce visione di business, esecuzione data-driven e leadership di team.
          </p>
        </div>
      </div>

      {/* Aree di lavoro: elenco a righe, stesso linguaggio dell'indice dei casi studio */}
      <div className="space-y-14 md:space-y-20">
        {serviceGroups.map((group) => (
          <div key={group.area} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
            <h3 className="lg:col-span-3 font-display font-black text-2xl md:text-3xl uppercase text-deep-black lg:pt-6">
              {group.area}
            </h3>
            <ul className="lg:col-span-9 border-b border-deep-black/20">
              {group.items.map((service) => (
                <li
                  key={service.title}
                  className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-x-10 gap-y-2 py-6 border-t border-deep-black/20"
                >
                  <h4 className="font-display font-bold text-xl md:text-2xl uppercase leading-tight text-deep-black">
                    {service.title}
                  </h4>
                  <p className="text-base text-stone-700 leading-snug">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
