<script setup lang="ts">
import { sites, categories } from '~/data/sites'

const route = useRoute()
const site = computed(() => {
  return sites.find(s => s.id === route.params.id)
})

useHead({
  title: () => site.value ? `${site.value.name} - TrendRadar 趋势雷达` : '站点未找到',
  meta: [
    {
      name: 'description',
      content: () => site.value ? `${site.value.description} - 自媒体人必备工具推荐，访问 TrendRadar 获取更多趋势监控信号源。` : ''
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': site.value?.name,
        'description': site.value?.description,
        'url': `https://www.apppss.com/sites/${route.params.id}`,
        'publisher': {
          '@type': 'WebSite',
          'name': 'TrendRadar 趋势雷达',
          'url': 'https://www.apppss.com'
        }
      }))
    }
  ]
})

const relatedSites = computed(() => {
  if (!site.value) return []
  return sites.filter(s => s.category === site.value!.category && s.id !== site.value!.id).slice(0, 3)
})

const categoryInfo = computed(() => {
  if (!site.value) return null
  return categories.find(c => c.id === site.value!.category)
})

const categoryIcons: Record<string, string> = {
  reddit: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
  trend: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  tech: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  content: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  data: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  social: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
  cn: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
}

const categoryColors: Record<string, string> = {
  reddit: 'bg-orange-500/10 text-orange-500',
  trend: 'bg-pink-500/10 text-pink-500',
  tech: 'bg-blue-500/10 text-blue-500',
  content: 'bg-green-500/10 text-green-500',
  data: 'bg-yellow-500/10 text-yellow-500',
  social: 'bg-purple-500/10 text-purple-500',
  cn: 'bg-red-500/10 text-red-500'
}
</script>

<template>
  <div v-if="site" class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <NuxtLink to="/" class="text-indigo-500 hover:text-indigo-600">← 返回首页</NuxtLink>
        <NuxtLink to="/sites" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-4">查看所有工具</NuxtLink>

        <div class="flex items-center gap-4 mt-6">
          <div class="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
            <svg class="w-8 h-8 text-slate-600 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path :d="categoryIcons[site.category] || categoryIcons.tech" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {{ site.name }}
            </h1>
            <p class="text-lg text-slate-500 dark:text-slate-400 mt-1">
              {{ site.description }}
            </p>
          </div>
        </div>

        <a
          :href="site.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-6 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/25"
        >
          访问 {{ site.name }} →
        </a>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <section class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">工具简介</h2>
        <p class="text-slate-600 dark:text-slate-300">{{ site.description }}</p>

        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in site.tags"
            :key="tag"
            :class="categoryColors[site.category]"
            class="px-3 py-1 rounded-full text-sm font-medium"
          >
            {{ tag }}
          </span>
        </div>

        <div v-if="categoryInfo" class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <span class="text-sm text-slate-500 dark:text-slate-400">分类：</span>
          <NuxtLink
            :to="`/?category=${categoryInfo.id}`"
            class="text-indigo-500 hover:text-indigo-600 font-medium"
          >
            {{ categoryInfo.name }}
          </NuxtLink>
        </div>
      </section>

      <section v-if="relatedSites.length > 0" class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">相关工具</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NuxtLink
            v-for="related in relatedSites"
            :key="related.id"
            :to="`/sites/${related.id}`"
            class="block p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
          >
            <h3 class="font-medium text-slate-900 dark:text-slate-100">{{ related.name }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{{ related.description }}</p>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>

  <div v-else class="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">站点未找到</h1>
      <NuxtLink to="/sites" class="text-indigo-500 hover:text-indigo-600 mt-4 inline-block">
        查看所有工具 →
      </NuxtLink>
    </div>
  </div>
</template>
