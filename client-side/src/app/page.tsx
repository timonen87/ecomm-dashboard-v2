import type { Metadata } from 'next'

import Header from './main-layout/app-header/app-header'
import Features from './main-layout/feature'
import Footer from './main-layout/footer'
import { Hero } from './main-layout/hero'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие – все в одном месте!'
}

export default async function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<Features />
			<Footer />
		</>
	)
}
