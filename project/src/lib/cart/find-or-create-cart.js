import { prisma } from '../../../prisma/prisma-client'

export const FindOrCreateCart = async token => {
	let userCart = await prisma.cart.findFirst({
		where: {
			token,
		},
	})

	if (!userCart) {
		userCart = await prisma.cart.create({
			data: {
				token,
			},
		})
	}

	return userCart
}
