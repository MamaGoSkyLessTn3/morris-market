import { getCardDetails } from '@/lib/cart/get-card-details'
import { Api } from '../services/api-client'
import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
	items: [],
	error: false,
	loading: true,
	totalAmount: 0,

	handleError: error => {
		console.error(error)
		set({ error: true, loading: false })
	},

	getCartItems: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.getCart()
			const { items, totalAmount } = getCardDetails(data)
			set({ items, totalAmount })
		} catch (error) {
			get().handleError(error)
		} finally {
			set({ loading: false })
		}
	},

	updateItemQuantity: async (id, quantity) => {
		const prevItems = get().items
		try {
			set(state => ({
				loading: true,
				error: false,
				items: state.items.map(item =>
					item.id === id ? { ...item, quantity } : item
				),
			}))

			const data = await Api.cart.updateItemQuantity(id, quantity)
			const { items, totalAmount } = getCardDetails(data)
			set({ items, totalAmount })
		} catch (error) {
			set({ items: prevItems }) // Откатываем изменения
			get().handleError(error)
		} finally {
			set({ loading: false })
		}
	},

	removeCartItem: async id => {
		const prevItems = get().items
		try {
			set(state => ({
				loading: true,
				error: false,
				items: state.items.map(
					item => (item.id === id ? { ...item, disabled: true } : item) // Отключаем элемент
				),
			}))

			const data = await Api.cart.removeCartItem(id)
			const { items, totalAmount } = getCardDetails(data)

			set({ items, totalAmount }) // Обновляем состояние только после успешного удаления
		} catch (error) {
			set({ items: prevItems }) // Откатываем изменения
			get().handleError(error)
		} finally {
			set(state => ({
				loading: false,
				items: state.items.map(item => ({ ...item, disabled: false })), // Восстанавливаем состояние
			}))
		}
	},

	addCartItem: async productId => {
		try {
			set({ loading: true, error: false })

			const data = await Api.cart.addCartItem(productId)
			const { items, totalAmount } = getCardDetails(data)
			set({ items, totalAmount })
		} catch (error) {
			get().handleError(error)
		} finally {
			set({ loading: false })
		}
	},
}))
