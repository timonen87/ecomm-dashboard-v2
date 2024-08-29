import { PropsWithChildren } from 'react'

import { Footer } from '@//widgets/layouts/main-layout/footer/Footer'
import { Header } from '@//widgets/layouts/main-layout/header/Header'

import styles from './MainLayout.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
