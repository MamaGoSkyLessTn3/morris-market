import React from 'react'
import { prisma } from '../../../prisma/prisma-client'
import SideBarItemsList from './sidebar-items-list'

async function SideBar() {
	const sideBarItems = await prisma.category.findMany()

	return (
		<div className='md:w-[20%] mt-20 md:mt-3    flex  custom-scrollbar overflow-y-scroll flex-row  md:flex-col bg-background rounded-2xl my-3 md:h-[85vh] h-44 p-4'>
			<SideBarItemsList sideBarItems={sideBarItems} />
		</div>
	)
}

export default SideBar
