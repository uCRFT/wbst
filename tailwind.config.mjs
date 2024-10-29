/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dbf0db',
          200: '#bae2bc',
          300: '#8fcf92',
          400: '#60b565',
          500: '#3f9644',
          600: '#2f7834',
          700: '#275e2b',
          800: '#234b26',
          900: '#1e3e22',
        }
      }
    },
  },
  plugins: [],
}