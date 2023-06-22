'use client';
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-transparent p-2 text-gray-500  font-bold pt-9 px-[10%] '>
    <span className='text-xl'>
    <Link href="/" className='text-white text-2xl drop-shadow-glow'>Anubhav.Dev</Link>
    </span>
    <span className='space-x-5 font-normal'>
      
      <Link href="/About" className='hover:text-blue-600'>About</Link> 
      <Link href="/Projects" className='hover:text-blue-600'>Project</Link>
      <Link href="/Contact" className='hover:text-blue-600'>Contact</Link>
    </span>
    </div>
  )
}

export default Navbar