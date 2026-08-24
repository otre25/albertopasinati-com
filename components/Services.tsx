import React from 'react';
import { LayoutDashboard, Coins, Megaphone, PieChart, Monitor, Calendar, Users, Handshake } from 'lucide-react';
import { Service } from '../types';
import { useInView } from '../hooks/useInView';

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
        description: 'Una strategia che parte dai dati del tuo mercato e si traduce in posizionamento chiaro, audience definita e roadmap operativa con KPI misurabili. Ogni decisione è giustificata da un obiettivo di business concreto.',
        icon: LayoutDashboard,
        color: 'orange',
      },
      {
        title: 'Budget Planning & Ottimizzazione ROI',
        description: 'Ogni euro deve lavorare. Gestione di budget superiori a €1M/anno con allocazione ottimale per canale, riduzione del CAC e monitoraggio continuo del ritorno su ogni investimento.',
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
        description: 'Campagne che portano lead qualificati e vendite, non solo click. Google Ads, Meta, TikTok e LinkedIn gestiti con ottimizzazione continua, attribution modeling multi-touch e reportistica trasparente.',
        icon: Megaphone,
        color: 'orange',
      },
      {
        title: 'Web Analytics & Business Intelligence',
        description: 'Trasformo i dati in decisioni. GA4, dashboard BI personalizzate e attribution modeling per avere visibilità completa su ogni canale, ottimizzare il funnel di conversione e giustificare ogni euro investito.',
        icon: PieChart,
        color: 'orange',
      },
      {
        title: 'Digital Presence & Conversion Strategy',
        description: 'La presenza digitale è un asset di business, non un biglietto da visita. Supervisiono e indirizzo la strategia di siti web, landing page e funnel di conversione — con WordPress, Shopify e Webflow — affinché ogni touchpoint trasformi il traffico in opportunità concrete.',
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
        description: 'Presenza fieristica che genera opportunità concrete. Salone del Mobile, Maison&Objet e fiere internazionali gestite end-to-end: dalla logistica alla qualifica dei contatti acquisiti. Ogni evento è un investimento misurabile.',
        icon: Calendar,
        color: 'orange',
      },
      {
        title: 'Team Leadership & Project Management',
        description: 'Un team marketing produce risultati quando è guidato con obiettivi chiari e feedback costante. Esperienza nella direzione di team interni, agenzie creative e fornitori tech con focus su delega strategica e sviluppo competenze.',
        icon: Users,
        color: 'orange',
      },
      {
        title: 'Gestione Fornitori & Partnership',
        description: 'La qualità del risultato finale dipende anche dai partner. Selezione, negoziazione e gestione di agenzie, freelance e fornitori tech per massimizzare qualità, ridurre i costi ed eliminare le inefficienze operative.',
        icon: Handshake,
        color: 'orange',
      },
    ],
  },
];

const ServiceCard: React.FC<{
  service: Service;
  globalIndex: number;
  isInView: boolean;
}> = ({ service, globalIndex, isInView }) => {
  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${globalIndex * 0.06}s, transform 0.5s ease-out ${globalIndex * 0.06}s`,
      }}
    >
      <div className="group h-full bg-white border border-stone-200 hover:border-brand-yellow rounded-sm p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
        <p className="leading-relaxed text-sm text-stone-600">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  let globalIndex = 0;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 px-6 bg-off-white w-full"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <h2
              aria-label="Di cosa mi occupo: Marketing Strategy, Performance Marketing Multi-Canale, Web Analytics, Event Marketing e Team Leadership"
              className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]"
            >
              Di Cosa<br />
              <span className="text-brand-yellow">Mi Occupo</span>
            </h2>
            <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-l-4 border-brand-yellow pl-6">
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
                {group.items.map((service) => {
                  const idx = globalIndex++;
                  return (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      globalIndex={idx}
                      isInView={isInView}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
