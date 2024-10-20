'use client'
import React from 'react'
import CountIconButton from './cart-item-count-icon'

function CountButton({ onClick, value = 1, size = 'sm' }) {
	return (
		<div className='inline-flex items-center justify-between gap-3'>
			<CountIconButton
				onClick={() => onClick?.('minus')}
				type='minus'
				disabled={value === 1}
				size={size}
			/>
			{value}
			<CountIconButton
				onClick={() => onClick?.('plus')}
				type='plus'
				size={size}
			/>
		</div>
	)
}

export default CountButton
