import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bot, ArrowLeft, Users, Globe, Monitor, Smartphone, Tablet,
  TrendingUp, MousePointer, Clock, MapPin, RefreshCw
} from 'lucide-react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { supabase } from '../../lib/supabase';

interface VisitorSession {
  id: string;
  session_id: string;
  created_at: string;
  referrer: string;
  referrer_domain: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  landing_page: string;
  device_type: string;
  browser: string;
  os: string;
  country: string;
  page_count: number;
  converted: boolean;
  conversion_type: string;
}

interface PageView {
  id: string;
  session_id: string;
  path: string;
  created_at: string;
  time_on_page_seconds: number;
  scroll_depth_percent: number;
}

interface TrackingEvent {
  id: string;
  session_id: string;
  event_name: string;
  event_category: string;
  page_path: string;
  created_at: string;
}

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

export default function AnalyticsAdmin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Data states
  const [sessions, setSessions] = useState<VisitorSession[]>([]);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [events, setEvents] = useState<TrackingEvent[]>([]);

  // Computed stats
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalPageViews: 0,
    totalConversions: 0,
    conversionRate: 0,
    avgPagesPerSession: 0,
    bounceRate: 0
  });

  const [trafficBySource, setTrafficBySource] = useState<{ name: string; value: number }[]>([]);
  const [trafficByDevice, setTrafficByDevice] = useState<{ name: string; value: number }[]>([]);
  const [topPages, setTopPages] = useState<{ path: string; views: number }[]>([]);
  const [sessionsOverTime, setSessionsOverTime] = useState<{ date: string; sessions: number; conversions: number }[]>([]);
  const [topReferrers, setTopReferrers] = useState<{ domain: string; sessions: number; conversions: number }[]>([]);
  const [recentSessions, setRecentSessions] = useState<VisitorSession[]>([]);

  useEffect(() => {
    loadData();
  }, [dateRange]);

  const getDateFilter = () => {
    const now = new Date();
    const days = dateRange === '7d' ? 7 : dateRange === '30d' ? 30 : 90;
    const startDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return startDate.toISOString();
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const startDate = getDateFilter();

      // Load sessions
      const { data: sessionsData, error: sessionsError } = await supabase
        .from('visitor_sessions')
        .select('*')
        .gte('created_at', startDate)
        .order('created_at', { ascending: false });

      if (sessionsError) throw sessionsError;
      setSessions(sessionsData || []);
      setRecentSessions((sessionsData || []).slice(0, 20));

      // Load page views
      const { data: pageViewsData, error: pageViewsError } = await supabase
        .from('page_views')
        .select('*')
        .gte('created_at', startDate);

      if (pageViewsError) throw pageViewsError;
      setPageViews(pageViewsData || []);

      // Load events
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .gte('created_at', startDate);

      if (eventsError) throw eventsError;
      setEvents(eventsData || []);

      // Calculate stats
      calculateStats(sessionsData || [], pageViewsData || []);
      calculateTrafficBySource(sessionsData || []);
      calculateTrafficByDevice(sessionsData || []);
      calculateTopPages(pageViewsData || []);
      calculateSessionsOverTime(sessionsData || []);
      calculateTopReferrers(sessionsData || []);

    } catch (err) {
      console.error('Error loading analytics:', err);
      setError(err instanceof Error ? err.message : 'Failed to load analytics');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (sessions: VisitorSession[], pageViews: PageView[]) => {
    const totalSessions = sessions.length;
    const totalPageViews = pageViews.length;
    const totalConversions = sessions.filter(s => s.converted).length;
    const conversionRate = totalSessions > 0 ? (totalConversions / totalSessions) * 100 : 0;
    const avgPagesPerSession = totalSessions > 0 ? totalPageViews / totalSessions : 0;

    // Bounce rate: sessions with only 1 page view
    const sessionPageCounts: Record<string, number> = {};
    pageViews.forEach(pv => {
      sessionPageCounts[pv.session_id] = (sessionPageCounts[pv.session_id] || 0) + 1;
    });
    const bouncedSessions = Object.values(sessionPageCounts).filter(count => count === 1).length;
    const bounceRate = totalSessions > 0 ? (bouncedSessions / totalSessions) * 100 : 0;

    setStats({
      totalSessions,
      totalPageViews,
      totalConversions,
      conversionRate,
      avgPagesPerSession,
      bounceRate
    });
  };

  const calculateTrafficBySource = (sessions: VisitorSession[]) => {
    const sourceMap: Record<string, number> = {};
    sessions.forEach(s => {
      const source = s.utm_source || s.referrer_domain || 'direct';
      sourceMap[source] = (sourceMap[source] || 0) + 1;
    });

    const sorted = Object.entries(sourceMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);

    setTrafficBySource(sorted);
  };

  const calculateTrafficByDevice = (sessions: VisitorSession[]) => {
    const deviceMap: Record<string, number> = {};
    sessions.forEach(s => {
      const device = s.device_type || 'unknown';
      deviceMap[device] = (deviceMap[device] || 0) + 1;
    });

    const sorted = Object.entries(deviceMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    setTrafficByDevice(sorted);
  };

  const calculateTopPages = (pageViews: PageView[]) => {
    const pageMap: Record<string, number> = {};
    pageViews.forEach(pv => {
      pageMap[pv.path] = (pageMap[pv.path] || 0) + 1;
    });

    const sorted = Object.entries(pageMap)
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    setTopPages(sorted);
  };

  const calculateSessionsOverTime = (sessions: VisitorSession[]) => {
    const dateMap: Record<string, { sessions: number; conversions: number }> = {};

    sessions.forEach(s => {
      const date = new Date(s.created_at).toISOString().split('T')[0];
      if (!dateMap[date]) {
        dateMap[date] = { sessions: 0, conversions: 0 };
      }
      dateMap[date].sessions += 1;
      if (s.converted) {
        dateMap[date].conversions += 1;
      }
    });

    const sorted = Object.entries(dateMap)
      .map(([date, data]) => ({ date, ...data }))
      .sort((a, b) => a.date.localeCompare(b.date));

    setSessionsOverTime(sorted);
  };

  const calculateTopReferrers = (sessions: VisitorSession[]) => {
    const refMap: Record<string, { sessions: number; conversions: number }> = {};

    sessions.forEach(s => {
      const domain = s.referrer_domain || 'direct';
      if (!refMap[domain]) {
        refMap[domain] = { sessions: 0, conversions: 0 };
      }
      refMap[domain].sessions += 1;
      if (s.converted) {
        refMap[domain].conversions += 1;
      }
    });

    const sorted = Object.entries(refMap)
      .map(([domain, data]) => ({ domain, ...data }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    setTopReferrers(sorted);
  };

  const getDeviceIcon = (device: string) => {
    switch (device?.toLowerCase()) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  const formatTimeAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Visitor Analytics</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as '7d' | '30d' | '90d')}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button
              onClick={loadData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Users className="w-4 h-4" />
              <span className="text-xs">Sessions</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalSessions.toLocaleString()}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <MousePointer className="w-4 h-4" />
              <span className="text-xs">Page Views</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalPageViews.toLocaleString()}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Conversions</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.totalConversions}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Conv. Rate</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{stats.conversionRate.toFixed(1)}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs">Pages/Session</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.avgPagesPerSession.toFixed(1)}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Globe className="w-4 h-4" />
              <span className="text-xs">Bounce Rate</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">{stats.bounceRate.toFixed(1)}%</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Sessions Over Time */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Sessions Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sessionsOverTime} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessions" stroke="#2563eb" strokeWidth={2} name="Sessions" />
                <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} name="Conversions" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic by Device */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Traffic by Device</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficByDevice}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {trafficByDevice.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources & Top Pages */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Traffic by Source */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Traffic Sources</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficBySource} layout="vertical" margin={{ top: 20, right: 30, left: 80, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" name="Sessions" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {topPages.map((page, index) => (
                <div key={page.path} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm w-6">{index + 1}.</span>
                    <span className="text-sm text-gray-700 truncate max-w-[250px]" title={page.path}>
                      {page.path}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Referrers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Top Referrers</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Source</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Sessions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Conversions</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {topReferrers.map((ref) => (
                  <tr key={ref.domain} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{ref.domain}</span>
                      </div>
                    </td>
                    <td className="text-right py-3 px-4 text-sm text-gray-700">{ref.sessions.toLocaleString()}</td>
                    <td className="text-right py-3 px-4 text-sm text-green-600 font-medium">{ref.conversions}</td>
                    <td className="text-right py-3 px-4 text-sm text-blue-600">
                      {ref.sessions > 0 ? ((ref.conversions / ref.sessions) * 100).toFixed(1) : 0}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Visitors</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Source</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Landing Page</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Device</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Browser</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Converted</th>
                </tr>
              </thead>
              <tbody>
                {recentSessions.map((session) => (
                  <tr key={session.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-500">
                      {formatTimeAgo(session.created_at)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-900">
                        {session.utm_source || session.referrer_domain || 'direct'}
                      </div>
                      {session.utm_campaign && (
                        <div className="text-xs text-gray-500">{session.utm_campaign}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 max-w-[200px] truncate" title={session.landing_page}>
                      {session.landing_page}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        {getDeviceIcon(session.device_type)}
                        <span className="capitalize">{session.device_type || 'unknown'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {session.browser} / {session.os}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {session.converted ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {session.conversion_type || 'Yes'}
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
