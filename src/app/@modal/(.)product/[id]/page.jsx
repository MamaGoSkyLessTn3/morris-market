import { notFound } from 'next/navigation'
import { prisma } from '../../../../../prisma/prisma-client'

export default async function ProductModalPage({ params }) {
	const { id } = params
	const idNumber = Number(id)
	console.log(idNumber)

	const product = await prisma.product.findFirst({
		where: {
			id: idNumber,
		},
	})

	return <div>2131231</div>
}
