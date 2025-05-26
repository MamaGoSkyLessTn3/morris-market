import Image from 'next/image'
import React from 'react'

function CookingProcess({ receipts }) {
	return (
		<>
			{receipts.map(process => (
				<div key={process.id} className='flex my-4 flex-col  md:flex-row gap-2'>
					{process.imageURL ? (
						<Image
							src={process.imageURL}
							className='rounded-2xl'
							width={304}
							height={378}
							alt={process.step}
							loading='lazy'
							placeholder='blur'
							blurDataURL='
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNlZWVlZWUiIC8+PC9zdmc+
'
						/>
					) : (
						<span>Изображение отсутствует</span> // Подходящее сообщение или элемент
					)}
					<div className='flex flex-col'>
						<span className='text-2xl '>Шаг {process.step}</span>
						<p className='text-xl'>{process.description}</p>
					</div>
				</div>
			))}
		</>
	)
}

export default CookingProcess
