import { prisma } from '../../../../prisma/prisma-client'

export async function getRandomCategoryId() {
	const categories = await prisma.category.findMany({
		select: { id: true },
	})

	const randomIndex = Math.floor(Math.random() * categories.length)

	return categories[randomIndex].id
}
