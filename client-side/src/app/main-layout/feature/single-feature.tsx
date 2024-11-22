import { Feature } from './feature-data'

const SingleFeature = ({ feature }: { feature: Feature }) => {
	const { icon, title, paragraph } = feature
	return (
		// <div className="w-full">
		//   <div className="wow fadeInUp" data-wow-delay=".15s">
		//     <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
		//       {icon}
		//     </div>
		//     <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
		//       {title}
		//     </h3>
		//     <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
		//       {paragraph}
		//     </p>
		//   </div>
		// </div>

		<div className='relative flex flex-col justify-between rounded-md border border-stroke bg-white shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark'>
			<figure className='p-4'>
				<img
					src='https://nextjstemplates.com/_next/image?url=https%3A%2F%2Fapi.nextjstemplates.com%2Fimage%2FGo---Next.js-SaaS-Boilerplate-and-Landing-Page-for-Business-3b36650f-19e6-40ef-8dd1-45c08cbacd76-go-nextjs.jpg&w=3840&q=100'
					alt='Shoes'
					className='relative block aspect-[81/41]'
				/>
			</figure>
			<div className='flex flex-1 flex-col justify-between'>
				<div className='flex-1 px-6 pt-2'>
					<h3 className='mb-4 text-xl font-semibold text-[#333333] duration-300 hover:text-primary dark:text-white dark:hover:text-primary'>
						<a className='block' href='/templates/nextblog'>
							NextBlog - Next.js Blog Template and Publishing P...
						</a>
					</h3>
					<p className='mb-5 text-sm leading-relaxed text-body-color'>
						NextBlog is a creative Next.js blog template designed
						and engineered for high-end blog sites, blogging
						solutio...
					</p>
				</div>
				<div className='relative flex justify-around border-t border-stroke after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1px] after:-translate-x-1/2 after:bg-stroke'>
					<a
						href='https://nextblog.demo.nextjstemplates.com'
						target='_blank'
						className='flex w-full items-center justify-center py-3 text-base font-medium text-body-color hover:text-primary'
					>
						<span className='pr-2.5'>
							<svg
								width='18'
								height='19'
								viewBox='0 0 18 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.3125 9.50049C7.3125 8.56851 8.06802 7.81299 9 7.81299C9.93198 7.81299 10.6875 8.56851 10.6875 9.50049C10.6875 10.4325 9.93198 11.188 9 11.188C8.06802 11.188 7.3125 10.4325 7.3125 9.50049Z'
									fill='currentColor'
								></path>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1.5 9.50049C1.5 10.73 1.81872 11.1441 2.45617 11.9722C3.72897 13.6258 5.86359 15.5005 9 15.5005C12.1364 15.5005 14.271 13.6258 15.5438 11.9722C16.1813 11.1441 16.5 10.73 16.5 9.50049C16.5 8.27096 16.1813 7.85688 15.5438 7.02874C14.271 5.37516 12.1364 3.50049 9 3.50049C5.86359 3.50049 3.72897 5.37516 2.45617 7.02874C1.81872 7.85688 1.5 8.27096 1.5 9.50049ZM9 6.68799C7.4467 6.68799 6.1875 7.94719 6.1875 9.50049C6.1875 11.0538 7.4467 12.313 9 12.313C10.5533 12.313 11.8125 11.0538 11.8125 9.50049C11.8125 7.94719 10.5533 6.68799 9 6.68799Z'
									fill='currentColor'
								></path>
							</svg>
						</span>
						Preview
					</a>
					<a
						className='flex w-full items-center justify-center py-3 text-base font-medium text-body-color hover:text-primary'
						href='/templates/nextblog'
					>
						<span className='pr-2.5'>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M2 9.50049C2 5.96495 2 4.19719 3.09835 3.09884C4.1967 2.00049 5.96447 2.00049 9.5 2.00049C13.0355 2.00049 14.8033 2.00049 15.9017 3.09884C17 4.19719 17 5.96495 17 9.50049C17 13.036 17 14.8038 15.9017 15.9021C14.8033 17.0005 13.0355 17.0005 9.5 17.0005C5.96447 17.0005 4.1967 17.0005 3.09835 15.9021C2 14.8038 2 13.036 2 9.50049ZM9.5 5.18799C9.81066 5.18799 10.0625 5.43983 10.0625 5.75049V9.64249L11.3523 8.35274C11.5719 8.13307 11.9281 8.13307 12.1477 8.35274C12.3674 8.57241 12.3674 8.92857 12.1477 9.14824L9.89775 11.3982C9.79226 11.5037 9.64918 11.563 9.5 11.563C9.35082 11.563 9.20774 11.5037 9.10225 11.3982L6.85225 9.14824C6.63258 8.92857 6.63258 8.57241 6.85225 8.35274C7.07192 8.13307 7.42808 8.13307 7.64775 8.35274L8.9375 9.64249V5.75049C8.9375 5.43983 9.18934 5.18799 9.5 5.18799ZM6.5 12.688C6.18934 12.688 5.9375 12.9398 5.9375 13.2505C5.9375 13.5611 6.18934 13.813 6.5 13.813H12.5C12.8107 13.813 13.0625 13.5611 13.0625 13.2505C13.0625 12.9398 12.8107 12.688 12.5 12.688H6.5Z'
									fill='currentColor'
								></path>
							</svg>
						</span>
						Download
					</a>
				</div>
			</div>
		</div>
	)
}

export default SingleFeature
