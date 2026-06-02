<script setup lang="ts">
import type { CategoryId } from '~/data/sites'

const {
  filteredSites,
  searchQuery,
  selectedCategory,
  setCategory,
  setSearchQuery
} = useSites()

const handleCategoryChange = (category: CategoryId | 'all' | 'favorites') => {
  setCategory(category)
}

const handleSearchChange = (query: string) => {
  setSearchQuery(query)
}

useHead({
  title: 'TrendRadar - 趋势雷达 | 自媒体人信息导航',
  meta: [
    { name: 'description', content: '面向自媒体人的信息聚合导航页，每天30分钟吃透全网趋势' },
    { name: 'keywords', content: '趋势监控,自媒体工具,内容创作,选题灵感,趋势发现,Reddit,Google Trends,Product Hunt,信息聚合,自媒体导航' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-900 dark:text-slate-100">
                TrendRadar
              </h1>
              <p class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                趋势雷达
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <nav class="hidden md:flex items-center gap-4 mr-4">
              <NuxtLink to="/blog" class="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">博客</NuxtLink>
              <NuxtLink to="/about" class="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">关于</NuxtLink>
            </nav>
            <div class="md:hidden flex items-center gap-3">
              <NuxtLink to="/blog" class="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">博客</NuxtLink>
            </div>
            <SiteSubmission />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <section class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          每日30分钟，吃透全网趋势
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          面向自媒体人、内容创作者和求职者的信息聚合导航页，快速访问20+个趋势监控信号源
        </p>
      </section>

      <SearchBar
        :model-value="searchQuery"
        @update:model-value="handleSearchChange"
      />

      <CategoryTabs
        :model-value="selectedCategory"
        @update:model-value="handleCategoryChange"
      />

      <div
        v-if="filteredSites.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <SiteCard
          v-for="site in filteredSites"
          :key="site.id"
          :site="site"
        />
      </div>

      <div
        v-else
        class="text-center py-16"
      >
        <svg
          class="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-slate-500 dark:text-slate-400 text-lg">
          {{ selectedCategory === 'favorites' ? '还没有收藏任何站点' : '未找到匹配的站点' }}
        </p>
        <p class="text-slate-400 dark:text-slate-500 text-sm mt-2">
          {{ selectedCategory === 'favorites' ? '点击站点卡片上的星标收藏喜欢的站点' : '尝试调整搜索关键词或筛选条件' }}
        </p>
      </div>

      <div class="md:hidden mt-8 py-6 border-t border-slate-200 dark:border-slate-700">
        <NuxtLink to="/about" class="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          关于我们
        </NuxtLink>
      </div>

      <Footer />
      <Analytics />
    </main>
  </div>
</template>
