'use client'
import { memo, useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { useStore } from 'zustand'
import { CartItem } from './cart-item'
import { Loader } from '../shared/ui'
import Image from 'next/image'
import Title from '../ui/title'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useCart } from '../shared/hooks/useCart'
import CartisEmpty from '../shared/ui/cart-is-empty'

export const CartDrawer = memo(({ children }) => {
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
		useCart()
	const [redirecting, setRedirecting] = useState(false)
	const onClickCountButton = (id, quantity, type) => {
		const newQuantity =
			type === 'plus' ? quantity + 1 : Math.max(quantity - 1, 1)
		updateItemQuantity(id, newQuantity)
	}

	const onClickRemoveCartButton = async id => {
		await removeCartItem(id)
	}
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent
				className={cn('flex fixed flex-col pb-0 bg-background', {
					'justify-between': totalAmount > 0,
					'justify-center': totalAmount === 0,
				})}
			>
				<>
					{totalAmount > 0 && (
						<SheetHeader>
							<SheetTitle>
								В корзине{' '}
								<span className='font-bold'>{items.length} Продуктов</span>
							</SheetTitle>
						</SheetHeader>
					)}

					{!totalAmount && (
						<CartisEmpty>
							{' '}
							<SheetClose>
								<Button
									size='lg'
									className='w-56 flex justify-center items-center align-middle h-12 text-base'
								>
									<ArrowLeft className='w-6 mr-2' />
									Вернуться назад
								</Button>
							</SheetClose>
						</CartisEmpty>
					)}

					{totalAmount > 0 && (
						<>
							<div className='flex flex-col gap-2 -mx-6 pb-0 overflow-y-auto custom-scrollbar rounded-2xl h-[75vh]'>
								{items.map(item => (
									<CartItem
										key={item.id}
										id={item.id}
										name={item.name}
										price={item.price}
										disabled={item.disabled || loading}
										quantity={item.quantity}
										imageUrl={item.imageUrl}
										description={item.description}
										onClickRemoveButton={() => onClickRemoveCartButton(item.id)}
										onClickCountButton={type =>
											onClickCountButton(item.id, item.quantity, type)
										}
									/>
								))}
							</div>
						</>
					)}
				</>
				{totalAmount > 0 && (
					<SheetFooter className='-mx-6 bg-search p-5'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg '>
									Итого
									<div className='flex w-full mt-2 flex-1 border-b border-dashed relative -top-1 mx-2' />
								</span>

								<span className='text-lg font-bold'>{totalAmount} ₽</span>
							</div>
							<Link href='/checkout'>
								<Button
									onClick={() => setRedirecting(true)}
									loading={redirecting}
									className='w-full flex flex-row align-middle items-center justify-center h-12 text-base'
								>
									Оформить заказ
									<ArrowRight className='w-5 ml-2' />
								</Button>
							</Link>
						</div>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	)
})

CartDrawer.displayName = 'CartDrawer'
