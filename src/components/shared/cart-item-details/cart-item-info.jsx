import React from 'react'

function CartItemInfo({ name, description }) {
	return (
		<>
			<h2 className='text-lg font-bold'>{name}</h2>
			<p className='text-sm text-gray-400 line-clamp-1'>{description}</p>
			<hr className='my-3' />
		</>
	)
}

export default CartItemInfo
