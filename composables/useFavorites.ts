import { ref, watch, onMounted } from 'vue'

export interface FavoriteSite {
  siteId: string
  addedAt: number
}

const STORAGE_KEY = 'trendradar_favorites'

const favorites = ref<FavoriteSite[]>([])

export function useFavorites() {
  const loadFavorites = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        favorites.value = JSON.parse(stored)
      }
    } catch {
      favorites.value = []
    }
  }

  const saveFavorites = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
    } catch {
      console.error('Failed to save favorites')
    }
  }

  const isFavorite = (siteId: string) => {
    return favorites.value.some(f => f.siteId === siteId)
  }

  const toggleFavorite = (siteId: string) => {
    const index = favorites.value.findIndex(f => f.siteId === siteId)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push({
        siteId,
        addedAt: Date.now()
      })
    }
  }

  const getFavoriteSiteIds = () => {
    return favorites.value.map(f => f.siteId)
  }

  const removeFavorite = (siteId: string) => {
    const index = favorites.value.findIndex(f => f.siteId === siteId)
    if (index > -1) {
      favorites.value.splice(index, 1)
    }
  }

  const clearFavorites = () => {
    favorites.value = []
  }

  watch(favorites, saveFavorites, { deep: true })

  onMounted(loadFavorites)

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    getFavoriteSiteIds,
    removeFavorite,
    clearFavorites
  }
}
