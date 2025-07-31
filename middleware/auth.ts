export default defineNuxtRouteMiddleware((to) => {
  const { isSignedIn } = useAuth()
  
  // Se não estiver logado e tentar acessar rota protegida
  if (!isSignedIn.value && to.path.startsWith('/dashboard')) {
    return navigateTo('/admin')
  }
  
  // Se estiver logado e tentar acessar página de login
  if (isSignedIn.value && to.path === '/admin') {
    return navigateTo('/dashboard')
  }
}) 