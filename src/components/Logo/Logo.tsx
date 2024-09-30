import Image from 'next/image'
import React from 'react'

import logoIcon from "@public/icons/console-icon.svg"
import Link from 'next/link'

function Logo({className}: {className?:string}) {
  return (
    <Link href={"/"} className={`${className ?? ""} flex justify-center items-center gap-[7px]`}>
        <Image src={logoIcon} alt='Moporoxy' priority={true} className='w-6 h-6'/>
        <p className='text-white text-base font-semibold'>mopodata.io</p>
    </Link>
  )
}

export default Logo