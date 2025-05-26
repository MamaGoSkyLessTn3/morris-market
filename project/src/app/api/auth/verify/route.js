/* import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'

export async function GET(req) {
	try {
		console.log('Начало процесса подтверждения пользователя.')

		const code = req.nextUrl.searchParams.get('code')
		console.log('Код подтверждения:', code)

		if (!code) {
			console.log('Код не передан.')
			return NextResponse.json({ error: 'Code is required' }, { status: 400 })
		}

		const verificationCode = await prisma.verificationCode.findFirst({
			where: {
				code,
			},
		})
		console.log('Найден код подтверждения:', verificationCode)

		if (!verificationCode) {
			console.log('Код подтверждения не найден.')
			return NextResponse.json(
				{ error: 'Verification code not found' },
				{ status: 404 }
			)
		}

		const updatedUser = await prisma.user.update({
			where: {
				id: verificationCode.userId,
			},
			data: {
				verified: true,
			},
		})
		console.log('Пользователь успешно обновлен:', updatedUser)

		await prisma.verificationCode.delete({
			where: {
				id: verificationCode.id,
			},
		})
		console.log('Код подтверждения успешно удален.')

		return NextResponse.redirect(new URL('/', req.url))
	} catch (error) {
		console.error('Ошибка при подтверждении пользователя:', error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
 */
