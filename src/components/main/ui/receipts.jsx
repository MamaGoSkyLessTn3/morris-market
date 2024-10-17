import Title from '@/components/ui/title'
import { receipts as items } from '@/public/constants'
import Link from 'next/link'
import React from 'react'

function Receipts() {
	return (
		<>
			<Title
				size='large'
				color='black'
				className=' font-semibold my-4 text-foreground'
			>
				Рецепты
			</Title>
			<div className='flex gap-10 justify-center md:justify-start md:gap-4 flex-wrap'>
				{items.map(item => (
					<Receipt
						key={item.id}
						name={item.name}
						time={item.time}
						imageURL={item.imageURL}
					/>
				))}
			</div>
		</>
	)
}

export default Receipts

function Receipt({ name, time, imageURL }) {
	return (
		<Link href='/receipts'>
			<div
				style={{ backgroundImage: `url(${imageURL})` }}
				className='bg-cover bg-center h-56 w-36  rounded-xl text-white font-semibold cursor-pointer '
			>
				<div className='flex flex-col justify-between h-full bg-rWrapper rounded-xl p-2 '>
					<div>{name}</div>
					<div className='bg-black/50 w-max px-2  rounded-2xl p-1'>
						{time} min
					</div>
				</div>
			</div>
		</Link>
	)
}
