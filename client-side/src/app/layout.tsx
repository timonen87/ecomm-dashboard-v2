import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import Header from '../widgets/app-header/app-header'

import {
	SITE_DESCRIPTION,
	SITE_NAME
} from './../shared/constants/seo.constants'
import './globals.scss'
import { Providers } from './providers'
import { Footer } from '../widgets/layouts/main-layout/footer/Footer'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			{/* <body className={GeistSans.variable}> */}
			<body
				className={`bg-[#FCFCFC] dark:bg-black ${GeistSans.variable}`}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
