import { prisma } from '../../../../prisma/prisma-client'

export async function GET(req) {
	const { searchParams } = new URL(req.url)
	const query = searchParams.get('query')

	if (!query) {
		return new Response(JSON.stringify({ message: 'Query is required' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		})
	}

	try {
		const products = await prisma.product.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive',
				},
			},
		})

		return new Response(JSON.stringify(products), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		console.error(error)
		return new Response(JSON.stringify({ message: 'Something went wrong' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
