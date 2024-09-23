import Image from 'next/image'

import styles from './Hero.module.scss'

export function Hero() {
	return (
		<section
			id='home'
			className='relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]'
		><div className="container">
			<div className='absolute inset-0 -z-20 h-full w-full bg-gradient-to-l from-transparent '></div>
			<div className='mx-auto w-full max-w-[780px] px-4 text-center'>
				<h1 className='mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight'>
                 Шаблоны для разработки и сборки для быстрого старта
				</h1>
				<p className='mb-8 text-base leading-relaxed text-body-color'>
					Запуск проекта Next.js быстрее с нашей коллекцией современных и бесплатных шаблонов
				</p>
				<a
					className='mb-4 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-14 py-3 text-base font-medium text-white shadow-three transition duration-300 ease-in-out hover:shadow-none'
					href='/templates'
				>
					Смотерть шаблоны
				</a>
			</div>

			<div className='absolute -bottom-3 left-0 -z-10 hidden aspect-[384/307] max-w-[270px] lg:block xl:max-w-[377px]'>
				<Image
					src='/images/image-1.webp'
					alt='hero-bg'
					width={270}
					height={216}
					loading='lazy'
					decoding='async'
				/>
			</div>
			<div className='absolute -bottom-3 right-0 -z-10 hidden aspect-[16/13] max-w-[270px] drop-shadow-[0px_-8px_80px_rgba(113,116,152,0.10)] lg:block xl:max-w-[384px]'>
				<Image
					src='/images/image-2.webp'
					alt='hero-bg'
					width={270}
					height={216}
					loading='lazy'
					decoding='async'
				/>

			</div>
            </div>
		</section>
	)
}
