import React from 'react';
import { Quote, Linkedin, Github } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
          <p>© {currentYear} Alberto Pasinati</p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/otre25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>

          <div className="flex gap-8">
             <a href="/privacy-policy" className="hover:text-brand-yellow transition-colors uppercase tracking-wider">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-500 font-normal">
          Realizzato da AP+AI
        </div>
      </div>
    </footer>
  );
};

export default Manifesto;