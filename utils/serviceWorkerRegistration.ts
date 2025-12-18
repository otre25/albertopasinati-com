// Service Worker Registration
// Gestisce la registrazione, aggiornamenti e notifiche

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
  if ('serviceWorker' in navigator) {
    // Registra il SW dopo che la pagina è caricata
    window.addEventListener('load', () => {
      const swUrl = '/sw.js';

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('[SW] Service Worker registrato con successo:', registration.scope);

          // Controlla aggiornamenti
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }

            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // Nuovo contenuto disponibile
                  console.log('[SW] Nuovo contenuto disponibile. Ricarica per aggiornare.');

                  if (config && config.onUpdate) {
                    config.onUpdate(registration);
                  }
                } else {
                  // Contenuto cachato per uso offline
                  console.log('[SW] Contenuto cachato per uso offline.');

                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          };
        })
        .catch((error) => {
          console.error('[SW] Errore durante la registrazione:', error);
        });

      // Listener per messaggi dal SW
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('[SW] Cache aggiornata');
        }
      });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
        console.log('[SW] Service Worker rimosso');
      })
      .catch((error) => {
        console.error('[SW] Errore durante la rimozione:', error);
      });
  }
}

// Funzione helper per mostrare notifica di aggiornamento
export function showUpdateNotification(registration: ServiceWorkerRegistration) {
  // Potresti usare un toast o modal qui
  const shouldUpdate = window.confirm(
    'Nuova versione disponibile! Ricarica la pagina per aggiornare.'
  );

  if (shouldUpdate) {
    // Forza il nuovo SW ad attivarsi
    const waitingWorker = registration.waiting;
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });

      // Ricarica quando il nuovo SW prende controllo
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }
}
