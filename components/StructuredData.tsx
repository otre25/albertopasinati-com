import React, { useEffect } from 'react';
import { faqItems } from '../data/faq';

const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person Schema — enhanced with mainEntityOfPage and credential
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://albertopasinati.com/#person",
      "name": "Alberto Pasinati",
      "jobTitle": "Marketing Manager",
      "description": "Alberto Pasinati è un Marketing Manager con oltre 10 anni di esperienza nella direzione strategica del marketing per brand del lusso, retail e manifattura italiana. Ha guidato la funzione marketing con responsabilità diretta su strategia, team e budget superiori a €1M/anno, generato oltre 15.000 lead qualificati e scalato brand su mercati EMEA.",
      "url": "https://albertopasinati.com",
      "image": "https://albertopasinati.com/alberto-portrait-og.webp",
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
              "name": "Performance Marketing & Budget Allocation",
              "description": "Definizione del mix di canali, allocazione del budget media e supervisione delle performance su tutti i touchpoint digitali e offline."
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

    // FAQ Schema — stessa fonte (data/faq.ts) della sezione FAQ visibile, così
    // il contenuto in pagina e il markup restano allineati.
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    };

    const updateStructuredData = (id: string, schema: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
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
