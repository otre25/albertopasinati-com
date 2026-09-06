import React from 'react';
import { Plus } from 'lucide-react';
import { faqItems } from '../data/faq';
import { useInView } from '../hooks/useInView';

const Faq: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-20 px-6 bg-white w-full"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85]">
              Domande<br />
              <span className="text-brand-yellow">Frequenti</span>
            </h2>
            <div className="h-2 w-24 bg-brand-yellow mt-6"></div>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl text-stone-700 leading-relaxed border-l-4 border-brand-yellow pl-6">
              Cosa fa un Marketing Manager, come misuro il ROI, in che settori ho
              lavorato e cosa cerco adesso.
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
