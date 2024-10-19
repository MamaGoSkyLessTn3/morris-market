import React from 'react'
import SideBarItem from './sidebar-item'
import Title from '../ui/title'
import { cn } from '@/lib/utils'

function SideBarItemsList({ sideBarItems }) {
	const productIcon =
		'https://web-static.samokat.ru/public/images/recipes/kabachkovye-oladi-cover--preview.jpg'

	return (
		<>
			<Title
				size='medium'
				color='black'
				className='p-2 flex text-foreground justify-center items-center align-middle mr-5 md:mr-0 md:justify-start'
			>
				Категории
			</Title>
			<div className='md:border border-gray-300 w-full'></div>
			<div className='mt-4 flex flex-row md:flex-col gap-10 md:gap-1'>
				<SideBarItem
					className={cn('h-11 transition-colors')}
					src={productIcon}
					name='Рецепты'
				/>
				{sideBarItems.map(item => (
					<SideBarItem
						className='h-11 transition-colors'
						key={item.id}
						id={item.id}
						name={item.name}
						src={item.imageURL}
					/>
				))}
			</div>
		</>
	)
}

export default SideBarItemsList
