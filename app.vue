<script setup lang="ts">
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    {
      rel: 'canonical',
      href: computed(() => `https://www.apppss.com${route.path}`)
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
