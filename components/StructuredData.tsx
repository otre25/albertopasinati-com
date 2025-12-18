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

    // LocalBusiness Schema - Ottimizzato per Local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Alberto Pasinati - Full Stack Marketer",
      "alternateName": "Alberto Pasinati Marketing Consulting",
      "description": "Consulente marketing digitale e Full Stack Marketer specializzato in strategie SEO, SEM, Google Ads, Meta Ads e marketing automation per PMI e brand del lusso. Servizi di digital marketing a Venezia e in tutta Italia.",
      "url": "https://albertopasinati.com",
      "logo": "https://albertopasinati.com/alberto-portrait.png",
      "image": [
        "https://albertopasinati.com/alberto-portrait.png",
        "https://albertopasinati.com/alberto-hero-v2.webp"
      ],
      "telephone": "+39-XXX-XXXXXXX", // Aggiorna con il tuo numero
      "email": "alberto.pasinati@gmail.com",
      "priceRange": "$$-$$$",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, PayPal",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Venezia", // Aggiorna con indirizzo specifico se pubblico
        "addressLocality": "Venezia",
        "addressRegion": "Veneto",
        "postalCode": "30100",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.4408",
        "longitude": "12.3155"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Venezia",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Veneto"
          }
        },
        {
          "@type": "City",
          "name": "Mestre"
        },
        {
          "@type": "City",
          "name": "Padova"
        },
        {
          "@type": "City",
          "name": "Treviso"
        },
        {
          "@type": "City",
          "name": "Verona"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Veneto"
        },
        {
          "@type": "Country",
          "name": "Italia"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di Marketing Digitale",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consulenza Strategica Marketing",
              "description": "Pianificazione strategica di marketing digitale per PMI e brand del lusso"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gestione Campagne Google Ads",
              "description": "Setup, ottimizzazione e gestione campagne Google Ads per massimizzare il ROI"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Meta Ads Management",
              "description": "Gestione professionale campagne Facebook e Instagram Ads"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO e Ottimizzazione E-commerce",
              "description": "Ottimizzazione SEO on-page, off-page e tecnica per e-commerce e siti aziendali"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Automation",
              "description": "Setup e gestione sistemi di marketing automation, CRM e lead nurturing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Strategy per Luxury",
              "description": "Consulenza strategica di brand positioning per marchi del lusso e artigianato"
            }
          }
        ]
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "15",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.linkedin.com/in/albertopasinati/",
        "https://github.com/otre25",
        "https://albertopasinati.com"
      ],
      "founder": {
        "@type": "Person",
        "name": "Alberto Pasinati",
        "jobTitle": "Full Stack Marketer",
        "url": "https://albertopasinati.com"
      },
      "slogan": "Marketing strategico data-driven per far crescere il tuo business",
      "knowsAbout": [
        "Digital Marketing",
        "Performance Marketing",
        "Google Ads",
        "Meta Ads",
        "Marketing Automation",
        "SEO",
        "SEM",
        "E-Commerce Marketing",
        "Luxury Brand Marketing",
        "CRM",
        "Lead Generation",
        "Growth Marketing",
        "Analytics",
        "Conversion Rate Optimization"
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
        },
        {
          "@type": "Question",
          "name": "Perché scegliere un consulente marketing a Venezia e nel Veneto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scegliere un consulente marketing locale a Venezia e nel Veneto offre vantaggi concreti: conoscenza approfondita del territorio e delle dinamiche del mercato locale, possibilità di incontri in presenza per strategie complesse, comprensione delle specificità del settore lusso e artigianato veneziano, e network di contatti nel territorio veneto. Alberto Pasinati opera principalmente a Venezia, Mestre, Padova, Treviso e Verona, con disponibilità a incontri presso la sede del cliente in tutto il Veneto."
          }
        },
        {
          "@type": "Question",
          "name": "Come contattare Alberto Pasinati per una consulenza marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puoi contattare Alberto Pasinati per una consulenza marketing tramite il form di contatto sul sito albertopasinati.com, via email a alberto.pasinati@gmail.com, o tramite LinkedIn. Il primo incontro conoscitivo è sempre gratuito e può essere svolto in presenza a Venezia o online via Google Meet. Durante il primo incontro verranno analizzate le tue esigenze di business e proposta una strategia marketing personalizzata."
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
    updateStructuredData('schema-localbusiness', localBusinessSchema);
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
