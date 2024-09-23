import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				netlify.store &copy; 2024 Все права защищены
			</div>
		</div>
	)
}
