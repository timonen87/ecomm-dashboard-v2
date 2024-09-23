'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { type PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '../shared/store/store'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: true
				}
			}
		})
	)

	return (
		<ThemeProvider
			attribute='class'
			enableSystem={false}
			defaultTheme='dark'
		>
			<QueryClientProvider client={client}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Toaster />
						{children}
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</ThemeProvider>
	)
}
