import React from 'react';
import { methodDescription, methodSteps } from '../data/method';
import { useInView } from '../hooks/useInView';

const Method: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="metodo"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 px-6 bg-off-white w-full"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]">
              Il<br />
              <span className="text-brand-yellow">Metodo</span>
            </h2>
            <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-l-4 border-brand-yellow pl-6">
              {methodDescription}
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-sm overflow-hidden">
          {methodSteps.map((step, i) => (
            <li key={step.name} className="bg-off-white p-6 md:p-8 flex flex-col">
              <span className="font-mono text-xs text-brand-terracotta uppercase tracking-widest mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-black text-xl md:text-2xl uppercase leading-tight text-deep-black mb-3">
                {step.name}
              </h3>
              <p className="text-base text-stone-700 leading-snug">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Method;
