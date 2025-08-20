/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      colors: {
        // Premium flat color palette
        premium: {
          black: '#000000',
          charcoal: '#111827',
          'gray-900': '#111827',
          'gray-800': '#1f2937',
          'gray-700': '#374151',
          'gray-600': '#4b5563',
          'gray-500': '#6b7280',
          'gray-400': '#9ca3af',
          'gray-300': '#d1d5db',
          'gray-200': '#e5e7eb',
          'gray-100': '#f3f4f6',
          white: '#ffffff',
          // Blue accents
          'blue-600': '#2563eb',
          'blue-500': '#3b82f6',
          'blue-400': '#60a5fa',
          'cyan-500': '#06b6d4',
          'cyan-400': '#22d3ee',
          // Purple gradients
          'purple-600': '#7c3aed',
          'purple-500': '#8b5cf6',
          // Success indicators
          'green-500': '#10b981',
          'green-400': '#34d399',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-up-delayed': 'fadeInUp 0.8s ease-out 0.2s both',
        'fade-in-up-slow': 'fadeInUp 1.2s ease-out',
        'hover-lift': 'hoverLift 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        hoverLift: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-4px)',
          },
        },
        pulseSubtle: {
          '0%, 100%': {
            opacity: '0.8',
          },
          '50%': {
            opacity: '0.9',
          },
        },
      },
      backdropBlur: {
        'premium': '16px',
      },
      boxShadow: {
        'flat': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'flat-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'premium': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #000000 0%, #111827 50%, #1f2937 100%)',
        'premium-gradient-subtle': 'linear-gradient(135deg, #000000 0%, #111827 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.8',
            fontSize: '1.125rem',
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#93C5FD',
              },
              textDecoration: 'none',
            },
            strong: {
              fontWeight: '600',
            },
            h1: {
              fontSize: '2.25rem',
              marginBottom: '2rem',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '1.4',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: 'rgba(209, 213, 219, 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.25rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.25rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            blockquote: {
              borderLeftColor: '#60A5FA',
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
        invert: {
          css: {
            color: '#D1D5DB', // Light gray for dark mode text
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#93C5FD',
              },
            },
            strong: {
              color: '#F3F4F6', // Very light gray for emphasis
            },
            h1: {
              color: '#F9FAFB', // Almost white for headings
            },
            h2: {
              color: '#F9FAFB',
            },
            h3: {
              color: '#F9FAFB',
            },
            h4: {
              color: '#F9FAFB',
            },
            code: {
              color: '#F3F4F6',
            },
            blockquote: {
              color: '#D1D5DB',
              borderLeftColor: '#60A5FA',
              backgroundColor: 'rgba(96, 165, 250, 0.05)',
            },
            figcaption: {
              color: '#9CA3AF',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
            hr: {
              borderColor: '#374151',
            },
            ol: {
              li: {
                '&::marker': {
                  color: '#9CA3AF',
                },
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: '#9CA3AF',
                },
              },
            },
            thead: {
              color: '#F9FAFB',
              borderBottomColor: '#4B5563',
            },
            tbody: {
              tr: {
                borderBottomColor: '#374151',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};