'use client';
import React from 'react'
import Cars24 from './Cars24';
import Blog from './Blog';
import Ecommerce from './Ecommerce';
import Coffee from './Coffee';
import Eatzoo from './Eatzoo';
const page = () => {
  return (
    <div className='colortext space-y-5 tracking-wide leading-7 flex min-h-screen flex-col items-start xl:py-20 xl:px-48 mobile:py-3 mobile:px-4 mobile:pb-[15%]'>
     <Cars24/>
     <Ecommerce/>
     <Blog/>
     <Eatzoo/>
     <Coffee/>
    </div>
  )
}

export default page

