import React from 'react'
import { Recipe } from '.'

function RecipeList({ items }) {
	return (
		<>
			{items.map(item => (
				<Recipe
					id={item.id}
					key={item.id}
					name={item.name}
					time={item.time}
					imageURL={item.imageURL}
				/>
			))}
		</>
	)
}

export default RecipeList
