import { Product } from '@/components/shared/ui'
import Title from '@/components/ui/title'
import { products as items } from '@/public/constants'

import React from 'react'

function Products() {
	return (
		<>
			<Title
				size='large'
				color='black'
				className=' font-semibold my-4 text-foreground'
			>
				Завтраки
			</Title>
			<div className='flex gap-10 justify-center md:justify-start md:gap-5 flex-wrap'>
				{items.map(item => (
					<Product
						key={item.id}
						name={item.name}
						imageURL={item.imageURL}
						price={item.price}
						shortDiscription={item.shortDiscription}
						gram={item.gram}
					/>
				))}
			</div>
		</>
	)
}

export default Products
