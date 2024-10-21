import FormInput from '@/components/checkout/form-components/form-input'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { formLoginFormSchema } from './schemas'

function LoginForm({ onClose }) {
	const form = useForm({
		resolver: zodResolver(formLoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async data => {
		try {
			const resp = await signIn('credentials', {
				email: data.email,
				password: data.password,
				redirect: false,
			})

			if (!resp?.ok) {
				throw new Error('Ошибка авторизации')
			}

			toast.success('Вы успешно вошли в аккаунт', { icon: '🚀' })
			onClose()
		} catch (error) {
			console.error('Ошибка входа:', error)
			toast.error('Неправильная почта или пароль', { icon: '🚨' })
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
							Вход в аккаунт
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
					label='Электронная почта'
					name='email'
					type='email'
					placeholder='E-mail'
					className='text-base'
				/>
				<FormInput
					required
					label='Пароль'
					name='password'
					type='password'
					placeholder='Пароль'
					className='text-base'
				/>

				<Button
					type='submit'
					loading={form.formState.isSubmitting}
					className='h-12 text-base flex items-center justify-center'
				>
					Войти
				</Button>
			</form>
		</FormProvider>
	)
}

export default LoginForm
