import React from "react";

const page = () => {
  return (
    <div className="colortext space-y-5 tracking-wide leading-7 flex  flex-col items-start xl:p-20 xl:px-48 mobile:p-1 mobile:px-4  ">
      <h1 className="xl:text-6xl sm:text-sm font-bold text-white ">
        About Me.
      </h1>
      <p className="colortext ">
        Hello there,
        <br />I am Anubhav Dube. I am 20 years old and currently enrolled in
        Btech Programme in VIT Vellore Universtiy. I am a frontend developer
        with a little bit knowledge of backend too and also interested in
        designing websites.I am Currently working on becoming a full stack developer.
      </p>

      <span className="">
        <h2 className="xl:text-xl mobile:text-sm font-bold text-white pt-3  ">
          Education
        </h2>
        <p className="text-white pt-2">1.VIT Vellore, India </p>
        <p>As an engineering student, I am embarking on a fascinating journey into the world of innovation, problem-solving, and technological advancement.
         Most of the Engineers are problem-solvers at heart, seeking innovative solutions to complex challenges. It helps me learn the way  to approach problems analytically, break them down into manageable components, and apply critical thinking to devise effective and efficient solutions.
        Curenlty enrolled in VIT Vellore in CSE branch and will be graduating in 2025. </p>
        <p className="text-white pt-2">2.Intermediate </p>
        <p> While in Class 12 I was preparing for JEE (Entrance exam for most Governament prestigious Colleges). So during that time I was enrolled into Vidyamandir school in Kota Rajasthan and preparing for JEE in a coaching institute Called Resonance. 
          After the exam got over I got a good rank but was not sufficient to get a good College in with CSE in it. So thats When VIT happened, I gave VITEE for VIT and  got a rank of 6k and eventually got into VIT
        </p>
      </span>
      <span>
        <h2 className="xl:text-xl mobile:text-sm font-bold text-white pt-3 ">
         Certifications
        </h2>
        <p className="text-white pt-2">Digital Marketing and E-commerce -by Google </p>
        <p>As a Engineer its not only enough to only build a product its also necessary to be able to sell you what you are building.
        It helps me boost my  career prospects, enhance digital marketing expertise, and provide a competitive edge in the rapidly evolving digital landscape.</p>
        <p className="text-white pt-2 ">2.Data Structures and algorithms</p>
        <p className="pb-[50%]"> I am a 5 star on Hackerrank in problem Solving. All the more reason to hire me LOL
        </p>
      </span>
    </div>
  );
};

export default page;
