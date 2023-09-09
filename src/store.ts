import { create } from 'zustand'

interface StoreState {
  items: number
  increase: (by: number) => void
}

interface TotalCost {
  totalCost: number
  increaseTotal: (by: number) => void
  decreaseTotal: (by: number) => void
}

export const useItemStore = create<StoreState>()((set) => ({
  items: 0,
  totalCost: 0,
  increase: (by) =>
    set((state) => ({ items: state.items + by })),
}))


export const useTotalCost = create<TotalCost>()((set) => ({
  totalCost: 0,
  increaseTotal: (by) => set(state => ({totalCost: state.totalCost + by})),
  decreaseTotal: (by) => set(state => ({totalCost: state.totalCost - by})),
}))
