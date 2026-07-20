/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fcfaf5',
          100: '#f8f4eb',
          200: '#f6eedb', // Primary background (cream)
          300: '#eddcb8',
          400: '#e1c68e',
          DEFAULT: '#f6eedb',
        },
        olive: {
          50: '#f5f7f2',
          100: '#e7ede0',
          200: '#cedbc1',
          300: '#aac195',
          400: '#84a269',
          500: '#3b442b', // Primary accent/text (olive green)
          600: '#515e3c',
          700: '#3e482f',
          750: '#333b26', // Custom dark olive
          800: '#2b3221', // Custom darker olive
          850: '#22271a', // Custom even darker olive
          900: '#191d13', // Custom deepest olive
          950: '#0f110b', // Custom near black olive
          DEFAULT: '#67764d',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        mono: ['"Space Mono"', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px rgba(103, 118, 77, 1)',
        'brutalist-cream': '4px 4px 0px 0px rgba(246, 238, 219, 1)',
      }
    },
  },
  plugins: [],
}
