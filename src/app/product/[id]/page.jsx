import { prisma } from '../../../../../prisma/prisma-client'
import { getRandomCategoryId } from '@/components/shared/model/getRandomCategoryId'

export default async function ProductPage({ params }) {
	//! ONRESIZE ADD
	const { id } = params
	const idNumber = Number(id)

	const product = await prisma.product.findFirst({
		where: {
			id: idNumber,
		},
	})

	const randomCategoryId = await getRandomCategoryId()

	const additionalProducts = await prisma.product.findMany({
		where: {
			id: {
				not: idNumber,
			},
			categoryId: randomCategoryId,
		},
	})

	return (
		<ProductPage product={product} additionalProducts={additionalProducts} />
	)
}
