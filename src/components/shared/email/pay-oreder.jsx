import React from 'react'

export const PayOrderTemplate = ({
	fullName,
	orderId,
	totalAmount,
	paymentUrl,
}) => (
	<div
		style={{
			fontFamily: 'Arial, sans-serif',
			lineHeight: '1.6',
			color: '#333',
		}}
	>
		<h1 style={{ fontSize: '24px', color: '#007BFF' }}>Заказ №{orderId}</h1>

		<p style={{ fontSize: '18px' }}>Уважаемый(ая) {fullName},</p>

		<p>
			Ваш заказ <strong>№{orderId}</strong> успешно сформирован. Для завершения
			покупки необходимо произвести оплату.
		</p>

		<p>
			Общая сумма вашего заказа составляет <strong>{totalAmount} ₽</strong>. Для
			оплаты заказа, пожалуйста, перейдите по{' '}
			<a href={paymentUrl} style={{ color: '#007BFF', textDecoration: 'none' }}>
				этой ссылке
			</a>
			.
		</p>

		<p>
			Если у вас возникнут какие-либо вопросы, пожалуйста, свяжитесь с нашей
			службой поддержки.
		</p>

		<p>
			С уважением, <br />
			Команда поддержки
		</p>
	</div>
)
