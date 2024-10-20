import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React from 'react'

function ClearButton({ onClick }) {
	return (
		<X
			onClick={onClick}
			className='w-5 h-5 absolute bg-none hover:bg-none  right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer transition-opacity'
		/>
	)
}

export default ClearButton
