import React, { useState } from 'react';
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
        description: 'Definizione di strategie di marketing data-driven per brand del lusso e PMI innovative. Analisi competitiva, posizionamento, identificazione target audience e roadmap operativa con KPI misurabili e focus sul ROI.',
        icon: LayoutDashboard,
        color: 'orange',
      },
      {
        title: 'Budget Planning & Ottimizzazione ROI',
        description: 'Pianificazione e allocazione budget marketing per massimizzare il ritorno sull\'investimento. Esperienza nella gestione di budget superiori a 1M€/anno con focus su performance marketing e riduzione costi di acquisizione cliente (CAC).',
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
        description: 'Ideazione, implementazione e gestione campagne pubblicitarie Google Ads (Search, Display, Shopping), Meta (Facebook/Instagram), TikTok e LinkedIn Ads. Expertise in advertising offline (OOH, stampa, radio) per brand del lusso.',
        icon: Megaphone,
        color: 'orange',
      },
      {
        title: 'Web Analytics & Business Intelligence',
        description: 'Implementazione e monitoraggio performance attraverso Google Analytics 4, MS Clarity, Yandex Metrica e piattaforme BI personalizzate. Analisi comportamento utenti, conversion funnel optimization, attribution modeling e reportistica avanzata.',
        icon: PieChart,
        color: 'orange',
      },
      {
        title: 'Web Design & Landing Page Optimization',
        description: 'Progettazione e sviluppo siti web ed e-commerce con focus su UX/UI. Esperienza con CMS WordPress, Shopify, WooCommerce e piattaforme no-code (Webflow, Glide). Landing page ottimizzate per lead generation con integrazione CRM e marketing automation.',
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
        description: 'Organizzazione e gestione eventi corporate, inaugurazioni store e partecipazione fiere internazionali (Salone del Mobile Milano, Maison&Objet Parigi, Architect&Work). Coordinamento logistico end-to-end e gestione stakeholder.',
        icon: Calendar,
        color: 'orange',
      },
      {
        title: 'Team Leadership & Project Management',
        description: 'Coordinamento team marketing interni e gestione progetti complessi. Direzione di risorse junior e senior, collaboratori esterni, agenzie creative e fornitori tech. Focus su comunicazione efficace, delega strategica e raggiungimento obiettivi.',
        icon: Users,
        color: 'orange',
      },
      {
        title: 'Gestione Fornitori & Partnership',
        description: 'Negoziazione e gestione rapporti con fornitori, agenzie di comunicazione, partner tecnologici e media. Definizione accordi commerciali, contract management e ottimizzazione costi per massimizzare l\'efficienza operativa.',
        icon: Handshake,
        color: 'orange',
      },
    ],
  },
];

const ServiceRow: React.FC<{
  service: Service;
  globalIndex: number;
  isInView: boolean;
}> = ({ service, globalIndex, isInView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group border-t border-stone-200 last:border-b cursor-pointer"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.5s ease-out ${globalIndex * 0.06}s, transform 0.5s ease-out ${globalIndex * 0.06}s`,
      }}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsOpen(!isOpen); } }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={service.title}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-6 py-5 md:py-6 px-2">
        {/* Icon */}
        <div className="w-10 h-10 shrink-0 rounded-full bg-stone-100 group-hover:bg-brand-yellow flex items-center justify-center transition-all duration-300">
          <service.icon size={18} strokeWidth={1.5} className="text-brand-dark group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="flex-1 text-lg md:text-2xl font-display font-bold uppercase text-brand-dark group-hover:text-brand-yellow transition-colors duration-300 leading-tight">
          {service.title}
        </h3>

        {/* Toggle indicator */}
        <span className="shrink-0 w-8 h-8 flex items-center justify-center text-stone-400 group-hover:text-brand-yellow transition-all duration-300 text-xl font-light">
          {isOpen ? '−' : '+'}
        </span>
      </div>

      {/* Description — slide in */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <p className="pb-6 px-2 pl-16 text-stone-600 leading-relaxed text-sm md:text-base">
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
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]">
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
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{group.tag}</span>
                <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-deep-black">{group.area}</h3>
              </div>

              {/* Service rows */}
              <div className="lg:col-span-9">
                {group.items.map((service) => {
                  const idx = globalIndex++;
                  return (
                    <ServiceRow
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
