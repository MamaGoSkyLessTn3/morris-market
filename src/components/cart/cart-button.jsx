'use client'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useStore } from 'zustand'

function CartButton({ onClick }) {
	const loading = useStore(useCartStore, state => state.loading)
	const totalAmount = useStore(useCartStore, state => state.totalAmount)
	const items = useStore(useCartStore, state => state.items)

	return (
		<Button
			disabled={loading}
			loading={loading}
			onClick={onClick}
			className='group relative flex items-center px-4 py-2 min-w-32 justify-center  '
		>
			{totalAmount ? <b>{totalAmount} ₽</b> : <b>Корзина</b>}

			<span className='h-full w-[1px] bg-white/30 mx-3' />

			{items.length > 0 ? (
				<>
					<div className='flex items-center gap-1 transition ease-in-out duration-300 group-hover:opacity-0'>
						<ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
						<b>{items.length}</b>
					</div>
				</>
			) : null}

			<ArrowRight className='w-5 absolute right-5 transition-transform duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform -translate-x-2' />
		</Button>
	)
}

export default CartButton
