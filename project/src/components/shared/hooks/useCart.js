import { useCartStore } from '@/store/cart'
import { useCallback, useEffect } from 'react'
import { useStore } from 'zustand'

export const useCart = () => {
	const items = useStore(useCartStore, state => state.items)
	const totalAmount = useStore(useCartStore, state => state.totalAmount)
	const loading = useStore(useCartStore, state => state.loading)
	const getCartItems = useStore(useCartStore, state => state.getCartItems)
	const updateItemQuantity = useStore(
		useCartStore,
		state => state.updateItemQuantity
	)
	const removeCartItem = useStore(useCartStore, state => state.removeCartItem)
	const addCartItem = useCartStore(state => state.addCartItem)

	const memoizedGetCartItems = useCallback(() => {
		getCartItems()
	}, [getCartItems])

	useEffect(() => {
		memoizedGetCartItems()
	}, [memoizedGetCartItems])

	return {
		totalAmount,
		items,
		loading,
		updateItemQuantity,
		removeCartItem,
		addCartItem,
	}
}
