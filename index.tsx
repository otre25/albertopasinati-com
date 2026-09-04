import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import '@fontsource/oswald/400.css';
import '@fontsource/oswald/600.css';
import '@fontsource/oswald/700.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './contexts/ToastContext';
import { reportWebVitals } from './utils/reportWebVitals';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Inizializza il tracking dei Web Vitals (LCP, INP, CLS, FCP, TTFB)
reportWebVitals();

// Registra il Service Worker per PWA (solo in produzione: in dev cachava
// asset stale e rompeva CSS/HMR dopo un reload)
if (import.meta.env.PROD) {
  serviceWorkerRegistration.register({
    onSuccess: () => {
      console.log('[PWA] App pronta per uso offline');
    },
    onUpdate: (registration) => {
      console.log('[PWA] Nuova versione disponibile');
      serviceWorkerRegistration.showUpdateNotification(registration);
    },
  });
}