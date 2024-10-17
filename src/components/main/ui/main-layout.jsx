import Title from '@/components/ui/title'
import React from 'react'

function MainLayout({ receipts, products }) {
	return (
		<div className='md:w-[80%] custom-scrollbar  md:h-screen md:overflow-y-scroll  w-full bg-background text-foreground mt-3 rounded-2xl p-8 '>
			<Title
				size='extraLarge'
				color='green'
				className=' font-bold text-greenTitle'
			>
				<span className='text-foreground'>Доставка</span> от 15 минут
			</Title>
			<section className='my-8'>{receipts}</section>
			<section>{products}</section>
		</div>
	)
}

export default MainLayout
