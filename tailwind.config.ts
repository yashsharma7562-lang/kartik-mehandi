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
          400: '#8E9970', // Olive Light
          500: '#4B5A3C', // Olive Dark
          600: '#045D56', // Emerald
          700: '#023D38', // Forest Green
          800: '#012A26',
          900: '#001A18',
        },
        accent: {
          gold: '#D4AF37',
          bronze: '#A67C00',
          ivory: '#F9F7F2',
          forest: '#023D38',
          emerald: '#045D56',
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
