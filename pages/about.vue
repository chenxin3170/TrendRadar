<script setup lang="ts">

useHead({
  title: '关于我们 - TrendRadar 趋势雷达',
  meta: [
    { name: 'description', content: '了解 TrendRadar 趋势雷达的使命和使用指南。面向自媒体人、内容创作者和求职者的信息聚合导航页，帮助您每天30分钟吃透全网趋势。' },
    { name: 'keywords', content: 'TrendRadar,趋势雷达,关于我们,自媒体工具,内容创作,趋势监控,信息聚合,自媒体导航,使用指南' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'TrendRadar 趋势雷达',
        'description': '面向自媒体人的信息聚合导航页，帮助用户每天30分钟吃透全网趋势。',
        'url': 'https://www.apppss.com/about'
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <NuxtLink to="/" class="text-indigo-500 hover:text-indigo-600">← 返回首页</NuxtLink>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-4">关于我们</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <section class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">TrendRadar 趋势雷达</h2>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            TrendRadar（趋势雷达）是一款面向自媒体人、内容创作者和求职者的信息聚合导航工具。我们的使命是帮助用户在每天30分钟内，全面掌握全网趋势动态。
          </p>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            在信息爆炸的时代，优质信息的获取成本越来越高。TrendRadar 精心筛选了32+个最具价值趋势监控信号源，覆盖 Reddit 社区讨论、Google Trends 搜索趋势、Product Hunt 新产品发布等多个维度，让您不再错过任何重要趋势。
          </p>
        </div>
      </section>

      <section class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">核心功能</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100 mb-1">智能筛选</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">按分类快速筛选，支持 Reddit 社区、Google Trends、Product Hunt 等多平台</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100 mb-1">收藏功能</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">收藏常用工具到收藏夹，方便快速访问</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100 mb-1">实时趋势</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">追踪最新热点话题，第一时间发现新兴趋势</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100 mb-1">移动适配</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">完美支持移动端，随时随地掌握趋势动态</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">使用指南</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">1</div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">浏览分类</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">使用顶部导航栏的分类标签，快速筛选感兴趣的领域</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">2</div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">搜索关键词</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">使用搜索功能，通过关键词快速找到相关工具</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">3</div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">收藏常用工具</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">点击卡片上的星标按钮，将常用工具添加到收藏夹</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 font-semibold">4</div>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">阅读博客</h3>
              <p class="text-sm text-slate-500 dark:text-slate-400">访问博客板块，获取趋势发现技巧和工具使用教程</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">联系我们</h2>
        <p class="text-slate-600 dark:text-slate-300 mb-4">
          如果您有任何问题或建议，欢迎通过以下方式联系我们：
        </p>
        <div class="space-y-2">
          <p class="text-slate-500 dark:text-slate-400">
            <span class="font-medium text-slate-700 dark:text-slate-300">提交站点：</span>
            <NuxtLink to="/?submit=true" class="text-indigo-500 hover:text-indigo-600">使用站点提交功能</NuxtLink>
          </p>
          <p class="text-slate-500 dark:text-slate-400">
            <span class="font-medium text-slate-700 dark:text-slate-300">GitHub：</span>
            <a href="https://github.com/chenxin3170/TrendRadar" target="_blank" rel="noopener noreferrer" class="text-indigo-500 hover:text-indigo-600">github.com/chenxin3170/TrendRadar</a>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
