import React from 'react'
import CategoriesLayout from './categories-layout'
import Products from '../main/ui/products-all'
import { prisma } from '../../../prisma/prisma-client'

async function CategoryPage({ idString }) {
	const id = parseInt(idString, 10)
	const products = await prisma.product.findMany({
		where: {
			categoryId: id,
		},
		include: {
			category: true,
		},
	})

	const categoryName = products[id]?.category.name

	return (
		<CategoriesLayout
			categoryName={categoryName}
			products={<Products products={products} />}
		/>
	)
}

export default CategoryPage
