<template>
  <div class="flex flex-col min-h-screen">
    <NavbarComponent class="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900" />
    <div class="flex-1 pt-16">
      <NuxtPage />
    </div>
    <FooterComponent class="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 text-center py-2" />
  </div>
</template>
