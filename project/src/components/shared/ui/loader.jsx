import { cn } from '@/lib/utils'
import React from 'react'

function Loader({ className }) {
	return <div className={cn('loader', className)}></div>
}

export default Loader
