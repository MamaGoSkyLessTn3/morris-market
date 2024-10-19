import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../model/capitalize-first-letter'

export default function Product({
	name,
	shortDiscription,
	gram,
	price,
	imageURL,
	id,
}) {
	return (
		<div className='flex flex-col'>
			<Link href={`/product/${id}`} className='flex flex-col'>
				<div className='w-[166px] h-[166px] rounded-2xl bg-black flex items-center  justify-center'>
					<Image
						loading='lazy'
						className='rounded-2xl'
						src={imageURL}
						alt={name}
						width={166}
						height={166}
						placeholder='blur'
						blurDataURL='
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNlZWVlZWUiIC8+PC9zdmc+
'
					/>
				</div>

				<div className='w-[166px] flex flex-col gap-1'>
					<Title
						size='small'
						className='font-semibold line-clamp-1 text-foreground'
						color='black'
					>
						{name}
					</Title>
					<p className='text-[14px] line-clamp-2 font-normal'>
						{shortDiscription}
					</p>
					<p className='text-[14px] text-gram font-bold'>{gram} г</p>
					<div className='flex justify-between z-2'>
						<p className='text-[14px] flex justify-center align-middle items-center font-extrabold'>
							{price} ₽
						</p>
						<Button size='sm'>Добавить</Button>
					</div>
				</div>
			</Link>
		</div>
	)
}
