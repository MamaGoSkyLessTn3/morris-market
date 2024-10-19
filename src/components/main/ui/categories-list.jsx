import React from 'react'
import CategoryCard from './category-card'

function CategoriesList({ categories }) {
	return (
		<>
			{categories.map(category => (
				<CategoryCard key={category.id} categories={category} />
			))}
		</>
	)
}

export default CategoriesList
