import React from "react";
import Link from "next/link";
import aaagejao from '../../public/aagejao.png'
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" text-white w-[70%]">
     <div>
      <h1 className="text-6xl sm:text-l"> I'm Anubhav Dube</h1>
      <p class="colortext space-y-5 tracking-wide leading-7">
        Your friendly neighborhood frontend developer and
        JavaScript engineer. I spend my days (and often nights) painting the
        Internet canvas with <Link href='/Projects' className="font-bold">Projects</Link> and lines of code, turning zeroes and ones
        into immersive, interactive experiences.
        
        </p>
        <p className="colortext space-y-5 tracking-wide leading-7 pt-3 ">Bona fide photochromic LENS
        enthusiast - sunlight or indoors, I've got it covered. I tread the path
        of minimalism, finding beauty in simplicity and order. When I'm not
        crafting beautiful web experiences, you can find me reading ARTICLES or
        swaying to the rhythm of Pop Music & Jazz, losing myself in the
        captivating flow of melodies. anyways you can <Link href='/Contact'  className="font-bold">Contact me</Link>
      </p>
      </div>

      <div className="pt-5 flex space-x-3 align-top justify-left items-center pb-24 ">
        <Link className="hover:underline underline-offset-2" href="/About"> See More About me</Link>
       <Image src={aaagejao} alt="Nexticon" width={25} className="animate-ping"/>
      </div>

    </div>
  );
};

export default Hero;
