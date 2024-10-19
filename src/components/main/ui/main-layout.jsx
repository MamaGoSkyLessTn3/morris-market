import Footer from '@/components/shared/ui/footer'
import Title from '@/components/ui/title'
import React from 'react'

function MainPage({ recipes, products, categories }) {
	return (
		<div className='flex md:w-[80%]  rounded-2xl mt-3 custom-scrollbar  md:h-screen md:overflow-y-scroll flex-col'>
			<div className='  w-full  text-foreground bg-background rounded-2xl p-8 '>
				<Title
					size='extraLarge'
					color='green'
					className='font-bold text-greenTitle'
				>
					<span className='text-foreground'>Доставка</span> от 15 минут
				</Title>
				<section className='my-8'>{recipes}</section>
				<Title
					size='large'
					color='black'
					className='font-semibold my-4 text-foreground'
				>
					Категории
				</Title>
				<section className='my-8 flex flex-row flex-wrap gap-5'>
					{categories}
				</section>
				<Title
					size='large'
					color='black'
					className='font-semibold my-4 text-foreground'
				>
					Все продукты
				</Title>
				<section className='my-8'>{products}</section>
			</div>
			<Footer />
		</div>
	)
}

export default MainPage
