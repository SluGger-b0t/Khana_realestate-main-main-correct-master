/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbarBackground: '#35374B',
        navtextclr: '#D7E4C0',
        abttextclr: '#787a91',
      },
    },
  },
  plugins: [],
}
