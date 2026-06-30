/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './404.html', './js/**/*.js', './data/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        void:        '#030305',
        cyan:        { 400: '#00f3ff', 500: '#00c3cc' },
        magenta:     { 400: '#bc13fe', 500: '#9b0fd3' },
        glass:       'rgba(10, 15, 30, 0.4)',
        glassBorder: 'rgba(0, 243, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
