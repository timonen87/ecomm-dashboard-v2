import { FC } from 'react'

import styles from './DataTable.module.scss'
import { Card, CardContent } from '../card'
import { Skeleton } from '@//widgets/ui/skeleton'
import { Loader } from '@//widgets/ui/loader'


const DataTableLoading: FC = () => {
	return (
		<div className={styles.loading}>
			<Skeleton className={styles.heading} />
			<Skeleton className={styles.search} />
			<Card className={styles.table}>
				<CardContent>
					<div className={styles.loader_wrapper}>
						<Loader />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default DataTableLoading
