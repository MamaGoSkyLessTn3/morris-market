import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

function SideBarItem({ src, name, className }) {
	return (
		<div
			className={clsx(
				className,
				'text-lg font-semibold flex md:flex-row flex-col   align-middle items-center gap-2 hover:text-emerald-600  transition-colors  cursor-pointer'
			)}
		>
			{/* Images form samokat */}
			{/* <Image
				src={src}
				alt={name}
				width={32}
				height={32}
				className='rounded-lg w-8 h-8'
			/> */}
			<a>{name}</a>
		</div>
	)
}

export default SideBarItem
