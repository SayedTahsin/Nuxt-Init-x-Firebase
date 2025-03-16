import { defineStore } from 'pinia'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useFirebase } from '~/composables/firebase'
import type { User } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const config = useRuntimeConfig()
  const { auth, provider } = useFirebase(config)

  const user = ref<User | null>(null)
  const isUserFetching = ref(false)

  const login = async () => {
    isUserFetching.value = true
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
    } catch (error) {
      console.error('Login Error:', error)
    }
    isUserFetching.value = false
  }

  const logout = async () => {
    await signOut(auth)
    user.value = null
  }

  const setUser = async (userData: User | null) => {
    isUserFetching.value = true
    user.value = userData
    isUserFetching.value = false
  }
  const setLoading = (value: boolean) => {
    isUserFetching.value = value
  }
  return { user, isUserFetching, login, logout, setUser, setLoading }
})
