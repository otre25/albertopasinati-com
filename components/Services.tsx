import React from 'react';
import { LayoutDashboard, Coins, Megaphone, PieChart, Monitor, Calendar, Users, Handshake } from 'lucide-react';
import { Service } from '../types';

interface ServiceGroup {
  area: string;
  tag: string;
  items: Service[];
}

const serviceGroups: ServiceGroup[] = [
  {
    area: 'Strategia',
    tag: '01',
    items: [
      {
        title: 'Marketing Strategy & Posizionamento',
        description: 'Dati di mercato tradotti in posizionamento chiaro, roadmap e KPI misurabili.',
        icon: LayoutDashboard,
        color: 'orange',
      },
      {
        title: 'Budget Planning & Ottimizzazione ROI',
        description: 'Budget oltre €1M/anno allocati per canale, CAC in calo, ROI sotto controllo.',
        icon: Coins,
        color: 'orange',
      },
    ],
  },
  {
    area: 'Digital & Performance',
    tag: '02',
    items: [
      {
        title: 'Performance Marketing Multi-Canale',
        description: 'Google, Meta, TikTok, LinkedIn: lead qualificati, non solo click.',
        icon: Megaphone,
        color: 'orange',
      },
      {
        title: 'Web Analytics & Business Intelligence',
        description: 'GA4 e dashboard BI su misura: ogni euro giustificato dai dati.',
        icon: PieChart,
        color: 'orange',
      },
      {
        title: 'Digital Presence & Conversion Strategy',
        description: 'Siti, landing page e funnel — WordPress, Shopify, Webflow — che convertono traffico in opportunità.',
        icon: Monitor,
        color: 'orange',
      },
    ],
  },
  {
    area: 'Management',
    tag: '03',
    items: [
      {
        title: 'Event Marketing & Gestione Fiere',
        description: 'Salone del Mobile, Maison&Objet e fiere internazionali gestite end-to-end, dalla logistica ai contatti qualificati.',
        icon: Calendar,
        color: 'orange',
      },
      {
        title: 'Team Leadership & Project Management',
        description: 'Team interni e agenzie, guidati con obiettivi chiari e delega reale.',
        icon: Users,
        color: 'orange',
      },
      {
        title: 'Gestione Fornitori & Partnership',
        description: 'Agenzie, freelance e fornitori tech selezionati e negoziati per qualità e costi sotto controllo.',
        icon: Handshake,
        color: 'orange',
      },
    ],
  },
];

const ServiceCard: React.FC<{
  service: Service;
}> = ({ service }) => {
  return (
    <div className="reveal">
      <div className="group h-full bg-paper border border-stone-200 hover:border-brand-yellow rounded-sm p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-5 bg-stone-100 group-hover:bg-brand-yellow">
          <service.icon
            size={20}
            strokeWidth={1.5}
            className="text-brand-dark transition-colors duration-300 group-hover:text-black"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-3 leading-tight text-brand-dark">
          {service.title}
        </h3>
        <p className="leading-snug text-base font-medium text-stone-700">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-off-white w-full">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <h2
              className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]"
            >
              Di Cosa<br />
              <span className="text-brand-yellow">Mi Occupo</span>
            </h2>
            <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
              Dalla definizione della strategia alla gestione operativa: un approccio a 360° che unisce visione di business, esecuzione data-driven e leadership di team.
            </p>
          </div>
        </div>

        {/* Groups */}
        <div className="space-y-12 md:space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.tag} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">

              {/* Group label — sticky sidebar */}
              <div className="lg:col-span-3 flex lg:flex-col lg:pt-5 items-center lg:items-start gap-3">
                <span className="font-mono text-xs text-brand-terracotta uppercase tracking-widest">{group.tag}</span>
                <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-deep-black">{group.area}</h3>
              </div>

              {/* Service cards — bento grid */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {group.items.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
