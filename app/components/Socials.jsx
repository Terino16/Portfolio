'use client';
import React from 'react'
import linkdin from '../../public/linkdin.webp'
import Instagram from '../../public/instagram.webp'
import github from '../../public/github.webp'
import Twitter from '../../public/twitter.png'
import Image from 'next/image'
import Link from 'next/link';
const Socials = () => {
  return (
    <div className='flex flex-x-4 border border-white p-2 rounded-full xl:w-[20%] xl:h-[100%] mobile:w-1/2 mobile:space-x-4'>
     <span className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.linkedin.com/in/anubhav-dube-b02557236/" target='_blank' alt="sc">
      <Image src={linkdin} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
     <span className=' bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.instagram.com/anubhav_160/" target='_blank' alt="sc">
      <Image src={Instagram} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
     <span className=' bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://github.com/Terino16" target='_blank' alt="sc">
      <Image src={github} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
     <span className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://twitter.com/Anubhavhing" target='_blank' alt="sc">
      <Image src={Twitter} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
    </div>
  )
}

export default Socials