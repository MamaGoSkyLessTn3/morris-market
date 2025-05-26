import { cn } from '@/lib/utils'
import React from 'react'

export const Container = ({ className, children }) => {
	return (
		<div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
	)
}
