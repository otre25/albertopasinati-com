import React, { useState, useEffect } from 'react';
import { X, Shield, Settings, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieBanner: React.FC = () => {
  const { showToast } = useToast();
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1500);
    } else {
      const savedPrefs = localStorage.getItem('cookiePreferences');
      if (savedPrefs) {
        try {
          setCookiePrefs(JSON.parse(savedPrefs));
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveCookieConsent('accepted', allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveCookieConsent('rejected', onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveCookieConsent('custom', cookiePrefs);
  };

  const saveCookieConsent = (type: string, prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', type);
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    closeBanner();

    // Mostra feedback prima del reload
    showToast('Preferenze cookie salvate con successo', 'success');

    // Ricarica la pagina per inizializzare Analytics con le nuove preferenze
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
      setShowPreferences(false);
    }, 300);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const toggleCookie = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setCookiePrefs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay solo per drawer preferenze */}
      {showPreferences && (
        <div
          className="fixed inset-0 bg-deep-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={closePreferences}
        />
      )}

      {/* Barra bottom compatta */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[65] transition-all duration-500 ease-out ${
          isVisible && !showPreferences ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        role="banner"
        aria-label="Cookie consent banner"
      >
        <div className="bg-white border-t-2 border-brand-yellow shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">

              {/* Icona + Testo compatto */}
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="text-brand-yellow" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Usiamo cookie per migliorare la tua esperienza.{' '}
                    <Link
                      to="/privacy-policy"
                      onClick={closeBanner}
                      className="text-brand-yellow hover:text-brand-dark font-bold underline focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons compatti */}
              <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={openPreferences}
                  className="text-sm px-4 py-2 text-stone-600 hover:text-brand-yellow transition-colors font-bold focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-sm flex items-center gap-1"
                  aria-label="Gestisci preferenze cookie"
                >
                  <Settings size={16} />
                  <span className="hidden sm:inline">Preferenze</span>
                </button>
                <button
                  onClick={handleRejectAll}
                  className="text-sm px-4 py-2 bg-gray-100 text-stone-600 rounded-sm font-bold hover:bg-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 active:scale-95"
                >
                  Rifiuta
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="text-sm px-5 py-2 bg-brand-yellow text-deep-black rounded-sm font-bold hover:bg-deep-black hover:text-brand-yellow transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 active:scale-95"
                >
                  Accetta
                </button>
                <button
                  onClick={closeBanner}
                  className="ml-2 text-stone-700 hover:text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Chiudi banner"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer laterale per preferenze */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-[70] shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          showPreferences ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Gestione preferenze cookie"
      >
        {/* Header drawer */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-yellow to-orange-400 px-6 py-5 flex items-center justify-between border-b border-white/20 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Settings className="text-white" size={20} />
            </div>
            <h3 className="text-white font-display font-bold text-lg uppercase">
              Gestisci Cookie
            </h3>
          </div>
          <button
            onClick={closePreferences}
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Chiudi pannello"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content drawer */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-stone-600 leading-relaxed">
            Personalizza le tue preferenze sui cookie. I cookie necessari sono sempre attivi per garantire il funzionamento del sito.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-3 pt-2">
            <CookieToggle
              title="Cookie Necessari"
              description="Essenziali per il funzionamento del sito. Non possono essere disattivati."
              enabled={cookiePrefs.necessary}
              locked={true}
              onToggle={() => {}}
            />

            <CookieToggle
              title="Cookie Analitici"
              description="Ci aiutano a capire come gli utenti utilizzano il sito per migliorare l'esperienza."
              enabled={cookiePrefs.analytics}
              locked={false}
              onToggle={() => toggleCookie('analytics')}
            />

            <CookieToggle
              title="Cookie di Marketing"
              description="Utilizzati per mostrare annunci pubblicitari pertinenti."
              enabled={cookiePrefs.marketing}
              locked={false}
              onToggle={() => toggleCookie('marketing')}
            />

            <CookieToggle
              title="Cookie di Preferenza"
              description="Ricordano le tue scelte per offrirti un'esperienza personalizzata."
              enabled={cookiePrefs.preferences}
              locked={false}
              onToggle={() => toggleCookie('preferences')}
            />
          </div>

          {/* Info aggiuntiva */}
          <div className="mt-6 p-4 bg-gray-50 rounded-sm border border-gray-200">
            <p className="text-xs text-stone-500 leading-relaxed">
              Puoi modificare queste preferenze in qualsiasi momento. Per maggiori informazioni consulta la nostra{' '}
              <Link
                to="/privacy-policy"
                className="text-brand-yellow hover:text-brand-dark font-bold underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-100 space-y-2">
            <button
              onClick={handleSavePreferences}
              className="w-full bg-brand-yellow text-deep-black px-6 py-3 rounded-sm font-bold hover:bg-deep-black hover:text-brand-yellow transition-all duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 active:scale-95 flex items-center justify-center gap-2"
            >
              <Check size={18} />
              Salva e Chiudi
            </button>
            <button
              onClick={closePreferences}
              className="w-full bg-gray-100 text-stone-600 px-6 py-3 rounded-sm font-bold hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 active:scale-95"
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Componente toggle
interface CookieToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  locked: boolean;
  onToggle: () => void;
}

const CookieToggle: React.FC<CookieToggleProps> = ({ title, description, enabled, locked, onToggle }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-sm border border-gray-200 hover:border-brand-yellow/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-stone-800 text-sm">{title}</h4>
            {locked && (
              <span className="text-xs bg-brand-yellow/20 text-brand-yellow px-2 py-0.5 rounded-full font-bold">
                Sempre attivo
              </span>
            )}
          </div>
          <p className="text-xs text-stone-500 leading-relaxed">{description}</p>
        </div>
        <button
          onClick={onToggle}
          disabled={locked}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 flex-shrink-0 p-0.5 min-h-[44px] ${
            enabled ? 'bg-brand-yellow' : 'bg-gray-300'
          } ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
          role="switch"
          aria-checked={enabled}
          aria-label={`Toggle ${title}`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
