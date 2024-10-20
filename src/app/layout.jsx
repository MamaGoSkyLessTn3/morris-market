import { Nunito } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export default function AppLayout({ children, modal }) {
	return (
		<html lang='en' suppressContentEditableWarning>
			<body className={nunito.variable}>
				<Providers>
					{children}
					{modal}
				</Providers>
			</body>
		</html>
	)
}
