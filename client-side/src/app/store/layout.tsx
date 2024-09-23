import type { PropsWithChildren } from 'react'




import styles from './StoreLayout.module.scss'

import { Sidebar } from '@//widgets/layouts/store-layout/sidebar/Sidebar'
import Header from '@//widgets/app-header/app-header'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
                    <Sidebar />
					</div>
				<div className={styles.header}>
                    <Header />
					</div>
				<main>
                    {children}
                </main>
			</div>
		</div>
	)
}
