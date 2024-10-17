import * as React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Product } from '@/components/shared/ui'
import { products } from '@/public/constants'

export function ProductsCarousel() {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='flex justify-center flex-row align-middle items-center '
		>
			<CarouselContent>
				{products.slice(0, 5).map(product => (
					<CarouselItem key={product.id} className='md:basis-1/2 lg:basis-1/3'>
						<Product
							name={product.name}
							shortDiscription={product.shortDiscription}
							gram={product.gram}
							price={product.price}
							imageURL={product.imageURL}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default ProductsCarousel
