
import React from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import blog1 from '../../public/blog1.png'
import blog2 from '../../public/blog2.png'
import blog3 from '../../public/blog3.png'
import Link from 'next/link';
import Image from 'next/image';
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Blog = () => {
const control = useAnimation();
const [ref,inView]=useInView();

useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  return (
    <motion.div
    ref={ref}
  variants={boxVariant}
  initial="hidden"
  animate={control}>
    
    <motion.h1 className='xl:text-6xl sm:text-sm font-bold text-white'
  initial={{ opacity: 0, y: -180 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    ease: "easeInOut",
    duration: 1,
    delay: 0.6,
  }}
    >
      1. Blogs
      <Link href="https://cars24-he5uf7r56-terino16.vercel.app/" target='_blank'  className='xl:text-xl colortext'>Go to site </Link>
    </motion.h1>
   
   <motion.div 
    className='flex flex-wrap space-x-4  space-y-4 items-center justify-center order-2'
    

  >
   <Image
    src={blog1}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl'
  />
   <Image
    src={blog2}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl'
  />
   <Image
    src={blog2}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl'
  />
   </motion.div>
    
  </motion.div>
  )
}

export default Blog