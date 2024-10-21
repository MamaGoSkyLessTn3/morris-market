import { z } from 'zod'

// Схема для входа
export const formLoginFormSchema = z
	.object({
		email: z
			.string()
			.min(2, { message: 'E-mail должен содержать не менее 2 символов' })
			.email({ message: 'Введите корректный адрес электронной почты' }),
		password: z
			.string()
			.min(6, { message: 'Пароль должен содержать не менее 6 символов' }), // Пароль для логина
	})
	.required()

// Схема для регистрации
export const formRegisterSchema = z
	.object({
		fullName: z
			.string()
			.min(2, { message: 'Имя должно содержать не менее 2 символов' }),
		email: z
			.string()
			.min(2, { message: 'E-mail должен содержать не менее 2 символов' })
			.email({ message: 'Введите корректный адрес электронной почты' }),
		password: z
			.string()
			.min(6, { message: 'Пароль должен содержать не менее 6 символов' }), // Пароль для регистрации
		confirmPassword: z
			.string()
			.min(6, { message: 'Пароль должен содержать не менее 6 символов' }), // Подтверждение пароля
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})
