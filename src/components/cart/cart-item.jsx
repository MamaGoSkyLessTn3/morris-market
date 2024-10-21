'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import CartItemPrice from '../shared/cart-item-details/cart-item-price'
import { CartItemImage, CartItemInfo } from '../shared/cart-item-details'
import CountButton from '../shared/cart-item-details/cart-item-count-button'

export const CartItem = ({
	imageUrl,
	name,
	price,
	quantity,
	className,
	description,
	disabled,
	onClickCountButton,
	onClickRemoveButton,
	id,
}) => {
	console.log('disabled', disabled)

	return (
		<div
			id={id}
			className={cn(
				'flex bg-search justify-around h-40 p-5 gap-5 my-5 m-3 rounded-3xl',
				{ 'opacity-50 pointer-events-none': disabled },
				className
			)}
		>
			<CartItemImage imageUrl={imageUrl} />
			<div className='w-[65%]'>
				<CartItemInfo name={name} description={description} />
				<div className='flex items-center justify-between'>
					<CountButton onClick={onClickCountButton} value={quantity} />
					<CartItemPrice
						type='trash'
						onClick={onClickRemoveButton}
						price={price}
					/>
				</div>
			</div>
		</div>
	)
}
