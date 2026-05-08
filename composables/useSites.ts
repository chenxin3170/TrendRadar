import { ref, computed } from 'vue'
import { sites, categories, type CategoryId, type Site } from '~/data/sites'
import { useFavorites } from './useFavorites'

const searchQuery = ref('')
const selectedCategory = ref<CategoryId | 'all' | 'favorites'>('all')

export function useSites() {
  const { getFavoriteSiteIds } = useFavorites()

  const filteredSites = computed(() => {
    let result = sites

    if (selectedCategory.value === 'favorites') {
      const favoriteIds = getFavoriteSiteIds()
      result = result.filter(site => favoriteIds.includes(site.id))
    } else if (selectedCategory.value !== 'all') {
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

  const setCategory = (category: CategoryId | 'all' | 'favorites') => {
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
