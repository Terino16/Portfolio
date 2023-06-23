'use client';
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-transparent p-2 text-gray-500  font-bold pt-9 px-[10%] '>
    <span className='text-xl mobile:text-sm'>
    <Link href="/" className='text-white xl:text-2xl drop-shadow-glow mobile:text-sm'>Anubhav.Dev</Link>
    </span>
    <span className='space-x-5 font-normal'>
      <Link href="/About" className='hover:text-blue-600  mobile:text-sm  xl:text-lg'>About</Link> 
      <Link href="/Projects" className='hover:text-blue-600 mobile:text-sm xl:text-lg'>Project</Link>
      <Link href="/Contact" className='hover:text-blue-600 mobile:text-sm xl:text-lg'>Contact</Link>
    </span>
    </div>
  )
}

export default Navbar