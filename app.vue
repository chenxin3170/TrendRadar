<script setup lang="ts">
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    {
      rel: 'canonical',
      href: computed(() => {
        const path = route.path.endsWith('/') ? route.path : `${route.path}/`
        return `https://jz.apppss.com${path}`
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
