import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getOrCreateSession,
  trackPageView as trackPageViewFn,
  trackEvent as trackEventFn,
  trackScrollDepth,
  markConversion as markConversionFn,
  getSourceDataForForm,
  getPageViewCount,
  SessionData,
  SourceData,
} from '../lib/tracking';

interface TrackingContextValue {
  sessionId: string | null;
  sessionData: SessionData | null;
  isReady: boolean;
  trackEvent: (eventName: string, category?: string, properties?: Record<string, any>) => void;
  trackClick: (elementId: string, elementText?: string, href?: string) => void;
  markConversion: (conversionType: string, value?: number) => void;
  getSourceData: () => Promise<SourceData | null>;
}

const TrackingContext = createContext<TrackingContextValue | null>(null);

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const previousPath = useRef<string | null>(null);
  const scrollCleanup = useRef<(() => void) | null>(null);

  // Initialize session on mount
  useEffect(() => {
    const initSession = async () => {
      try {
        const data = await getOrCreateSession();
        setSessionId(data.sessionId);
        setSessionData(data);
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize tracking session:', error);
        setIsReady(true); // Still mark as ready so app continues
      }
    };

    initSession();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!sessionId || !isReady) return;

    const currentPath = location.pathname;

    // Track the page view
    trackPageViewFn(sessionId, currentPath, document.title, previousPath.current || undefined);

    // Clean up previous scroll tracker
    if (scrollCleanup.current) {
      scrollCleanup.current();
    }

    // Set up scroll tracking for this page
    scrollCleanup.current = trackScrollDepth(sessionId) as unknown as () => void;

    // Update previous path
    previousPath.current = currentPath;

    return () => {
      if (scrollCleanup.current) {
        scrollCleanup.current();
      }
    };
  }, [location.pathname, sessionId, isReady]);

  // Track event
  const trackEvent = useCallback(
    (eventName: string, category?: string, properties?: Record<string, any>) => {
      if (!sessionId) return;
      trackEventFn(sessionId, eventName, category, properties);
    },
    [sessionId]
  );

  // Track click
  const trackClick = useCallback(
    (elementId: string, elementText?: string, href?: string) => {
      if (!sessionId) return;
      trackEventFn(sessionId, 'click', 'engagement', {}, {
        id: elementId,
        text: elementText,
        href,
      });
    },
    [sessionId]
  );

  // Mark conversion
  const markConversion = useCallback(
    (conversionType: string, value?: number) => {
      if (!sessionId) return;
      markConversionFn(sessionId, conversionType, value);
    },
    [sessionId]
  );

  // Get source data for forms
  const getSourceData = useCallback(async (): Promise<SourceData | null> => {
    if (!sessionData) return null;
    const pageViewCount = await getPageViewCount(sessionData.sessionId);
    return getSourceDataForForm(sessionData, pageViewCount);
  }, [sessionData]);

  return (
    <TrackingContext.Provider
      value={{
        sessionId,
        sessionData,
        isReady,
        trackEvent,
        trackClick,
        markConversion,
        getSourceData,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export function useTracking() {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
}

// Hook for tracking CTA clicks
export function useTrackCTA() {
  const { trackEvent } = useTracking();

  return useCallback(
    (ctaName: string, destination?: string) => {
      trackEvent('cta_click', 'conversion', { cta_name: ctaName, destination });
    },
    [trackEvent]
  );
}

// Hook for tracking form interactions
export function useTrackForm(formName: string) {
  const { trackEvent } = useTracking();

  const trackFormStart = useCallback(() => {
    trackEvent('form_start', 'engagement', { form_name: formName });
  }, [trackEvent, formName]);

  const trackFormField = useCallback(
    (fieldName: string) => {
      trackEvent('form_field_interaction', 'engagement', { form_name: formName, field_name: fieldName });
    },
    [trackEvent, formName]
  );

  const trackFormSubmit = useCallback(
    (success: boolean, data?: Record<string, any>) => {
      trackEvent(success ? 'form_submit_success' : 'form_submit_error', 'conversion', {
        form_name: formName,
        ...data,
      });
    },
    [trackEvent, formName]
  );

  return { trackFormStart, trackFormField, trackFormSubmit };
}
