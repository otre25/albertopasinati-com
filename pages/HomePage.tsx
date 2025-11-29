import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SkillsMarquee from '../components/SkillsMarquee';
import Projects from '../components/Projects';
import PersonalProjects from '../components/AIArchitecture';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Alberto Pasinati | Full Stack Marketer"
        description="Marketing Manager specializzato in strategie digital e offline per brand del lusso e PMI innovative. Oltre 10 anni di esperienza in performance marketing, marketing automation e crescita del fatturato."
        keywords="marketing manager, full stack marketer, digital marketing, performance marketing, marketing automation, brand strategy, SEO, e-commerce, Venice, Venezia, Store Cucine, Wave Murano Glass, Il Fanale"
        ogImage="/alberto-portrait.png"
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
        <section id="cosa-faccio">
          <Services />
        </section>
        <Projects />
        <section id="personal">
          <PersonalProjects />
        </section>
      </div>
    </>
  );
};

export default HomePage;