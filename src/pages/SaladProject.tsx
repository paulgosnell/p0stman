import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function SaladProject() {
  // Brand colours inspired by The Salad Project
  const colors = {
    forest: '#1a3a2f',
    sage: '#4a7c59',
    mint: '#7fb685',
    cream: '#f5f2eb',
    white: '#ffffff',
    charcoal: '#2d2d2d',
    warmGray: '#8a8778',
    accent: '#e8b54d',
    red: '#c75146',
    amber: '#d4a256',
  };

  // Store data with real locations
  const stores = [
    { name: 'Spitalfields', revenue: 142300, target: 140000, status: 'up' as const, aiNote: null },
    { name: 'Bank', revenue: 138700, target: 145000, status: 'down' as const, aiNote: 'Supplier issue detected' },
    { name: 'Oxford Circus', revenue: 156200, target: 150000, status: 'up' as const, aiNote: 'Top performer this week' },
    { name: 'Victoria', revenue: 121400, target: 125000, status: 'down' as const, aiNote: 'External factors identified' },
    { name: 'Notting Hill', revenue: 98600, target: 95000, status: 'up' as const, aiNote: null },
    { name: 'Battersea', revenue: 87300, target: 90000, status: 'down' as const, aiNote: null },
  ];

  // All store locations for the map
  const storeLocations = [
    { name: 'Spitalfields', address: 'The Fruit & Wool Exchange, E1 6AG' },
    { name: 'Bank', address: '1 Old Broad Street, EC2N 1DW' },
    { name: 'Oxford Circus', address: '23-25 Great Portland St, W1W 8QD' },
    { name: 'Mansion House', address: '32 Watling Street, EC4M 9DD' },
    { name: 'Fenchurch', address: '30 Fenchurch Street, EC3M 3BD' },
    { name: 'Tottenham Court Rd', address: '18 Tottenham Court Road, W1T 1BJ' },
    { name: 'Bond Street', address: '45-47 Duke Street, W1U 1LP' },
    { name: 'Victoria', address: '85 Buckingham Palace Road, SW1W 0QJ' },
  ];

  const aiInsights = [
    { type: 'win' as const, text: 'Oxford St AOV up 8% this week — new protein bowl driving upsells', confidence: 94 },
    { type: 'flag' as const, text: 'Bank COGS at 33.2% — avocado supplier price spike', confidence: 89 },
    { type: 'action' as const, text: 'Victoria footfall down 12% — check nearby roadworks impact', confidence: 87 },
    { type: 'opportunity' as const, text: 'Spitalfields lunch rush pattern suggests adding express line could boost revenue 15%', confidence: 82 },
  ];

  const aiOpportunities = [
    { title: 'Menu Optimisation', description: 'AI suggests rotating seasonal bowl out — sales dropped 23% vs last month', impact: '+£2.4k/mo', icon: '🥗' },
    { title: 'Staffing Pattern', description: 'Thursday 12-2pm understaffed across 3 stores based on queue times', impact: '+£890/wk', icon: '⏰' },
    { title: 'Supplier Switch', description: 'Alternative avocado supplier found — same quality, 18% lower cost', impact: '+£4.2k/mo', icon: '🥑' },
  ];

  const mapMarkers = [
    { name: 'Spitalfields', top: '35%', left: '72%' },
    { name: 'Bank', top: '40%', left: '68%' },
    { name: 'Oxford Circus', top: '38%', left: '48%' },
    { name: 'Mansion House', top: '42%', left: '66%' },
    { name: 'Fenchurch', top: '40%', left: '70%' },
    { name: 'Tottenham Ct Rd', top: '36%', left: '52%' },
    { name: 'Bond Street', top: '38%', left: '44%' },
    { name: 'Victoria', top: '55%', left: '46%' },
    { name: 'Southwark', top: '48%', left: '62%' },
    { name: 'Notting Hill', top: '38%', left: '32%' },
    { name: 'Battersea', top: '62%', left: '46%' },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>SP Command Centre | The Salad Project Dashboard</title>
        <meta name="description" content="AI-powered business intelligence dashboard for The Salad Project restaurant chain." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        style={{
          minHeight: '100vh',
          backgroundColor: colors.cream,
          fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
          padding: '32px',
          position: 'relative',
        }}
      >
        {/* Google Font Import + Animations */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap');

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(74, 124, 89, 0.3); }
            50% { box-shadow: 0 0 40px rgba(74, 124, 89, 0.5); }
          }

          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          @keyframes ripple {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(2.5); opacity: 0; }
          }

          @keyframes typing {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .sp-ai-badge {
            background: linear-gradient(90deg, #4a7c59, #7fb685, #4a7c59);
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
          }

          .sp-voice-orb {
            animation: glow 2s ease-in-out infinite, float 3s ease-in-out infinite;
          }

          .sp-voice-orb:hover {
            animation: pulse 0.5s ease-in-out infinite;
          }

          .sp-ai-insight-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .sp-ai-insight-card:hover {
            transform: translateX(4px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }

          .sp-opportunity-card {
            transition: all 0.3s ease;
          }

          .sp-opportunity-card:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 30px rgba(26, 58, 47, 0.15);
          }

          .sp-store-row {
            transition: all 0.2s ease;
          }

          .sp-store-row:hover {
            transform: translateX(4px);
          }

          .sp-typing-indicator span {
            animation: typing 1.4s ease-in-out infinite;
          }

          .sp-typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
          .sp-typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

          .sp-map-marker {
            transition: all 0.2s ease;
          }

          .sp-map-marker:hover {
            transform: scale(1.3);
            z-index: 10;
          }
        `}</style>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: '32px',
                fontWeight: '600',
                color: colors.forest,
                letterSpacing: '-0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              SP Command Centre
              <span
                className="sp-ai-badge"
                style={{
                  fontSize: '11px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '500',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  color: colors.white,
                  letterSpacing: '0.5px',
                }}
              >
                AI POWERED
              </span>
            </div>
            <div
              style={{
                fontSize: '14px',
                color: colors.warmGray,
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Good morning, Florian — here's your business at a glance
              <span
                className="sp-typing-indicator"
                style={{
                  display: 'inline-flex',
                  gap: '2px',
                  marginLeft: '4px',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.sage }}></span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.sage }}></span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.sage }}></span>
              </span>
              <span style={{ fontSize: '12px', color: colors.sage }}>AI analysing...</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(74, 124, 89, 0.1)',
                borderRadius: '20px',
                fontSize: '12px',
                color: colors.sage,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: colors.mint,
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              ></span>
              4 AI insights ready
            </div>
            <div
              style={{
                padding: '10px 20px',
                backgroundColor: colors.white,
                borderRadius: '24px',
                fontSize: '14px',
                color: colors.charcoal,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.warmGray} strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              January 2026
            </div>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: colors.forest,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.white,
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              F
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 400px',
            gridTemplateRows: 'auto auto',
            gap: '24px',
          }}
        >
          {/* Left Column - Key Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Revenue Card */}
            <div
              style={{
                backgroundColor: colors.forest,
                borderRadius: '20px',
                padding: '28px',
                color: colors.white,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(127, 182, 133, 0.2)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.mint}>
                  <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                </svg>
                AI detected trend
              </div>
              <div style={{ fontSize: '13px', opacity: 0.7, marginBottom: '8px', letterSpacing: '0.5px' }}>TOTAL REVENUE MTD</div>
              <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '48px', fontWeight: '600', letterSpacing: '-1px' }}>£1.24M</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(127, 182, 133, 0.3)',
                    color: colors.mint,
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  ↑ 12.4%
                </span>
                <span style={{ fontSize: '13px', opacity: 0.7 }}>vs last month</span>
              </div>
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.mint} strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span style={{ opacity: 0.8 }}>AI forecasts £1.52M by month end</span>
                <span style={{ backgroundColor: 'rgba(127, 182, 133, 0.2)', padding: '2px 6px', borderRadius: '8px', fontSize: '10px' }}>
                  92% confidence
                </span>
              </div>
            </div>

            {/* Two small cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: colors.white, borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '12px', color: colors.warmGray, marginBottom: '8px', letterSpacing: '0.5px' }}>AVG ORDER VALUE</div>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '32px', fontWeight: '600', color: colors.forest }}>£14.20</div>
                <div style={{ fontSize: '13px', color: colors.sage, marginTop: '4px' }}>↑ 3.2%</div>
                <div
                  style={{
                    marginTop: '12px',
                    padding: '8px',
                    backgroundColor: colors.cream,
                    borderRadius: '8px',
                    fontSize: '11px',
                    color: colors.warmGray,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.sage} style={{ marginTop: '1px', flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" stroke={colors.white} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Upsell prompts driving +£0.40 per order
                </div>
              </div>
              <div style={{ backgroundColor: colors.white, borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '12px', color: colors.warmGray, marginBottom: '8px', letterSpacing: '0.5px' }}>ORDERS TODAY</div>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '32px', fontWeight: '600', color: colors.forest }}>2,847</div>
                <div style={{ fontSize: '13px', color: colors.sage, marginTop: '4px' }}>↑ 8.1%</div>
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: colors.sage }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: colors.mint,
                      animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                  ></span>
                  Live • 47 in last 10 min
                </div>
              </div>
            </div>

            {/* COGS Card */}
            <div style={{ backgroundColor: colors.white, borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', color: colors.warmGray, letterSpacing: '0.5px' }}>COGS BY STORE</div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    color: colors.red,
                    backgroundColor: '#fef2f1',
                    padding: '4px 8px',
                    borderRadius: '8px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.red} strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  1 anomaly detected
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { store: 'Spitalfields', cogs: 29.2, target: 30, anomaly: false },
                  { store: 'Bank', cogs: 33.2, target: 30, anomaly: true },
                  { store: 'Oxford Circus', cogs: 28.8, target: 30, anomaly: false },
                  { store: 'Victoria', cogs: 30.1, target: 30, anomaly: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: item.anomaly ? '8px' : '0',
                      backgroundColor: item.anomaly ? '#fef2f1' : 'transparent',
                      borderRadius: '8px',
                      margin: item.anomaly ? '-8px' : '0',
                    }}
                  >
                    <div style={{ width: '90px', fontSize: '13px', color: colors.charcoal, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {item.store}
                      {item.anomaly && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.red}>
                          <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                        </svg>
                      )}
                    </div>
                    <div style={{ flex: 1, height: '8px', backgroundColor: colors.cream, borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${(item.cogs / 40) * 100}%`,
                          height: '100%',
                          backgroundColor: item.cogs > item.target ? colors.red : colors.sage,
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: item.cogs > item.target ? colors.red : colors.forest }}>
                      {item.cogs}%
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: colors.cream,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.sage}, ${colors.forest})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.white}>
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '500', color: colors.charcoal }}>AI Recommendation</div>
                  <div style={{ fontSize: '11px', color: colors.warmGray, marginTop: '2px' }}>
                    Bank's avocado supplier increased prices 22%. Alternative supplier found with same quality rating.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Store Performance */}
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: colors.warmGray, letterSpacing: '0.5px' }}>STORE PERFORMANCE</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ padding: '6px 12px', backgroundColor: colors.forest, color: colors.white, borderRadius: '16px', fontSize: '12px' }}>
                  UK
                </span>
                <span style={{ padding: '6px 12px', backgroundColor: colors.cream, color: colors.warmGray, borderRadius: '16px', fontSize: '12px' }}>
                  France
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {stores.map((store, i) => (
                <div
                  key={i}
                  className="sp-store-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 14px',
                    backgroundColor: colors.cream,
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: colors.charcoal, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {store.name}
                      {store.aiNote && (
                        <span
                          style={{
                            fontSize: '9px',
                            padding: '2px 5px',
                            borderRadius: '5px',
                            backgroundColor: store.status === 'up' ? 'rgba(74, 124, 89, 0.15)' : 'rgba(199, 81, 70, 0.1)',
                            color: store.status === 'up' ? colors.sage : colors.red,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                          }}
                        >
                          <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                          </svg>
                          {store.aiNote}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '11px', color: colors.warmGray, marginTop: '2px' }}>Target: £{(store.target / 1000).toFixed(0)}k</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '18px', fontWeight: '600', color: colors.forest }}>
                      £{(store.revenue / 1000).toFixed(1)}k
                    </div>
                    <div style={{ fontSize: '11px', color: store.status === 'up' ? colors.sage : colors.red, marginTop: '1px' }}>
                      {store.status === 'up' ? '↑' : '↓'} {Math.abs(((store.revenue - store.target) / store.target) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                backgroundColor: colors.cream,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: colors.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={colors.white}>
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: '500', color: colors.charcoal }}>Canary Wharf opening in 18 days</div>
                <div style={{ fontSize: '11px', color: colors.warmGray }}>Store #12 • Est. £95k/month</div>
              </div>
              <div style={{ fontSize: '10px', color: colors.sage, backgroundColor: 'rgba(74, 124, 89, 0.1)', padding: '3px 6px', borderRadius: '6px' }}>
                AI tracking
              </div>
            </div>
          </div>

          {/* Right Column - AI Insights & Assistant */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', gridRow: 'span 2' }}>
            {/* AI Insights Panel */}
            <div style={{ backgroundColor: colors.white, borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${colors.sage}, ${colors.forest})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={colors.white}>
                      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: colors.forest }}>AI Insights</div>
                    <div style={{ fontSize: '11px', color: colors.warmGray }}>Updated just now</div>
                  </div>
                </div>
                <div
                  style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.mint, animation: 'pulse 2s ease-in-out infinite' }}
                ></div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {aiInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="sp-ai-insight-card"
                    style={{
                      padding: '16px',
                      backgroundColor:
                        insight.type === 'win' ? '#f0f7f1' : insight.type === 'flag' ? '#fef6e6' : insight.type === 'action' ? '#fef2f1' : '#f0f7f1',
                      borderRadius: '12px',
                      borderLeft: `3px solid ${
                        insight.type === 'win' ? colors.sage : insight.type === 'flag' ? colors.amber : insight.type === 'action' ? colors.red : colors.mint
                      }`,
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          color:
                            insight.type === 'win'
                              ? colors.sage
                              : insight.type === 'flag'
                              ? colors.amber
                              : insight.type === 'action'
                              ? colors.red
                              : colors.sage,
                          letterSpacing: '0.5px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {insight.type === 'win' && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        )}
                        {insight.type === 'flag' && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                          </svg>
                        )}
                        {insight.type === 'action' && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                          </svg>
                        )}
                        {insight.type === 'opportunity' && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                          </svg>
                        )}
                        {insight.type === 'win' ? 'WIN' : insight.type === 'flag' ? 'FLAG' : insight.type === 'action' ? 'ACTION' : 'OPPORTUNITY'}
                      </div>
                      <div style={{ fontSize: '10px', color: colors.warmGray, backgroundColor: colors.white, padding: '2px 6px', borderRadius: '6px' }}>
                        {insight.confidence}% confident
                      </div>
                    </div>
                    <div style={{ fontSize: '13px', color: colors.charcoal, lineHeight: '1.5' }}>{insight.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant */}
            <div style={{ backgroundColor: colors.white, borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div
                  className="sp-voice-orb"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.forest}, ${colors.sage})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={colors.white}>
                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.forest }}>Ask your data</div>
                  <div style={{ fontSize: '11px', color: colors.warmGray }}>Voice or text • Powered by AI</div>
                </div>
              </div>

              <div style={{ padding: '16px', backgroundColor: colors.cream, borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      flex: 1,
                      padding: '14px 18px',
                      backgroundColor: colors.white,
                      borderRadius: '28px',
                      fontSize: '13px',
                      color: colors.warmGray,
                      border: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    "What's driving Oxford St's success?"
                  </div>
                  <div
                    className="sp-voice-orb"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: colors.forest,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.white}>
                      <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                    </svg>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                  {['Top sellers today', 'Compare stores', 'Staff schedule', 'Forecast'].map((suggestion, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: colors.white,
                        borderRadius: '16px',
                        fontSize: '11px',
                        color: colors.sage,
                        cursor: 'pointer',
                        border: '1px solid rgba(74, 124, 89, 0.2)',
                      }}
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <div style={{ fontSize: '11px', color: colors.warmGray, marginBottom: '8px' }}>Recent</div>
                <div style={{ fontSize: '12px', color: colors.charcoal, padding: '8px 0', borderBottom: `1px solid ${colors.cream}` }}>
                  "Why is Bank underperforming?"
                </div>
                <div style={{ fontSize: '12px', color: colors.charcoal, padding: '8px 0' }}>"Show me lunch vs dinner revenue"</div>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div
                style={{
                  padding: '16px',
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '11px', color: colors.warmGray, marginBottom: '4px' }}>UK Stores</div>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '24px', fontWeight: '600', color: colors.forest }}>11</div>
              </div>
              <div
                style={{
                  padding: '16px',
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '11px', color: colors.warmGray, marginBottom: '4px' }}>France</div>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '24px', fontWeight: '600', color: colors.forest }}>1</div>
              </div>
            </div>
          </div>

          {/* Store Locations Map - Spans both left columns */}
          <div style={{ gridColumn: 'span 2', backgroundColor: colors.white, borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    backgroundColor: colors.forest,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={colors.white}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.forest }}>Store Locations</div>
                  <div style={{ fontSize: '11px', color: colors.warmGray }}>11 locations across London</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: colors.sage }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.mint }}></span>
                All stores operational
              </div>
            </div>

            {/* Map Container */}
            <div style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#e8e4dc' }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.25%2C51.45%2C0.02%2C51.55&layer=mapnik"
                style={{ width: '100%', height: '100%', border: 'none', filter: 'saturate(0.8) contrast(1.1)' }}
                title="Store Locations Map"
              />

              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
                {mapMarkers.map((marker, i) => (
                  <div
                    key={i}
                    className="sp-map-marker"
                    style={{
                      position: 'absolute',
                      top: marker.top,
                      left: marker.left,
                      transform: 'translate(-50%, -100%)',
                      pointerEvents: 'auto',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50% 50% 50% 0',
                        backgroundColor: colors.forest,
                        transform: 'rotate(-45deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(26, 58, 47, 0.4)',
                      }}
                    >
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.white, transform: 'rotate(45deg)' }} />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.charcoal, marginBottom: '6px' }}>Store Network</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: colors.warmGray }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50% 50% 50% 0', backgroundColor: colors.forest, transform: 'rotate(-45deg)' }} />
                  Active Location
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  maxWidth: '220px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.sage}, ${colors.forest})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={colors.white}>
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div style={{ fontSize: '10px', color: colors.charcoal, lineHeight: 1.4 }}>
                  <strong>AI:</strong> Oxford Circus & Spitalfields clusters show highest lunch traffic
                </div>
              </div>
            </div>

            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {storeLocations.map((store, i) => (
                <div key={i} style={{ padding: '10px 12px', backgroundColor: colors.cream, borderRadius: '10px', fontSize: '11px' }}>
                  <div style={{ fontWeight: '500', color: colors.charcoal, marginBottom: '2px' }}>{store.name}</div>
                  <div style={{ color: colors.warmGray, fontSize: '10px' }}>{store.address.split(',')[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Opportunities Section */}
        <div style={{ marginTop: '24px', backgroundColor: colors.white, borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                className="sp-ai-badge"
                style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={colors.white}>
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: colors.forest, fontFamily: "'Fraunces', Georgia, serif" }}>
                  AI-Spotted Opportunities
                </div>
                <div style={{ fontSize: '12px', color: colors.warmGray }}>3 revenue opportunities identified this week</div>
              </div>
            </div>
            <div style={{ padding: '8px 16px', backgroundColor: colors.cream, borderRadius: '20px', fontSize: '12px', color: colors.sage, fontWeight: '500' }}>
              Potential: +£7.5k/month
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {aiOpportunities.map((opp, i) => (
              <div key={i} className="sp-opportunity-card" style={{ padding: '20px', backgroundColor: colors.cream, borderRadius: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: colors.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}
                  >
                    {opp.icon}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: colors.forest }}>{opp.title}</div>
                </div>
                <div style={{ fontSize: '13px', color: colors.charcoal, lineHeight: '1.5', marginBottom: '16px' }}>{opp.description}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: colors.sage, fontFamily: "'Fraunces', Georgia, serif" }}>{opp.impact}</div>
                  <div
                    style={{
                      padding: '6px 12px',
                      backgroundColor: colors.forest,
                      borderRadius: '16px',
                      fontSize: '11px',
                      color: colors.white,
                      fontWeight: '500',
                    }}
                  >
                    View details
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: colors.warmGray }}>
          <div>SP Command Centre • Built by P0STMAN</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colors.mint, animation: 'pulse 2s ease-in-out infinite' }}
              ></span>
              AI models active
            </span>
            <span>Data refreshed 2 mins ago</span>
          </div>
        </div>

        {/* Floating Voice Assistant Orb */}
        <div
          className="sp-voice-orb"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${colors.forest}, ${colors.sage})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(26, 58, 47, 0.3)',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px solid ${colors.sage}`,
              animation: 'ripple 2s ease-out infinite',
              opacity: 0.5,
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px solid ${colors.sage}`,
              animation: 'ripple 2s ease-out infinite 0.5s',
              opacity: 0.3,
            }}
          ></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={colors.white}>
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        </div>
      </div>
    </HelmetProvider>
  );
}
