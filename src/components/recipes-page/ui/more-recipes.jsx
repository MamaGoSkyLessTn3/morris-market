import { GetOtherRecipes } from '@/components/shared/model/rand-index'
import { RecipeList } from '@/components/shared/ui'
import React from 'react'

function MoreRecipes({ recipesToRand, id }) {
	const recipes = GetOtherRecipes([...recipesToRand], id)
	return (
		<div className='flex flex-row gap-2 '>
			<RecipeList items={recipes} />
		</div>
	)
}

export default MoreRecipes
