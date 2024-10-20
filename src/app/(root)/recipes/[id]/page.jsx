import { RecipesPage } from '@/components/recipes-page'
import React from 'react'

function RecipePage({ params: id }) {
	return <RecipesPage id={id} />
}

export default RecipePage
