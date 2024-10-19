'use client'
import Title from '@/components/ui/title'
import { useSearch } from '@/store/search'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader, Product } from '@/components/shared/ui'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
function SearchPage() {
	const { searched } = useSearch(state => state)
	const [filteredProducts, setFilteredProducts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (searched) {
			setLoading(true)

			axios
				.get(`/api/search?query=${searched}`)
				.then(res => {
					setFilteredProducts(res.data)
					setLoading(false)
				})
				.catch(err => {
					console.error(err)
					setLoading(false)
				})
		} else {
			setFilteredProducts([])
		}
	}, [searched])

	return (
		<div className='flex md:w-[80%]  rounded-2xl mt-3 custom-scrollbar  md:h-screen md:overflow-y-scroll flex-col'>
			<div className=' h-full  w-full  text-foreground bg-background rounded-2xl p-8 '>
				<Link href='/'>
					<div className=' hover:bg-hover inline-block p-1 rounded-xl'>
						<ArrowLeft width={32} height={32} />
					</div>
				</Link>
				{searched ? (
					<>
						<Title
							size='large'
							color='black'
							className='font-semibold my-4 text-foreground'
						>
							Результаты поиска
						</Title>
						{loading ? (
							<div className='flex justify-center'>
								<Loader className='w-8' />
							</div>
						) : (
							<section className='flex gap-10 mt-10 justify-center md:justify-start md:gap-5 flex-wrap'>
								{filteredProducts.length > 0 ? (
									filteredProducts.map(product => (
										<Product
											id={product.id}
											key={product.id}
											name={product.name}
											shortDiscription={product.description}
											price={product.price}
											gram={product.gram}
											imageURL={product.imageURL}
										/>
									))
								) : (
									<div>Ничего не найдено</div>
								)}
							</section>
						)}
					</>
				) : (
					<div className='flex justify-center'>
						<h1 className='text-2xl'>Вы ничего не ищите :( </h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default SearchPage
