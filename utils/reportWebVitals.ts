import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

/**
 * Invia le metriche Web Vitals a Google Analytics 4
 *
 * Metriche tracciate:
 * - LCP (Largest Contentful Paint): Tempo di caricamento del contenuto principale
 * - INP (Interaction to Next Paint): Reattività alle interazioni utente
 * - CLS (Cumulative Layout Shift): Stabilità visiva della pagina
 * - FCP (First Contentful Paint): Tempo di rendering del primo contenuto
 * - TTFB (Time to First Byte): Tempo di risposta del server
 */
function sendToGoogleAnalytics({ name, delta, rating, id }: Metric) {
  // Verifica che gtag sia disponibile (Analytics caricato)
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta), // CLS in millisecondi
      event_label: id,
      non_interaction: true,
      metric_rating: rating, // 'good', 'needs-improvement', 'poor'
    });
  }
}

/**
 * Inizializza il tracking dei Web Vitals
 * Chiama questa funzione una volta all'avvio dell'app
 */
export function reportWebVitals() {
  // Traccia tutte le metriche Core Web Vitals
  onCLS(sendToGoogleAnalytics);
  onINP(sendToGoogleAnalytics);
  onLCP(sendToGoogleAnalytics);

  // Metriche supplementari
  onFCP(sendToGoogleAnalytics);
  onTTFB(sendToGoogleAnalytics);
}

// Estendi il tipo Window per includere gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}
