/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--primary-color-1)',
          2: 'var(--primary-color-2)',
          3: 'var(--primary-color-3)',
          4: 'var(--primary-color-4)',
          5: 'var(--primary-color-5)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}