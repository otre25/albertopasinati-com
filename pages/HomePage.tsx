import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsMarquee from '../components/SkillsMarquee';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

// Lazy load componenti sotto fold per migliorare performance iniziale
const Services = lazy(() => import('../components/Services'));
const Projects = lazy(() => import('../components/Projects'));
const PersonalProjects = lazy(() => import('../components/AIArchitecture'));

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
  return (
    <>
      <SEO
        title="Alberto Pasinati | Full Stack Marketer"
        description="Marketing Manager specializzato in strategie digital e offline per brand del lusso e PMI innovative. Oltre 10 anni di esperienza in performance marketing, marketing automation e crescita del fatturato."
        keywords="marketing manager, full stack marketer, digital marketing, performance marketing, marketing automation, brand strategy, SEO, e-commerce, Venice, Venezia, Store Cucine, Wave Murano Glass, Il Fanale"
        ogImage="/alberto-portrait-og.webp"
      />
      <StructuredData />
      <div className="flex flex-col w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="chi-sono">
          <About />
        </section>
        <SkillsMarquee />
        <Suspense fallback={<SectionSkeleton />}>
          <section id="cosa-faccio">
            <Services />
          </section>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <section id="personal">
            <PersonalProjects />
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;