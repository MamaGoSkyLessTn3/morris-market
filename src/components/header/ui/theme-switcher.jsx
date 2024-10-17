'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Loader from '@/components/shared/ui/loader'

function ThemeButton() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<div className='w-10 flex justify-center items-center align-middle h-10'>
				<Loader />
			</div>
		)
	}

	return (
		<div
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className='flex hover:text-emerald-500 justify-center items-center cursor-pointer w-10 h-10 transition-colors duration-300'
		>
			{resolvedTheme === 'dark' ? (
				<Sun className='transition-transform duration-300' size={25} />
			) : (
				<Moon className='transition-transform duration-300' size={25} />
			)}
		</div>
	)
}

export default ThemeButton
