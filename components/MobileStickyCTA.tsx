import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenContact: () => void;
}

const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra il bottone dopo 300px di scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <button
        onClick={onOpenContact}
        className="w-full bg-brand-yellow text-deep-black py-4 px-6 font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-deep-black hover:text-brand-yellow transition-all duration-300 active:scale-95"
        aria-label="Apri form di contatto"
      >
        <Mail size={24} />
        Contattami
      </button>
    </div>
  );
};

export default MobileStickyCTA;
