/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#FAF8F5',
          elevated: '#F5F3ED',
          deep: '#EDE8DC',
          dark: '#1F2A20',
        },
        accent: {
          DEFAULT: '#3A5A40',
          hover: '#2D4530',
          soft: '#DDE5D8',
          pale: '#EEF2EB',
        },
        text: {
          primary: '#1F2A20',
          secondary: '#3D4A3F',
          muted: '#5C6B5E',
          inverse: '#FAF8F5',
        },
        border: {
          subtle: '#E8E2D5',
          DEFAULT: '#D4CDB8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        body: ['18px', { lineHeight: '1.7' }],
        lead: ['22px', { lineHeight: '1.5' }],
        h3: ['24px', { lineHeight: '1.3' }],
        'h2-mobile': ['32px', { lineHeight: '1.15' }],
        h2: ['44px', { lineHeight: '1.1' }],
        'h1-mobile': ['44px', { lineHeight: '1.05' }],
        h1: ['64px', { lineHeight: '1.05' }],
        display: ['80px', { lineHeight: '1.0' }],
      },
      boxShadow: {
        product: 'drop-shadow(0 10px 30px rgba(58,90,64,0.10)) drop-shadow(0 30px 60px rgba(58,90,64,0.08))',
        card: '0 1px 2px rgba(31,42,32,0.04), 0 4px 12px rgba(31,42,32,0.04)',
        'card-hover': '0 4px 8px rgba(31,42,32,0.06), 0 12px 32px rgba(31,42,32,0.08)',
        cta: '0 4px 14px rgba(58,90,64,0.25), 0 1px 3px rgba(58,90,64,0.15)',
        'cta-hover': '0 8px 24px rgba(58,90,64,0.30), 0 2px 6px rgba(58,90,64,0.20)',
      },
      spacing: {
        section: '128px',
        'section-mobile': '80px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
