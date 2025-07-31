import { useClerk, useUser } from '@clerk/nuxt'

export function useAuth() {
  const { isSignedIn, signIn, signOut } = useClerk()
  const { user } = useUser()
  
  return {
    isSignedIn,
    signIn,
    signOut,
    user
  }
}
