import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Kpi {
  value: number;
  prefix?: string;
  suffix: string;
  unit?: string;
  label: string;
  sublabel: string;
}

const kpis: Kpi[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Anni di Esperienza',
    sublabel: 'nella direzione strategica del marketing a 360°',
  },
  {
    value: 1,
    prefix: '€',
    suffix: 'M+',
    unit: '/anno',
    label: 'Budget Gestito',
    sublabel: 'di spesa pubblicitaria annua pianificata e ottimizzata',
  },
  {
    value: 15,
    suffix: 'K+',
    label: 'Lead Qualificati',
    sublabel: 'generati per clienti B2B e B2C',
  },
  {
    value: 4,
    suffix: '',
    label: 'Brand Guidati',
    sublabel: 'strategie di marketing end-to-end in luxury, retail e manifattura',
  },
];

const useCounter = (target: number, isActive: boolean, duration = 1800) => {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isActive, target, duration]);

  return count;
};

const KpiItem: React.FC<{ kpi: Kpi; isActive: boolean; index: number }> = ({ kpi, isActive, index }) => {
  const count = useCounter(kpi.value, isActive, 1600 + index * 200);

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-10 border-b border-white/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease-out ${index * 0.12}s, transform 0.7s ease-out ${index * 0.12}s`,
      }}
    >
      <div className="font-display font-black text-brand-yellow leading-none mb-3 tabular-nums flex items-end justify-center gap-1">
        <span className="text-5xl md:text-7xl">{kpi.prefix ?? ''}{count}{kpi.suffix}</span>
        {kpi.unit && <span className="text-lg md:text-xl text-brand-yellow/60 mb-1 font-bold">{kpi.unit}</span>}
      </div>
      <div className="text-white font-display font-bold uppercase tracking-wider text-base md:text-lg mb-1">
        {kpi.label}
      </div>
      <div className="text-gray-400 text-xs md:text-sm max-w-[160px] leading-snug">
        {kpi.sublabel}
      </div>
    </div>
  );
};

const KpiStats: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-deep-black py-16 md:py-20 px-6 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="kpi-speakable text-center mb-12">
          <p className="text-brand-yellow font-display font-bold uppercase tracking-[0.25em] text-sm mb-3">
            I numeri parlano
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-tight">
            Risultati <span className="text-brand-yellow">Misurabili</span>
          </h2>
          <div className="h-1 w-16 bg-brand-yellow mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10 rounded-sm overflow-hidden">
          {kpis.map((kpi, index) => (
            <KpiItem key={index} kpi={kpi} isActive={isInView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiStats;
