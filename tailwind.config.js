/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'var(--ff-nunito)',
        poppins: 'var(--ff-poppins)',
        quicksand: 'var(--ff-quicksand)',
      },
      colors: {
        custom: {
          white: 'var(--white)',
          black: 'var(--black)',
        },
      },
    },
  },
  plugins: [],
}
