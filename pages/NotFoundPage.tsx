import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Pagina non trovata | Alberto Pasinati"
        description="La pagina che cerchi non esiste. Torna alla home o esplora il portfolio di Alberto Pasinati, Marketing Manager."
        noindex={true}
      />

      <div className="min-h-[calc(100vh-80px)] bg-deep-black flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">

          {/* Big 404 */}
          <div
            className="font-display font-black text-white/5 leading-none select-none"
            style={{ fontSize: 'clamp(140px, 25vw, 280px)' }}
            aria-hidden="true"
          >
            404
          </div>

          {/* Content */}
          <div className="-mt-8 md:-mt-16 relative z-10">
            <div className="h-1 w-20 bg-brand-yellow mb-8" />

            <h1 className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-[0.9] mb-6">
              Pagina<br />
              <span className="text-brand-yellow">Non Trovata</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
              La pagina che cerchi non esiste o è stata spostata.
              Torna alla home per esplorare il portfolio o scoprire chi sono.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-black font-bold uppercase text-sm hover:bg-white transition-colors duration-300"
              >
                <ArrowLeft size={18} />
                Torna alla Home
              </Link>
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase text-sm hover:border-brand-yellow hover:text-brand-yellow transition-colors duration-300"
              >
                Vedi il Portfolio <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
