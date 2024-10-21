import React from 'react'
import WhiteBlock from '../shared/ui/white-block'
import CheckoutItemDetails from './chekout-item-details'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import {
	calcCheckoutBarTotalPrice,
	DELIVERY_PRICE,
	VAT,
} from '@/lib/calc-checkout-bar-price'

9

function CheckoutSideBar({ totalAmount, loading }) {
	const { totalPrice, vatPrice } = calcCheckoutBarTotalPrice(
		totalAmount,
		VAT,
		DELIVERY_PRICE
	)
	return (
		<div className='w-[450px]'>
			<WhiteBlock className='p-6 sticky top-5'>
				<div className='flex flex-col gap-1'>
					<span className='text-xl'>Итого:</span>
					{loading ? (
						<Skeleton className='w-full h-[38px] bg-hover' />
					) : totalAmount === 0 ? (
						<span className='text-[32px] h-[38px] font-extrabold'>
							Корзина пуста
						</span>
					) : (
						<span className='text-[32px] h-[38px] font-extrabold'>
							{totalPrice} ₽
						</span>
					)}
				</div>

				<CheckoutItemDetails
					title={
						<>
							<Package size={18} className='mr-2 text-gray-400' />
							Стоимость корзины:
						</>
					}
					amount={
						loading ? (
							<Skeleton className='h-7 w-[60px] bg-hover' />
						) : (
							`${totalAmount} ₽`
						)
					}
				/>

				<CheckoutItemDetails
					title={
						<>
							<Percent size={18} className='mr-2 text-gray-400' />
							Налог:
						</>
					}
					amount={
						loading ? (
							<Skeleton className='h-7 w-[60px] bg-hover' />
						) : (
							`${vatPrice} ₽`
						)
					}
				/>

				<CheckoutItemDetails
					title={
						<>
							<Truck size={18} className='mr-2 text-gray-400' />
							Доставка:
						</>
					}
					amount={
						loading ? (
							<Skeleton className='h-7 w-[60px] bg-hover' />
						) : (
							`${DELIVERY_PRICE} ₽`
						)
					}
				/>

				<Button
					type='submit'
					loading={loading}
					className='w-full h-14 rounded-3xl flex justify-center items-center mt-6 text-base font-bold '
				>
					Оформить заказ
					<ArrowRight className='w-5 ml-2' />
				</Button>
			</WhiteBlock>
		</div>
	)
}

export default CheckoutSideBar
