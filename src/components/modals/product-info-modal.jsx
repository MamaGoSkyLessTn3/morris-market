import React from 'react'
import Title from '../ui/title'

function ProductInfoModal({ product }) {
	return (
		<div className='flex flex-col flex-grow gap-7 overflow-y-auto custom-scrollbar'>
			<Title
				size='large'
				color='black'
				className='font-semibold text-foreground mb-4'
			>
				{product.name}
				<p className='text-xl font-extrabold'>{product.gram} г</p>
			</Title>
			<div className='mb-4'>
				{product.description}

				<div className='md:border mt-3 border-gray-300 w-full'></div>
			</div>
			{product.compound ? (
				<div>
					<Title className='text-foreground'>Состав</Title>
					{product.compound}

					<div className='md:border mt-4 border-gray-300 w-full'></div>
				</div>
			) : null}
			<div className='grid items-centes  grid-cols-4 gap-4 mb-6'>
				<div className='text-center'>
					<span className='block font-bold text-xl'>
						{product.kilocalories}
					</span>
					<span className='block text-sm'>Ккал</span>
				</div>
				{product.proteins ? (
					<div className='text-center'>
						<span className='block font-bold text-xl'>{product.protein} г</span>
						<span className='block text-sm'>Белки</span>
					</div>
				) : null}
				{product.fats ? (
					<div className='text-center'>
						<span className='block font-bold text-xl'>{product.fats} г</span>
						<span className='block text-sm'>Жиры</span>
					</div>
				) : null}
				<div className='text-center'>
					<span className='block font-bold text-xl'>
						{product.carbohydrates} г
					</span>
					<span className='block text-sm'>Углеводы</span>
				</div>
			</div>
		</div>
	)
}

export default ProductInfoModal
