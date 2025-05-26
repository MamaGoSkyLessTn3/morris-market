import Image from 'next/image'
import React from 'react'

function ImageModal({ product }) {
	return (
		<div className='relative flex items-center justify-center p-4'>
			{product.imageURL ? (
				<Image
					src={product.imageURL}
					alt={product.name}
					width={500}
					height={500}
					className='object-cover rounded-lg'
				/>
			) : (
				<div className='w-[500px] h-[500px] bg-gray-200 rounded-lg' />
			)}
		</div>
	)
}

export default ImageModal
