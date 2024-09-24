import type { Metadata } from 'next'

import Header from '../widgets/layouts/main-layout/app-header/app-header'
import Features from '../widgets/layouts/main-layout/feature'
import Footer from '../widgets/layouts/main-layout/footer'
import { Hero } from '../widgets/layouts/main-layout/hero'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие – все в одном месте!'
}

export default async function HomePage() {

	return (
		<><Header />
			<Hero />
			<Features />
            <Footer/>
		</>
	)
}
