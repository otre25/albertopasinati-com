import React from 'react';
import { createRoot } from 'react-dom/client';
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

// Registra il Service Worker per PWA
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('[PWA] App pronta per uso offline');
  },
  onUpdate: (registration) => {
    console.log('[PWA] Nuova versione disponibile');
    serviceWorkerRegistration.showUpdateNotification(registration);
  },
});