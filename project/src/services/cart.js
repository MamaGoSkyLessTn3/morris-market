import { axiosInstance } from './axios'

export const getCart = async () => {
	const { data } = await axiosInstance.get('/api/cart')

	return data
}
export const updateItemQuantity = async (id, quantity) => {
	const { data } = await axiosInstance.patch('/api/cart/' + id, { quantity })

	return data
}

export const removeCartItem = async id => {
	const { data } = await axiosInstance.delete('/api/cart/' + id)

	return data
}

export const addCartItem = async productId => {
	const { data } = await axiosInstance.post('/api/cart/', { productId })
	console.log('azips get', productId)

	return data
}
