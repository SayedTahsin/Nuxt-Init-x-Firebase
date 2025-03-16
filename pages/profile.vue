<script setup lang="ts">
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const { isUserFetching, user } = storeToRefs(userStore)

const userObject = computed(() => {
  return JSON.parse(JSON.stringify(user.value, null, 2))
})
</script>

<template>
  <div class="p-8">
    <h1 class="font-bold pb-4">
      User Object Provided by Firebase -{{ isUserFetching }}
    </h1>
    <preLoader v-if="isUserFetching" />
    <div v-else class="overflow-auto max-w-full">
      <div class="max-w-full">
        <pre class="whitespace-pre-wrap break-all max-w-full">{{
          userObject
        }}</pre>
      </div>
    </div>
  </div>
</template>
