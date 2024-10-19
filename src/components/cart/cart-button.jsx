import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import React from 'react'

function CartButton({ amountPrice = 2312, cartCount = 3 }) {
	return (
		<Button className='group relative flex items-center px-4 py-2 '>
			<b>{amountPrice} ₽</b>

			<span className='h-full w-[1px] bg-white/30 mx-3' />

			<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
				<ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
				<b>{cartCount}</b>
			</div>

			<ArrowRight className='w-5 absolute right-5 transition-transform duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform -translate-x-2' />
		</Button>
	)
}

export default CartButton
