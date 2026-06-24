<script setup lang="ts">
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    {
      rel: 'canonical',
      href: computed(() => `https://panic-3170.github.io/TrendRadar${route.path}`)
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
