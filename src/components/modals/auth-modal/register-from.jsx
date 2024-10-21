import FormInput from '@/components/checkout/form-components/form-input'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { formRegisterSchema } from './schemas'
import { registerUser } from '@/app/actions'
import { redirect } from 'next/dist/server/api-utils'

function RegisterForm({ onClose }) {
	const form = useForm({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			fullName: '',
			confirmPassword: '',
			redirect: false,
		},
	})
	const onSubmit = async data => {
		console.log(data)

		try {
			const resp = await registerUser({
				password: data.password,
				confirmPassword: data.confirmPassword,
				email: data.email,
				fullName: data.fullName,
			})

			if (!resp?.ok) {
				throw new Error(resp?.message || 'Ошибка авторизации') // Передаем сообщение от сервера
			}

			toast.success('Регистрация прошла успешно', {
				icon: '🚀',
			})
			onClose()
		} catch (error) {
			console.error('Ошибка регистрации:', error)
			toast.error(error.message || 'Ошибка регистрации', { icon: '🚨' })
		}
	}

	return (
		<FormProvider {...form}>
			<form
				className='flex flex-col gap-4'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='flex justify-between items-center'>
					<div className='mr-2'>
						<Title size='large' className='font-bold text-foreground'>
							Регистрация
						</Title>
						<p className='text-gray-400'>
							Введите свою почту, чтобы войти в свой аккаунт
						</p>
					</div>
					<Image
						src='/assets/phone-icon.png'
						alt='phone-icon'
						width={60}
						height={60}
					/>
				</div>
				<FormInput
					required
					label='Полное имя'
					name='fullName'
					type='text'
					placeholder='Полное имя'
					className='text-base'
				/>
				<FormInput
					required
					label='Электронная почта'
					name='email'
					type='email'
					placeholder='E-mail'
					className='text-base'
				/>
				<FormInput
					name='password'
					required
					label='Пароль'
					type='password'
					placeholder='Пароль'
					className='text-base'
				/>
				<FormInput
					required
					label='Повторите пароль'
					name='confirmPassword' // Изменено на confirmPassword
					type='password'
					placeholder='Повторите пароль'
					className='text-base'
				/>

				<Button
					type='submit'
					loading={form.formState.isSubmitting}
					className='h-12 text-base flex items-center justify-center'
				>
					Зарегистрироваться
				</Button>
			</form>
		</FormProvider>
	)
}

export default RegisterForm
