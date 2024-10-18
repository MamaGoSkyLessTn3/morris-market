import { create } from 'zustand'

export const useCategoryStore = create(set => ({
	avtiveId: 1,
	setActiveId: id => set({ avtiveId: id }),
}))
