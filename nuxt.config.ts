import { sites } from './data/sites'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'zh-CN' },
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&display=swap' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-FP96X2GXER', async: true },
        { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FP96X2GXER');", type: 'text/javascript' },
        { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' },
        { innerHTML: 'LA.init({id:"3Ps4XpG1BaKxTj3W",ck:"3Ps4XpG1BaKxTj3W"})', type: 'text/javascript' }
      ]
    }
  },
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sites',
        '/about',
        '/blog',
        '/blog/2026-self-media-tools',
        '/blog/google-trends-tutorial',
        '/blog/product-hunt-guide',
        '/blog/reddit-tutorial',
        ...sites.map(site => `/sites/${site.id}`)
      ]
    }
  }
})
