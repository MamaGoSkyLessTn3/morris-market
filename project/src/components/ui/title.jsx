import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const titleVariants = cva('font-medium', {
	variants: {
		size: {
			small: 'text-[16px]',
			medium: 'text-2xl',
			large: 'text-3xl',
			extraLarge: 'text-[46px]',
		},
		color: {
			black: 'text-black',
			green: 'text-emerald-600',
		},
	},
	defaultVariants: {
		size: 'medium',
		color: 'black',
	},
})

function Title({ size = 'medium', color = 'black', children, className }) {
	return (
		<h1 className={cn(titleVariants({ size, color, className }))}>
			{children}
		</h1>
	)
}

export default Title
