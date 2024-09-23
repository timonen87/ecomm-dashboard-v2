import type { Metadata } from 'next'

import { Hero } from '@//widgets/hero/Hero'
import Header from '../widgets/app-header/app-header'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие – все в одном месте!'
}

export default async function HomePage() {

	return (<>
    <Header />
		<Hero />
		<div className='m-auto text-3xl'>Home</div>
		</>
	)
}
