import React from 'react';
import { Plus } from 'lucide-react';
import { faqItems } from '../data/faq';
import SectionTitle from './SectionTitle';

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-20 px-6 bg-paper w-full">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <SectionTitle top="Domande" accent="Frequenti" size="md" />
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-t border-stone-300 pt-5">
              Disponibilità, budget gestiti, come misuro i risultati e cosa farei
              nei primi 90 giorni.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="max-w-4xl">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group border-b border-stone-200 py-5 first:border-t"
            >
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-display font-bold text-lg md:text-xl uppercase leading-tight text-deep-black">
                  {item.question}
                </h3>
                <Plus
                  size={22}
                  strokeWidth={2}
                  className="shrink-0 mt-0.5 text-brand-terracotta transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 text-base md:text-lg text-stone-700 leading-relaxed max-w-3xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
