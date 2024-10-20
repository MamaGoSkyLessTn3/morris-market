import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'
import { updateCartTotalPrice } from '@/lib/cart/update-cart-total-price'

export async function PATCH(req, { params }) {
	try {
		const id = Number(params.id)
		const data = await req.json()
		const token = cookies().get('cartToken')?.value

		if (!token) {
			console.log('Токена нет')
			return NextResponse.json({ errpr: 'Cart token not found' })
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id,
			},
		})

		if (!cartItem) {
			return NextResponse.json({ errpr: 'Cart item not found' })
		}

		await prisma.cartItem.update({
			where: {
				id: cartItem.id,
			},
			data: {
				quantity: data.quantity,
			},
		})

		const updatedUserCart = await updateCartTotalPrice(token)
		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_PATCH] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось обновить коризну' },
			{ status: 500 }
		)
	}
}

export async function DELETE(req, { params }) {
	try {
		const id = Number(params.id)
		const token = cookies().get('cartToken')?.value

		if (!token) {
			console.log('Токена нет')
			return NextResponse.json({ error: 'Cart token not found' }) // Исправлено
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id,
			},
		})

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart item not found' }) // Исправлено
		}

		// Удаляем товар из корзины
		await prisma.cartItem.delete({
			where: {
				id,
			},
		})

		// Обновляем общую сумму после удаления
		const updatedUserCart = await updateCartTotalPrice(token)

		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_DELETE] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось удалить товар из корзины' }, // Исправлено сообщение
			{ status: 500 }
		)
	}
}
