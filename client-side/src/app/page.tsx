import type { Metadata } from 'next'

import Header from '../widgets/app-header/app-header'
import Features from '../widgets/feature'
import Footer from '../widgets/footer'
import { Hero } from '../widgets/hero'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие – все в одном месте!'
}

export default async function HomePage() {

	return (
		<>
			<Hero />
			<Features />
		</>
	)
}
