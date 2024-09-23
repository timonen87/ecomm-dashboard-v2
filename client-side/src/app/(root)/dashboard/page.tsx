import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@//shared/constants/seo.constants'
import Features from '@//widgets/feature'
import { Header } from '@//widgets/layouts/store-layout/header/Header'
import styles from './Dashboard.module.scss'
import Dashboard from './dashboard'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div className="container">
			<Dashboard />
		</div>
	)
}
