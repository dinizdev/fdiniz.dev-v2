import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@clerk/nuxt'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
      IbmPlexMono: [400, 500, 600, 700]
    },
    display: 'swap'
  },
  
  // Clerk Configuration
  clerk: {
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    signInUrl: '/admin',
    signUpUrl: '/admin',
    afterSignInUrl: '/dashboard',
    afterSignUpUrl: '/dashboard'
  }
})
