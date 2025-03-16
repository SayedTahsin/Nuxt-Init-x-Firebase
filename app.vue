<script setup lang="ts">
import preLoader from './components/preLoader.vue';

// const { isUserFetching } = useUserStore()

</script>

<template>
  <preLoader v-if="true" />
  <NuxtPage v-else />
</template>
