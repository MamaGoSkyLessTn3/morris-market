import React from 'react'
import { Product } from '.'

function ProductList({ items }) {
	if (!items || items.length === 0) {
		return <p>Тут пустовато ( </p>
	}
	return (
		<>
			{items.map(item => (
				<Product
					id={item.id}
					key={item.id}
					name={item.name}
					imageURL={item.imageURL}
					shortDiscription={item.description}
					price={item.price}
					gram={item.gram}
				/>
			))}
		</>
	)
}

export default ProductList
