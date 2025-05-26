import Footer from '@/components/shared/ui/footer'
import Title from '@/components/ui/title'
import React from 'react'

function RecipesLayout({
	productsCarousel,
	recipeBreadCrumb,
	moreRecipes,
	info,
	cookingProcess,
}) {
	return (
		<div className='flex md:w-[80%]  rounded-2xl mt-3 custom-scrollbar  md:h-screen md:overflow-y-scroll flex-col'>
			<div className='  w-full  text-foreground bg-background rounded-2xl p-8 '>
				{recipeBreadCrumb}
				<div className='my-4 w-full'>{info}</div>
				<Title
					size='large'
					color='black'
					className=' my-6 font-semibold text-foreground'
				>
					Что пригодится
				</Title>
				<div className='my-4'>{productsCarousel}</div>
				<Title
					size='large'
					color='black'
					className=' my-6 font-semibold text-foreground'
				>
					Как приготовить
				</Title>
				<div className='my-4'>{cookingProcess}</div>
				<Title
					size='large'
					color='black'
					className=' my-6 font-semibold text-foreground'
				>
					Больше рецептов
				</Title>
				<div className='my-4'>{moreRecipes}</div>
			</div>
			<Footer />
		</div>
	)
}

export default RecipesLayout
