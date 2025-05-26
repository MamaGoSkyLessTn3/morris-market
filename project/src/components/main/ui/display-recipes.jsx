import { Recipe } from '@/components/shared/ui'
import RecipeList from '@/components/shared/ui/recipe-list'
import Title from '@/components/ui/title'
import React from 'react'

function Recipes({ items }) {
	return (
		<>
			<Title
				size='large'
				color='black'
				className=' font-semibold my-4 text-foreground'
			>
				Рецепты
			</Title>
			<div className='flex gap-10 justify-center md:justify-start md:gap-4 flex-wrap'>
				<RecipeList items={items} />
			</div>
		</>
	)
}

export default Recipes
