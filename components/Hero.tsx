import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRipple } from '../hooks/useRipple';
import { trackCTAClick } from './Analytics';

const FlipLetter: React.FC<{ char: string; delay: number }> = ({ char, delay }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, char]);

  // Se è uno spazio, renderizza uno spazio senza animazione
  if (char === ' ') {
    return <span> </span>;
  }

  return (
    <span style={{
      display: 'inline-block',
      perspective: '600px',
    }}>
      <span
        style={{
          display: 'inline-block',
          transformStyle: 'preserve-3d',
          transform: isFlipping ? 'rotateX(0deg)' : 'rotateX(90deg)',
          opacity: isFlipping ? 1 : 0,
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
          transformOrigin: 'center center',
        }}
      >
        {char}
      </span>
    </span>
  );
};

const Hero: React.FC = () => {
  const { ripples, createRipple } = useRipple();
  const titles = [
    ["Full Stack", "Marketer."],
    ["Marketing", "Manager."],
    ["Marketing", "Strategist."]
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState(titles[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setDisplayedTitle(titles[currentTitleIndex]);
    setKey(prev => prev + 1);

    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentTitleIndex]);

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
    <section className="relative min-h-[calc(100vh-80px)] py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">

      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-gray-100 to-transparent -z-10 skew-x-12 opacity-50"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] uppercase mb-8 min-h-[180px] md:min-h-[240px]">
            <span className="block" key={key}>
              {displayedTitle[0].split('').map((char, index) => (
                <FlipLetter key={`${key}-line1-${index}`} char={char} delay={index * 50} />
              ))}
            </span>
            <span className="text-brand-yellow block" key={`${key}-line2`}>
              {displayedTitle[1].split('').map((char, index) => (
                <FlipLetter key={`${key}-line2-${index}`} char={char} delay={(displayedTitle[0].length + index) * 50} />
              ))}
            </span>
          </h1>

          <div className="pl-6 border-l-4 border-brand-dark max-w-md">
            <p className="text-lg text-stone-700 leading-relaxed font-medium">
              Marketing Manager specializzato in strategie digital e offline per brand del lusso e PMI innovative.
              Oltre 10 anni di esperienza in performance marketing, marketing automation e crescita del fatturato.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#portfolio"
              onClick={(e) => {
                createRipple(e);
                trackCTAClick('Scopri i miei progetti', 'Hero Section');
                scrollToPortfolio(e);
              }}
              className="relative overflow-hidden bg-deep-black text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-brand-yellow hover:text-black transition-all duration-300 shadow-lg inline-flex active:scale-95"
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
              <span className="relative z-10">Scopri i miei progetti</span>
              <ArrowRight size={20} className="relative z-10" />
            </a>
          </div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
           <div className="relative w-full max-w-md aspect-square">
              {/* Decorative circle */}
              <div className="absolute top-10 right-10 w-full h-full bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 bg-gray-200 w-full h-full overflow-hidden rounded-full border-8 border-white shadow-2xl">
                <img
                  src="/alberto-hero.jpg"
                  alt="Alberto Pasinati - Marketing Manager e Full Stack Marketer"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-16 bg-white p-6 shadow-xl border-l-4 border-brand-yellow max-w-xs hidden md:block">
                <p className="font-display font-bold text-2xl">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Anni di esperienza</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;