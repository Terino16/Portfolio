'use client';
import React from 'react'
import linkdin from '../../public/linkdin.webp'
import insta from '../../public/insta.webp'
import github from '../../public/github.webp'
import Image from 'next/image'
import Link from 'next/link';
const Socials = () => {
  return (
    <div className='flex xl:space-x-7 border border-white p-2 rounded-full w-[18%]'>
     <span className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.linkedin.com/in/anubhav-dube-b02557236/" target='_blank' alt="sc">
      <Image src={linkdin} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
     <span className=' bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.instagram.com/anubhav_160/" target='_blank' alt="sc">
      <Image src={insta} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
     <span className=' bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://github.com/Terino16" target='_blank' alt="sc">
      <Image src={github} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
     </span>
    </div>
  )
}

export default Socials