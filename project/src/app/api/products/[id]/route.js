/* import { NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'

export async function GET(request) {
	const { searchParams } = new URL(request.url)
	const page = parseInt(searchParams.get('page')) || 1
	const limit = 10 // количество продуктов на странице
	const offset = (page - 1) * limit

	const products = await prisma.product.findMany({
		take: limit,
		skip: offset,
	})

	return NextResponse.json(products)
}
 */
