'use client'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

function SearchBar({ className }) {
	const [focused, setFocused] = useState(false)
	const ref = React.useRef()
	useClickAway(ref, () => setFocused(false))

	return (
		<>
			{/* Фоновое затемнение при фокусе */}
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 backdrop-blur-sm z-20' />
			)}

			<div
				ref={ref}
				className={clsx(
					className,
					'flex rounded-2xl flex-1 justify-between relative h-11 z-30'
				)}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
				<input
					className='rounded-2xl outline-none w-full bg-search pl-11'
					type='text'
					placeholder='Найти в маркете :)'
					onFocus={() => setFocused(true)}
				/>
				<div
					className={clsx(
						'absolute w-full rounded-xl py-2 shadow-md transition-all duration-300 z-40 bg-background',
						focused
							? 'visible opacity-100 top-12'
							: 'invisible opacity-0 top-14'
					)}
				>
					{/* 		после апи рендер поискка */}
					123
				</div>
			</div>
		</>
	)
}

export default SearchBar
