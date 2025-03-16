<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'

  const { login } = useUserStore()
  const router = useRouter()
  const setUser = async () => {
    await login()
    router.push('/')
  }
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-lg p-2">
      <button class="flex items-center gap-x-2" @click.stop="setUser">
        <Icon name="mdi:google" size="2em" style="color: bisque" />
        <p class="font-bold">Login with Google</p>
      </button>
    </div>
  </div>
</template>
