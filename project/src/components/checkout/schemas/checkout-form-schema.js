import z from 'zod'

export const checkoutFormSchema = z
	.object({
		firstName: z
			.string()
			.min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
		lastName: z
			.string()
			.min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }),
		email: z.string().email({
			message: 'Пожалуйста, введите корректный адрес электронной почты',
		}),
		phone: z
			.string()
			.min(10, { message: 'Телефон должен содержать не менее 3-х символов' }),
		address: z
			.string()
			.min(5, { message: 'Адрес должен содержать не менее 3-х символов' }),
		comment: z.string().optional(),
	})
	.required()
