import { Product } from '@/components/shared/ui'
import Title from '@/components/ui/title'

function ProductsAll({ products }) {
	return (
		<>
			<div className='flex gap-10 justify-center md:justify-start md:gap-5 flex-wrap'>
				{products.length > 0 ? ( // Проверка наличия продуктов
					products.map(product => (
						<Product
							id={product.id}
							key={product.id}
							name={product.name}
							shortDiscription={product.description}
							gram={product.gram}
							price={product.price}
							imageURL={product.imageURL}
						/>
					))
				) : (
					<p>Нет доступных продуктов</p>
				)}
			</div>
		</>
	)
}

export default ProductsAll
