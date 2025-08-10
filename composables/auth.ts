import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware(() => {
  const { user } = useUser()
  if (!user.value) return navigateTo('/admin')
})
