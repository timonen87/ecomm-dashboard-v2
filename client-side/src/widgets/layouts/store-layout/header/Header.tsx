'use client'

import Image from 'next/image'
import Link from 'next/link'




import { useProfile } from '../../../../etities/user/queries/use-profile'

import { MobileSidebar } from '../sidebar/MobileSidebar'
import {Loader } from '@//widgets/ui/Loader'
import styles from './Header.module.scss'
import { StoreSwitcher } from './StoreSwitcher'
import { DASHBOARD_URL } from '@//shared/config/url.config'

export function Header() {
	const { user, isLoading } = useProfile()

	return (
		<div className={styles.header}>
			<MobileSidebar />
			<div className={styles.header_menu}>
				{isLoading ? (
					<Loader size='sm' />

				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<Link href={DASHBOARD_URL.home()}>
								{user.avatar ? (
									<Image
									src={user.avatar}
									alt={user.name}
									width={42}
									height={42}
								/>
								) : user.name}
							</Link>
						</>
					)
				)}
			</div>
		</div>
	)
}
