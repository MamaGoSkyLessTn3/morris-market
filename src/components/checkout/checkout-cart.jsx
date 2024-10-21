import React from 'react'
import CheckoutCartItem from '@/components/checkout/checkout-cart-item'
import WhiteBlock from '@/components/shared/ui/white-block'
import CheckoutItemSkeleton from './checkout-item-skeleton'
import CartisEmpty from '../shared/ui/cart-is-empty'

function CheckoutCart({
	className,
	items,
	onClickCountButton,
	onClickRemoveCartButton,
	loading,
}) {
	const CartNotEmpty = () => {
		if (items.length > 0) {
			return items.map(item => (
				<CheckoutCartItem
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
			))
		} else {
			return <CartisEmpty />
		}
	}

	return (
		<WhiteBlock title='1. Корзина' className={className}>
			{loading ? (
				[...Array(3)].map((_, index) => <CheckoutItemSkeleton key={index} />)
			) : (
				<CartNotEmpty />
			)}
		</WhiteBlock>
	)
}

export default CheckoutCart
