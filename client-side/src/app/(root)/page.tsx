import type { Metadata } from 'next'
import { Home } from './home'
import { Hero } from '@//widgets/hero/Hero'

export const metadata: Metadata = {
	title: 'Ваш шопинг, ваше удовольствие – все в одном месте!'
}

export default async function HomePage() {

	return (<>
		<Hero />
		<div className='m-auto text-3xl'>Home</div>
		</>
	)
}
