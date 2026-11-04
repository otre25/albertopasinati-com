import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRipple } from '../hooks/useRipple';
import { trackCTAClick } from './Analytics';
import ImageWithSkeleton from './ImageWithSkeleton';

const Hero: React.FC = () => {
  const { ripples, createRipple } = useRipple();

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[calc(100vh-80px)] py-12 md:py-16 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">

        {/* Testo */}
        <div className="relative z-10 lg:col-span-7">
          {/* Titolo fisso: una sola identità, "Marketing Manager". Un'unica entrata, poi fermo. */}
          <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.92] uppercase mb-8 md:mb-10">
            <span className="hero-line block"><span>Marketing</span></span>{' '}
            <span className="hero-line block mt-1"><span>
              <span className="bg-brand-yellow px-3 -mx-3 box-decoration-clone">Manager.</span>
            </span></span>
            <span className="sr-only"> — Alberto Pasinati, per brand del lusso e retail</span>
          </h1>

          <p className="hero-speakable text-lg md:text-xl text-stone-700 leading-relaxed max-w-xl border-t border-stone-300 pt-5">
            Ho costruito e gestito la strategia marketing di brand del lusso e retail —
            da €1M+/anno di budget pubblicitario a 15.000 lead qualificati, fino ai mercati EMEA.
            Visione, dati e accountability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#portfolio"
              onClick={(e) => {
                createRipple(e);
                trackCTAClick('Scopri i miei progetti', 'Hero Section');
                scrollToPortfolio(e);
              }}
              className="group relative overflow-hidden bg-deep-black text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-brand-yellow hover:text-black transition-colors duration-300 shadow-lg inline-flex active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/50"
            >
              {ripples.map((ripple) => (
                <span
                  key={ripple.key}
                  className="absolute bg-white/30 rounded-full pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size,
                    animation: 'ripple 0.6s ease-out',
                  }}
                />
              ))}
              <span className="relative z-10">Vedi i casi studio</span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm font-bold text-stone-700 hover:text-brand-amber transition-colors duration-300 flex items-center gap-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/50 rounded-sm"
            >
              <span>LinkedIn Profile</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Ritratto editoriale: cornice sfalsata, francobollo "10+ anni" */}
        <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
          <figure className="w-full max-w-[320px] sm:max-w-sm lg:max-w-md">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-5 md:translate-y-5 border border-deep-black/40 rounded-sm"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
                <ImageWithSkeleton
                  src="/alberto-hero-v2.webp"
                  alt="Alberto Pasinati - Marketing Manager e Full Stack Marketer"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -top-5 -left-3 sm:-left-6 bg-brand-yellow text-deep-black px-4 py-3 z-10">
                <p className="font-display font-black text-4xl leading-none">10+</p>
                <p className="text-xs uppercase tracking-wider font-bold mt-1">Anni di esperienza</p>
              </div>
            </div>
            <figcaption className="mt-10 text-sm text-stone-600">
              Alberto Pasinati · Marketing Manager · Venezia
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
