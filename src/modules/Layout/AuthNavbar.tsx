'use client'

import Logo from '@/components/Logo/Logo'
import React, {useEffect, useState} from 'react'

import rawArrowRight from '@public/icons/raw_arrow_right.svg'
import Image from 'next/image'
import Link from 'next/link'
import CustomLink from "@/components/CustomLink/customLink";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`
            w-full max-w-[1217px] h-[63px] fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex justify-center transition-all duration-300
            ${isScrolled ? 'bg-gray-700/40 backdrop-blur-lg shadow-lg items-center' : 'bg-transparent items-end'}
        `}>
      <div className="w-full max-w-desktop-section flex justify-between items-center">
        <Logo/>
        <div className="opacity-60 flex justify-between items-center gap-8 text-white text-xs font-medium">
          <div className= "flex justify-center items-center gap-[5px] cursor-pointer transition-all duration-300 \
          hover:transform hover:scale-125"
          >
            <p>Products</p>
            <Image src={rawArrowRight} alt='products' priority={true} className='rotate-90'/>
          </div>
          <Link href={''} className='transition-all duration-300 hover:transform hover:scale-125'>Pricing</Link>
          <Link href={''} className='transition-all duration-300 hover:transform hover:scale-125'>FAQs</Link>
          <Link href={''} className='transition-all duration-300 hover:transform hover:scale-125'>Blog</Link>
        </div>
        <CustomLink href='/login' className='py-2 px-3'>
          <p>Sign in</p>
          <Image src={rawArrowRight} alt='signup' priority={true}/>
        </CustomLink>
      </div>
    </div>
  )
}

export default Navbar
