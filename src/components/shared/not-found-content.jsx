import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoundContent() {
	return (
		<div className='w-full h-screen mx-auto flex justify-center items-center bg-background'>
			<div className='text-center'>
				<Image
					src='/assets/not-found.png'
					alt='Not Found'
					width={300}
					height={300}
					className='mb-4'
				/>
				<h1 className='text-2xl font-bold mb-4'>Страница не найдена</h1>
				<p className='mb-4'>Фатальная ошибка, такой страницы нет</p>
				<Link
					href='/'
					className='text-emerald-500 transition-colors hover:underline'
				>
					Вернуться на главную страницу
				</Link>
			</div>
		</div>
	)
}
export default NotFoundContent
