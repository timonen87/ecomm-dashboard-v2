'use client'

import { ChevronsUpDown, Plus, StoreIcon } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'


import { STORE_URL } from '@//shared/config/url.config'
import { Button } from '@//shared/ui/button'
import { IStore } from '@//shared/types/store.interface'
import { CreateStoreModal } from '@//widgets/ui/modals/CreateStoreModal'
import { Popover, PopoverContent } from '@//widgets/ui/Popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@//widgets/ui/Command'

interface StoreSwitcherProps {
	items: IStore[]
}

export function StoreSwitcher({ items }: StoreSwitcherProps) {
	const router = useRouter()
	const params = useParams()

	const [isOpen, setIsOpen] = useState(false)

	const onStoreSelect = (storeId: string) => {
		setIsOpen(false)
		router.push(STORE_URL.home(storeId))
	}

	const currentStore = items.find(item => item.id === params.storeId)

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					size='sm'
					role='combobox'
					aria-expanded={isOpen}
					aria-label='Выберете магазин'
					className='w-52'
				>
					<StoreIcon className='mr-2 size-4' />

					{currentStore ?  currentStore.title : 'Текущий магазин'}

					<ChevronsUpDown className='ml-auto size-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-52 p-0'>
				<Command>
					<CommandList>
						<CommandInput placeholder='Найти магазин...' />
						<CommandEmpty>Нечего не найдено.</CommandEmpty>
						<CommandGroup heading='Магазины'>
							{items.map(store => (
								<CommandItem
									key={store.id}
									onSelect={() => onStoreSelect(store.id)}
									className='text-sm'
								>
									<StoreIcon className='mr-2 size-4' />
									<div className='line-clamp-1'>
										{store.title}
									</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
					<CommandSeparator />
					<CommandList>
						<CommandGroup>
							<CreateStoreModal>
								<CommandItem>
									<Plus className='mr-2 size-4' />
									Создать магазин
								</CommandItem>
							</CreateStoreModal>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
