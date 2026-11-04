import React from 'react';
import { methodDescription, methodSteps } from '../data/method';

// Parte della sezione "Come lavoro": le 4 fasi del metodo (stessa fonte dati del HowTo JSON-LD)
const Method: React.FC = () => (
  <div id="metodo" className="mt-16 md:mt-24">
    <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 mb-8 md:mb-10">
      <h3 className="lg:col-span-5 font-display font-black text-4xl md:text-5xl uppercase leading-[0.9] text-deep-black">
        Il Metodo
      </h3>
      <p className="lg:col-span-7 text-lg md:text-xl text-stone-700 leading-relaxed">{methodDescription}</p>
    </div>

    <ol className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-deep-black/20 border-y border-deep-black/20">
      {methodSteps.map((step, i) => (
        <li key={step.name} className="bg-off-white p-6 md:p-8 flex flex-col">
          <span className="font-mono text-xs text-brand-terracotta uppercase tracking-widest mb-4">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h4 className="font-display font-black text-xl md:text-2xl uppercase leading-tight text-deep-black mb-3">
            {step.name}
          </h4>
          <p className="text-base text-stone-700 leading-snug">{step.text}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default Method;
