import { supabase } from './supabase';
import { track } from '@vercel/analytics/react';

interface EventData {
  path: string;
  agency: string;
  event?: string;
  userAgent?: string;
  referrer?: string;
  [key: string]: any;
}

export const trackEvent = async (event: string, data: EventData) => {
  try {
    const eventPayload = {
      timestamp: new Date().toISOString(),
      path: data.path,
      agency: data.agency,
      event,
      userAgent: navigator.userAgent,
      referrer: document.referrer || '',
      ...data
    };

    // Send to Supabase
    const { error } = await supabase
      .from('events')
      .insert([eventPayload]);

    if (error) {
      console.error('Analytics tracking error:', error);
    }

    // Send to Vercel Analytics (custom events)
    // Filter out data to only include primitives (strings, numbers, booleans, null)
    const vercelData: Record<string, string | number | boolean | null> = {};
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null) {
        vercelData[key] = value;
      }
    });
    track(event, vercelData);
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};

export const trackPageView = (path: string, agency: string) => {
  trackEvent('view', { path, agency });
};

export const trackEnvelopeOpen = (path: string, agency: string) => {
  trackEvent('open_envelope', { path, agency });
};

export const trackCTAClick = (path: string, agency: string) => {
  trackEvent('cta_click', { path, agency });
};

export const trackScroll = (path: string, agency: string, percentage: number) => {
  trackEvent(`scroll_${percentage}`, { path, agency, scrollPercentage: percentage });
};

// Form tracking
export const trackFormStarted = (formType: string, path: string) => {
  trackEvent('form_started', {
    path,
    agency: 'form',
    form_type: formType
  });
};

export const trackFormSubmitted = (formType: string, path: string, data?: Record<string, string | number>) => {
  trackEvent('form_submitted', {
    path,
    agency: 'form',
    form_type: formType,
    ...data
  });
};

export const trackFormError = (formType: string, path: string, errorMessage: string) => {
  trackEvent('form_error', {
    path,
    agency: 'form',
    form_type: formType,
    error: errorMessage
  });
};

// CTA tracking
export const trackCTAButtonClick = (ctaText: string, location: string, path: string) => {
  trackEvent('cta_clicked', {
    path,
    agency: 'cta',
    cta_text: ctaText,
    location
  });
};

// Social media tracking
export const trackSocialClick = (platform: string, location: string, path: string) => {
  trackEvent('social_click', {
    path,
    agency: 'social',
    platform,
    location
  });
};

// Navigation tracking
export const trackNavigationClick = (destination: string, path: string) => {
  trackEvent('navigation_click', {
    path,
    agency: 'navigation',
    destination
  });
};