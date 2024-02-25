const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
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
