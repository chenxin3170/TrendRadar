<script setup lang="ts">
import { ref, computed } from 'vue'
import { categories } from '~/data/sites'

const showModal = ref(false)
const isSubmitting = ref(false)

const form = ref({
  name: '',
  url: '',
  description: '',
  category: '',
  tags: [],
  reason: ''
})

const errors = ref<Record<string, string>>({})

const allTags = [
  '远程工作', '在线赚钱', '自由职业', '数字游民', '文案写作', '前端开发',
  '数据科学', 'AI', 'Web3', '创业', '营销', '设计', '产品', '技术', '内容'
]

const selectedTags = ref<string[]>([])

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else if (selectedTags.value.length < 3) {
    selectedTags.value.push(tag)
  }
}

const validateForm = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = '请输入站点名称'
  }

  if (!form.value.url.trim()) {
    errors.value.url = '请输入站点URL'
  } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/i.test(form.value.url)) {
    errors.value.url = '请输入有效的域名（如 example.com）'
  }

  if (!form.value.description.trim()) {
    errors.value.description = '请输入站点描述'
  } else if (form.value.description.length > 50) {
    errors.value.description = '描述不能超过50个字符'
  }

  if (!form.value.category) {
    errors.value.category = '请选择分类'
  }

  return Object.keys(errors.value).length === 0
}

const submitToGitHub = () => {
  if (!validateForm()) return

  isSubmitting.value = true

  const issueTitle = encodeURIComponent(`[站点收录申请] ${form.value.name}`)
  const tagsText = selectedTags.value.length > 0 ? selectedTags.value.join(', ') : '无'

  const issueBody = encodeURIComponent(`
**站点名称:** ${form.value.name}
**URL:** ${form.value.url}
**描述:** ${form.value.description}
**分类:** ${form.value.category}
**标签:** ${tagsText}
**推荐理由:** ${form.value.reason || '无'}

---

✅ 审核状态: 待审核
  `.trim())

  const url = `https://github.com/chenxin3170/TrendRadar/issues/new?title=${issueTitle}&body=${issueBody}`

  setTimeout(() => {
    window.open(url, '_blank')
    isSubmitting.value = false
    resetForm()
    showModal.value = false
  }, 500)
}

const resetForm = () => {
  form.value = {
    name: '',
    url: '',
    description: '',
    category: '',
    tags: [],
    reason: ''
  }
  selectedTags.value = []
  errors.value = {}
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  resetForm()
}

defineExpose({ openModal })
</script>

<template>
  <div>
    <button
      @click="openModal"
      class="w-10 h-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/25"
      title="提交站点"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div
              v-if="showModal"
              class="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  提交站点收录申请
                </h3>
                <button
                  @click="closeModal"
                  class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form @submit.prevent="submitToGitHub" class="p-6 space-y-5">
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    站点名称 <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="输入站点名称"
                    class="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    :class="{ 'border-red-500': errors.name }"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    站点 URL <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.url"
                    type="text"
                    placeholder="example.com"
                    class="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono text-sm"
                    :class="{ 'border-red-500': errors.url }"
                  />
                  <p v-if="errors.url" class="mt-1 text-sm text-red-500">{{ errors.url }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    站点描述 <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.description"
                    rows="2"
                    placeholder="用一句话描述这个站点（50字以内）"
                    class="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    :class="{ 'border-red-500': errors.description }"
                  ></textarea>
                  <p v-if="errors.description" class="mt-1 text-sm text-red-500">{{ errors.description }}</p>
                  <p v-else class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    已输入 {{ form.description.length }}/50 字符
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    分类 <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.category"
                    class="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    :class="{ 'border-red-500': errors.category }"
                  >
                    <option value="">请选择分类</option>
                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                      {{ cat.name }}
                    </option>
                  </select>
                  <p v-if="errors.category" class="mt-1 text-sm text-red-500">{{ errors.category }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    标签（最多3个）
                  </label>
                  <div class="flex flex-wrap gap-2">
                    <button
                      v-for="tag in allTags"
                      :key="tag"
                      type="button"
                      @click="toggleTag(tag)"
                      class="px-3 py-1.5 text-sm rounded-full transition-all"
                      :class="[
                        selectedTags.includes(tag)
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      ]"
                    >
                      {{ tag }}
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    推荐理由（选填）
                  </label>
                  <textarea
                    v-model="form.reason"
                    rows="3"
                    placeholder="说说你为什么推荐这个站点..."
                    class="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    提交后将跳转到 GitHub Issues，确认后完成申请
                  </p>
                  <div class="flex gap-3">
                    <button
                      type="button"
                      @click="closeModal"
                      class="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="px-5 py-2.5 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 rounded-lg transition-colors shadow-lg shadow-indigo-500/25 disabled:shadow-none"
                    >
                      <span v-if="isSubmitting" class="flex items-center gap-2">
                        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </span>
                      <span v-else>提交到 GitHub</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
