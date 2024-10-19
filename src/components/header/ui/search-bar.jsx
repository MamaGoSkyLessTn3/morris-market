'use client'
import { Button } from '@/components/ui/button'
import { useSearch } from '@/store/search'
import clsx from 'clsx'
import { Search, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useRouter } from 'next/navigation' // Используем для перенаправления

function SearchBar({ className }) {
	const [focused, setFocused] = useState(false)
	const ref = React.useRef()
	const inputRef = useRef()
	const router = useRouter() // Для перенаправления

	const { query, setQuery, setSearched, searched } = useSearch()

	useClickAway(ref, () => setFocused(false))

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			setFocused(false)
			inputRef.current.blur()
			setSearched(query)
			setQuery('')
			if (query) {
				if (searched) {
					router.push(`/search?query=${encodeURIComponent(query)}`)
				} else {
					console.error('Данные о поиске не готовы')
				}
			}
		}
	}

	const onClose = () => {
		setFocused(false)
		setQuery('')
	}

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-20' />
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
					ref={inputRef}
					className='rounded-2xl outline-none w-full bg-search pl-11'
					type='text'
					onKeyDown={handleKeyDown}
					placeholder='Найти в маркете :)'
					value={query}
					onChange={e => setQuery(e.target.value)}
					onFocus={() => setFocused(true)}
				/>

				{query && (
					<X
						className='absolute top-1/2 translate-y-[-50%] right-2 z-30 cursor-pointer'
						onClick={() => onClose()}
					/>
				)}
			</div>
		</>
	)
}

export default SearchBar
