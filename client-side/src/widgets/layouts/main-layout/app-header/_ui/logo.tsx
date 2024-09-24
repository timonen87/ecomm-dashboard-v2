import { SITE_NAME } from "@//shared/constants/seo.constants";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
 <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight font-bold">

        <div>{SITE_NAME}</div>
      </div>
        // <Link href={'/'} className='text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400 sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight font-bold'>
        //     <Image
        //         src='/images/logo.svg'
        //         alt={SITE_NAME}
        //         width={35}
        //         height={35}
        //     />
        //     <div>{SITE_NAME}</div>
        // </Link>
    )
}
