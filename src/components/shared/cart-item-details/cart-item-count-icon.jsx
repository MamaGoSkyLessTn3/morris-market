import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

function CountIconButton({ onClick, type, disabled, size = 'sm' }) {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			className={cn(
				'p-0  border bg-transparent border-emerald-500 text-emerald-500 hover:text-foreground hover:bg-emerald-500 items-center flex justify-center align-middle hover:text-white',
				size === 'sm'
					? 'w-[30px] h-[30px] rounded-lg'
					: 'w-[38px] h-[38px] rounded-lg'
			)}
		>
			{type === 'plus' ? (
				<Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
			) : (
				<Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
			)}
		</Button>
	)
}

export default CountIconButton
