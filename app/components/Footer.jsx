import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
<div className='sticky bottom-0'>
<footer class="fixed bottom-0 h-13  w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  xl:text-xl">
    <div class="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between flex items-center justify-around">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline xl:text-xl">Anubhav</a>
    </span>
    <ul class="flex  items-center  text-sm font-normal text-gray-500 dark:text-gray-400 sm:mt-0 xl:text-xl">
    <Link href="/About" className='hover:text-blue-600  px-2'>About</Link> 
      <Link href="/Projects" className='hover:text-blue-600 px-2'>Project</Link>
      <Link href="/Contact" className='hover:text-blue-600 px-2'>Contact</Link>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer