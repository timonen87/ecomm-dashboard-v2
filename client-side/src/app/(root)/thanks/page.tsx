import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'



import styles from '../hero/Hero.module.scss'
import { Button } from '@//shared/ui/button'
import { PUBLIC_URL } from '@//shared/config/url.config'
import { NO_INDEX_PAGE } from '@//shared/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Спасибо за покупку',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>Спасибо за покупку</h1>
			<p className={styles.description}>
				Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все
				усилия, чтобы доставить ваш заказ как можно скорее.
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant='primary'>
					На главную
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
