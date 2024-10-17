import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'   rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-emerald-600 text-white font-medium px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors shadow-md',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
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
	({ className, variant, size, onClick, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				onClick={onClick}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
