export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  app: {
    head: {
      title: 'TrendRadar - 趋势雷达 | 自媒体人信息导航',
      meta: [
        { name: 'description', content: '面向自媒体人的信息聚合导航页，每天30分钟吃透全网趋势' },
        { name: 'theme-color', content: '#6366F1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  ssr: true,
  nitro: {
    preset: 'static'
  }
})
