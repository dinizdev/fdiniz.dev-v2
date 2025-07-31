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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      },
      colors: {
        primary: '#08070B' // agora você pode usar bg-primary, text-primary, etc
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif']
      }
    }
  }
}
