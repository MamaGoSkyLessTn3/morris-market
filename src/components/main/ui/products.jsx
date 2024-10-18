'use client'
import { Product, ProductList } from '@/components/shared/ui'
import Title from '@/components/ui/title'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

function Products({ items }) {
	const useIntersectionRef = useRef()

	const Intersection = useIntersection(useIntersectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	})

	{
		useEffect(() => {
			if (Intersection?.isIntersecting) {
				console.log(item.id)
			}
		}, [Intersection?.isIntersecting, items])
	}

	return (
		<>
			{items.map(item => (
				<>
					<Title
						id={item.id}
						key={item.id}
						size='large'
						color='black'
						className=' font-semibold my-4 text-foreground'
					>
						{item.name}
					</Title>
					<div className='flex gap-10 justify-center md:justify-start md:gap-5 flex-wrap'>
						{item.products.map(product => (
							<Product
								key={product.id}
								name={product.name}
								shortDiscription={product.description}
								gram={product.gram}
								price={product.price}
								imageURL={product.imageURL}
							/>
						))}
					</div>
				</>
			))}
		</>
	)
}

export default Products
