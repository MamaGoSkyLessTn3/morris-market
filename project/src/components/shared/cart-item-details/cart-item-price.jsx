import { Trash2Icon } from 'lucide-react'
import React from 'react'
import CartItemDelete from './cart-item-delete'

function CartItemPrice({ price, onClick, type }) {
	return (
		<div className='flex items-center justify-between'>
			<h2 className='font-bold'>{price} ₽</h2>
			{type && <CartItemDelete type='trash' onClick={onClick} />}
		</div>
	)
}

export default CartItemPrice
