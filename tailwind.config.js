/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08070B' // agora use "bg-primary"
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
}
