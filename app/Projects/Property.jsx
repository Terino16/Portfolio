import React from 'react'
import {motion} from 'framer-motion'
import cars3 from '../../public/Property4u1.png'
import cars2 from '../../public/Property4u2.png'
import Link from 'next/link';
import Image from 'next/image';
const Property = () => {
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
          5. Property 
        <Link href="https://github.com/Terino16/Property" target='_blank'  className='lg:text-xl colortext mobile:text-sm'>Go to Github </Link>
        <p className='colortext  mobile:text-sm lg:text-xl  '>
          Rent flats and homes at best prices </p>
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

export default Property