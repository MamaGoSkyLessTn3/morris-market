import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

function AddModalButton({ loading, product, onSubmit }) {
	return (
		<div className='flex w-full  justify-between items-center'>
			<div className='text-foreground text-3xl font-semibold'>
				Цена: {product.price} ₽
			</div>

			<Button
				loading={loading}
				onClick={onSubmit}
				size='xl'
				className=' w-full flex justify-center gap-4 items-center align-middle'
			>
				Добавить в корзину <ArrowRight />
			</Button>
		</div>
	)
}

export default AddModalButton
