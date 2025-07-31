import { defineNuxtConfig } from 'nuxt/config'; 

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

console.log('✅ nuxt.config.ts carregado com compatibilityDate 2025-07-30')
