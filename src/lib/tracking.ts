import { supabase } from './supabase';

// Session storage key
const SESSION_KEY = 'p0stman_session_id';
const SESSION_DATA_KEY = 'p0stman_session_data';

// Types
export interface SessionData {
  sessionId: string;
  referrer: string;
  referrerDomain: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  landingPage: string;
  landingPageQuery: string;
  deviceType: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  screenWidth: number;
  screenHeight: number;
  createdAt: string;
}

export interface TrackingContext {
  sessionId: string;
  sessionData: SessionData;
  trackPageView: (path: string, title?: string) => Promise<void>;
  trackEvent: (eventName: string, properties?: Record<string, any>) => Promise<void>;
  getSourceData: () => SourceData;
}

export interface SourceData {
  session_id: string;
  referrer: string;
  referrer_domain: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  landing_page: string;
  device_type: string;
  page_views_before_contact: number;
}

// Generate a unique session ID
function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

// Parse UTM parameters from URL
function parseUtmParams(): Record<string, string | null> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content'),
  };
}

// Extract domain from referrer
function extractDomain(url: string): string {
  if (!url) return 'direct';
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return 'unknown';
  }
}

// Detect device type
function getDeviceType(): string {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

// Parse browser info from user agent
function parseBrowserInfo(): { browser: string; version: string } {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let version = '';

  if (ua.includes('Firefox/')) {
    browser = 'Firefox';
    version = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Chrome/') && !ua.includes('Edg/')) {
    browser = 'Chrome';
    version = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
    browser = 'Safari';
    version = ua.match(/Version\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Edg/')) {
    browser = 'Edge';
    version = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || '';
  }

  return { browser, version };
}

// Parse OS info from user agent
function parseOsInfo(): { os: string; version: string } {
  const ua = navigator.userAgent;
  let os = 'Unknown';
  let version = '';

  if (ua.includes('Windows NT')) {
    os = 'Windows';
    const ntVersion = ua.match(/Windows NT (\d+\.\d+)/)?.[1];
    if (ntVersion === '10.0') version = '10/11';
    else if (ntVersion === '6.3') version = '8.1';
    else if (ntVersion === '6.2') version = '8';
    else if (ntVersion === '6.1') version = '7';
  } else if (ua.includes('Mac OS X')) {
    os = 'macOS';
    version = ua.match(/Mac OS X (\d+[._]\d+)/)?.[1]?.replace('_', '.') || '';
  } else if (ua.includes('Linux')) {
    os = 'Linux';
  } else if (ua.includes('Android')) {
    os = 'Android';
    version = ua.match(/Android (\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) {
    os = 'iOS';
    version = ua.match(/OS (\d+[._]\d+)/)?.[1]?.replace('_', '.') || '';
  }

  return { os, version };
}

// Get or create session
export async function getOrCreateSession(): Promise<SessionData> {
  // Check for existing session in storage
  const existingSessionId = sessionStorage.getItem(SESSION_KEY);
  const existingDataStr = sessionStorage.getItem(SESSION_DATA_KEY);

  if (existingSessionId && existingDataStr) {
    try {
      return JSON.parse(existingDataStr) as SessionData;
    } catch {
      // Invalid data, create new session
    }
  }

  // Create new session
  const sessionId = generateSessionId();
  const utmParams = parseUtmParams();
  const browserInfo = parseBrowserInfo();
  const osInfo = parseOsInfo();
  const referrer = document.referrer || '';

  const sessionData: SessionData = {
    sessionId,
    referrer,
    referrerDomain: extractDomain(referrer),
    utmSource: utmParams.utm_source,
    utmMedium: utmParams.utm_medium,
    utmCampaign: utmParams.utm_campaign,
    utmTerm: utmParams.utm_term,
    utmContent: utmParams.utm_content,
    landingPage: window.location.pathname,
    landingPageQuery: window.location.search,
    deviceType: getDeviceType(),
    browser: browserInfo.browser,
    browserVersion: browserInfo.version,
    os: osInfo.os,
    osVersion: osInfo.version,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    createdAt: new Date().toISOString(),
  };

  // Store in sessionStorage
  sessionStorage.setItem(SESSION_KEY, sessionId);
  sessionStorage.setItem(SESSION_DATA_KEY, JSON.stringify(sessionData));

  // Save to Supabase
  try {
    await supabase.from('visitor_sessions').insert({
      session_id: sessionId,
      referrer: sessionData.referrer || null,
      referrer_domain: sessionData.referrerDomain,
      utm_source: sessionData.utmSource,
      utm_medium: sessionData.utmMedium,
      utm_campaign: sessionData.utmCampaign,
      utm_term: sessionData.utmTerm,
      utm_content: sessionData.utmContent,
      landing_page: sessionData.landingPage,
      landing_page_query: sessionData.landingPageQuery || null,
      user_agent: navigator.userAgent,
      browser: sessionData.browser,
      browser_version: sessionData.browserVersion,
      os: sessionData.os,
      os_version: sessionData.osVersion,
      device_type: sessionData.deviceType,
      screen_width: sessionData.screenWidth,
      screen_height: sessionData.screenHeight,
    });
  } catch (error) {
    console.error('Failed to save session:', error);
  }

  return sessionData;
}

// Track page view
let currentPageViewId: string | null = null;
let pageViewStartTime: number = Date.now();

export async function trackPageView(
  sessionId: string,
  path: string,
  title?: string,
  previousPath?: string
): Promise<void> {
  // Update time on previous page
  if (currentPageViewId && previousPath) {
    const timeOnPage = Math.round((Date.now() - pageViewStartTime) / 1000);
    try {
      await supabase
        .from('page_views')
        .update({ time_on_page_seconds: timeOnPage })
        .eq('id', currentPageViewId);
    } catch (error) {
      console.error('Failed to update page time:', error);
    }
  }

  // Reset timer
  pageViewStartTime = Date.now();

  // Insert new page view
  try {
    const { data } = await supabase
      .from('page_views')
      .insert({
        session_id: sessionId,
        path,
        page_title: title || document.title,
        query_params: Object.fromEntries(new URLSearchParams(window.location.search)),
        hash: window.location.hash || null,
        previous_path: previousPath || null,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
      })
      .select('id')
      .single();

    currentPageViewId = data?.id || null;

    // Update session page count
    await supabase.rpc('increment_session_page_count', { p_session_id: sessionId }).catch(() => {
      // Function might not exist yet, ignore
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

// Track scroll depth
let maxScrollDepth = 0;

export function trackScrollDepth(sessionId: string): void {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollHeight > 0 ? Math.round((window.scrollY / scrollHeight) * 100) : 0;

    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;

      // Update at milestones (25, 50, 75, 100)
      if ([25, 50, 75, 100].includes(maxScrollDepth) && currentPageViewId) {
        supabase
          .from('page_views')
          .update({ scroll_depth_percent: maxScrollDepth })
          .eq('id', currentPageViewId)
          .catch(() => {});
      }
    }
  };

  // Reset on page change
  maxScrollDepth = 0;
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
}

// Track event
export async function trackEvent(
  sessionId: string,
  eventName: string,
  category?: string,
  properties?: Record<string, any>,
  element?: {
    id?: string;
    className?: string;
    text?: string;
    href?: string;
  }
): Promise<void> {
  try {
    await supabase.from('events').insert({
      session_id: sessionId,
      event_name: eventName,
      event_category: category || 'general',
      page_path: window.location.pathname,
      element_id: element?.id || null,
      element_class: element?.className || null,
      element_text: element?.text?.substring(0, 200) || null,
      element_href: element?.href || null,
      properties: properties || {},
    });

    // Update session event count
    await supabase.rpc('increment_session_event_count', { p_session_id: sessionId }).catch(() => {
      // Function might not exist yet, ignore
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

// Mark session as converted
export async function markConversion(
  sessionId: string,
  conversionType: string,
  value?: number
): Promise<void> {
  try {
    await supabase
      .from('visitor_sessions')
      .update({
        converted: true,
        conversion_type: conversionType,
        conversion_at: new Date().toISOString(),
      })
      .eq('session_id', sessionId);

    // Also track as event
    await trackEvent(sessionId, 'conversion', 'conversion', {
      conversion_type: conversionType,
      value,
    });
  } catch (error) {
    console.error('Failed to mark conversion:', error);
  }
}

// Get source data for forms
export function getSourceDataForForm(sessionData: SessionData, pageViewCount: number): SourceData {
  return {
    session_id: sessionData.sessionId,
    referrer: sessionData.referrer,
    referrer_domain: sessionData.referrerDomain,
    utm_source: sessionData.utmSource,
    utm_medium: sessionData.utmMedium,
    utm_campaign: sessionData.utmCampaign,
    landing_page: sessionData.landingPage,
    device_type: sessionData.deviceType,
    page_views_before_contact: pageViewCount,
  };
}

// Get page view count for current session
export async function getPageViewCount(sessionId: string): Promise<number> {
  try {
    const { count } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .eq('session_id', sessionId);
    return count || 0;
  } catch {
    return 0;
  }
}
