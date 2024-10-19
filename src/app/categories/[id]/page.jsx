import CategoryPage from '@/components/categories/categories-page'
import React from 'react'

function CategoriesPage({ params }) {
	const { id } = params

	return <CategoryPage idString={id} />
}

export default CategoriesPage
