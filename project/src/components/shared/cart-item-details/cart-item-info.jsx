import React from 'react'

function CartItemInfo({ name, description, inCart = true }) {
	return (
		<>
			{inCart ? (
				<>
					<h2 className='text-lg line-clamp-1 font-bold'>{name}</h2>
					<p className='text-sm text-gray-400 line-clamp-1'>{description}</p>
					<hr className='my-3' />
				</>
			) : (
				<div className='flex flex-col'>
					{' '}
					<h2 className='text-lg line-clamp-1 font-bold'>{name}</h2>
					<p className='text-sm text-gray-400 line-clamp-1'>{description}</p>
				</div>
			)}
		</>
	)
}

export default CartItemInfo
