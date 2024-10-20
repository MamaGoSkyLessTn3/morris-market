import Title from '@/components/ui/title'
import React from 'react'
import { Product } from '../shared/ui'

function AdditionalProdutsModal({ additionalProducts }) {
	return (
		<>
			{additionalProducts.length > 0 ? (
				<div className='w-full p-4'>
					<Title size='large' color='black' className='text-foreground'>
						Что ещё пригодится
					</Title>
					<div className='grid grid-cols-3 gap-4'>
						{additionalProducts.map((item, index) => (
							<Product
								id={item.id}
								key={index}
								name={item.name}
								imageURL={item.imageURL}
								gram={item.gram}
								price={item.price}
								description={item.description}
							/>
						))}
					</div>
				</div>
			) : null}
		</>
	)
}

export default AdditionalProdutsModal
