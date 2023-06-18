'use client';
import React from 'react'
import linkdin from '../../public/linkdin.webp'
import insta from '../../public/insta.webp'
import github from '../../public/github.webp'
import Image from 'next/image'
import Link from 'next/link';
const Socials = () => {
  return (
    <div className='flex xl:space-x-24 '>
     <span className='rounded-full animate-bounce p-3 bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.linkedin.com/in/anubhav-dube-b02557236/" target='_blank' alt="sc">
      <Image src={linkdin} alt="Linkdinlogo" width={50} height={50}/>
      </Link>
     </span>
     <span className='rounded-full animate-bounce p-3 bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://www.instagram.com/anubhav_160/" target='_blank' alt="sc">
      <Image src={insta} alt="Linkdinlogo" width={50} height={50}/>
      </Link>
     </span>
     <span className='rounded-full animate-bounce p-3 bg-yellow-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <Link href="https://github.com/Terino16" target='_blank' alt="sc">
      <Image src={github} alt="Linkdinlogo" width={50} height={50}/>
      </Link>
     </span>
    </div>
  )
}

export default Socials