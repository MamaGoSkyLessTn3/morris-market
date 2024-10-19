import { create } from 'zustand'

export const useSearch = create(set => ({
	query: '',
	searched: '',
	setQuery: query => set({ query }),
	setSearched: searched => set({ searched }),
}))
