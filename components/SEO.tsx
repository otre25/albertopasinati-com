import { useEffect } from 'react';

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
  title = 'Alberto Pasinati | Full Stack Marketer',
  description = 'Marketing Manager specializzato in strategie digital e offline per brand del lusso e PMI innovative. Oltre 10 anni di esperienza in performance marketing, marketing automation e crescita del fatturato.',
  keywords = 'marketing manager, full stack marketer, digital marketing, performance marketing, marketing automation, brand strategy, SEO, e-commerce, Venice, Venezia',
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

    // Additional SEO tags
    updateMetaTag('author', 'Alberto Pasinati');
    updateMetaTag('language', 'Italian');
    updateMetaTag('revisit-after', '7 days');

  }, [fullTitle, description, keywords, ogImage, ogType, canonical, imageUrl, noindex]);

  return null; // This component doesn't render anything
};

export default SEO;
