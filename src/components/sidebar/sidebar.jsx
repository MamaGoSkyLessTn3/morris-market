import React from 'react'
import Title from '../ui/title'
import SideBarItem from './sidebar-item'
import { sidebaritems as items } from '@/public/constants'

function SideBar() {
	return (
		<div className='md:w-[20%] mt-20 md:mt-3    flex  custom-scrollbar overflow-y-scroll flex-row  md:flex-col bg-background rounded-2xl my-3 md:h-[85vh] h-44 p-4'>
			<Title
				size='medium'
				color='black'
				className='p-2 flex text-foreground justify-center items-center align-middle mr-5 md:mr-0 md:justify-start'
			>
				Категории
			</Title>
			<div className='md:border border-gray-300 w-full '></div>
			<div className='mt-4 flex flex-row md:flex-col gap-10 md:gap-1'>
				{items.map(item => (
					<SideBarItem
						className='h-11 transition-colors '
						key={item.id}
						name={item.name}
						src={item.imageURL}
					/>
				))}
			</div>
		</div>
	)
}

export default SideBar
