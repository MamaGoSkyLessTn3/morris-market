import Image from 'next/image'
import Link from 'next/link'

const CategoryCard = ({ categories }) => {
	return (
		<Link href={`/categories/${categories.id}`}>
			<div className='relative w-56 h-72 p-4 bg-white rounded-2xl shadow-lg'>
				<Image
					src={categories.imageURL}
					alt={categories.name}
					fill
					className='rounded-2xl'
				/>

				<div className='absolute inset-0 bg-wrapper rounded-2xl transition-opacity duration-300 '></div>

				<div className='absolute top-4 left-4 text-foreground font-bold text-lg'>
					{categories.name}
				</div>
			</div>
		</Link>
	)
}

export default CategoryCard
