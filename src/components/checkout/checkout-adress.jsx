import React from 'react'
import WhiteBlock from '../shared/ui/white-block'
import FormTextarea from './form-components/form-textarea'
import { AdressInput } from './form-components/adress-input'
import { Controller, useFormContext } from 'react-hook-form'
import ErrorText from './form-components/error-text'

function CheckoutAdress() {
	const { control } = useFormContext()
	return (
		<WhiteBlock title='3. Адрес доставки'>
			<div className='flex flex-col gap-5 '>
				<Controller
					control={control}
					name='address'
					render={({ field, fieldState }) => (
						<>
							<AdressInput onChange={field.onChange} />
							{fieldState.error && (
								<ErrorText text={fieldState.error.message} />
							)}
						</>
					)}
				/>
				<FormTextarea
					name='comment'
					rows={5}
					className='text-base '
					placeholder='Комментарий к заказу'
				/>
			</div>
		</WhiteBlock>
	)
}

export default CheckoutAdress
