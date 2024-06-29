/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        poppins: 'var(--ff-poppins)',
      },
      colors: {
        black: 'var(--black)',
        theme: {
        },
      },
    },
  },
  plugins: [],
}
