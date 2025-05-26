import React from 'react'
import {
	CartItemCountButton,
	CartItemImage,
	CartItemInfo,
	CartItemPrice,
} from '../shared/cart-item-details'
import CartItemDelete from '../shared/cart-item-details/cart-item-delete'
import { cn } from '@/lib/utils'

function CheckoutCartItem({
	name,
	price,
	imageUrl,
	quantity,
	onClickCountButton,
	onClickRemoveButton,
	disabled,
	description,
	id,
}) {
	return (
		<div
			id={id}
			className={cn(
				{ 'opacity-50 pointer-events-none': disabled },
				'flex mb-3 items-center justify-between'
			)}
		>
			<div className='flex  items-center gap-5 flex-1'>
				<CartItemImage imageUrl={imageUrl} />
				<CartItemInfo inCart={false} description={description} name={name} />
			</div>

			<CartItemPrice price={price} />

			<div className='flex items-center gap-5 ml-20'>
				<CartItemCountButton value={quantity} onClick={onClickCountButton} />

				<CartItemDelete type='x' onClick={onClickRemoveButton} />
			</div>
		</div>
	)
}

export default CheckoutCartItem
