import React from 'react'
import MainLayout from './ui/main-layout'
import Products from './ui/products'
import Recipes from './ui/display-recipes'
import { prisma } from '../../../prisma/prisma-client'

async function MainPage() {
	const productsWithCategories = await prisma.category.findMany({
		include: { products: true },
	})
	const recipes = await prisma.recipe.findMany({})
	return (
		<MainLayout
			recipes={<Recipes items={recipes} />}
			products={<Products items={productsWithCategories} />}
		/>
	)
}

export default MainPage
