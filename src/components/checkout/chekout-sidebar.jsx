import React from 'react'
import WhiteBlock from '../shared/ui/white-block'
import CheckoutItemDetails from './chekout-item-details'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import { Button } from '../ui/button'
import { randomNumber } from '@/lib/random-nimber'

const VAT = 15
const DELIVERY_PRICE = 429

function CheckoutSideBar({ totalAmount }) {
	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE
	return (
		<div className='w-[450px]'>
			<WhiteBlock className='p-6 sticky top-5'>
				<div className='flex flex-col gap-1'>
					<span className='text-xl'>Итого:</span>
					<span className='text-[32px] font-extrabold'>{totalPrice} ₽</span>
				</div>
				<CheckoutItemDetails
					title={
						<>
							<Package size={18} className='mr-2 text-gray-400' />
							Стоимость корзины:
						</>
					}
					amount={totalAmount}
				/>
				<CheckoutItemDetails
					title={
						<>
							<Percent size={18} className='mr-2 text-gray-400' />
							Налог:
						</>
					}
					amount={vatPrice}
				/>
				<CheckoutItemDetails
					title={
						<>
							<Truck size={18} className='mr-2 text-gray-400' />
							Доставка:
						</>
					}
					amount={DELIVERY_PRICE}
				/>
				<Button
					type='submit'
					disabled=''
					className='w-full h-14 rounded-3xl flex justify-center items-center mt-6 text-base font-bold '
				>
					Перейти к оплате
					<ArrowRight className='w-5 ml-2' />
				</Button>
			</WhiteBlock>
		</div>
	)
}

export default CheckoutSideBar
