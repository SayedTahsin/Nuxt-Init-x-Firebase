import { useUserStore } from '../stores/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebase } from '~/composables/firebase'

export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter()
  const { setUser, setLoading } = useUserStore()
  const config = useRuntimeConfig()
  const { auth } = useFirebase(config)

  if (to.path === '/login') return

  onAuthStateChanged(auth, (user) => {
    setLoading(true)
    if (user) {
      setUser(user)
      return
    } else {
      if (to.path === '/about') {
        return
      }
      router.push('/login')
    }
  })
})
