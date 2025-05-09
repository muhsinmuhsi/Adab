/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Vibrant blue
          dark: '#1D4ED8',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald green
          dark: '#059669',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          dark: '#D97706',
          light: '#FCD34D',
        },
        dark: {
          DEFAULT: '#1F2937',
          light: '#4B5563',
        },
        light: {
          DEFAULT: '#F9FAFB',
          dark: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}