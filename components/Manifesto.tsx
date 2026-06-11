import React, { useState } from 'react';
import { Linkedin, Github, ArrowUpRight, MapPin } from 'lucide-react';
import ContactModal from './ContactModal';
import { trackCTAClick } from './Analytics';

const footerNavSections = [
  {
    title: 'Navigazione',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Chi Sono', href: '#chi-sono' },
      { label: 'Cosa Faccio', href: '#cosa-faccio' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Progetti Personali', href: '#personal' },
    ],
  },
  {
    title: 'Servizi',
    links: [
      { label: 'Marketing Strategy', href: '#cosa-faccio' },
      { label: 'Performance Marketing', href: '#cosa-faccio' },
      { label: 'Web Analytics & BI', href: '#cosa-faccio' },
      { label: 'Event Marketing', href: '#cosa-faccio' },
      { label: 'Team Leadership', href: '#cosa-faccio' },
    ],
  },
];

const Manifesto: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-deep-black text-white relative overflow-hidden mt-auto">

      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-brand-yellow font-display font-bold uppercase tracking-[0.2em] text-sm mb-3">
              Aperto a nuove opportunità
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-tight max-w-xl">
              Parliamo di<br />
              <span className="text-brand-yellow">Marketing.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-5 max-w-sm leading-relaxed">
              Marketing Manager con visione strategica e metodo operativo. Disponibile per nuovi ruoli e per parlare di marketing con chi fa le cose sul serio.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => { trackCTAClick('Scrivimi', 'Manifesto Section'); setIsContactModalOpen(true); }}
              className="group inline-flex items-center gap-3 bg-brand-yellow text-deep-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
            >
              Scrivimi
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
            >
              <Linkedin size={16} />
              Connettiti su LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand Column */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-yellow text-deep-black flex items-center justify-center font-display font-bold text-xl">
              AP
            </div>
            <span className="font-display font-bold text-xl tracking-tight">ALBERTO PASINATI</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
            Marketing Manager con oltre 10 anni di esperienza nella definizione e gestione di strategie di marketing integrate per brand del lusso, retail e PMI innovative.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={15} className="text-brand-yellow shrink-0" />
              <span>Venezia, Italia — disponibile remoto</span>
            </div>
          </div>
        </div>

        {/* Nav Columns */}
        {footerNavSections.map((section) => (
          <div key={section.title} className="md:col-span-3">
            <h3 className="font-display font-bold uppercase tracking-wider text-xs text-gray-500 mb-5">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-brand-yellow transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-brand-yellow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Column */}
        <div className="md:col-span-2">
          <h3 className="font-display font-bold uppercase tracking-wider text-xs text-gray-500 mb-5">
            Social
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors duration-200 text-sm group"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="shrink-0" />
              LinkedIn
            </a>
            <a
              href="https://github.com/otre25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors duration-200 text-sm group"
              aria-label="GitHub"
            >
              <Github size={16} className="shrink-0" />
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {currentYear} Alberto Pasinati — Marketing Manager</p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-brand-yellow transition-colors uppercase tracking-wider">
            Privacy Policy
          </a>
        </div>
        <p className="font-mono">Realizzato da AP + AI</p>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};

export default Manifesto;
