import React from 'react'

function CheckoutItemSkeleton() {
	return (
		<div className='flex mb-3 items-center justify-between'>
			<div className='flex itmes-center gap-5'>
				<div className='w-[50px] h-[50px] bg-hover rounded-full animate-pulse'>
					<h2 className='w-40 h-5 bg-hover rounded animate-pulse ' />
				</div>
				<div className='w-10 h-5 bg-hover rounded-full animate-pulse' />
				<div className='w-[133px] h-8 bg-hover rounded-full animate-pulse' />
			</div>
		</div>
	)
}

export default CheckoutItemSkeleton
