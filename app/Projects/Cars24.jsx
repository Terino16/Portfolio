import React from 'react'
import {motion} from 'framer-motion'
import cars3 from '../../public/cars3.png'
import cars2 from '../../public/cars2.png'
import Link from 'next/link';
import Image from 'next/image';
const Cars24 = () => {
  return (
    <div className='sm:text-sm'>
        <motion.h1 className='xl:text-6xl  mobile:text-sm font-bold text-white'
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
        >
          1. Cars24
        <Link href="https://cars24-he5uf7r56-terino16.vercel.app/" target='_blank'  className='lg:text-xl colortext mobile:text-sm'>Go to site </Link>
        <p className='colortext  mobile:text-sm lg:text-xl  '>
          Search for cars with  your desired brand and models. </p>
        </motion.h1>
       
       <motion.div 
        className='flex flex-wrap  p-1'
         initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      >
       <Image
        src={cars3}
        width={500}
        height={500}
        alt={"dvc"}
        className='rounded-xl p-1'
      />
       <Image
        src={cars2}
        width={500}
        height={500}
        alt={"dvc"}
        className='rounded-xl p-1'
      />
       </motion.div>
        
      </div>
  
  )
}

export default Cars24