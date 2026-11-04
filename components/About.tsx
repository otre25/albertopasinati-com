import React from 'react';
import { Linkedin } from 'lucide-react';
import { useSectionTracking } from '../hooks/useConversionTracking';
import SectionTitle from './SectionTitle';

const profileRows = [
  {
    label: 'Come lavoro',
    text: <>Marketing come <strong className="font-bold text-deep-black">funzione strategica integrata</strong>, non canali da ottimizzare uno per uno.</>,
  },
  {
    label: 'Formazione',
    text: <>Laurea in Marketing e Comunicazione, <strong className="font-bold text-deep-black">Ca' Foscari Venezia</strong>.</>,
  },
  {
    label: 'Cosa gestisco',
    text: <>Priorità, risorse, partner, team — <strong className="font-bold text-deep-black">allineati su obiettivi misurabili</strong>.</>,
  },
  {
    label: 'Esperienze chiave',
    text: <><strong className="font-bold text-deep-black">Salone del Mobile</strong>, <strong className="font-bold text-deep-black">Maison&Objet</strong>, scaling su mercati EMEA.</>,
  },
];

const toolAreas = [
  'Performance Marketing', 'Marketing Automation', 'CRM & Lead Management',
  'Analytics & Data', 'E-commerce', 'SEO & Content',
];

const About: React.FC = () => {
  const sectionRef = useSectionTracking('chi_sono', 0.5);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 px-6 bg-paper w-full"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        <div className="reveal lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionTitle top="Chi" accent="Sono" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="reveal about-speakable text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-deep-black max-w-3xl">
            Ho guidato la funzione marketing di brand del lusso, retail e manifattura italiana — con responsabilità diretta su strategia, team e budget superiori a €1M/anno — portando crescita misurabile su mercati italiani ed europei.
          </p>

          <dl className="reveal mt-10 md:mt-14 border-b border-deep-black/20">
            {profileRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-1 py-4 border-t border-deep-black/20"
              >
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-terracotta sm:pt-1">{row.label}</dt>
                <dd className="text-base md:text-lg text-stone-700 leading-snug">{row.text}</dd>
              </div>
            ))}
          </dl>

          <div className="pt-8">
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-deep-black text-white rounded-sm font-bold hover:bg-brand-yellow hover:text-deep-black active:scale-95 transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/50"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-deep-black/20">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-4">Ecosistema tecnologico supervisionato</p>
            <ul className="flex flex-wrap gap-2">
              {toolAreas.map((area) => (
                <li
                  key={area}
                  className="px-3 py-1.5 text-xs font-bold bg-stone-100 text-stone-700 rounded-sm hover:bg-brand-yellow hover:text-deep-black transition-colors duration-200 cursor-default"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
