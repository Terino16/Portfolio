'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const isMobileOrTablet = window.innerWidth <= 767;
  useEffect(() => {


    if (!isMobileOrTablet) {
      const cursor = document.getElementById('cursor');
      const cursor2 = document.getElementById('cursor2');
      const links = document.querySelectorAll('a');
      const cursorText = document.querySelector(".cursor-text");

      const onMouseMove = (event) => {
        const { clientX, clientY } = event;
        gsap.to(cursor, { x: clientX, y: clientY });
        gsap.to(cursor2, { x: clientX, y: clientY });
      };

      const onMouseEnterLink = (event) => {
        const link = event.target;
        if (link.classList.contains("view")) {
          gsap.to(cursor, { scale: 2 });
          cursorText.style.display = "block";
        } else {
          gsap.to(cursor, { scale: 2 });
        }
      };

      const onMouseLeaveLink = () => {
        gsap.to(cursor, { scale: 1 });
        cursorText.style.display = "none";
      };

      document.addEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    }
  }, []);

  if (!isMobileOrTablet) {
  return (
    <div className="container">
      <div className="cursor-hidden cursor" id="cursor"></div>
      <div id="cursor2" className="cursor2 cursor-hidden">
        <span className="cursor-text">Views</span>
      </div>
    </div>
  );}
  return(<></>);
};

export default Cursor;
