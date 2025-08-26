import { supabase } from './supabase';

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