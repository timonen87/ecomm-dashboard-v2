

import { Logo } from '../../main-layout/app-header/_ui/logo'
import styles from './Sidebar.module.scss'
import { Navigation } from './navigation/Navigation'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Navigation />
		</div>
	)
}
