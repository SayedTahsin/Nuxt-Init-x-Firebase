<script setup lang="ts">
import { useUserStore } from '../stores/user'

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
const { isUserFetching, user } = storeToRefs(userStore)

const isDropdownOpen = ref(false)

const removeUser = () => {
    userStore.logout()
    router.push('/login')
}

const closeDropdown = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('#user-dropdown')) {
        isDropdownOpen.value = false
    }
}

onMounted(() => document.addEventListener('click', closeDropdown))
onBeforeUnmount(() => document.removeEventListener('click', closeDropdown))

const defaultProfile = `https://ui-avatars.com/api/?name=${user.value?.displayName}`

const getMenuOptions = () => {
    if (route.path === '/profile') return [{ name: 'Dashboard', path: '/' }]
    if (route.path === '/') return [{ name: 'Profile', path: '/profile' }]
    return [
        { name: 'Dashboard', path: '/' },
        { name: 'Profile', path: '/profile' }
    ]
}

const onOptionClicked = (option: { name: string; path: string }) => {
    router.push(option.path)
    isDropdownOpen.value = false
}
</script>

<template>
    <nav class="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
        <div class="flex items-center space-x-6">
            <h1 class="text-xl font-bold">
                <NuxtLink to="/">Nuxt-init</NuxtLink>
            </h1>
            <NuxtLink to="/about" class="text-gray-300 hover:text-white transition pl-4">About</NuxtLink>
        </div>

        <div v-if="route.path !== '/login'">
            <div v-if="isUserFetching" class="text-gray-400 text-center">
                Loading...
            </div>
            <div v-else class="flex items-center space-x-4">
                <div v-if="user" id="user-dropdown" class="relative">
                    <div class="flex items-center gap-2 cursor-pointer" @click="isDropdownOpen = !isDropdownOpen">
                        <img :src="user?.photoURL || defaultProfile" alt="User Image"
                            class="w-7 h-7 rounded-full border border-gray-700 object-cover"
                            @error="($event.target as HTMLImageElement).src = defaultProfile" />
                        <span class="hidden sm:block">{{
                            user?.displayName || 'User'
                            }}</span>
                    </div>
                    <div v-if="isDropdownOpen"
                        class="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        <button v-for="option in getMenuOptions()" :key="option.path"
                            class="block w-full text-left px-4 py-2 hover:bg-gray-700" @click="onOptionClicked(option)">
                            {{ option.name }}
                        </button>
                        <button class="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700"
                            @click="removeUser">
                            Logout
                        </button>
                    </div>
                </div>
                <div v-else>
                    <button class="bg-gray-700 font-bold hover:bg-gray-800 text-white px-6 rounded-lg transition"
                        @click="router.push('/login')">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
