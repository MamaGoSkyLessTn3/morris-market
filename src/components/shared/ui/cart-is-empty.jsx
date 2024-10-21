import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'

function CartisEmpty({ children }) {
	return (
		<div className='mx-auto flex-col w-72 flex justify-center align-middle items-center '>
			<Image
				src='/assets/cart-empty.png'
				alt='empty-cart'
				width={240}
				height={240}
			/>
			<Title
				size='extraLagre'
				className='text-center text-foreground font-bold '
			>
				Корзина пуста
			</Title>
			<p className='text-center text-gray-400 mb-5'>
				Добавьте хотябы один товар чтобы оформить заказ
			</p>
			{children}{' '}
		</div>
	)
}

export default CartisEmpty
