import Title from '@/components/ui/title'
import React from 'react'

function ReceiptsLayout({ productsCarousel, receiptBreadCrumb, info }) {
	return (
		<div className='md:w-[80%] custom-scrollbar  md:h-screen md:overflow-y-scroll  w-full bg-background text-foreground mt-3 rounded-2xl p-8 '>
			{receiptBreadCrumb}
			<div className='my-4 w-full'>{info}</div>
			<Title
				size='large'
				color='black'
				className=' my-6 font-semibold text-foreground'
			>
				Что пригодится
			</Title>
			<div className='my-4'>{productsCarousel}</div>
		</div>
	)
}

export default ReceiptsLayout
