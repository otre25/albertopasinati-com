import React, { Suspense, lazy, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import KpiStats from '../components/KpiStats';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { useConversionTracking } from '../hooks/useConversionTracking';

// Lazy load componenti sotto fold per migliorare performance iniziale
const Services = lazy(() => import('../components/Services'));
const Method = lazy(() => import('../components/Method'));
const Projects = lazy(() => import('../components/Projects'));
const Faq = lazy(() => import('../components/Faq'));

// Skeleton loader minimale per Suspense fallback
const SectionSkeleton = () => (
  <div className="py-16 md:py-20 px-6 bg-off-white">
    <div className="max-w-7xl mx-auto">
      <div className="h-12 w-64 bg-gray-200 rounded-sm animate-pulse mb-8"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded-sm animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-sm animate-pulse w-5/6"></div>
        <div className="h-6 bg-gray-200 rounded-sm animate-pulse w-4/6"></div>
      </div>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  // Initialize conversion tracking (scroll depth, time on page)
  useConversionTracking();

  // Arrivo da un'altra pagina con una sezione da raggiungere (es. dal Lab).
  // Le sezioni sotto il fold sono lazy: si riprova finché l'elemento esiste.
  const { state, pathname } = useLocation();
  const navigate = useNavigate();
  const scrollTarget = (state as { scrollTo?: string } | null)?.scrollTo;
  useEffect(() => {
    if (!scrollTarget) return;
    let frame = 0;
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(scrollTarget);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        navigate(pathname, { replace: true, state: null });
      } else if (attempts++ < 120) {
        frame = requestAnimationFrame(tryScroll);
      }
    };
    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, [scrollTarget, pathname, navigate]);

  return (
    <>
      <SEO
        title="Marketing Manager a Venezia | Alberto Pasinati"
        description="Marketing Manager a Venezia con 10+ anni. €1M+/anno gestiti, 15K lead, brand luxury scalati. Specializzato in Google Ads, Meta Ads e strategie di crescita."
        keywords="marketing manager venezia, marketing manager veneto, marketing manager luxury brand, digital marketing manager italia, full stack marketer portfolio, performance marketing manager, brand strategy luxury, marketing manager esperienza, google ads manager, meta ads specialist, marketing manager e-commerce"
        ogImage="/alberto-portrait-og.webp"
      />
      <StructuredData />
      <div className="flex flex-col w-full">
        <section id="home">
          <Hero />
        </section>
        <KpiStats />
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <section id="cosa-faccio">
            <Services />
          </section>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Method />
        </Suspense>
        <section id="chi-sono">
          <About />
        </section>
        <Suspense fallback={<SectionSkeleton />}>
          <Faq />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;