import React from 'react'
import { useFormContext } from 'react-hook-form'
import RequierdSymbol from './req-stmbol'
import { Textarea } from '@/components/ui/textarea'
import ClearButton from './clear-button'
import ErrorText from './error-text'

function FormTextarea({ className, name, label, rows, required, ...props }) {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message

	const onClickClear = () => {
		setValue(name, '')
	}
	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequierdSymbol />}
				</p>
			)}
			<div className='relative'>
				<Textarea
					{...props}
					{...register(name)}
					rows={rows}
					className='h-12 text-md'
				/>
				{value && <ClearButton onClick={onClickClear} />}
			</div>

			{errorText && <ErrorText text={errorText} className='mt-2' />}
		</div>
	)
}

export default FormTextarea
