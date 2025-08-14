// eslint-disable-next-line no-undef
(module.exports = {
  darkMode: "class", /* required for class-based dark mode */
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        moveBackground: 'moveBackground 10s linear infinite',
      },
    },
  },
  plugins: [],
})