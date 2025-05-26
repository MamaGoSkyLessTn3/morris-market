'use client'
import * as React from 'react'
import { ThemeProvider as ThemesProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'

export function Providers({ children, ...props }) {
	return (
		<ThemesProvider theme='system' attribute='class' enableSystem {...props}>
			<SessionProvider>{children}</SessionProvider>
			<NextTopLoader color='#349e70' />
			<Toaster />
		</ThemesProvider>
	)
}
