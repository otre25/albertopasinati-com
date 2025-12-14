import { useEffect } from 'react';

const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alberto Pasinati",
      "jobTitle": "Marketing Manager",
      "description": "Full Stack Marketer specializzato in strategie digital e offline per brand del lusso e PMI innovative",
      "url": "https://albertopasinati.com",
      "image": "https://albertopasinati.com/alberto-portrait.png",
      "email": "alberto.pasinati@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Venice",
        "addressCountry": "IT"
      },
      "alumniOf": {
        "@type": "Organization",
        "name": "Università Ca' Foscari Venezia"
      },
      "knowsAbout": [
        "Digital Marketing",
        "Performance Marketing",
        "Marketing Automation",
        "SEO",
        "E-Commerce",
        "Brand Strategy",
        "Google Ads",
        "Meta Ads",
        "CRM",
        "Lead Generation"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/albertopasinati/",
        "https://github.com/otre25"
      ]
    };

    // Professional Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Alberto Pasinati - Marketing Consulting",
      "description": "Servizi di consulenza marketing strategico, digital advertising, e-commerce, e growth marketing per PMI e brand del lusso",
      "url": "https://albertopasinati.com",
      "image": "https://albertopasinati.com/alberto-portrait.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Venice",
        "addressRegion": "Veneto",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.4408",
        "longitude": "12.3155"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Italy"
        },
        {
          "@type": "Country",
          "name": "Europe"
        }
      ],
      "serviceType": [
        "Marketing Strategy",
        "Digital Advertising",
        "E-Commerce Management",
        "SEO Services",
        "Marketing Automation",
        "Brand Strategy"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Alberto Pasinati - Full Stack Marketer",
      "url": "https://albertopasinati.com",
      "description": "Portfolio e servizi di Alberto Pasinati, Marketing Manager con oltre 10 anni di esperienza",
      "author": {
        "@type": "Person",
        "name": "Alberto Pasinati"
      },
      "inLanguage": "it-IT"
    };

    // BreadcrumbList Schema (for homepage)
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://albertopasinati.com"
        }
      ]
    };

    // FAQ Schema for Voice Search & Rich Snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Chi è Alberto Pasinati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati è un Full Stack Marketer e Marketing Manager con oltre 10 anni di esperienza nel digital marketing. Basato a Venezia, si specializza in strategie di marketing per brand del lusso e PMI innovative, con expertise in Google Ads, Meta Ads, marketing automation e crescita del fatturato."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa fa un Full Stack Marketer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un Full Stack Marketer gestisce l'intera strategia di marketing end-to-end, dalla pianificazione strategica all'esecuzione operativa. Include competenze in digital advertising (Google Ads, Meta Ads), SEO, marketing automation, CRM, e-commerce, analytics e growth marketing. Alberto Pasinati offre un approccio completo che copre sia il marketing strategico che l'implementazione tecnica."
          }
        },
        {
          "@type": "Question",
          "name": "Quali servizi di marketing digitale offre Alberto Pasinati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati offre consulenza strategica di marketing, gestione campagne Google Ads e Meta Ads, SEO e ottimizzazione e-commerce, marketing automation e CRM, brand strategy per luxury brands, lead generation B2B e B2C, e coordinamento team marketing. Ogni progetto viene personalizzato in base agli obiettivi di business del cliente."
          }
        },
        {
          "@type": "Question",
          "name": "Come posso aumentare il fatturato della mia azienda con il digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per aumentare il fatturato è fondamentale combinare strategia e tattica: ottimizzazione del funnel di conversione, campagne di performance marketing mirate (Google Ads e Meta Ads), marketing automation per lead nurturing, SEO per traffico organico qualificato, e data analysis per decisioni data-driven. Alberto Pasinati sviluppa strategie personalizzate basate su analisi approfondita del mercato e degli obiettivi di crescita."
          }
        },
        {
          "@type": "Question",
          "name": "Alberto Pasinati lavora con brand del lusso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, Alberto Pasinati ha esperienza consolidata nel marketing per luxury brands. Ha gestito progetti per Wave Murano Glass (artigianato vetrario veneziano), Il Fanale Group (illuminazione di design), e altri brand del settore lusso e artigianato di alta gamma. La sua expertise include posizionamento premium, eventi fieristici internazionali e comunicazione multi-lingua per mercati EMEA."
          }
        },
        {
          "@type": "Question",
          "name": "Dove opera Alberto Pasinati come consulente marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati è basato a Venezia e opera su tutto il territorio italiano, con particolare focus sul Veneto. Offre anche consulenza in remoto per clienti internazionali, avendo gestito progetti per mercati europei (EMEA) con campagne multi-lingua e strategie di marketing internazionale."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto costa una consulenza di marketing con Alberto Pasinati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'investimento per una consulenza marketing dipende dalla complessità del progetto, dagli obiettivi e dalla durata della collaborazione. Alberto Pasinati offre un primo incontro conoscitivo per analizzare le esigenze specifiche e proporre una soluzione personalizzata. Ogni progetto viene strutturato su misura per massimizzare il ROI in base al budget disponibile."
          }
        }
      ]
    };

    // Create or update script tag for structured data
    const updateStructuredData = (id: string, schema: object) => {
      let script = document.getElementById(id);

      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    };

    // Add all schemas to the page
    updateStructuredData('schema-person', personSchema);
    updateStructuredData('schema-service', serviceSchema);
    updateStructuredData('schema-website', websiteSchema);
    updateStructuredData('schema-breadcrumb', breadcrumbSchema);
    updateStructuredData('schema-faq', faqSchema);

    // Cleanup function
    return () => {
      // Optionally remove schemas on unmount
      // const schemaIds = ['schema-person', 'schema-service', 'schema-website', 'schema-breadcrumb'];
      // schemaIds.forEach(id => {
      //   const script = document.getElementById(id);
      //   if (script) script.remove();
      // });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;
