<script setup lang="ts">

useHead({
  title: 'Semrush 全面评测：一体化数字营销和 SEO 优化平台 - TrendRadar 趋势雷达',
  meta: [
    { name: 'description', content: 'Semrush 是全球领先的数字营销和 SEO 优化平台，提供关键词研究、竞争对手分析、内容优化等全套工具。本文详细介绍 Semrush 功能和使用技巧。' },
    { name: 'keywords', content: 'Semrush,SEO工具,数字营销,关键词研究,竞争对手分析,内容优化,网站优化,Semrush使用教程,营销工具' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Semrush 全面评测：一体化数字营销和 SEO 优化平台',
        'description': 'Semrush 是全球领先的数字营销和 SEO 优化平台',
        'url': 'https://panic-3170.github.io/TrendRadar/blog/semrush-marketing-guide',
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
  { id: 'chinaz-tools-guide', title: '站长工具 chinaz.com 完全指南：网站 SEO 优化的中文利器' },
  { id: '2026-self-media-tools', title: '2026 年自媒体人必备工具清单' }
]

const features = [
  { title: 'Keyword Overview', desc: '全面的关键词数据：搜索量、难度分数、SERP分析、CPC数据' },
  { title: 'Domain Overview', desc: '快速了解任意网站的整体 SEO 表现和主要竞争对手' },
  { title: 'Traffic Analytics', desc: '深入了解网站流量来源、访问者地理分布、用户行为数据' },
  { title: 'SEO Content Template', desc: 'AI 驱动的内容优化功能，自动生成 SEO 内容建议' }
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
          <span class="text-xs text-slate-400 ml-2">8 分钟阅读</span>
          <span class="text-xs text-slate-400 ml-2">2026-06-24</span>
        </div>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-4">Semrush 全面评测：一体化数字营销和 SEO 优化平台</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <article class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            <strong>Semrush</strong> 是全球领先的<strong>数字营销</strong>和 <strong>SEO 优化</strong>平台。作为一款综合性的在线营销工具，Semrush 为超过 1000 万全球用户提供了从关键词研究、竞争对手分析到内容优化的全套解决方案。
          </p>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">核心功能详解</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div v-for="feature in features" :key="feature.title" class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <div class="font-semibold text-slate-900 dark:text-slate-100 mb-2">{{ feature.title }}</div>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ feature.desc }}</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">适用人群</h2>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
            <li><strong>SEO 专业人士</strong>：全面的 SEO 分析和监控</li>
            <li><strong>内容营销人员</strong>：内容规划和优化建议</li>
            <li><strong>广告投放人员</strong>：PPC 竞争对手分析</li>
            <li><strong>企业营销团队</strong>：品牌可见度管理和公关监测</li>
            <li><strong>电商卖家</strong>：竞品分析和选品调研</li>
          </ul>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">快速访问</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Semrush 官网地址：<a href="https://semrush.com" target="_blank" rel="noopener" class="text-indigo-500 hover:text-indigo-600">https://semrush.com</a>
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            通过 TrendRadar 的 <NuxtLink to="/sites/semrush" class="text-indigo-500 hover:text-indigo-600">Semrush 站点页面</NuxtLink>，你可以快速访问这个强大的数字营销平台。
          </p>

          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">总结</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Semrush</strong> 凭借其全面的功能和庞大的数据覆盖，已经成为<strong>数字营销</strong>领域的标杆工具。如果你需要一站式的<strong>在线营销解决方案</strong>，Semrush 绝对值得深入研究。
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
