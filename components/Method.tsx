import React from 'react';
import { methodDescription, methodSteps } from '../data/method';
import SectionTitle from './SectionTitle';

const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-16 md:py-20 px-6 bg-off-white w-full">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <SectionTitle top="Il" accent="Metodo" />
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
              {methodDescription}
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-deep-black/20 border-y border-deep-black/20">
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
