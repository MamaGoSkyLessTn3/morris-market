import React from 'react'

function CheckoutItemSkeleton() {
	return (
		<div className='flex mb-3 items-center justify-between'>
			<div className='flex items-center gap-5 flex-1'>
				{/* Скелетон для изображения товара */}
				<div className='flex flex-col min-w-[35%] justify-center align-middle items-center'>
					<div className='w-[80px] h-[80px] bg-hover rounded-xl animate-pulse' />
				</div>

				{/* Скелетон для информации о товаре */}
				<div className='flex flex-col gap-2'>
					<div className='w-[120px] h-5 bg-hover rounded-sm animate-pulse' />
					<div className='w-[150px] h-4 bg-hover rounded-sm animate-pulse' />
				</div>
			</div>

			{/* Скелетон для цены товара */}
			<div className='flex items-center justify-between'>
				<div className='w-[60px] h-6 bg-hover rounded-sm animate-pulse' />
			</div>

			{/* Скелетоны для кнопок количества и удаления */}
			<div className='flex items-center gap-5 ml-20'>
				<div className='w-[90px] h-8 bg-hover rounded-md animate-pulse' />
				<div className='w-[30px] h-30px bg-hover rounded-md animate-pulse' />
			</div>
		</div>
	)
}

export default CheckoutItemSkeleton
