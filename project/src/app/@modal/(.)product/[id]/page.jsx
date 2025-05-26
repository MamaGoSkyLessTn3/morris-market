import { notFound } from 'next/navigation'
import { prisma } from '../../../../../prisma/prisma-client'
import ChooseProductModal from '@/components/modals/product-modal/choose-product-modal'
import { getRandomCategoryId } from '@/lib/getRandomCategoryId'

export default async function ProductModalPage({ params }) {
	//! ONRESIZE ADD
	const { id } = params
	const idNumber = Number(id)

	const product = await prisma.product.findFirst({
		where: {
			id: idNumber,
		},
	})

	if (!product) {
		return notFound()
	}

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
		<ChooseProductModal
			additionalProducts={additionalProducts}
			product={product}
		/>
	)
}
