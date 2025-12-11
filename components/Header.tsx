import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';
import MobileStickyCTA from './MobileStickyCTA';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'CHI SONO', id: 'chi-sono' },
    { label: 'COSA FACCIO', id: 'cosa-faccio' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'PERSONAL', id: 'personal' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
      isScrolled
        ? 'bg-off-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Scroll to top */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 rounded-sm"
          aria-label="Torna alla home"
        >
          <div className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center font-display font-bold text-xl rounded-sm group-hover:bg-brand-yellow group-hover:text-deep-black transition-colors">
            AP
          </div>
          <span className="hidden md:block font-display font-bold tracking-tight text-xl group-hover:text-brand-yellow transition-colors">
            ALBERTO PASINATI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-sm font-bold tracking-wide transition-colors uppercase hover:text-brand-yellow text-deep-black cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 rounded-sm px-2 py-1"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-brand-yellow text-deep-black px-6 py-2 rounded-sm text-sm font-bold flex items-center gap-2 hover:bg-black hover:text-brand-yellow hover:shadow-lg active:scale-95 transition-all duration-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
            aria-label="Apri form di contatto"
          >
            Contattami <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-deep-black hover:text-brand-yellow transition-colors focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 rounded-sm p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-deep-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-gradient-to-b from-off-white to-white border-b border-gray-200 p-8 flex flex-col space-y-8 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione mobile"
      >
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className="text-4xl font-display font-bold uppercase text-deep-black hover:text-brand-yellow transition-all duration-300 hover:translate-x-2 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 rounded-sm"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
            }}
          >
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              {item.label}
            </span>
          </a>
        ))}
        <button
          onClick={() => {
            setIsContactModalOpen(true);
            setIsOpen(false);
          }}
          className="bg-deep-black text-brand-yellow px-8 py-5 rounded-sm text-lg font-bold w-full text-center mt-8 hover:bg-brand-yellow hover:text-deep-black active:scale-95 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease-out ${navItems.length * 0.1 + 0.2}s, transform 0.5s ease-out ${navItems.length * 0.1 + 0.2}s`
          }}
          aria-label="Apri form di contatto"
        >
          Contattami <ArrowUpRight size={18} className="inline-block ml-2" aria-hidden="true" />
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA onOpenContact={() => setIsContactModalOpen(true)} />
    </nav>
  );
};

export default Header;