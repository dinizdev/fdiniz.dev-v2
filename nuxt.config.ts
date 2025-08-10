import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/google-fonts', '@clerk/nuxt'],
  postcss: { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } },

  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
      IbmPlexMono: [400, 500, 600, 700]
    },
    display: 'swap'
  },

  runtimeConfig: {
    // server only
    clerkSecretKey: '',

    public: {
      // client-safe (virá das envs NUXT_PUBLIC_*)
      clerkPublishableKey: '',
      clerkSignInUrl: '',
      clerkSignUpUrl: '',
      clerkAfterSignInUrl: '',
      clerkAfterSignUpUrl: ''
    }
  },

  // (opcional) passar para o módulo via runtimeConfig
  clerk: {
    // o módulo já lê NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY por padrão,
    // mas se quiser explicitar:
    // publishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY  // <-- NÃO usar assim
    // Correto:
    // publishableKey: undefined  // deixe o módulo pegar das envs
  }
})
