import React from 'react'

function CheckoutItemDetails({ amount = 4000, title }) {
	return (
		<div className='flex my-4'>
			<span className='flex flex-1 text-lg items-center '>
				{title}
				<div className='flex-1 border-b border-dashed relative -top-1 mx-2 border-hover'></div>
			</span>

			<span className='text-lg font-bold'>{amount} ₽</span>
		</div>
	)
}

export default CheckoutItemDetails
