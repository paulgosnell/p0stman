// SP Command Centre - Product Deep Dive
// Three dashboards: Menu Performance, Store Quality, Customer Insights
// AI-informed hero sections with drill-down capability

// Lucide-style icons as inline SVGs
const Icons = {
  Mic: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>
    </svg>
  ),
  Bot: ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
    </svg>
  ),
  BarChart: ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),
  List: ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  ),
  UtensilsCrossed: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/>
      <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/>
      <path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>
    </svg>
  ),
  Star: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  MessageCircle: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
    </svg>
  ),
  MapPin: ({ size = 12, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Circle: ({ size = 8, color = 'currentColor', fill = 'none' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
};

const SPProductDeepDive = ({ onBack }) => {
  const [activeTab, setActiveTab] = React.useState('menu');
  const [viewMode, setViewMode] = React.useState('chart');
  const [meetingMode, setMeetingMode] = React.useState(false);
  const [selectedStore, setSelectedStore] = React.useState(null);

  // ============ MENU PERFORMANCE DATA ============
  const menuHealth = {
    score: 82,
    trend: '+4',
    topMover: 'Chicken Protein Bowl',
    concern: 'Winter Root Salad declining 3 weeks straight'
  };

  const performers = {
    top: [
      { rank: 1, name: 'Chicken Protein Bowl', units: 2847, revenue: '£37,011', change: '+12%', aov: '£13.00' },
      { rank: 2, name: 'Classic Caesar', units: 2341, revenue: '£25,751', change: '+8%', aov: '£11.00' },
      { rank: 3, name: 'Falafel Mezze', units: 1892, revenue: '£20,812', change: '+15%', aov: '£11.00' },
      { rank: 4, name: 'Salmon Poke Bowl', units: 1654, revenue: '£24,810', change: '+3%', aov: '£15.00' },
      { rank: 5, name: 'Vegan Buddha Bowl', units: 1423, revenue: '£17,076', change: '+22%', aov: '£12.00' },
    ],
    bottom: [
      { rank: 46, name: 'Tuna Nicoise', units: 89, revenue: '£1,068', change: '-18%', aov: '£12.00' },
      { rank: 47, name: 'Winter Root Salad', units: 76, revenue: '£836', change: '-24%', aov: '£11.00' },
      { rank: 48, name: 'Beetroot Goat Cheese', units: 54, revenue: '£594', change: '-31%', aov: '£11.00' },
      { rank: 49, name: 'Quinoa Detox', units: 43, revenue: '£473', change: '-8%', aov: '£11.00' },
      { rank: 50, name: 'Green Goddess', units: 31, revenue: '£341', change: '-42%', aov: '£11.00' },
    ]
  };

  const categoryAOV = [
    { name: 'Protein Bowls', aov: 13.20, change: '+4.2%', volume: 8420 },
    { name: 'Signature Salads', aov: 10.80, change: '+1.8%', volume: 12340 },
    { name: 'Build Your Own', aov: 14.60, change: '+6.1%', volume: 3210 },
    { name: 'Wraps', aov: 9.40, change: '-0.5%', volume: 2890 },
  ];

  const proteinVsSalads = {
    protein: { revenue: 142340, units: 10780, share: 43 },
    salads: { revenue: 148920, units: 13420, share: 57 }
  };

  // ============ STORE QUALITY DATA ============
  const qualityScore = {
    overall: 91,
    trend: '+2',
    topStore: 'Canary Wharf',
    concern: 'Liverpool St complaints up 40%'
  };

  const stores = [
    { name: 'Canary Wharf', score: 97, complaints: 8, orders: 2890, audit: 98, trend: 'up' },
    { name: 'Shoreditch', score: 96, complaints: 6, orders: 2340, audit: 96, trend: 'up' },
    { name: 'Bank', score: 94, complaints: 12, orders: 3420, audit: 94, trend: 'stable' },
    { name: 'Kings Cross', score: 93, complaints: 9, orders: 2670, audit: 93, trend: 'up' },
    { name: 'Holborn', score: 91, complaints: 15, orders: 3890, audit: 91, trend: 'stable' },
    { name: 'Oxford Circus', score: 89, complaints: 14, orders: 3200, audit: 88, trend: 'down' },
    { name: 'Liverpool St', score: 84, complaints: 22, orders: 4120, audit: 86, trend: 'down' },
  ];

  const recentComplaints = [
    { store: 'Liverpool St', issue: 'Wrong order - chicken instead of falafel', time: '2 hours ago', status: 'open' },
    { store: 'Liverpool St', issue: 'Long wait time (25 mins)', time: '3 hours ago', status: 'open' },
    { store: 'Oxford Circus', issue: 'Cold food on delivery', time: '5 hours ago', status: 'resolved' },
    { store: 'Holborn', issue: 'Missing drink from order', time: '6 hours ago', status: 'resolved' },
  ];

  // ============ CUSTOMER INSIGHTS DATA ============
  const insightsScore = {
    nps: 72,
    trend: '+5',
    highlight: 'Speed of service rated 4.6/5',
    concern: 'Vegan options requested by 23% of respondents'
  };

  const sentimentBreakdown = {
    positive: 68,
    neutral: 22,
    negative: 10
  };

  const recentFeedback = [
    { source: 'Google Review', rating: 5, text: 'Best salads in London! The protein bowl is incredible.', store: 'Shoreditch', time: '1 day ago' },
    { source: 'NPS Survey', rating: 9, text: 'Love the app, ordering is so easy. Would like more vegan protein options.', store: 'Online', time: '2 days ago' },
    { source: 'In-store', rating: 3, text: 'Food was good but waited 20 minutes at lunch.', store: 'Liverpool St', time: '2 days ago' },
    { source: 'Trustpilot', rating: 4, text: 'Great quality, prices are a bit high but worth it.', store: 'General', time: '3 days ago' },
  ];

  // ============ RENDER FUNCTIONS ============

  const renderMenuPerformance = () => (
    <div style={{ padding: '0 20px 100px' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '24px',
        color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Menu Health Score</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '56px', fontWeight: '700', letterSpacing: '-2px' }}>{menuHealth.score}</span>
              <span style={{ fontSize: '18px', opacity: 0.7 }}>/100</span>
              <span style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                fontSize: '13px'
              }}>↑ {menuHealth.trend} this week</span>
            </div>
          </div>
          <button
            onClick={() => setMeetingMode(!meetingMode)}
            style={{
              padding: '10px 16px',
              background: meetingMode ? '#EF5350' : 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {meetingMode ? <><Icons.Circle size={8} fill="#fff" color="#fff" /> Recording</> : <><Icons.Mic size={14} color="white" /> Start Meeting</>}
          </button>
        </div>

        <div style={{
          padding: '16px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <span style={{ opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Icons.Bot size={14} /> AI Summary:</span> {menuHealth.topMover} is your star this week (+12%). Keep an eye on {menuHealth.concern}.
        </div>

        {meetingMode && (
          <div style={{
            marginTop: '16px',
            padding: '12px 16px',
            background: 'rgba(239, 83, 80, 0.2)',
            borderRadius: '10px',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#EF5350',
              borderRadius: '50%',
              animation: 'pulse 1.5s infinite'
            }}></span>
            Listening to your meeting... Notes will be captured automatically.
          </div>
        )}
      </div>

      {/* View Toggle */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          background: '#F0F0F0',
          borderRadius: '8px',
          padding: '3px'
        }}>
          {['chart', 'table'].map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                background: viewMode === mode ? 'white' : 'transparent',
                color: viewMode === mode ? '#1B4D3E' : '#888',
                fontSize: '13px',
                fontWeight: viewMode === mode ? '600' : '400',
                cursor: 'pointer',
                boxShadow: viewMode === mode ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>{mode === 'chart' ? <><Icons.BarChart size={14} /> Chart</> : <><Icons.List size={14} /> Table</>}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top & Bottom Performers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        {/* Top 5 */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
            ↑ Top 5 This Month
          </h3>
          {viewMode === 'chart' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {performers.top.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: '#888', width: '20px' }}>#{item.rank}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#333', marginBottom: '4px' }}>{item.name}</div>
                    <div style={{
                      height: '8px',
                      background: '#E8F5E9',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${(item.units / 3000) * 100}%`,
                        background: 'linear-gradient(90deg, #4CAF50, #81C784)',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: '#4CAF50',
                    fontWeight: '600'
                  }}>{item.change}</span>
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #EEE' }}>
                  <th style={{ textAlign: 'left', padding: '8px 4px', color: '#888', fontWeight: '500' }}>#</th>
                  <th style={{ textAlign: 'left', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Product</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Units</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Revenue</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>MoM</th>
                </tr>
              </thead>
              <tbody>
                {performers.top.map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F5F5F5' }}>
                    <td style={{ padding: '10px 4px', color: '#888' }}>{item.rank}</td>
                    <td style={{ padding: '10px 4px', fontWeight: '500', color: '#333' }}>{item.name}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#666' }}>{item.units.toLocaleString()}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#666' }}>{item.revenue}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#4CAF50', fontWeight: '600' }}>{item.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Bottom 5 */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
            ↓ Bottom 5 This Month
          </h3>
          {viewMode === 'chart' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {performers.bottom.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: '#888', width: '20px' }}>#{item.rank}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#333', marginBottom: '4px' }}>{item.name}</div>
                    <div style={{
                      height: '8px',
                      background: '#FFEBEE',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${(item.units / 100) * 100}%`,
                        background: 'linear-gradient(90deg, #EF5350, #E57373)',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    color: '#EF5350',
                    fontWeight: '600'
                  }}>{item.change}</span>
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #EEE' }}>
                  <th style={{ textAlign: 'left', padding: '8px 4px', color: '#888', fontWeight: '500' }}>#</th>
                  <th style={{ textAlign: 'left', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Product</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Units</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>Revenue</th>
                  <th style={{ textAlign: 'right', padding: '8px 4px', color: '#888', fontWeight: '500' }}>MoM</th>
                </tr>
              </thead>
              <tbody>
                {performers.bottom.map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F5F5F5' }}>
                    <td style={{ padding: '10px 4px', color: '#888' }}>{item.rank}</td>
                    <td style={{ padding: '10px 4px', fontWeight: '500', color: '#333' }}>{item.name}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#666' }}>{item.units}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#666' }}>{item.revenue}</td>
                    <td style={{ padding: '10px 4px', textAlign: 'right', color: '#EF5350', fontWeight: '600' }}>{item.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* AOV by Category */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        marginBottom: '24px'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
          AOV by Category
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {categoryAOV.map((cat, i) => (
            <div key={i} style={{
              padding: '16px',
              background: '#FAFAF8',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>{cat.name}</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#1B4D3E' }}>£{cat.aov.toFixed(2)}</div>
              <div style={{
                fontSize: '12px',
                color: cat.change.startsWith('+') ? '#4CAF50' : '#EF5350',
                fontWeight: '600',
                marginTop: '4px'
              }}>{cat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Protein vs Salads */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
          Protein Bowls vs Salads
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              height: '40px',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${proteinVsSalads.protein.share}%`,
                background: 'linear-gradient(90deg, #1B4D3E, #2E7D5E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Protein {proteinVsSalads.protein.share}%
              </div>
              <div style={{
                width: `${proteinVsSalads.salads.share}%`,
                background: 'linear-gradient(90deg, #81C784, #A5D6A7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4D3E',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Salads {proteinVsSalads.salads.share}%
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
              <div style={{ fontSize: '13px', color: '#666' }}>
                £{(proteinVsSalads.protein.revenue / 1000).toFixed(0)}k · {proteinVsSalads.protein.units.toLocaleString()} units
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                £{(proteinVsSalads.salads.revenue / 1000).toFixed(0)}k · {proteinVsSalads.salads.units.toLocaleString()} units
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoreQuality = () => (
    <div style={{ padding: '0 20px 100px' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '24px',
        color: 'white'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Overall Quality Score</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '56px', fontWeight: '700', letterSpacing: '-2px' }}>{qualityScore.overall}</span>
            <span style={{ fontSize: '18px', opacity: 0.7 }}>/100</span>
            <span style={{
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '12px',
              fontSize: '13px'
            }}>↑ {qualityScore.trend} this week</span>
          </div>
        </div>

        <div style={{
          padding: '16px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <span style={{ opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Icons.Bot size={14} /> AI Summary:</span> {qualityScore.topStore} is leading the pack. Heads up: {qualityScore.concern}. Might be worth a check-in.
        </div>
      </div>

      {/* Store Grid */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        marginBottom: '24px'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
          All Stores
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
          {stores.map((store, i) => (
            <div
              key={i}
              onClick={() => setSelectedStore(selectedStore === i ? null : i)}
              style={{
                padding: '16px',
                background: selectedStore === i ? '#1B4D3E' : '#FAFAF8',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: store.score < 90 ? '2px solid #FFB300' : '2px solid transparent'
              }}
            >
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: selectedStore === i ? 'white' : (store.score >= 95 ? '#4CAF50' : store.score >= 90 ? '#1B4D3E' : '#FFB300'),
                marginBottom: '4px'
              }}>{store.score}</div>
              <div style={{
                fontSize: '13px',
                fontWeight: '500',
                color: selectedStore === i ? 'rgba(255,255,255,0.9)' : '#333'
              }}>{store.name}</div>
              <div style={{
                fontSize: '11px',
                color: selectedStore === i ? 'rgba(255,255,255,0.7)' : '#888',
                marginTop: '4px'
              }}>
                {store.complaints} complaints · {store.orders.toLocaleString()} orders
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Complaints */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: 0 }}>
            Recent Complaints
          </h3>
          <span style={{
            padding: '4px 10px',
            background: '#FFF8E1',
            borderRadius: '12px',
            fontSize: '12px',
            color: '#F57F17',
            fontWeight: '500'
          }}>2 open</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recentComplaints.map((complaint, i) => (
            <div key={i} style={{
              padding: '14px',
              background: '#FAFAF8',
              borderRadius: '10px',
              borderLeft: `3px solid ${complaint.status === 'open' ? '#FFB300' : '#4CAF50'}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1B4D3E' }}>{complaint.store}</span>
                <span style={{ fontSize: '11px', color: '#888' }}>{complaint.time}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: '1.4' }}>{complaint.issue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCustomerInsights = () => (
    <div style={{ padding: '0 20px 100px' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '24px',
        color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Net Promoter Score</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '56px', fontWeight: '700', letterSpacing: '-2px' }}>{insightsScore.nps}</span>
              <span style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                fontSize: '13px'
              }}>↑ {insightsScore.trend} this month</span>
            </div>
          </div>
          
          {/* Sentiment Mini Chart */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', opacity: 0.7, margin: '0 0 8px 0' }}>Sentiment</p>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{
                width: '60px',
                height: '8px',
                background: '#4CAF50',
                borderRadius: '4px 0 0 4px'
              }}></div>
              <div style={{
                width: '20px',
                height: '8px',
                background: '#FFB300'
              }}></div>
              <div style={{
                width: '10px',
                height: '8px',
                background: '#EF5350',
                borderRadius: '0 4px 4px 0'
              }}></div>
            </div>
            <p style={{ fontSize: '11px', opacity: 0.7, margin: '4px 0 0 0' }}>68% positive</p>
          </div>
        </div>

        <div style={{
          padding: '16px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          fontSize: '14px',
          lineHeight: '1.6',
          marginTop: '20px'
        }}>
          <span style={{ opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Icons.Bot size={14} /> AI Summary:</span> {insightsScore.highlight}. Note: {insightsScore.concern} — worth considering for Q2 menu.
        </div>
      </div>

      {/* Recent Feedback */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E', margin: '0 0 16px 0' }}>
          Recent Feedback
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {recentFeedback.map((feedback, i) => (
            <div key={i} style={{
              padding: '16px',
              background: '#FAFAF8',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    padding: '4px 10px',
                    background: feedback.rating >= 4 ? '#E8F5E9' : feedback.rating >= 3 ? '#FFF8E1' : '#FFEBEE',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: feedback.rating >= 4 ? '#2E7D32' : feedback.rating >= 3 ? '#F57F17' : '#C62828'
                  }}>
                    {'★'.repeat(Math.min(feedback.rating, 5))}{'☆'.repeat(Math.max(0, 5 - feedback.rating))}
                  </span>
                  <span style={{ fontSize: '12px', color: '#888' }}>{feedback.source}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#AAA' }}>{feedback.time}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                "{feedback.text}"
              </p>
              <span style={{ fontSize: '12px', color: '#888', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Icons.MapPin size={12} /> {feedback.store}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAFAF8',
      fontFamily: "'DM Sans', -apple-system, sans-serif"
    }}>
      {/* Header */}
      <header style={{
        padding: '16px 20px',
        background: 'white',
        borderBottom: '1px solid #F0F0F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBack}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: 'none',
              background: '#F5F5F5',
              cursor: 'pointer',
              fontSize: '18px'
            }}>←</button>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#1B4D3E' }}>Product Deep Dive</span>
        </div>
        <div style={{
          padding: '6px 12px',
          background: '#E8F5E9',
          borderRadius: '20px',
          fontSize: '12px',
          color: '#2E7D32',
          fontWeight: '500'
        }}>
          Live
        </div>
      </header>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        padding: '0 20px',
        background: 'white',
        borderBottom: '1px solid #F0F0F0'
      }}>
        {[
          { id: 'menu', label: 'Menu' },
          { id: 'quality', label: 'Quality' },
          { id: 'insights', label: 'Insights' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '14px 8px',
              border: 'none',
              background: 'transparent',
              borderBottom: activeTab === tab.id ? '2px solid #1B4D3E' : '2px solid transparent',
              color: activeTab === tab.id ? '#1B4D3E' : '#888',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? '600' : '400',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            {tab.id === 'menu' && <Icons.UtensilsCrossed size={16} />}
            {tab.id === 'quality' && <Icons.Star size={16} />}
            {tab.id === 'insights' && <Icons.MessageCircle size={16} />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ paddingTop: '20px' }}>
        {activeTab === 'menu' && renderMenuPerformance()}
        {activeTab === 'quality' && renderStoreQuality()}
        {activeTab === 'insights' && renderCustomerInsights()}
      </div>

      {/* Voice Button */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <button style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(27, 77, 62, 0.3)'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z"/>
            <path d="M17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z"/>
          </svg>
        </button>
        <span style={{ fontSize: '12px', color: '#888' }}>Ask anything</span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};
