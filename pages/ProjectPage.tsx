import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { projectsData } from '../data/projects';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Inject per-project Article schema for AI SEO
  useEffect(() => {
    if (!project) return;
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${project.title} — Caso Studio Marketing`,
      "description": project.metaDescription,
      "url": `https://albertopasinati.com/portfolio/${project.slug}`,
      "image": `https://albertopasinati.com${project.imageUrl}`,
      "datePublished": `${project.year.split('-')[0]}-01-01`,
      "dateModified": new Date().toISOString().split('T')[0],
      "inLanguage": "it-IT",
      "author": {
        "@type": "Person",
        "@id": "https://albertopasinati.com/#person",
        "name": "Alberto Pasinati",
        "url": "https://albertopasinati.com"
      },
      "publisher": {
        "@type": "Person",
        "@id": "https://albertopasinati.com/#person",
        "name": "Alberto Pasinati"
      },
      "about": {
        "@type": "Thing",
        "name": project.category,
        "description": project.description
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": "Alberto Pasinati — Marketing Manager",
        "url": "https://albertopasinati.com"
      }
    };

    let script = document.getElementById('schema-project-article');
    if (!script) {
      script = document.createElement('script');
      script.id = 'schema-project-article';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(articleSchema);

    return () => {
      document.getElementById('schema-project-article')?.remove();
    };
  }, [project]);

  if (!project) {
    navigate('/');
    return null;
  }

  return (
    <>
      <SEO
        title={`${project.title} — Caso Studio | Alberto Pasinati`}
        description={project.metaDescription}
        keywords={`${project.title.toLowerCase()}, ${project.category.toLowerCase()}, marketing manager, caso studio, ${project.services?.slice(0, 3).join(', ').toLowerCase()}`}
        canonicalUrl={`https://albertopasinati.com/portfolio/${project.slug}`}
      />

      <article className="min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-deep-black text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

            {/* Breadcrumb */}
            <nav className="mb-10" aria-label="Breadcrumb">
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-yellow transition-colors text-sm font-bold uppercase tracking-wider"
              >
                <ArrowLeft size={16} />
                Portfolio
              </Link>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                {/* Category + Year */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-white/10 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{project.year}</span>
                </div>

                {/* H1 */}
                <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.85] mb-6">
                  {project.title}
                </h1>
                <div className="h-1 w-24 bg-brand-yellow mb-8"></div>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-brand-yellow text-brand-yellow font-bold text-sm uppercase tracking-wider hover:bg-brand-yellow hover:text-deep-black transition-all duration-300"
                  >
                    Visita il sito live <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Number */}
              <div className="lg:col-span-5 flex lg:justify-end items-start">
                <span className="font-display font-black text-[140px] md:text-[180px] leading-none text-white/5 select-none">
                  {project.number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="bg-stone-100 w-full aspect-[16/7] overflow-hidden">
          <ImageWithSkeleton
            src={project.imageUrl}
            alt={`${project.title} — ${project.category} | Alberto Pasinati Marketing Manager`}
            width={1600}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* KPIs */}
            {project.kpis && project.kpis.length > 0 && (
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                    Risultati & Attività chiave
                  </h2>
                  <ul className="space-y-4">
                    {project.kpis.map((kpi, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brand-yellow font-bold mt-0.5 shrink-0">◆</span>
                        <span className="text-stone-700 font-medium leading-snug">{kpi}</span>
                      </li>
                    ))}
                  </ul>

                  {project.client && (
                    <div className="mt-10 pt-8 border-t border-stone-200">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cliente</p>
                      <p className="font-display font-bold text-xl text-deep-black">{project.client}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Competenze applicate */}
            <div className={project.kpis ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Competenze applicate
              </h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.services?.map((service, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-stone-100 text-stone-700 text-sm font-bold rounded-sm hover:bg-brand-yellow hover:text-deep-black transition-colors duration-200"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Attribution */}
              <div className="border-t border-stone-200 pt-8 mt-4">
                <p className="text-sm text-stone-400">
                  Progetto gestito da{' '}
                  <Link to="/" className="text-brand-yellow font-bold hover:underline">
                    Alberto Pasinati
                  </Link>
                  {' '}— Marketing Manager con 10+ anni di esperienza in brand strategy e performance marketing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-stone-200 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.slug}`}
                className="group flex flex-col gap-1 p-4 hover:bg-white rounded-sm transition-colors"
              >
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-yellow transition-colors">
                  <ArrowLeft size={14} /> Progetto precedente
                </span>
                <span className="font-display font-bold text-xl text-deep-black group-hover:text-brand-yellow transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                to={`/portfolio/${nextProject.slug}`}
                className="group flex flex-col gap-1 p-4 hover:bg-white rounded-sm transition-colors text-right ml-auto w-full"
              >
                <span className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-yellow transition-colors">
                  Progetto successivo <ArrowRight size={14} />
                </span>
                <span className="font-display font-bold text-xl text-deep-black group-hover:text-brand-yellow transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>

      </article>
    </>
  );
};

export default ProjectPage;
