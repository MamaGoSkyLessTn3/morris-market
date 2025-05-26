'use client'
import { formRegisterSchema } from '@/components/modals/auth-modal/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Container } from './container'
import Title from '@/components/ui/title'
import FormInput from '@/components/checkout/form-components/form-input'
import { updateUserInfo } from '@/app/actions'

function ProfileForm({ data }) {
	const form = useForm({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: data.email,
			fullName: data.fullName,
			confirmPassword: '',
			password: '',
		},
	})

	const onSubmit = async formData => {
		try {
			await updateUserInfo({
				email: formData.email,
				fullName: formData.fullName,
				password: formData.password,
			})
			toast.success('Данные успешно обновлены!')
		} catch (error) {
			toast.error('Ошибка при обновлении данных', { icon: '🚨' })
		}
	}

	const onClickSignOut = () => {
		signOut({
			callbackUrl: '/',
		})
	}

	return (
		<Container className='w-[1240px]    my-5'>
			<div className='bg-background rounded-3xl p-6 w-fit'>
				<Title size='large' className='font-bold text-foreground'>
					Личные данные | {data.fullName}
				</Title>
				{/* Передаем форму в провайдер */}
				<FormProvider {...form}>
					<form
						className='flex flex-col gap-3 w-96 mt-4'
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormInput
							required
							label='Электронная почта'
							name='email'
							type='email'
							placeholder='E-mail'
							className='text-base '
						/>
						<FormInput
							className='w-full'
							type='text'
							name='fullName'
							label='Полное имя'
							required
						/>
						<FormInput type='password' name='password' label='Новый пароль' />
						<FormInput
							type='password'
							name='confirmPassword'
							label='Повторите пароль'
						/>
						<Button
							size='lg'
							disabled={form.formState.isSubmitting}
							className='text-base mt-4'
							type='submit'
						>
							Сохранить
						</Button>
					</form>

					<Button
						size='sm'
						className='flex items-center justify-center text-base  mt-4 w-full'
						onClick={onClickSignOut}
						disabled={form.formState.isSubmitting}
						type='button'
					>
						Выйти
					</Button>
				</FormProvider>
			</div>
		</Container>
	)
}
export default ProfileForm
