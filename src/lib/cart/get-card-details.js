import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export function getCardDetails(data) {
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.product.name,
		imageUrl: item.product.imageURL,
		price: calcCartItemTotalPrice(item),
		description: item.product.description,
		disabled: false,
	}))
	const totalAmount = items.reduce((acc, item) => acc + item.price, 0)
	return {
		items,
		totalAmount: totalAmount,
	}
}
