
import React from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import Ecommerce1 from '../../public/Ecommerce1.png'
import Ecommerce2 from '../../public/Ecommerce2.png'
import Ecommerce3 from '../../public/Ecommerce3.png'
import Ecommerce4 from '../../public/Ecommerce4.png'
import Link from 'next/link';
import Image from 'next/image';
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Ecommerce = () => {
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
    
    <motion.h1 className='xl:text-6xl mobile:text-sm font-bold text-white'
  initial={{ opacity: 0, y: -180 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    ease: "easeInOut",
    duration: 1,
    delay: 0.6,
  }}
    >
      2.Boat Ecommerce 
      <Link href="https://cars24-he5uf7r56-terino16.vercel.app/" target='_blank'  className='xl:text-xl colortext'>Go to site </Link>
    </motion.h1>
   
   <motion.div 
    className='flex flex-wrap  items-center justify-center order-2'
  >
   <Image
    src={Ecommerce1}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   <Image
    src={Ecommerce2}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   <Image
    src={Ecommerce3}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   <Image
    src={Ecommerce4}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   </motion.div>
    
  </motion.div>
  )
}

export default Ecommerce