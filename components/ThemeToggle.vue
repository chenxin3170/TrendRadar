<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const colorMode = useColorMode()
const showMenu = ref(false)

const currentMode = computed(() => colorMode.value)

const modes = [
  { id: 'light', name: '浅色模式', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { id: 'dark', name: '深色模式', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
  { id: 'system', name: '跟随系统', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
]

const setMode = (mode: string) => {
  colorMode.preference = mode
  showMenu.value = false
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const closeMenu = () => {
  showMenu.value = false
}

const handleSystemChange = (e: MediaQueryListEvent) => {
  if (colorMode.preference === 'system') {
    colorMode.value = e.matches ? 'dark' : 'light'
  }
}

let mediaQuery: MediaQueryList | null = null

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemChange)
  
  if (colorMode.preference === 'system') {
    colorMode.value = mediaQuery.matches ? 'dark' : 'light'
  }
})

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemChange)
  }
})

watch(colorMode.preference, (newVal) => {
  if (newVal === 'system' && mediaQuery) {
    colorMode.value = mediaQuery.matches ? 'dark' : 'light'
  }
})
</script>

<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      class="relative p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
      :aria-label="currentMode === 'dark' ? '切换到浅色模式' : currentMode === 'system' ? '切换主题模式' : '切换到深色模式'"
    >
      <svg
        v-if="currentMode === 'dark'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg
        v-else-if="currentMode === 'system'"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <svg
        v-else
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="showMenu"
        class="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-50"
        @click.self="closeMenu"
      >
        <button
          v-for="mode in modes"
          :key="mode.id"
          @click="setMode(mode.id)"
          class="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          :class="{ 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400': colorMode.preference === mode.id }"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mode.icon" />
          </svg>
          {{ mode.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>
