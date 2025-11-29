import React from 'react';
import { Quote } from 'lucide-react';

const Manifesto: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-white pt-16 md:pt-20 pb-8 relative overflow-hidden mt-auto">

      {/* Quote Section */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 md:mb-20 relative z-10">
        <Quote size={40} className="mx-auto mb-6 md:mb-8 text-brand-yellow opacity-80 md:w-12 md:h-12" />
        <h2 className="text-2xl md:text-5xl font-display font-bold uppercase leading-tight text-white drop-shadow-sm">
          "Experience is the unseen hours, the early mornings, the late nights, everything that happens when no one is watching."
        </h2>
        <div className="mt-6 md:mt-8 font-bold tracking-widest uppercase text-gray-300">
          — Alan Stein Jr <br />
          <span className="text-xs font-normal opacity-70">Raise your Game</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© {currentYear} Alberto Pasinati</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="/#/privacy-policy" className="hover:text-brand-yellow transition-colors uppercase tracking-wider">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-gray-500 font-normal">
          Realizzato da AP+AI
        </div>
      </div>
    </footer>
  );
};

export default Manifesto;