import React, { useState } from 'react';
import { LayoutDashboard, Coins, Megaphone, PieChart, Monitor, Calendar, Users, Handshake } from 'lucide-react';
import { Service } from '../types';
import { useInView } from '../hooks/useInView';

const servicesData: Service[] = [
  {
    title: 'Marketing Strategy & Posizionamento',
    description: 'Definizione di strategie di marketing data-driven per brand del lusso e PMI innovative. Analisi competitiva, posizionamento, identificazione target audience e roadmap operativa con KPI misurabili e focus sul ROI.',
    icon: LayoutDashboard,
    color: 'orange',
  },
  {
    title: 'Budget Planning & Ottimizzazione ROI',
    description: 'Pianificazione e allocazione budget marketing per massimizzare il ritorno sull\'investimento. Esperienza nella gestione di budget superiori a 1M€ con focus su performance marketing e riduzione costi di acquisizione cliente (CAC).',
    icon: Coins,
    color: 'orange',
  },
  {
    title: 'Performance Marketing Multi-Canale',
    description: 'Ideazione, implementazione e gestione campagne pubblicitarie Google Ads (Search, Display, Shopping), Meta (Facebook/Instagram), TikTok e LinkedIn Ads. Expertise in advertising offline (OOH, stampa, radio) per brand del lusso.',
    icon: Megaphone,
    color: 'orange',
  },
  {
    title: 'Web Analytics & Business Intelligence',
    description: 'Implementazione e monitoraggio performance attraverso Google Analytics 4, MS Clarity, Yandex Metrica e piattaforme BI personalizzate. Analisi comportamento utenti, conversion funnel optimization, attribution modeling e reportistica avanzata per decision-making basato sui dati.',
    icon: PieChart,
    color: 'orange',
  },
  {
    title: 'Web Design & Landing Page Optimization',
    description: 'Progettazione e sviluppo siti web ed e-commerce con focus su UX/UI. Esperienza con CMS WordPress, Shopify, WooCommerce e piattaforme no-code (Webflow, Glide). Realizzazione landing page ottimizzate per lead generation con integrazione CRM, email marketing e marketing automation.',
    icon: Monitor,
    color: 'orange',
  },
  {
    title: 'Event Marketing & Gestione Fiere',
    description: 'Organizzazione e gestione eventi corporate, inaugurazioni store e partecipazione fiere internazionali di settore (Salone del Mobile Milano, Maison&Objet Parigi, Architect&Work). Coordinamento logistico end-to-end e gestione stakeholder.',
    icon: Calendar,
    color: 'orange',
  },
  {
    title: 'Team Leadership & Project Management',
    description: 'Coordinamento team marketing interni e gestione progetti complessi. Esperienza nella direzione di risorse junior e senior, collaboratori esterni, agenzie creative e fornitori tech. Focus su comunicazione efficace, delega strategica, sviluppo competenze e raggiungimento obiettivi.',
    icon: Users,
    color: 'orange',
  },
  {
    title: 'Gestione Fornitori & Partnership',
    description: 'Negoziazione e gestione rapporti con fornitori, agenzie di comunicazione, partner tecnologici e media. Definizione accordi commerciali, contract management e ottimizzazione costi per massimizzare l\'efficienza operativa.',
    icon: Handshake,
    color: 'orange',
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 px-6 bg-off-white w-full relative overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]">
              Di Cosa<br />
              <span className="text-brand-yellow">Mi Occupo</span>
            </h2>
            <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-600 leading-relaxed border-l-4 border-brand-yellow pl-6">
              Competenze end-to-end che spaziano dalla definizione strategica all'esecuzione operativa di campagne marketing integrate. Approccio data-driven con focus costante su performance, ROI e crescita sostenibile del business.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white p-8 rounded-sm transition-all duration-500 border-b-4 border-transparent hover:border-brand-yellow group relative overflow-hidden cursor-pointer"
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
              }}
            >
              {/* Animated background on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-6 text-brand-dark group-hover:bg-brand-yellow group-hover:text-white transition-all duration-500"
                  style={{
                    transform: hoveredIndex === index ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  }}
                >
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-display font-bold mb-3 text-brand-dark uppercase tracking-wide group-hover:text-brand-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center text-xs font-bold group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;