import React from 'react'
import FormInput from '@/components/checkout/form-components/form-input'
import WhiteBlock from '../shared/ui/white-block'

function PresonalData({ className }) {
	return (
		<WhiteBlock title='2. Персональные данные' className={className}>
			<div className='grid grid-cols-2 gap-5'>
				<FormInput name='firstName' className='text-base ' placeholder='Имя' />
				<FormInput
					name='lastName'
					className='text-base '
					placeholder='Фамилия'
				/>
				<FormInput name='email' className='text-base ' placeholder='E-mail' />
				<FormInput name='phone' className='text-base ' placeholder='Телефон' />
			</div>
		</WhiteBlock>
	)
}

export default PresonalData
