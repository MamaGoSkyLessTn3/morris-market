import { Trash2Icon, X } from 'lucide-react'
import React from 'react'

function CartItemDelete({ onClick, type }) {
	return (
		<div className='cursor-pointer p-2 ml-2 hover:bg-trashHover inline-flex rounded-lg'>
			{type === 'x' ? (
				<X onClick={onClick} className='w-4 h-4  text-foreground  ' />
			) : (
				<Trash2Icon onClick={onClick} className='w-4 h-4  text-foreground  ' />
			)}
		</div>
	)
}

export default CartItemDelete
