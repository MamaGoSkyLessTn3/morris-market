import { Trash2Icon } from 'lucide-react'
import React from 'react'

function CartItemPrice({ price, onClick }) {
	return (
		<div className='flex items-center justify-between'>
			<h2 className='font-bold'>{price} ₽</h2>
			<div className='cursor-pointer p-2 ml-2 hover:bg-trashHover inline-flex rounded-lg'>
				<Trash2Icon onClick={onClick} className='w-4 h-4  text-foreground  ' />
			</div>
		</div>
	)
}

export default CartItemPrice
