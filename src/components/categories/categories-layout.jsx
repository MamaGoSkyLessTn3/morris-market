import Footer from '@/components/shared/ui/footer'
import Title from '@/components/ui/title'
import React from 'react'

function CategoriesLayout({ products, categoryName }) {
	return (
		<div className='flex md:w-[80%]  rounded-2xl mt-3 custom-scrollbar  md:h-screen md:overflow-y-scroll flex-col'>
			<div className='  w-full  text-foreground bg-background rounded-2xl p-8 '>
				<Title
					size='extraLarge'
					color='green'
					className=' font-bold my-4 text-greenTitle'
				>
					<span className='text-foreground'>{categoryName}</span>
				</Title>
				<section>{products}</section>
			</div>
			<Footer />
		</div>
	)
}

export default CategoriesLayout
