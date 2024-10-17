/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': { 'min': '768px', 'max': '938px' },  // Custom range,
        'smm': {'max': '724px' }
      },
    },
  },
  plugins: [],
}

