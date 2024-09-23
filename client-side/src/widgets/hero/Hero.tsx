	import { ArrowRight } from 'lucide-react'
	import Link from 'next/link'

	import styles from './Hero.module.scss'
	import { PUBLIC_URL } from '@//shared/config/url.config'
	import { SITE_DESCRIPTION } from '@//shared/constants/seo.constants'
	import { Button } from '@//shared/ui/button'

	export function Hero() {
		return (
			<div className={styles.section}>
				<h1 className={styles.heading}>
				20+ Best Free and Premium Next.js Templates for Your Next Projects
				</h1>
				<p className={styles.description}>{SITE_DESCRIPTION}</p>
				<Link href={PUBLIC_URL.explorer()}>
					<Button variant='primary'>
						Все шаблоны
						<ArrowRight />
					</Button>
				</Link>
			</div>




		)
	}
