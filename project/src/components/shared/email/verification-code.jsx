import React from 'react'

export const VerificationUserTemplate = ({ code }) => (
	<div
		style={{
			fontFamily: 'Arial, sans-serif',
			lineHeight: '1.6',
			color: '#333',
		}}
	>
		<p style={{ fontSize: '18px' }}>Код подтверждения {code},</p>

		<a
			href={`http://localhost:3001/auth/verify?code=${code}`}
			style={{ color: '#007BFF', textDecoration: 'none' }}
		>
			Подтвердить регистрацию
		</a>
	</div>
)
