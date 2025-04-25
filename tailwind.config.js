/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
