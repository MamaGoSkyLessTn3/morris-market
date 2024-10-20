'use client'
import { memo, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { useStore } from 'zustand'
import { CartItem } from './cart-item'
import { Loader } from '../shared/ui'
import Image from 'next/image'

export const CartDrawer = memo(({ children }) => {
	const items = useStore(useCartStore, state => state.items)
	const totalAmount = useStore(useCartStore, state => state.totalAmount)
	const loading = useStore(useCartStore, state => state.loading) // Добавлено
	const getCartItems = useStore(useCartStore, state => state.getCartItems)
	const updateItemQuantity = useStore(
		useCartStore,
		state => state.updateItemQuantity
	)
	const removeCartItem = useStore(useCartStore, state => state.removeCartItem)

	const memoizedGetCartItems = useCallback(() => {
		getCartItems()
	}, [getCartItems])

	useEffect(() => {
		memoizedGetCartItems()
	}, [memoizedGetCartItems])

	const onClickCountButton = (id, quantity, type) => {
		const newQuantity =
			type === 'plus' ? quantity + 1 : Math.max(quantity - 1, 1) // Минимум 1
		updateItemQuantity(id, newQuantity)
	}

	const onClickRemoveCartButton = async id => {
		await removeCartItem(id)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='flex fixed flex-col justify-between pb-0 bg-background'>
				<div>
					{totalAmount > 0 && (
						<SheetHeader>
							<SheetTitle>
								В корзине{' '}
								<span className='font-bold'>{items.length} Продуктов</span>
							</SheetTitle>
						</SheetHeader>
					)}

					{!totalAmount && (
						<div className='w-full h-full flex justify-center items-center'>
							<Image
								src='/src/public/assets/icons/cart-empty.svg'
								alt='empty-cart'
								width={120}
								height={120}
							/>
						</div>
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
										disabled={item.disabled || loading} // Отключаем кнопки при загрузке
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
				</div>
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
							<Button className='w-full flex flex-row align-middle items-center justify-center h-12 text-base'>
								Оформить заказ
								<ArrowRight className='w-5 ml-2' />
							</Button>
						</div>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	)
})

CartDrawer.displayName = 'CartDrawer'
