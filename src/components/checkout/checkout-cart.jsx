import React from 'react'
import CheckoutCartItem from '@/components/checkout/checkout-cart-item'
import WhiteBlock from '@/components/shared/ui/white-block'

function CheckoutCart({
	className,
	items,
	onClickCountButton,
	onClickRemoveCartButton,
	loading,
}) {
	return (
		<WhiteBlock title='1. Корзина' className={className}>
			{items.map(item => (
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
			))}
		</WhiteBlock>
	)
}

export default CheckoutCart
