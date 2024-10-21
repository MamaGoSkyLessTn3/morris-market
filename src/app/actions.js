'use server'

import { OrderStatus } from '@prisma/client'
import { prisma } from '../../prisma/prisma-client'
import { cookies } from 'next/headers'
import { Resend } from 'resend'
import { sendEmail } from '@/lib/send-email'
import { PayOrderTemplate } from '@/components/shared/email/pay-oreder'
import { getUserSession } from '@/lib/get-user-session'
import { hashSync } from 'bcrypt'
import { Logs } from 'lucide-react'
import { VerificationUserTemplate } from '@/components/shared/email/verification-code'

export async function createOrder(data) {
	try {
		const cookieStore = cookies()
		const cartToken = cookieStore.get('cartToken')?.value

		if (!cartToken) {
			throw new Error('Cart token not found')
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						product: true,
					},
				},
			},
			where: {
				token: cartToken,
			},
		})

		if (!userCart) {
			throw new Error('Cart not found')
		}

		if (userCart.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
				cartId: userCart.id,
			},
		})

		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0,
			},
		})

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id,
			},
		})

		// Сделать создание ссылки оплаты
		//

		sendEmail(
			data.email,
			'MorrisMarket | Оплатите заказ №' + order.id,
			PayOrderTemplate({
				orderId: order.id,
				fullName: data.fullName,
				totalAmount: order.totalAmount,
				paymentUrl: 'https://resend.com/api-keys',
			})
		)
		const url = 'https://resend.com/api-keys'

		return url
	} catch (error) {
		console.error('Create Order Server Error', error)
	}
}

export async function updateUserInfo(body) {
	try {
		const currnetUser = await getUserSession()

		if (!currnetUser) {
			throw new Error('User not found')
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(currentUser.id),
			},
		})

		await prisma.user.update({
			where: {
				id: Number(currnetUser.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password
					? hashSync(body.password, 10)
					: findUser.password,
			},
		})
	} catch (error) {
		console.log(error)
		throw error
	}
}

export async function registerUser(body) {
	console.log('Регистрация пользователя с данными:', body) // Логируем входящие данные

	try {
		// Проверяем, существует ли уже пользователь с таким email
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		})


		// Если пользователь существует и подтвержден
		if (user) {
			if (!user.verified) {
				throw new Error('Почта не подтверждена')
			}
			throw new Error('Пользователь уже существует')
		}

		// Проверяем, есть ли пароль
		if (!body.password) {
			throw new Error('Пароль не может быть пустым')
		}

		// Создаем нового пользователя
		const createdUser = await prisma.user.create({
			data: {
				fullName: body.fullName,
				email: body.email,
				password: hashSync(body.password, 10), // Хешируем пароль перед сохранением
				verified: new Date(), // Сразу ставим пользователя как "подтвержден"
			},
		})


		// Возвращаем успех с созданным пользователем
		return { ok: true, user: createdUser }
	} catch (error) {
		console.error('Ошибка при регистрации пользователя:', error.message) // Логируем ошибку
		return { ok: false, message: error.message } // Возвращаем информацию об ошибке
	}
}
