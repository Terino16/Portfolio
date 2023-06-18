'use client';
import React from 'react'
import Cars24 from './Cars24';
import Blog from './Blog';
const page = () => {
  return (
    <div className='colortext space-y-5 tracking-wide leading-7 flex min-h-screen flex-col items-start xl:p-20 xl:px-48 sm:p-1 sm:px-4'>
     <Cars24/>
     <Blog/>
    </div>
  )
}

export default page

