import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

function CartButton({ cartCount = 2, onClick }) {
	return (
		<Button size='icon' onClick={onClick}>
			<div className='flex justify-center items-center gap-2'>
				<ShoppingCart size={20} />

				{cartCount ? (
					<>
						<div className='w-[2px] h-5 bg-white' />
						<p className='font-semibold flex items-center align-middle justify-center text-lg'>
							{cartCount}
						</p>
					</>
				) : null}
			</div>
		</Button>
	)
}

export default CartButton
