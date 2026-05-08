<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-FP96X2GXER',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FP96X2GXER');
      `,
      type: 'text/javascript'
    },
    {
      charset: 'UTF-8',
      id: 'LA_COLLECT',
      src: '//sdk.51.la/js-sdk-pro.min.js'
    },
    {
      innerHTML: `
        LA.init({id:"3Ps2xqfhfzK7S9Mn",ck:"3Ps2xqfhfzK7S9Mn"})
      `,
      type: 'text/javascript'
    }
  ]
})
</script>

<template>
  <div></div>
</template>
