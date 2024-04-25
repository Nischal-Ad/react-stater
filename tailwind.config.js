/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--ff-poppins)',
      },
      colors: {
        theme: {
          white: 'var(--white)',
          black: 'var(--black)',
        },
      },
    },
  },
  plugins: [],
}
