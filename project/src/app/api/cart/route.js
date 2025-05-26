import { NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'
import { cookies } from 'next/headers'
import { FindOrCreateCart } from '@/lib/cart/find-or-create-cart'
import { updateCartTotalPrice } from '@/lib/cart/update-cart-total-price'

export async function GET(req) {
	try {
		const token = cookies().get('cartToken')?.value

		if (!token) {
			console.log('Токена нет')
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				token: token,
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc',
					},
					include: {
						product: true,
					},
				},
			},
		})

		if (!userCart) {
			console.log('Корзина не найдена')
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		return NextResponse.json(userCart)
	} catch (e) {
		console.error('Ошибка при получении данных корзины:', e)
		return NextResponse.json(
			{ error: 'Ошибка при получении данных корзины' },
			{ status: 500 }
		)
	}
}

export async function POST(req) {
	try {
		let token = cookies().get('cartToken')?.value

		if (!token) {
			token = crypto.randomUUID()
		}

		const userCart = await FindOrCreateCart(token)

		const data = await req.json()

		const { productId } = data
		console.log('productId', productId)

		if (!productId) {
			console.error('Product ID не был передан')
			return NextResponse.json(
				{ error: 'Отсутствует идентификатор продукта' },
				{ status: 400 }
			)
		}

		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart.id,
				productId: data.productId,
			},
		})
		console.log('findCartItem отработал', findCartItem)

		if (findCartItem) {
			await prisma.cartItem.update({
				where: {
					id: findCartItem.id,
				},
				data: {
					quantity: findCartItem.quantity + 1,
				},
			})
		} else {
			await prisma.cartItem.create({
				data: {
					quantity: 1,
					cart: {
						connect: {
							id: userCart.id,
						},
					},
					product: {
						connect: {
							id: productId,
						},
					},
				},
			})
		}
		const updatedUserCart = await updateCartTotalPrice(token)

		const resp = NextResponse.json(updatedUserCart)

		resp.cookies.set('cartToken', token)
		return resp
	} catch (e) {
		console.error('[CART_POST] Server error', e)
		return NextResponse.json(
			{ error: 'Не удаллось создать корзину' },
			{ status: 500 }
		)
	}
}
