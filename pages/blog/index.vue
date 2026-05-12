<script setup lang="ts">

useHead({
  title: '博客 - TrendRadar 趋势雷达',
  meta: [
    { name: 'description', content: 'TrendRadar 博客，提供趋势发现技巧、工具使用教程和自媒体运营指南。了解如何利用 Google Trends、Reddit 等平台发现爆款选题。' }
  ]
})

const articles = [
  {
    id: '2026-self-media-tools',
    title: '2026 年自媒体人必备工具清单',
    excerpt: '作为一名自媒体人，信息获取效率直接决定了内容质量。本文精选32+款趋势监控工具，覆盖 Reddit 社区、Google Trends、Product Hunt 等平台，帮助你每天30分钟吃透全网趋势。',
    date: '2026-05-10',
    category: '工具推荐',
    readTime: '8 分钟'
  },
  {
    id: 'google-trends-tutorial',
    title: '如何用 Google Trends 发现爆款选题',
    excerpt: 'Google Trends 是免费且强大的趋势发现工具。本文详细介绍如何利用 Google Trends 的实时趋势、对比分析、地区筛选等功能，发现潜在的爆款选题内容。',
    date: '2026-05-08',
    category: '教程',
    readTime: '6 分钟'
  },
  {
    id: 'product-hunt-guide',
    title: 'Product Hunt 是什么，创业者如何用它找灵感',
    excerpt: 'Product Hunt 是全球最大的新产品发布平台，每天都有数百款新产品在这里首发。本文教你如何利用 Product Hunt 发现最新科技趋势、竞品动态和创新灵感。',
    date: '2026-05-06',
    category: '平台指南',
    readTime: '5 分钟'
  },
  {
    id: 'reddit-tutorial',
    title: 'Reddit 社区挖掘需求的完整教程',
    excerpt: 'Reddit 是全球最大的社区论坛之一，聚集了各行各业的真实用户讨论。本文详细介绍如何通过 Reddit 发现用户痛点、挖掘内容选题和建立个人品牌。',
    date: '2026-05-04',
    category: '教程',
    readTime: '10 分钟'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <NuxtLink to="/" class="text-indigo-500 hover:text-indigo-600">← 返回首页</NuxtLink>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-4">博客</h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 mt-2">趋势发现技巧、工具使用教程和自媒体运营指南</p>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="article in articles"
          :key="article.id"
          :to="`/blog/${article.id}`"
          class="block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-xs rounded-full font-medium">
              {{ article.category }}
            </span>
            <span class="text-xs text-slate-400">{{ article.readTime }}</span>
          </div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 hover:text-indigo-500 transition-colors">
            {{ article.title }}
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
            {{ article.excerpt }}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-slate-400">{{ article.date }}</span>
            <span class="text-indigo-500 text-sm font-medium">阅读更多 →</span>
          </div>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
