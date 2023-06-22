
import React from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import Eatzoo1 from '../../public/Eatzoo1.png'
import Eatzoo2 from '../../public/Eatzoo2.png'
import Eatzoo3 from '../../public/Eatzoo3.png'
import Link from 'next/link';
import Image from 'next/image';
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Eatzoo = () => {
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
      4.E@tzoos
      <Link href="https://github.com/Terino16/Fooodsy" target='_blank'  className='xl:text-xl colortext mobile:tet-sm'>Go to Github </Link>
    </motion.h1>
   
   <motion.div 
    className='flex flex-wrap  items-center justify-center align-center order-2'
  >
   <Image
    src={Eatzoo1}
    width={450}
   
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   <Image
    src={Eatzoo2}
    width={490}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   <Image
    src={Eatzoo3}
    width={500}
    height={500}
    alt={"dvc"}
    className='rounded-xl p-1'
  />
   </motion.div>
    
  </motion.div>
  )
}

export default Eatzoo