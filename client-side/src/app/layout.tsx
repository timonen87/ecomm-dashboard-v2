import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import {
	SITE_DESCRIPTION,
	SITE_NAME
} from './../shared/constants/seo.constants'
import './globals.scss'
import Header from './main-layout/app-header/app-header'
import Footer from './main-layout/footer'
import { Providers } from './providers'

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
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
