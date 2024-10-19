import Link from 'next/link'
import React from 'react'

function Recipe({ name, id, imageURL, time }) {
	return (
		<Link href={`/recipes/${id}`}>
			<div
				style={{ backgroundImage: `url(${imageURL})` }}
				className='bg-cover bg-center h-80 w-52  rounded-xl text-white font-semibold cursor-pointer '
			>
				<div className='flex flex-col justify-between h-full bg-rWrapper rounded-xl p-2 '>
					<div className='text-xl'>{name}</div>
					<div className='bg-black/50 w-max px-2  rounded-2xl p-1'>
						{time} мин
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Recipe
