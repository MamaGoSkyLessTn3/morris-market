import React from 'react'
import MainLayout from './ui/main-layout'
import Recipes from './ui/display-recipes'
import { prisma } from '../../../prisma/prisma-client'
import CategoriesList from './ui/categories-list'
import ProductsAll from './ui/products-all'

async function MainPage() {
	const categories = await prisma.category.findMany({
		include: {
			products: true,
		},
	})
	const initialProducts = await prisma.product.findMany({})

	const recipes = await prisma.recipe.findMany({})
	return (
		<MainLayout
			recipes={<Recipes items={recipes} />}
			categories={<CategoriesList categories={categories} />}
			products={<ProductsAll products={initialProducts} />}
		/>
	)
}

export default MainPage
