/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FFF8F5',
          cream: '#FFF5EB',
          peach: '#FFF0E6',
        },
        rose: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
        },
        sage: {
          50: '#F0F5F0',
          100: '#DCE5DC',
          200: '#B8CCB8',
          400: '#6B9E6B',
          500: '#4A7C4A',
          600: '#3A6B3A',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        txt: {
          primary: '#2D2A26',
          body: '#5C5650',
          muted: '#8A847C',
          light: '#B0A99F',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['2.25rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h2': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'h3': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'micro': ['0.6875rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(139,109,92,0.06)',
        'sm': '0 2px 4px rgba(139,109,92,0.08)',
        'md': '0 4px 12px rgba(139,109,92,0.10)',
        'lg': '0 8px 24px rgba(139,109,92,0.12)',
        'xl': '0 16px 48px rgba(139,109,92,0.14)',
      },
      keyframes: {
        'pulse-fire': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-bounce': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-fire': 'pulse-fire 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'scale-bounce': 'scale-bounce 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
