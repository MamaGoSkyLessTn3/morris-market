'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'
import { Loader, Product } from '../ui'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

function ChooseProductModal({ product, additionalProducts = [] }) {
	const router = useRouter()
	return (
		<Dialog
			open={Boolean(product)}
			className='w-full h-full'
			onOpenChange={() => router.back()}
		>
			<DialogContent className=' rounded-3xl w-full h-[80%] bg-background overflow-hidden flex flex-row p-4'>
				<div className='w-1/2 flex flex-col items-center justify-start overflow-y-scroll custom-scrollbar h-full'>
					{/* Изображение продукта */}
					<div className='relative flex items-center justify-center p-4'>
						{product.imageURL ? (
							<Image
								src={product.imageURL}
								alt={product.name}
								width={500}
								height={500}
								className='object-cover rounded-lg'
							/>
						) : (
							<div className='w-[500px] h-[500px] bg-gray-200 rounded-lg' />
						)}
					</div>

					{/* Блок с дополнительными продуктами */}
					{additionalProducts.length > 0 ? (
						<div className='w-full p-4'>
							<Title size='large' color='black' className='text-foreground'>
								Что ещё пригодится
							</Title>
							<div className='grid grid-cols-3 gap-4'>
								{additionalProducts.map((item, index) => (
									<Product
										id={item.id}
										key={index}
										name={item.name}
										imageURL={item.imageURL}
										gram={item.gram}
										price={item.price}
										description={item.description}
									/>
								))}
							</div>
						</div>
					) : null}
				</div>
				<div className='w-1/2 flex flex-col justify-between '>
					<div className='flex flex-col flex-grow gap-7 overflow-y-auto custom-scrollbar'>
						<Title
							size='large'
							color='black'
							className='font-semibold text-foreground mb-4'
						>
							{product.name}
							<p className='text-xl font-extrabold'>{product.gram} г</p>
						</Title>
						<p className='mb-4'>
							{product.description}

							<div className='md:border mt-3 border-gray-300 w-full'></div>
						</p>
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
									<span className='block font-bold text-xl'>
										{product.protein} г
									</span>
									<span className='block text-sm'>Белки</span>
								</div>
							) : null}
							{product.fats ? (
								<div className='text-center'>
									<span className='block font-bold text-xl'>
										{product.fats} г
									</span>
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
					<div className='flex w-full  justify-between items-center'>
						<div className='text-foreground text-3xl font-semibold'>
							Цена: {product.price} ₽
						</div>

						<Button
							size='xl'
							className='  flex justify-center gap-4 items-center align-middle'
						>
							Добавить в корзину <ArrowRight />
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ChooseProductModal
