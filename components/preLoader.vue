<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="w-12 h-12 border-4 border-t-blue-500 rounded-full animate-spin" />
  </div>
</template>

<style scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
