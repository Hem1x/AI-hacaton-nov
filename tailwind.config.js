/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        neon: '0px 2px 10px #ccc',
      },
      boxShadow: {
        block: '0px 4px 4px 0px #0000002B',
      },
    },
  },
  plugins: [],
};
