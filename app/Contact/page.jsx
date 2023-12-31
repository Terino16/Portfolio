"use client";
import React from "react";
import Link from "next/link";
import linkdin from '../../public/linkdin.webp'
import Instagram from '../../public/instagram.webp'
import github from '../../public/github.webp'
import Image from 'next/image'
const page = () => {
  return (
    <section class="">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  pb-[50%]">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
           If you wanna contact me then you can fill this form to get in touch 
           For better communication use my Socials
           <span className="flex space-x-4">
           <Link href="https://www.linkedin.com/in/anubhav-dube-b02557236/" target='_blank' alt="sc">
      <Image src={linkdin} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
           <Link href="https://www.instagram.com/anubhav_160/" target='_blank' alt="sc">
      <Image src={Instagram} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
      <Link href="https://github.com/Terino16" target='_blank' alt="sc">
      <Image src={github} alt="Linkdinlogo" width={25} height={25}/>
      </Link>
      </span>
        </p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="
                anubhav@gmail.com" required />
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how I can help you" required/>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-blue-500 ">Send message</button>
        </form>
    </div>
  </section>
  );
};

export default page;
