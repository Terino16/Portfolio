import React from "react";
import Link from "next/link";
import aaagejao from '../../public/aagejao.png'
import Image from "next/image";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className=" text-white w-[70%] pb-[10%]">
     <div>
      <h1 className="xl:text-6xl mobile:text-lg mobile:pt-[10%] xl:pt-0"> I'm Anubhav Dube</h1>
      <p  className="xl:text-xl font-bold text-red-500 mobile:text-sm"> Fullstack developer and OpenSource Enthusiast. </p>
        <p className="colortext xl:text-lg space-y-5 tracking-wide leading-7 pt-3 mobile:text-sm">🚀 Welcome to my vibrant world of Full Stack Development, where I combine my coding prowess with the discipline of bodybuilding and the agility of Badminton. Just as I sculpt websites with precision, I sculpt my physique, drawing inspiration from real-life titans like David Goggins and Iman Gadzhi, and fueling my boundless curiosity for self-improvement. While I relish diving deep into the pages of books and exploring the art of finance with the gusto of a Hollywood investor, I'm equally passionate about delving into the cutting-edge realm of Defense Technology. Think of me as your visionary director, crafting web experiences that shine brighter than Hollywood stars and ensuring your digital presence is a cinematic masterpiece. Together, let's script the next tech blockbuster and embark on an epic journey where code meets creativity, and every line of code is a scene-stealer! 🌟💪 <Link href='/Contact'  className="font-bold">Contact me</Link>
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
