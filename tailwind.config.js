/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
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