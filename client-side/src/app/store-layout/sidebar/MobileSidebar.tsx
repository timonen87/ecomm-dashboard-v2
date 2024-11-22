import { Menu } from 'lucide-react'


import { Sidebar } from './Sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@//widgets/ui/Sheet'

export function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger className='lg:hidden pr-4 hover:opacity-75 transition'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='p-0 bg-white'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}
