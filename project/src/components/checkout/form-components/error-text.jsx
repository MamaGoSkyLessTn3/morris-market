import { cn } from '@/lib/utils'
import React from 'react'

function ErrorText({ text, className }) {
	return <p className={cn('text-red-500 text-sm ', className)}>{text}</p>
}

export default ErrorText
