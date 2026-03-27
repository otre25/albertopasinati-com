import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRipple } from '../hooks/useRipple';
import { trackCTAClick } from './Analytics';
import ImageWithSkeleton from './ImageWithSkeleton';

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
    <section className="relative min-h-[600px] md:min-h-[calc(100vh-80px)] py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient fade on edges */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-transparent to-white pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Text Content */}
        <div className="relative z-10 order-1 lg:order-1">
          {/* Hidden H1 for SEO */}
          <h1 className="sr-only">Alberto Pasinati — Marketing Manager con 10+ anni in Brand Strategy, Performance Marketing e Digital per brand del lusso e retail</h1>

          {/* Visual animated title */}
          <div className="text-6xl md:text-8xl font-display font-black leading-[0.9] uppercase mb-8 min-h-[180px] md:min-h-[240px]" aria-hidden="true">
            <span className="block whitespace-nowrap" key={key}>
              {displayedTitle[0].split('').map((char, index) => (
                <FlipLetter key={`${key}-line1-${index}`} char={char} delay={index * 50} />
              ))}
            </span>
            <span className="text-brand-yellow block whitespace-nowrap" key={`${key}-line2`}>
              {displayedTitle[1].split('').map((char, index) => (
                <FlipLetter key={`${key}-line2-${index}`} char={char} delay={(displayedTitle[0].length + index) * 50} />
              ))}
            </span>
          </div>

          <div className="pl-6 border-l-4 border-brand-dark max-w-md">
            <p className="text-lg text-stone-700 leading-relaxed font-medium">
              Ho guidato la strategia marketing di brand del lusso e retail scalando budget superiori a €1M/anno,
              15.000 lead qualificati e mercati EMEA. Metodo, dati e risultati misurabili.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#portfolio"
              onClick={(e) => {
                createRipple(e);
                trackCTAClick('Scopri i miei progetti', 'Hero Section');
                scrollToPortfolio(e);
              }}
              className="group relative overflow-hidden bg-deep-black text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-brand-yellow hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
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
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/albertopasinati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm font-bold text-stone-500 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 rounded-sm"
            >
              <span>LinkedIn Profile</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
           <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
              {/* Concentric Yellow Semi-Circles with Movement */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Inner semi-circle - bottom right */}
                <div
                  className="absolute w-[85%] h-[85%] rounded-full border-[10px] border-transparent border-r-brand-yellow border-b-brand-yellow opacity-60"
                  style={{ transform: 'rotate(45deg)' }}
                ></div>
                {/* Middle semi-circle - top left */}
                <div
                  className="absolute w-[95%] h-[95%] rounded-full border-[10px] border-transparent border-l-brand-yellow border-t-brand-yellow opacity-45"
                  style={{ transform: 'rotate(-30deg)' }}
                ></div>
                {/* Outer semi-circle - right */}
                <div
                  className="absolute w-[105%] h-[105%] rounded-full border-[10px] border-transparent border-r-brand-yellow opacity-35"
                  style={{ transform: 'rotate(120deg)' }}
                ></div>
              </div>

              {/* Badge Outside Circle - Top Left */}
              <div className="absolute top-8 left-0 bg-white p-4 shadow-lg z-20 max-w-[120px]">
                <p className="font-display font-bold text-3xl md:text-4xl text-deep-black leading-none">10+</p>
                <p className="text-[9px] md:text-[10px] text-deep-black uppercase tracking-wider font-bold mt-1">Anni di esperienza</p>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 bg-gray-200 w-[75%] h-[75%] overflow-hidden rounded-full border-8 border-white shadow-2xl">
                <ImageWithSkeleton
                  src="/alberto-hero-v2.webp"
                  alt="Alberto Pasinati - Marketing Manager e Full Stack Marketer"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  priority
                />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;