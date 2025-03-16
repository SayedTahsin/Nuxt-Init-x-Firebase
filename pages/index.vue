<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  const userStore = useUserStore()
  const { isUserFetching } = storeToRefs(userStore)
</script>
<template>
  <ClientOnly>
    <div class="flex items-center justify-center">
      <preLoader v-if="isUserFetching" />
      <div v-else class="bg-white p-8 rounded-lg w-full max-w-3xl">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <p class="text-gray-600 text-lg">Welcome to your protected dashboard!</p>
      </div>
    </div>
  </ClientOnly>
</template>
