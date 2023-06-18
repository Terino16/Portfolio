import React from "react";

const page = () => {
  return (
    <div className="colortext space-y-5 tracking-wide leading-7 flex min-h-screen flex-col items-start xl:p-20 xl:px-48 sm:p-1 sm:px-4 ">
      <h1 className="xl:text-6xl sm:text-sm font-bold text-white ">
        About Me.
      </h1>
      <p className="colortext ">
        Hello there,
        <br />I am Anubhav Dube. I am 20 years old and currently enrolled in
        Btech Programme in VIT Vellore Universtiy. I am a frontend developer
        with a little bit knowledge of backend too and also interested in
        designing websites. Someday I Aspire to become a full stack developer.
      </p>

      <span>
        <h2 className="xl:text-xl sm:text-sm font-bold text-white pt-3 ">
          Education
        </h2>
        <p>1. Engineering </p>
        <p></p>
      </span>
    </div>
  );
};

export default page;
