import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Alberto Pasinati | Marketing Manager a Venezia',
  description = 'Marketing Manager a Venezia con 10+ anni. €1M+/anno gestiti, 15K lead, brand luxury scalati. Specializzato in Google Ads, Meta Ads e strategie di crescita.',
  keywords = 'marketing manager venezia, consulente marketing venezia, full stack marketer venezia, digital marketing venice, marketing manager mestre, consulente google ads venezia, esperto meta ads veneto, performance marketing venezia, google ads specialist venice, marketing automation venezia, luxury brand marketing venice, e-commerce specialist venezia, SEO specialist veneto, lead generation venezia, consulente marketing padova, marketing strategist treviso, agenzia marketing venezia, consulente digital marketing veneto, marketing manager verona',
  ogImage = '/alberto-portrait-og.webp', // Ottimizzata: 47KB invece di 4.7MB
  ogType = 'website',
  canonicalUrl,
  noindex = false,
}) => {
  const siteUrl = 'https://albertopasinati.com'; // Update with your actual domain
  const fullTitle = title.includes('Alberto Pasinati') ? title : `${title} | Alberto Pasinati`;
  const canonical = canonicalUrl || `${siteUrl}${window.location.pathname}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    // Function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }

      tag.setAttribute('href', href);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:site_name', 'Alberto Pasinati', true);
    updateMetaTag('og:locale', 'it_IT', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);

    // Canonical URL
    updateLinkTag('canonical', canonical);

    // hreflang — dichiara la lingua principale del sito (it-IT)
    const updateHreflang = (hreflang: string, href: string) => {
      const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let tag = document.querySelector(selector) as HTMLLinkElement;
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'alternate');
        tag.setAttribute('hreflang', hreflang);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };
    updateHreflang('it-IT', canonical);
    updateHreflang('it', canonical);
    updateHreflang('x-default', canonical);

    // OG image dimensions + alt
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', fullTitle, true);

    // Additional SEO tags
    updateMetaTag('author', 'Alberto Pasinati');
    updateMetaTag('language', 'Italian');

  }, [fullTitle, description, keywords, ogImage, ogType, canonical, imageUrl, noindex, siteUrl]);

  return null; // This component doesn't render anything
};

export default SEO;
