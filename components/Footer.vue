<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-16 py-8 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-center sm:text-left">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            每天30分钟，吃透全网趋势
          </p>
          <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">
            最后更新：2026-05-08 | v1.0
          </p>
        </div>
        <div class="text-center sm:text-right">
          <p class="text-xs text-slate-400 dark:text-slate-500">
            Made with ❤️ for content creators
          </p>
          <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">
            © {{ currentYear }} 聚栈. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
