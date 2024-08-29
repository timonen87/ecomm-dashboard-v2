
import { NO_INDEX_PAGE } from '@//shared/constants/seo.constants'
import type { Metadata } from 'next'
import Dashboard from './dashboard'


export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return <Dashboard />
}
