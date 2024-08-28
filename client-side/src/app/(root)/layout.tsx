import { MainLayout } from '@//widgets/layouts/main-layout/MainLayout'
import type { PropsWithChildren } from 'react'



export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <MainLayout>{children}</MainLayout>
}
