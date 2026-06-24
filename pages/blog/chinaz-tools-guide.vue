<script setup lang="ts">

useHead({
  title: '站长工具 chinaz.com 完全指南：网站 SEO 优化的中文利器 - TrendRadar 趋势雷达',
  meta: [
    { name: 'description', content: '站长工具是国内知名的站长工具平台，提供 SEO 查询、备案查询、友链检测等实用功能，适合中文网站优化。' },
    { name: 'keywords', content: '站长工具,chinaz,SEO工具,网站SEO,SEO查询,站长之家,网站优化,友链检测,备案查询,百度权重' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': '站长工具 chinaz.com 完全指南：网站 SEO 优化的中文利器',
        'description': '站长工具是国内知名的站长工具平台',
        'url': 'https://panic-3170.github.io/TrendRadar/blog/chinaz-tools-guide',
        'datePublished': '2026-06-24',
        'author': {
          '@type': 'Organization',
          'name': 'TrendRadar'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'TrendRadar 趋势雷达',
          'url': 'https://panic-3170.github.io/TrendRadar'
        }
      })
    }
  ]
})

const relatedArticles = [
  { id: 'ahrefs-seo-guide', title: 'Ahrefs 完整使用指南：2026 年最强大的 SEO 外链分析工具' },
  { id: 'semrush-marketing-guide', title: 'Semrush 全面评测：一体化数字营销和 SEO 优化平台' },
  { id: '2026-self-media-tools', title: '2026 年自媒体人必备工具清单' }
]

const features = [
  { title: 'SEO 综合查询', desc: '百度权重、Google PR、网站年龄、收录数据等综合信息' },
  { title: '友链检测', desc: '批量查询友情链接，检测对方是否撤链、被降权' },
  { title: '关键词挖掘', desc: '百度指数查询、竞价查询、长尾关键词推荐' },
  { title: '备案查询', desc: '快速查询域名备案信息，了解网站背景' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <NuxtLink to="/" class="text-indigo-500 hover:text-indigo-600">← 返回首页</NuxtLink>
        <NuxtLink to="/blog" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-4">博客</NuxtLink>
        <div class="mt-6">
          <span class="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-xs rounded-full font-medium">工具评测</span>
          <span class="text-xs text-slate-400 ml-2">6 分钟阅读</span>
          <span class="text-xs text-slate-400 ml-2">2026-06-24</span>
        </div>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-4">站长工具 chinaz.com 完全指南：网站 SEO 优化的中文利器</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <article class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            <strong>站长工具</strong>（chinaz.com）是国内知名的<strong>站长工具平台</strong>，由站长之家创办。作为一款专为中文网站设计的 SEO 工具，它提供了丰富的网站数据查询功能，是国内站长和 SEO 从业者必备的工具之一。
          </p>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">核心功能详解</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div v-for="feature in features" :key="feature.title" class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <div class="font-semibold text-slate-900 dark:text-slate-100 mb-2">{{ feature.title }}</div>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ feature.desc }}</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">为什么选择站长工具？</h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
            <li><strong>中文友好</strong>：完全中文界面，更适合国内用户习惯</li>
            <li><strong>百度数据精准</strong>：针对百度搜索引擎优化的数据更准确</li>
            <li><strong>完全免费</strong>：大部分核心功能免费使用</li>
            <li><strong>本地化服务</strong>：支持备案查询等国内特有的功能</li>
          </ul>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">快速访问</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            站长工具官网地址：<a href="https://tool.chinaz.com" target="_blank" rel="noopener" class="text-indigo-500 hover:text-indigo-600">https://tool.chinaz.com</a>
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            通过 TrendRadar 的 <NuxtLink to="/sites/zhan-zhang-gong-ju-zhan-chang-zhang-zhi-jia" class="text-indigo-500 hover:text-indigo-600">站长工具站点页面</NuxtLink>，你可以快速访问这个实用的 SEO 工具。
          </p>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">总结</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            作为国内最老牌的<strong>站长工具</strong>平台，站长工具凭借其全面的功能和精准的<strong>百度 SEO 数据</strong>，一直是中文网站站长的首选。
          </p>
        </div>
      </article>

      <section class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">相关阅读</h2>
        <div class="space-y-3">
          <NuxtLink
            v-for="article in relatedArticles"
            :key="article.id"
            :to="`/blog/${article.id}`"
            class="block p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
          >
            <h3 class="font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-500 transition-colors">
              {{ article.title }}
            </h3>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
