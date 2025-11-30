import { useEffect } from 'react';

// Microsoft Clarity Project ID
const CLARITY_PROJECT_ID = 'ueax9axbkx';

// Declare clarity function for TypeScript
declare global {
  interface Window {
    clarity: (...args: any[]) => void;
  }
}

// Initialize Microsoft Clarity
export const initClarity = () => {
  // Check if Clarity is already loaded
  if (window.clarity) {
    return;
  }

  // Microsoft Clarity script injection
  (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: HTMLElement) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y?.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
};

// Track custom Clarity events
export const trackClarityEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window.clarity !== 'undefined') {
    window.clarity('event', eventName, eventData);
  }
};

// Set Clarity custom tags
export const setClarityTag = (key: string, value: string) => {
  if (typeof window.clarity !== 'undefined') {
    window.clarity('set', key, value);
  }
};

// Identify user (for logged-in users - optional)
export const identifyClarityUser = (userId: string, customData?: Record<string, any>) => {
  if (typeof window.clarity !== 'undefined') {
    window.clarity('identify', userId, customData);
  }
};

// Microsoft Clarity Component - Auto-initializes when analytics cookies are accepted
const MicrosoftClarity: React.FC = () => {
  useEffect(() => {
    // Initialize Clarity on first mount
    if (typeof window !== 'undefined' && !window.clarity) {
      // Check if user has accepted analytics cookies
      const cookiePreferences = localStorage.getItem('cookiePreferences');
      if (cookiePreferences) {
        try {
          const prefs = JSON.parse(cookiePreferences);
          if (prefs.analytics) {
            initClarity();
            console.log('Microsoft Clarity initialized');
          }
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  // Listen for cookie preference changes
  useEffect(() => {
    const handleCookieUpdate = () => {
      const cookiePreferences = localStorage.getItem('cookiePreferences');
      if (cookiePreferences) {
        try {
          const prefs = JSON.parse(cookiePreferences);
          if (prefs.analytics && !window.clarity) {
            initClarity();
            console.log('Microsoft Clarity initialized after cookie consent');
          }
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    };

    // Listen for storage events (when cookies are updated)
    window.addEventListener('storage', handleCookieUpdate);

    // Also listen for custom event from CookieBanner
    window.addEventListener('cookiePreferencesUpdated', handleCookieUpdate);

    return () => {
      window.removeEventListener('storage', handleCookieUpdate);
      window.removeEventListener('cookiePreferencesUpdated', handleCookieUpdate);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MicrosoftClarity;
