import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@//shared/constants/seo.constants'
import Features from '@//app/main-layout/feature'
import styles from './Dashboard.module.scss'

import Header from '@//app/main-layout/app-header/app-header'
import Footer from '@//app/main-layout/footer'
import Dashboard from '@//features/dashboard/_ui/dashboard'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (<>
		<Header />
		<div className="container">
			<Dashboard />
		</div>
		<Footer />
		</>
	)
}
