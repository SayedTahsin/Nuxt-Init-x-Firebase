import { defineStore } from 'pinia'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useFirebase } from '~/composables/firebase'
import type { User } from 'firebase/auth'

const config = useRuntimeConfig()
const { auth, provider } = useFirebase(config)

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>()
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
    return user
  }
  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      return true
    } catch {
      return false
    }
  }
  return { user, isUserFetching, login, logout }
})
