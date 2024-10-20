import React from 'react'
import RequierdSymbol from './req-stmbol'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import ErrorText from './error-text'
import ClearButton from './clear-button'

function FormInput({ className, name, label, required, ...props }) {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message

	const onClickClear = () => {
		setValue(name, '', { shouldValidate: true, shouldDirty: true })
	}
	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequierdSymbol />}
				</p>
			)}
			<div className='relative'>
				<Input
					{...props}
					{...register(name)}
					type='text'
					className='h-12 text-md'
				/>
				{value && <ClearButton onClick={onClickClear} />}
			</div>

			{errorText && <ErrorText text={errorText} className='mt-2' />}
		</div>
	)
}

export default FormInput
