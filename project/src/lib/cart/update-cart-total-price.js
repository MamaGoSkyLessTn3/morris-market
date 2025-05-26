import { prisma } from '../../../prisma/prisma-client'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export const updateCartTotalPrice = async token => {
	const userCart = await prisma.cart.findFirst({
		where: {
			token,
		},
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	})

	if (!userCart) {
		return
	}

	const totalAmount = userCart.items.reduce((acc, item) => {
		return acc + calcCartItemTotalPrice(item)
	}, 0)

	return await prisma.cart.update({
		where: {
			id: userCart.id,
		},
		data: {
			totalAmount,
		},
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	})
}
