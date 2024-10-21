import { Header } from '@/components/header'
import { Container } from '@/components/shared/ui/container'

export const metadata = {
	title: 'MM | Оформление заказа',
	description: 'Best market in the world',
}

export default function CheckoutLayout({ children }) {
	return (
		<>
			<Container>
				<Header hasCart={false} hasSearch={false} className='bg-transparent' />
				{children}
			</Container>
		</>
	)
}
