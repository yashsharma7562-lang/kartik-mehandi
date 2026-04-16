import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDFCFB',
          100: '#FBF8F6',
          200: '#E6E1D3',
          300: '#C7BFA3',
          400: '#2F4F4F', // Henna Green
          500: '#2F4F4F', // Henna Green
          600: '#2F4F4F', // Henna Green
          700: '#1A2F2F', // Dark Henna
          800: '#012A26',
          900: '#001A18',
        },
        henna: {
          light: '#F4F7F7',
          DEFAULT: '#2F4F4F',
          dark: '#1A2F2F',
        },
        maroon: {
          light: '#A52A2A',
          DEFAULT: '#800000',
          dark: '#5A0000',
        },
        accent: {
          gold: '#D4AF37',
          bronze: '#A67C00',
          ivory: '#FDF5E6',
          maroon: '#800000',
          henna: '#2F4F4F',
        },
        background: {
          beige: '#FDF5E6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'Arial', 'sans-serif'],
        script: ['"Allura"', 'cursive'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        borderTrace: 'borderTrace 3s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        borderTrace: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(212, 175, 55, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(212, 175, 55, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
