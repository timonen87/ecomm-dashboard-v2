'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useProfile } from '@//etities/user/queries/use-profile'
import { saveTokenStorage } from '@//features/auth/auth-token.service'
import { authService } from '@//features/auth/auth.service'
import { EnumOrderStatus } from '@//shared/types/order.interface'
import { Button } from '@//shared/ui/button'
import { DataTable } from '@//shared/ui/data-table/data-table'
import { formatDate } from '@//shared/utils/date/format-date'
import { formatPrice } from '@//shared/utils/string/format-price'

import styles from './Dashboard.module.scss'
import { IOrderColumn, orderColumns } from '../orders-columns'

export default function Dashboard() {
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user } = useProfile()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	if (!user) return null

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formatDate(order.createdAt),
		status:
			order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
		total: formatPrice(order.total)
	}))

	return (
		<div className='container pt-32'>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1>Ваши заказы</h1>
					<Button variant='ghost' onClick={() => logout()}>
						<LogOut />
						Выйти
					</Button>
				</div>
				<DataTable columns={orderColumns} data={formattedOrders} />
			</div>
		</div>
	)
}