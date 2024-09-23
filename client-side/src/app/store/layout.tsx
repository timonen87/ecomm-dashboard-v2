import type { PropsWithChildren } from 'react'

import { Sidebar } from '@//widgets/layouts/store-layout/sidebar/Sidebar'

import styles from './StoreLayout.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<div className={styles.header}>{/* <Header /> */}</div>
				<main>{children}</main>
			</div>
		</div>
	)
}
