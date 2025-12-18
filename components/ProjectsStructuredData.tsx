import { useEffect } from 'react';
import { Project } from '../types';

interface ProjectsStructuredDataProps {
  projects: Project[];
}

const ProjectsStructuredData: React.FC<ProjectsStructuredDataProps> = ({ projects }) => {
  useEffect(() => {
    // Generate CreativeWork schema for each project
    const creativeworkListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "@id": `https://albertopasinati.com#project-${project.id}`,
          "name": project.title,
          "headline": project.title,
          "description": project.description || `Progetto di ${project.category} per ${project.client}`,
          "creator": {
            "@type": "Person",
            "name": "Alberto Pasinati",
            "jobTitle": "Full Stack Marketer",
            "url": "https://albertopasinati.com"
          },
          "author": {
            "@type": "Person",
            "name": "Alberto Pasinati"
          },
          "datePublished": project.year.includes('-')
            ? project.year.split('-')[0]
            : project.year,
          "dateModified": project.year.includes('-')
            ? project.year.split('-')[1]
            : project.year,
          "image": `https://albertopasinati.com${project.imageUrl}`,
          "thumbnailUrl": `https://albertopasinati.com${project.imageUrl}`,
          "url": project.websiteUrl || `https://albertopasinati.com#project-${project.id}`,
          "genre": project.category,
          "keywords": [
            project.category,
            "marketing digitale",
            "portfolio",
            ...(project.services || [])
          ].join(', '),
          "about": {
            "@type": "Thing",
            "name": project.category,
            "description": `Servizi di ${project.category.toLowerCase()}`
          },
          "provider": {
            "@type": "Organization",
            "name": project.client || project.title,
            "url": project.websiteUrl
          },
          "workExample": project.services?.map(service => ({
            "@type": "Service",
            "serviceType": service,
            "provider": {
              "@type": "Person",
              "name": "Alberto Pasinati"
            }
          })),
          "isPartOf": {
            "@type": "WebPage",
            "name": "Portfolio Alberto Pasinati",
            "url": "https://albertopasinati.com#portfolio"
          },
          "inLanguage": "it-IT",
          "copyrightHolder": {
            "@type": "Person",
            "name": "Alberto Pasinati"
          },
          "copyrightYear": project.year.includes('-')
            ? project.year.split('-')[0]
            : project.year,
          "license": "https://albertopasinati.com" // Link to terms of use if available
        }
      }))
    };

    // Individual CreativeWork schemas for each project (for better indexing)
    projects.forEach((project) => {
      const creativeworkSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `https://albertopasinati.com#project-${project.id}`,
        "name": project.title,
        "headline": project.title,
        "description": project.description || `Progetto di ${project.category} per ${project.client}`,
        "creator": {
          "@type": "Person",
          "name": "Alberto Pasinati",
          "jobTitle": "Full Stack Marketer",
          "url": "https://albertopasinati.com",
          "sameAs": [
            "https://www.linkedin.com/in/albertopasinati/",
            "https://github.com/otre25"
          ]
        },
        "author": {
          "@type": "Person",
          "name": "Alberto Pasinati",
          "url": "https://albertopasinati.com"
        },
        "datePublished": project.year.includes('-')
          ? `${project.year.split('-')[0]}-01-01`
          : `${project.year}-01-01`,
        "dateModified": project.year.includes('-')
          ? `${project.year.split('-')[1]}-12-31`
          : `${project.year}-12-31`,
        "image": {
          "@type": "ImageObject",
          "url": `https://albertopasinati.com${project.imageUrl}`,
          "caption": `${project.title} - ${project.category}`,
          "description": project.description
        },
        "thumbnailUrl": `https://albertopasinati.com${project.imageUrl}`,
        "url": project.websiteUrl || `https://albertopasinati.com#project-${project.id}`,
        "genre": project.category,
        "keywords": [
          project.category,
          "marketing digitale",
          "digital marketing",
          "portfolio",
          project.client,
          ...(project.services || [])
        ].filter(Boolean).join(', '),
        "about": {
          "@type": "Thing",
          "name": project.category,
          "description": `Progetto di ${project.category.toLowerCase()} realizzato da Alberto Pasinati`
        },
        "provider": {
          "@type": "Organization",
          "name": project.client || project.title,
          "url": project.websiteUrl
        },
        "workExample": project.services?.map(service => ({
          "@type": "Service",
          "serviceType": service,
          "provider": {
            "@type": "Person",
            "name": "Alberto Pasinati",
            "jobTitle": "Full Stack Marketer"
          }
        })),
        "isPartOf": {
          "@type": "WebPage",
          "name": "Portfolio - Alberto Pasinati Full Stack Marketer",
          "url": "https://albertopasinati.com#portfolio",
          "inLanguage": "it-IT"
        },
        "inLanguage": "it-IT",
        "copyrightHolder": {
          "@type": "Person",
          "name": "Alberto Pasinati"
        },
        "copyrightYear": project.year.includes('-')
          ? parseInt(project.year.split('-')[0])
          : parseInt(project.year),
        "aggregateRating": project.client ? {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "1",
          "bestRating": "5",
          "worstRating": "1"
        } : undefined
      };

      // Create or update script tag for this project
      const scriptId = `schema-project-${project.id}`;
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(creativeworkSchema);
    });

    // Add ItemList schema
    let itemListScript = document.getElementById('schema-projects-list');
    if (!itemListScript) {
      itemListScript = document.createElement('script');
      itemListScript.id = 'schema-projects-list';
      itemListScript.type = 'application/ld+json';
      document.head.appendChild(itemListScript);
    }
    itemListScript.textContent = JSON.stringify(creativeworkListSchema);

    // Cleanup function
    return () => {
      // Optionally remove schemas on unmount
      // projects.forEach((project) => {
      //   const script = document.getElementById(`schema-project-${project.id}`);
      //   if (script) script.remove();
      // });
      // const listScript = document.getElementById('schema-projects-list');
      // if (listScript) listScript.remove();
    };
  }, [projects]);

  return null; // This component doesn't render anything
};

export default ProjectsStructuredData;
