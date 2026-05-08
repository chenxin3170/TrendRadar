<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const clearInput = () => {
  emit('update:modelValue', '')
  inputRef.value?.focus()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    clearInput()
  }
}

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === '/' && document.activeElement !== inputRef.value) {
      e.preventDefault()
      inputRef.value?.focus()
    }
  })
})
</script>

<template>
  <div class="relative mb-8">
    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <svg
        class="w-5 h-5 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      ref="inputRef"
      type="text"
      :value="modelValue"
      @input="handleInput"
      @keydown="handleKeydown"
      placeholder="搜索站点名称、描述或标签... (按 / 聚焦，Esc 清空)"
      class="w-full pl-12 pr-12 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm"
    />
    <button
      v-if="modelValue"
      @click="clearInput"
      class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
    >
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
