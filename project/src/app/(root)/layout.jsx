import { Header } from '@/components/header'
import { SideBar } from '@/components/sidebar'
import { Container } from '@/components/shared/ui/container'

export const metadata = {
	title: 'Моррис Маркет',
	description: 'Best market in the world',
}

export default function RootLayout({ children }) {
	return (
		<>
			<PageLayout
				header={<Header hasCart={true} hasSearch={true} />}
				sidebar={<SideBar />}
			>
				{children}
			</PageLayout>
		</>
	)
}

function PageLayout({ header, children, sidebar }) {
	return (
		<>
			<Container>
				{header}
				<main className='flex justify-between gap-4 flex-col md:flex-row overflow-hidden'>
					{sidebar}
					{children}
				</main>
			</Container>
		</>
	)
}
