import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Update GA4 consent based on stored cookie preferences (for returning visitors)
export const restoreGAConsent = () => {
  try {
    const prefs = localStorage.getItem('cookiePreferences');
    if (!prefs || typeof window.gtag === 'undefined') return;
    const { analytics, marketing } = JSON.parse(prefs);
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
    });
  } catch {
    // ignore
  }
};

// Track page views (GA4 consent mode decides whether to actually send)
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

// Track custom events (GA4 consent mode gates sending automatically)
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

// Analytics Component — restores consent for returning visitors, tracks SPA page views
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    restoreGAConsent();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default Analytics;
