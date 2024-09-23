import { PropsWithChildren } from 'react'

import { Footer } from '@//widgets/layouts/main-layout/footer/Footer'


import styles from './MainLayout.module.scss'
import Header from '@//widgets/app-header/app-header'
import { Hero } from '@//widgets/hero/Hero'



export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
			<>
			<Header />
			<main>{children}</main>
			<Footer />
			</>
)
}
