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
        // Add other social profiles here
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
