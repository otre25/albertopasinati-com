import { useEffect, useRef, useCallback } from 'react';
import {
  trackScrollDepth,
  trackSectionView,
  trackEngagement,
  trackFunnelStep,
  trackTimeOnPage
} from '../components/Analytics';

/**
 * Hook for advanced conversion tracking
 * Tracks scroll depth, section visibility, and time on page
 */
export const useConversionTracking = () => {
  const scrollDepthTracked = useRef<Set<number>>(new Set());
  const sectionTimers = useRef<Map<string, number>>(new Map());
  const pageStartTime = useRef<number>(Date.now());

  // Track scroll depth (25%, 50%, 75%, 100%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestones: 25%, 50%, 75%, 100%
      [25, 50, 75, 100].forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    // Throttle scroll event for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Track time on page and send on unmount
  useEffect(() => {
    return () => {
      const timeOnPage = (Date.now() - pageStartTime.current) / 1000;
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeOnPage);
      }
    };
  }, []);

  return {
    trackScrollDepth,
    trackSectionView,
    trackEngagement,
    trackFunnelStep,
  };
};

/**
 * Hook to track section visibility and time spent
 * @param sectionName - Name of the section to track
 * @param threshold - Intersection threshold (default: 0.5)
 */
export const useSectionTracking = (sectionName: string, threshold: number = 0.5) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visibilityStartTime = useRef<number | null>(null);
  const hasTrackedView = useRef<boolean>(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section became visible
            visibilityStartTime.current = Date.now();

            // Track section view (first time only)
            if (!hasTrackedView.current) {
              trackEngagement('section_visible', sectionName);
              hasTrackedView.current = true;
            }
          } else if (visibilityStartTime.current) {
            // Section became invisible - track time spent
            const timeVisible = (Date.now() - visibilityStartTime.current) / 1000;
            if (timeVisible > 2) { // Only track if visible for more than 2 seconds
              trackSectionView(sectionName, timeVisible);
            }
            visibilityStartTime.current = null;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      // Track final time if section is still visible on unmount
      if (visibilityStartTime.current) {
        const timeVisible = (Date.now() - visibilityStartTime.current) / 1000;
        if (timeVisible > 2) {
          trackSectionView(sectionName, timeVisible);
        }
      }
      observer.disconnect();
    };
  }, [sectionName, threshold]);

  return sectionRef;
};

/**
 * Hook to track conversion funnel
 * @param funnelName - Name of the funnel (e.g., "contact_form")
 */
export const useFunnelTracking = (funnelName: string) => {
  const trackStep = useCallback(
    (stepName: string, stepNumber: number, additionalData?: Record<string, any>) => {
      trackFunnelStep(funnelName, stepName, stepNumber, additionalData);
    },
    [funnelName]
  );

  return { trackStep };
};
