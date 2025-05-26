import React from 'react'
import Info from './ui/info'
import ProductsCarousel from './ui/products-carousel'
import CookingProcess from './ui/cooking-process'
import RecipesLayout from './ui/recipes-layout'
import MoreRecipes from './ui/more-recipes'
import RecipeBreadCrumb from './ui/r-breadcrumb'
import { prisma } from '../../../prisma/prisma-client'

async function RecipesPage({ id }) {
	const idString = parseInt(id.id, 10)

	const receipts = await prisma.recipe.findMany({
		include: {
			ProductsInRecipe: {
				include: {
					product: true,
				},
			},
		},
	})

	const recipeProcess = (await prisma.recipeProcess.findMany()).filter(
		process => process.recipeId === idString
	)

	const currentReceipt = receipts.find(receipt => receipt.id === idString)

	const products = currentReceipt?.ProductsInRecipe?.map(
		productInRecipe => productInRecipe.product
	) || ['Продукты не найдены']

	return (
		<RecipesLayout
			recipeBreadCrumb={<RecipeBreadCrumb name={currentReceipt.name} />}
			info={
				<Info
					name={currentReceipt.name}
					imageURL={currentReceipt.imageURL}
					tags={currentReceipt.tags}
					ingredients={currentReceipt.ingredients}
				/>
			}
			productsCarousel={<ProductsCarousel products={products} />}
			cookingProcess={<CookingProcess receipts={recipeProcess} id={idString} />}
			moreRecipes={<MoreRecipes recipesToRand={receipts} id={idString} />}
		/>
	)
}

export default RecipesPage
