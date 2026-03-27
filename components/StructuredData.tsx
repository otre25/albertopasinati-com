import { useEffect } from 'react';

const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person Schema — enhanced with mainEntityOfPage and credential
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://albertopasinati.com/#person",
      "name": "Alberto Pasinati",
      "jobTitle": "Marketing Manager",
      "description": "Alberto Pasinati è un Marketing Manager con oltre 10 anni di esperienza nella direzione strategica del marketing per brand del lusso, retail e manifattura italiana. Ha gestito budget pubblicitari superiori a €1 milione all'anno, generato oltre 15.000 lead qualificati e scalato brand su mercati EMEA.",
      "url": "https://albertopasinati.com",
      "image": "https://albertopasinati.com/alberto-portrait.png",
      "mainEntityOfPage": {
        "@type": "ProfilePage",
        "@id": "https://albertopasinati.com/#profile"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Venezia",
        "addressRegion": "Veneto",
        "addressCountry": "IT"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Università Ca' Foscari Venezia",
        "url": "https://www.unive.it"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Laurea in Marketing e Comunicazione",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Università Ca' Foscari Venezia"
        }
      },
      "knowsAbout": [
        "Marketing Strategy",
        "Digital Marketing",
        "Performance Marketing",
        "Marketing Automation",
        "Brand Strategy",
        "Luxury Brand Marketing",
        "SEO",
        "E-Commerce",
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Web Analytics",
        "Google Analytics 4",
        "Business Intelligence",
        "CRM",
        "HubSpot",
        "Lead Generation",
        "Team Leadership",
        "Budget Planning",
        "Event Marketing",
        "International Trade Shows",
        "Content Strategy"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/albertopasinati/",
        "https://github.com/otre25"
      ]
    };

    // ProfessionalService Schema — corretto per un Marketing Manager (non LocalBusiness)
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Alberto Pasinati — Marketing Manager",
      "description": "Marketing Manager con oltre 10 anni di esperienza nella direzione strategica del marketing a 360°. Expertise in performance marketing, brand strategy luxury, digital advertising e team leadership.",
      "url": "https://albertopasinati.com",
      "image": "https://albertopasinati.com/alberto-hero-v2.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Venezia",
        "addressRegion": "Veneto",
        "addressCountry": "IT"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Veneto" },
        { "@type": "Country", "name": "Italia" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Competenze di Marketing",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Strategy & Posizionamento",
              "description": "Definizione di strategie di marketing data-driven con analisi competitiva, posizionamento e roadmap operativa con KPI misurabili."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Marketing Multi-Canale",
              "description": "Gestione campagne Google Ads, Meta Ads, TikTok e LinkedIn Ads con focus su ROI e ottimizzazione continua."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Strategy per Luxury",
              "description": "Posizionamento premium, eventi fieristici internazionali e comunicazione multi-lingua per mercati EMEA."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Analytics & Business Intelligence",
              "description": "Implementazione GA4, dashboard BI, attribution modeling e reportistica avanzata per decision-making data-driven."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Team Leadership & Project Management",
              "description": "Coordinamento team marketing, gestione agenzie creative e fornitori tech, con focus su obiettivi e sviluppo competenze."
            }
          }
        ]
      },
      "founder": {
        "@type": "Person",
        "name": "Alberto Pasinati",
        "jobTitle": "Marketing Manager",
        "url": "https://albertopasinati.com"
      },
      "sameAs": [
        "https://www.linkedin.com/in/albertopasinati/"
      ]
    };

    // ProfilePage Schema — Google-recommended for personal/about pages (AI SEO)
    const profilePageSchema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": "https://albertopasinati.com/#profile",
      "name": "Alberto Pasinati — Marketing Manager | Portfolio Professionale",
      "url": "https://albertopasinati.com",
      "dateCreated": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "inLanguage": "it-IT",
      "mainEntity": {
        "@id": "https://albertopasinati.com/#person"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-speakable", ".about-speakable", ".kpi-speakable"]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://albertopasinati.com" }
        ]
      }
    };

    // HowTo Schema — il metodo di lavoro (ottimizzato per AI engines)
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Come Alberto Pasinati imposta una strategia di marketing",
      "description": "Il processo in 4 fasi per definire e implementare una strategia marketing data-driven che genera risultati misurabili.",
      "author": { "@id": "https://albertopasinati.com/#person" },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Analisi e Diagnosi",
          "text": "Analisi del mercato, dei competitor e del posizionamento attuale del brand. Identificazione delle opportunità di crescita e dei KPI prioritari."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Strategia e Roadmap",
          "text": "Definizione della strategia di marketing integrata con obiettivi SMART, piano dei canali (digitale e offline), budget allocation e timeline operativa."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Esecuzione Multi-Canale",
          "text": "Gestione operativa di campagne Google Ads, Meta Ads, content marketing, SEO, eventi fieristici internazionali e PR. Coordinamento team interno e agenzie esterne."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Misurazione e Ottimizzazione",
          "text": "Monitoraggio continuo tramite GA4, dashboard BI e report periodici. Ottimizzazione in tempo reale basata sui dati per massimizzare il ROI."
        }
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Alberto Pasinati — Marketing Manager",
      "url": "https://albertopasinati.com",
      "description": "Portfolio e presentazione professionale di Alberto Pasinati, Marketing Manager con oltre 10 anni di esperienza in brand strategy, performance marketing e team leadership.",
      "author": {
        "@type": "Person",
        "name": "Alberto Pasinati"
      },
      "inLanguage": "it-IT"
    };

    // BreadcrumbList Schema
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

    // FAQ Schema — domande da esperto di marketing, non da freelance
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Chi è Alberto Pasinati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati è un Marketing Manager con oltre 10 anni di esperienza nella direzione strategica del marketing per brand del lusso, retail e PMI innovative. Ha gestito budget superiori a €1M/anno, generato oltre 15.000 lead qualificati e guidato la strategia marketing di brand come Wave Murano Glass, Store Cucine e Il Fanale Group."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa significa essere un Full Stack Marketer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un Full Stack Marketer padroneggia l'intera catena del marketing — dalla definizione della strategia di brand alla gestione operativa delle campagne, dall'analisi dei dati alla leadership del team. Non è uno specialista di un singolo canale, ma un professionista che coordina tutti gli asset di marketing verso un obiettivo di business misurabile."
          }
        },
        {
          "@type": "Question",
          "name": "Quali risultati ha ottenuto Alberto Pasinati come Marketing Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nel corso della sua carriera Alberto Pasinati ha gestito budget marketing superiori a €1M/anno, generato oltre 15.000 lead qualificati per clienti B2B e B2C, scalato brand del lusso su mercati internazionali EMEA, coordinato team multidisciplinari e gestito fiere internazionali come il Salone del Mobile di Milano e Maison&Objet di Parigi."
          }
        },
        {
          "@type": "Question",
          "name": "In quali settori ha esperienza Alberto Pasinati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati ha maturato esperienza consolidata nei settori luxury, retail e manifattura di alta gamma. Ha lavorato con brand dell'artigianato veneziano (Wave Murano Glass), del retail cucine (Store Cucine, 20 negozi in Italia), dell'illuminazione di design (Il Fanale Group) e della gioielleria artigianale (Atelier Alessandra)."
          }
        },
        {
          "@type": "Question",
          "name": "Come si misura il ROI di una strategia marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il ROI di una strategia marketing si misura attraverso KPI definiti in fase di pianificazione: costo per lead (CPL), costo di acquisizione cliente (CAC), revenue generata per canale, tasso di conversione e lifetime value del cliente. Alberto Pasinati utilizza Google Analytics 4, piattaforme BI personalizzate e attribution modeling per garantire visibilità completa su ogni euro investito."
          }
        },
        {
          "@type": "Question",
          "name": "Qual è l'approccio di Alberto Pasinati alla strategia di marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati adotta un approccio data-driven e integrato in 4 fasi: analisi di mercato e diagnosi del posizionamento, definizione della strategia e roadmap operativa, esecuzione multi-canale (Google Ads, Meta Ads, SEO, eventi), monitoraggio e ottimizzazione continua con GA4 e dashboard BI. Ogni strategia è costruita intorno agli obiettivi di business, non attorno ai tool."
          }
        },
        {
          "@type": "Question",
          "name": "Alberto Pasinati è disponibile per nuove opportunità?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, Alberto Pasinati è aperto a nuove opportunità professionali come Marketing Manager o Head of Marketing, in particolare per aziende del lusso, retail, manifattura o tech che cercano un professionista con visione strategica a 360° e comprovata capacità di generare risultati misurabili."
          }
        },
        {
          "@type": "Question",
          "name": "Dove si trova Alberto Pasinati e in quali mercati ha operato?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati è basato a Venezia, Veneto, Italia. Ha operato principalmente su mercati italiani ed europei (EMEA), con esperienza in eventi internazionali come il Salone del Mobile di Milano, Maison&Objet di Parigi e fiere di settore B2B. Gestisce strategie marketing sia per il mercato italiano che per l'export."
          }
        },
        {
          "@type": "Question",
          "name": "Quali strumenti usa Alberto Pasinati per il marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alberto Pasinati utilizza un stack completo di strumenti marketing: Google Ads e Google Analytics 4 per il paid search e il tracking, Meta Ads e TikTok Ads per il social advertising, HubSpot per il CRM e la marketing automation, Shopify e WordPress per l'e-commerce, Semrush per la SEO, Microsoft Clarity per l'analisi comportamentale e LinkedIn Ads per il B2B."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa distingue un Marketing Manager da un consulente di marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un Marketing Manager è un professionista interno che guida la strategia di marketing come parte del team di un'azienda, con responsabilità diretta sul budget, sul team e sui risultati di business a lungo termine. Un consulente opera tipicamente su progetti specifici e limitati nel tempo. Alberto Pasinati lavora come Marketing Manager integrando visione strategica, esecuzione operativa e leadership del team."
          }
        }
      ]
    };

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

    // Rimuovi LocalBusiness se presente da versioni precedenti
    const oldLocalBusiness = document.getElementById('schema-localbusiness');
    if (oldLocalBusiness) oldLocalBusiness.remove();

    updateStructuredData('schema-person', personSchema);
    updateStructuredData('schema-profile-page', profilePageSchema);
    updateStructuredData('schema-how-to', howToSchema);
    updateStructuredData('schema-professional-service', professionalServiceSchema);
    updateStructuredData('schema-website', websiteSchema);
    updateStructuredData('schema-breadcrumb', breadcrumbSchema);
    updateStructuredData('schema-faq', faqSchema);
  }, []);

  return null;
};

export default StructuredData;
