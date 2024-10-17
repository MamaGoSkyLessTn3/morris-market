import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'

function Info({ name, imageURL, tags, ingredients }) {
	return (
		<>
			<Title
				size='large'
				color='black'
				className=' font-semibold text-foreground'
			>
				{name}
			</Title>
			<div className='flex md:justify-start justify-center mt-4 flex-row flex-wrap gap-4'>
				<Image
					className='rounded-xl'
					src={imageURL}
					alt={name}
					width={300}
					height={300}
					loading='lazy'
					placeholder='blur'
					blurDataURL='
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNlZWVlZWUiIC8+PC9zdmc+
'
				/>
				<div className='flex flex-col gap-3 '>
					<div className='flex flex-row flex-wrap gap-3 '>
						{tags.map(tag => (
							<Tags key={tag.id} name={tag.name} />
						))}
					</div>
					<Title
						size='medium'
						color='black'
						className=' font-semibold mt-2 text-foreground'
					>
						Ингридиенты <span className='text-gray-400'>на 4 порции</span>
					</Title>
					<div className='flex flex-col gap-2'>
						{ingredients.map(ingredient => (
							<IngredientItem key={ingredient.id} name={ingredient.name} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Info

const Tags = ({ id, name }) => {
	return (
		<div className='flex flex-row flex-wrap gap-3 '>
			<div className=' bg-search w-max px-2  rounded-2xl p-1' key={id}>
				{name}
			</div>
		</div>
	)
}

const IngredientItem = ({ id, name }) => {
	return (
		<div key={id} className='relative font-bold text-xl my-4'>
			{name}
			<div className='absolute bottom-0 left-0 w-full border-b border-dotted border-gray-400'></div>
		</div>
	)
}
