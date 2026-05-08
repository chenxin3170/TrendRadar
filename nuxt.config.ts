export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@kevinmarrec/nuxt-pwa'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  pwa: {
    manifest: {
      name: 'TrendRadar',
      short_name: 'TrendRadar',
      description: '趋势雷达 - 面向自媒体人的信息聚合导航页',
      theme_color: '#6366F1',
      background_color: '#0F172A',
      display: 'standalone',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: 'TrendRadar - 趋势雷达 | 自媒体人信息导航',
      meta: [
        { name: 'description', content: '面向自媒体人的信息聚合导航页，每天30分钟吃透全网趋势' },
        { name: 'theme-color', content: '#6366F1' },
        { name: 'og:title', content: 'TrendRadar - 趋势雷达 | 自媒体人信息导航' },
        { name: 'og:description', content: '面向自媒体人的信息聚合导航页，每天30分钟吃透全网趋势' },
        { name: 'og:url', content: 'https://www.apppss.com/' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TrendRadar - 趋势雷达 | 自媒体人信息导航' },
        { name: 'twitter:description', content: '面向自媒体人的信息聚合导航页，每天30分钟吃透全网趋势' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/manifest.json' },
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
