import React from "react";
import Link from "next/link";
import aaagejao from '../../public/aagejao.png'
import Image from "next/image";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className=" text-white w-[70%] pb-[50%]">
     <div>
      <h1 className="text-6xl sm:text-l"> I'm Anubhav Dube</h1>
      <p class="colortext space-y-5 tracking-wide leading-7">
        Your friendly neighborhood frontend developer and
        Js Engineer. I spend my days (and mostly nights) painting the
        Internet canvas with <Link href='/Projects' className="font-bold">Projects</Link> and lines of code, turning zeroes and ones
        into immersive, interactive experiences.
        </p>
        <p className="colortext space-y-5 tracking-wide leading-7 pt-3">When  I am not coding I like to go gym or do some running . Being physically active helps me empty my mind and mostly helps me in getting ideas or 
       ways to solve bugs in my code. I also love boxing and MMA (Mixed Martial Arts) you know that UFC 229 made me a big fan of the sport
       My Favourite Boxer is Mike Tyson and favourite UFC Fighter is Conor McGregor. Anyways its too much about me If you wanna Chat you can contact me here   <Link href='/Contact'  className="font-bold">Contact me</Link>
      </p>
      </div>

      <div className="pt-5 flex space-x-3 align-top justify-left items-center pb-4 ">
        <Link className="hover:underline underline-offset-2" href="/About"> See More About me</Link>
       <Image src={aaagejao} alt="Nexticon" width={25} className="animate-ping"/>
      </div>
      <Socials/>

    </div>
  );
};

export default Hero;
