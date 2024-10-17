import { Nunito } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/header'
import { SideBar } from '@/components/sidebar'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
	title: 'Morris Market',
	description: 'Best market in the world',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressContentEditableWarning>
			<body className={nunito.variable}>
				<Providers>
					<PageLayout header={<Header />} sidebar={<SideBar />}>
						{children}
					</PageLayout>
					<div id='modals'></div>
				</Providers>
			</body>
		</html>
	)
}
function PageLayout({ header, children, sidebar }) {
	return (
		<>
			{header}
			<main className='flex justify-between gap-4 flex-col md:flex-row overflow-hidden '>
				{sidebar}
				{children}
			</main>
		</>
	)
}
