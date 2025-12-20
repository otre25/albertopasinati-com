import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_MEASUREMENT_ID = 'G-DHBV49RMDY'; // Alberto Pasinati - Google Analytics 4

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  // Add GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send pageviews manually
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

// Track project views
export const trackProjectView = (projectTitle: string, projectId: string) => {
  trackEvent('project_view', {
    project_title: projectTitle,
    project_id: projectId,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page_path: window.location.pathname,
  });
};

// Track section visibility
export const trackSectionView = (sectionName: string, timeVisible: number) => {
  trackEvent('section_view', {
    section_name: sectionName,
    time_visible_seconds: Math.round(timeVisible),
    page_path: window.location.pathname,
  });
};

// Track user engagement
export const trackEngagement = (engagementType: string, value?: string | number) => {
  trackEvent('user_engagement', {
    engagement_type: engagementType,
    engagement_value: value,
    page_path: window.location.pathname,
  });
};

// Track conversion funnel step
export const trackFunnelStep = (
  funnelName: string,
  stepName: string,
  stepNumber: number,
  additionalData?: Record<string, any>
) => {
  trackEvent('funnel_step', {
    funnel_name: funnelName,
    step_name: stepName,
    step_number: stepNumber,
    ...additionalData,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    time_seconds: Math.round(seconds),
    page_path: window.location.pathname,
  });
};

// Analytics Component - Auto-tracks page views on route change
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first mount
    if (typeof window !== 'undefined' && !window.gtag) {
      // Check if user has accepted analytics cookies
      const cookiePreferences = localStorage.getItem('cookiePreferences');
      if (cookiePreferences) {
        try {
          const prefs = JSON.parse(cookiePreferences);
          if (prefs.analytics) {
            initGA();
          }
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Track page view on route change
    const cookiePreferences = localStorage.getItem('cookiePreferences');
    if (cookiePreferences) {
      try {
        const prefs = JSON.parse(cookiePreferences);
        if (prefs.analytics) {
          trackPageView(location.pathname + location.hash);
        }
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;
