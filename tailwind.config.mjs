const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 1.5s ease-in',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-2rem)' },
          '50%': { opacity: 50 },
          '100%': { opacity: 100 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [
    createThemes({
      'gruvbox-dark': {
        primary: '#d79921',
        'primary-variant': '#665c54',
        secondary: '#ebdbb2',
        'secondary-variant': '#212121',
        background: '#282828',
      },

      'solarized-dark': {
        primary: '#859900',
        'primary-variant': '#2aa198',
        secondary: '#268bd2',
        'secondary-variant': '#00222b',
        background: '#002b36',
      },
    }),
  ],
};
