'use client'
import CheckoutSideBar from '@/components/checkout/chekout-sidebar'
import { useCart } from '@/components/shared/hooks/useCart'
import { Container } from '@/components/shared/ui/container'
import WhiteBlock from '@/components/shared/ui/white-block'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Title from '@/components/ui/title'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CheckoutCart from '@/components/checkout/checkout-cart'
import PresonalData from '@/components/checkout/prsonal-data'
import { FormInput } from 'lucide-react'
import CheckoutAdress from '@/components/checkout/checkout-adress'
import { checkoutFormSchema } from '@/components/checkout/schemas/checkout-form-schema'

function Checkout() {
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
		useCart()
	const onClickCountButton = (id, quantity, type) => {
		const newQuantity =
			type === 'plus' ? quantity + 1 : Math.max(quantity - 1, 1)
		updateItemQuantity(id, newQuantity)
	}

	const onClickRemoveCartButton = async id => {
		await removeCartItem(id)
	}

	const form = useForm({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			fisrtName: '',
			lastName: '',
			phone: '',
			adress: '',
			comment: '',
		},
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<Container className='max-w-[1216px] mt-8'>
			<Title className='text-4xl my-8 font-bold text-foreground'>
				Оформление заказа
			</Title>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(data => onSubmit(data))}>
					<div className='flex gap-10'>
						<div className='flex flex-col gap-10 flex-1  mb-10'>
							<CheckoutCart
								items={items}
								onClickCountButton={onClickCountButton}
								onClickRemoveCartButton={onClickRemoveCartButton}
								loading={loading}
							/>
							<PresonalData />
							<CheckoutAdress />
						</div>
						<CheckoutSideBar totalAmount={totalAmount} />
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}

export default Checkout
