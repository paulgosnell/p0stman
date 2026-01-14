// SP Command Centre - AI First
// The AI briefs you. You don't interrogate dashboards.

const SPCommandCentre = ({ onInsightClick }) => {
  const [isListening, setIsListening] = useState(false);
  const [showDetail, setShowDetail] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiTyping, setAiTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAiTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const insights = [
    {
      id: 1,
      type: 'win',
      icon: '↑',
      title: 'Oxford St is flying',
      detail: 'AOV up 8% this week. The new protein bowl upsell prompt is working - 34% take rate.',
      confidence: 94,
      time: '2 hours ago',
      action: 'Keep it running. Consider rolling out to other stores?'
    },
    {
      id: 2,
      type: 'flag',
      icon: '⚡',
      title: 'Bank COGS crept up',
      detail: '33.2% vs your 30% target. Avocado supplier increased prices 12% last week.',
      confidence: 89,
      time: '6 hours ago',
      action: 'I found 2 alternative suppliers with similar quality ratings. Want me to pull the comparison?'
    },
    {
      id: 3,
      type: 'alert',
      icon: '!',
      title: 'Liverpool St had a rough lunch',
      detail: 'Complaints doubled yesterday. Pattern: order accuracy errors between 12-2pm.',
      confidence: 91,
      time: '14 hours ago',
      action: 'New team member started Monday. Might be worth a check-in with the manager.'
    }
  ];

  const suggestedPrompts = [
    "How did yesterday go?",
    "Prep me for my 10am",
    "Compare UK vs France",
    "What should I focus on today?"
  ];

  const getTypeStyles = (type) => {
    switch(type) {
      case 'win':
        return { bg: '#E8F5E9', border: '#4CAF50', accent: '#2E7D32', iconBg: '#4CAF50' };
      case 'flag':
        return { bg: '#FFF8E1', border: '#FFB300', accent: '#F57F17', iconBg: '#FFB300' };
      case 'alert':
        return { bg: '#FFEBEE', border: '#EF5350', accent: '#C62828', iconBg: '#EF5350' };
      default:
        return { bg: '#F5F5F5', border: '#9E9E9E', accent: '#616161', iconBg: '#9E9E9E' };
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F4F0 100%)',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Header - Minimal */}
      <header style={{
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: '#1B4D3E',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>🥗</div>
          <span style={{ 
            fontSize: '15px', 
            fontWeight: '600', 
            color: '#1B4D3E',
            letterSpacing: '-0.3px'
          }}>SP Command Centre</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            padding: '6px 12px',
            background: '#E8F5E9',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#2E7D32',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              background: '#4CAF50',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            Live
          </div>
          <div style={{
            width: '36px',
            height: '36px',
            background: '#1B4D3E',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600'
          }}>V</div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '0 24px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%'
      }}>
        
        {/* Greeting & Health Score */}
        <div style={{
          textAlign: 'center',
          padding: '40px 0 32px'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: '0 0 8px 0',
            fontWeight: '400'
          }}>
            {getGreeting()}, Vibhav
          </p>
          
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#1B4D3E',
            margin: '0 0 24px 0',
            letterSpacing: '-0.5px',
            lineHeight: '1.3'
          }}>
            {aiTyping ? (
              <span style={{ opacity: 0.5 }}>Analysing your business...</span>
            ) : (
              "Your business is healthy today."
            )}
          </h1>

          {!aiTyping && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '4px',
              padding: '16px 32px',
              background: '#1B4D3E',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(27, 77, 62, 0.2)'
            }}>
              <span style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'white',
                letterSpacing: '-2px',
                fontFamily: "'Fraunces', Georgia, serif"
              }}>87</span>
              <span style={{
                fontSize: '20px',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: '500'
              }}>/100</span>
            </div>
          )}

          {!aiTyping && (
            <p style={{
              fontSize: '13px',
              color: '#888',
              margin: '16px 0 0 0'
            }}>
              ↑ 3 points from yesterday
            </p>
          )}
        </div>

        {/* AI Insights */}
        {!aiTyping && (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '13px', color: '#888' }}>
                3 things I spotted overnight
              </span>
              <div style={{
                flex: 1,
                height: '1px',
                background: '#E0E0E0'
              }}></div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '32px'
            }}>
              {insights.map((insight) => {
                const styles = getTypeStyles(insight.type);
                const isExpanded = showDetail === insight.id;
                
                return (
                  <div
                    key={insight.id}
                    onClick={() => {
                      if (isExpanded && onInsightClick) {
                        onInsightClick();
                      } else {
                        setShowDetail(isExpanded ? null : insight.id);
                      }
                    }}
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '16px',
                      cursor: 'pointer',
                      borderLeft: `4px solid ${styles.border}`,
                      boxShadow: isExpanded 
                        ? '0 8px 30px rgba(0,0,0,0.12)' 
                        : '0 2px 8px rgba(0,0,0,0.04)',
                      transition: 'all 0.2s ease',
                      transform: isExpanded ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: styles.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>
                        {insight.icon}
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: '#1B4D3E',
                          margin: '0 0 4px 0'
                        }}>
                          {insight.title}
                        </h3>
                        
                        <p style={{
                          fontSize: '14px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '1.5'
                        }}>
                          {insight.detail}
                        </p>

                        {isExpanded && (
                          <div style={{
                            marginTop: '16px',
                            padding: '12px',
                            background: styles.bg,
                            borderRadius: '10px'
                          }}>
                            <p style={{
                              fontSize: '13px',
                              color: styles.accent,
                              margin: 0,
                              fontWeight: '500',
                              lineHeight: '1.5'
                            }}>
                              💡 {insight.action}
                            </p>
                          </div>
                        )}
                      </div>

                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '4px'
                      }}>
                        <span style={{
                          fontSize: '11px',
                          color: '#999'
                        }}>
                          {insight.confidence}% confident
                        </span>
                        <span style={{
                          fontSize: '18px',
                          color: '#CCC',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s'
                        }}>
                          ⌄
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Suggested Prompts */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '100px'
            }}>
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  style={{
                    padding: '10px 16px',
                    background: 'white',
                    border: '1px solid #E8E8E8',
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: '#555',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#1B4D3E';
                    e.target.style.color = 'white';
                    e.target.style.borderColor = '#1B4D3E';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#555';
                    e.target.style.borderColor = '#E8E8E8';
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Voice Button - Fixed Bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px 24px 32px',
        background: 'linear-gradient(180deg, transparent 0%, #F5F4F0 30%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <button
          onClick={() => setIsListening(!isListening)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: isListening 
              ? 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)' 
              : 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isListening
              ? '0 4px 20px rgba(239, 83, 80, 0.4)'
              : '0 4px 20px rgba(27, 77, 62, 0.3)',
            transition: 'all 0.2s ease',
            transform: isListening ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          {isListening ? (
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              background: 'white'
            }}></div>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z" fill="white"/>
              <path d="M17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z" fill="white"/>
            </svg>
          )}
        </button>
        
        <span style={{
          fontSize: '13px',
          color: isListening ? '#EF5350' : '#888'
        }}>
          {isListening ? 'Listening...' : 'Ask me anything'}
        </span>
      </div>

      {/* Subtle data refresh indicator */}
      <div style={{
        position: 'fixed',
        bottom: '12px',
        right: '12px',
        fontSize: '11px',
        color: '#BBB'
      }}>
        Data refreshed 2 mins ago
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700&display=swap');
      `}</style>
    </div>
  );
};

export default SPCommandCentre;
