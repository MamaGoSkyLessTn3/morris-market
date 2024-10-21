import { PayOrderTemplate } from '@/components/shared/email/pay-oreder'
import { Resend } from 'resend'

export async function sendEmail(to, subject, template) {
	const resend = new Resend(process.env.RESEND_API_KEY)

	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to,
		subject,
		text: '',
		react: template,
	})

	if (error) {
		throw error
	}

	return data
}
