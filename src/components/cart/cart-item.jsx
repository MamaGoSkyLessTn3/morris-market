import clsx from 'clsx'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CartItem({ name, imageURL, gram, price, className }) {
	return (
		<div
			className={clsx(
				className,
				'flex flex-row items-center p-2 bg-background rounded shadow-md'
			)}
		>
			{' '}
			<div className='mr-3'>
				<Image
					src={imageURL}
					alt={name}
					width={80}
					height={80}
					className='rounded'
				/>
			</div>
			<div className='flex flex-col justify-between flex-grow'>
				<div className='flex justify-between'>
					<div className='flex flex-col'>
						<p className='text-foreground font-semibold'>{name}</p>
						<p className='text-foreground text-sm'>{gram} г</p>
					</div>
					<div className='cursor-pointer'>
						<X className='text-foreground' />
					</div>
				</div>
				<div className='flex items-center justify-between mt-2'>
					<div className='flex items-center bg-gray-400 p-1 rounded-3xl gap-1'>
						<button className='px-1'>-</button>
						<span className='mx-2'>1</span>
						<button className='px-1'>+</button>
					</div>
					<p className='text-lg font-bold'>{price} ₽</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem
