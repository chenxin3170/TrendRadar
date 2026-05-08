import { ref, computed } from 'vue'
import { sites, categories, type CategoryId, type Site } from '~/data/sites'

const searchQuery = ref('')
const selectedCategory = ref<CategoryId | 'all'>('all')

export function useSites() {
  const filteredSites = computed(() => {
    let result = sites

    if (selectedCategory.value !== 'all') {
      result = result.filter(site => site.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      result = result.filter(site =>
        site.name.toLowerCase().includes(query) ||
        site.description.toLowerCase().includes(query) ||
        site.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return result
  })

  const setCategory = (category: CategoryId | 'all') => {
    selectedCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const clearSearch = () => {
    searchQuery.value = ''
  }

  return {
    sites,
    categories,
    filteredSites,
    searchQuery,
    selectedCategory,
    setCategory,
    setSearchQuery,
    clearSearch
  }
}
