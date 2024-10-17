'use client'

import * as React from 'react'
import { ThemeProvider as ThemesProvider } from 'next-themes'

export function Providers({ children, ...props }) {
	return (
		<ThemesProvider theme='system' attribute='class' enableSystem {...props}>
			{children}
		</ThemesProvider>
	)
}
