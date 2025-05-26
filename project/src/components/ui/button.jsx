import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
	' ease-in-out rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-emerald-600 text-white font-medium px-6 py-2 rounded-2xl hover:bg-emerald-700 transition-colors shadow-md',
				outline:
					'border border-emerald-600 px-3 py-1 rounded-3xl bg-background shadow-sm hover:bg-emerald-600 ',
				colored:
					'border border-emerald-600 px-3 py-1 rounded-3xl text-emerald-600 bg-background shadow-sm hover:bg-emerald-600 hover:text-white',
				profile:
					'flex gap-1 justify-center align-middle items-center border bg-transparent border-emerald-600 rounded-3xl text-emerald-600 !important  shadow-sm hover:bg-emerald-600 hover:text-white px-4 py-2 font-bold',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-3xl px-3 text-xs',
				lg: 'h-10 rounded-3xl px-8',
				xl: 'h-12 text-lg rounded-3xl px-12',
				icon: 'px-3 h-10 py-1',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

const Button = React.forwardRef(
	(
		{
			loading,
			diabled,
			className,
			variant,
			size,
			onClick,
			asChild = false,
			children,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				disabled={diabled || loading}
				onClick={onClick}
				className={cn(
					buttonVariants({ variant, size, className }),
					loading && 'bg-loader' // Добавляем класс bg-hover, если loading активен
				)}
				ref={ref}
				{...props}
			>
				{!loading ? children : <Loader2 className='h-4 w-4 animate-spin' />}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
