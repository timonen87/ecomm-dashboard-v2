import { StoreLayout } from '@//app/store-layout/store-layout'
import type { PropsWithChildren } from 'react'


export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <StoreLayout>{children}</StoreLayout>
}
