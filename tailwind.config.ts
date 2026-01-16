import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          50: '#e6f2f2',
          100: '#b3d9d9',
          200: '#80c0c0',
          300: '#4da6a6',
          400: '#268f8f',
          500: '#0D4D4D', // Main brand color - Deep teal
          600: '#0b4444',
          700: '#093838',
          800: '#072c2c',
          900: '#051f1f',
        },
        // Warm sand tones
        sand: {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#E8DDD4', // Main sand color
          300: '#d9cbbf',
          400: '#c9b8a8',
          500: '#b9a591',
          600: '#a9927a',
          700: '#8a7763',
          800: '#6b5c4d',
          900: '#4c4136',
        },
        // Terracotta accents
        terracotta: {
          50: '#fdf5f1',
          100: '#f9e6dc',
          200: '#f2ccb8',
          300: '#e6a989',
          400: '#C17F59', // Main terracotta
          500: '#a86a47',
          600: '#8e5639',
          700: '#73452e',
          800: '#593524',
          900: '#3f251a',
        },
        // Cream backgrounds
        cream: {
          50: '#FFFDF9',
          100: '#FFF9F0',
          200: '#FEF5E7',
          300: '#FCF0DB',
          400: '#F9E8CC',
        },
      },
      fontFamily: {
        heading: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0D4D4D 0%, #1a6b6b 50%, #0D4D4D 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(13, 77, 77, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(13, 77, 77, 0.15)',
        'float': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
