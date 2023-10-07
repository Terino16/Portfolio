import React from "react";
import { motion } from "framer-motion";
import cars from "../../public/cars.png";
import Link from "next/link";
import Image from "next/image";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

const Cars24 = () => {
  return (
    <div className="sm:text-sm">
      <motion.h1
        className="xl:text-6xl  mobile:text-sm mobile:font-normal font-bold  text-white"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
      >
        1. Cars24
        <Link
          href="https://cars24-8y713ixp0-terino16.vercel.app/"
          target="_blank"
          className="lg:text-xl  colortext mobile:text-xs"
        >
          Go to site{" "}
        </Link>
        <p className="colortext  mobile:text-sm lg:text-xl ml-2  ">
          Search for cars with your desired brand and models.{" "}
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-wrap  p-1"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
      >
        <Player
          src={[
            {
              quality: 720,
              url: "https://res.cloudinary.com/dpqnyneqh/video/upload/v1696665499/Untitled_design_uod23d.mp4",
            },
          ]}
          poster="https://res.cloudinary.com/dpqnyneqh/image/upload/v1696665417/Screenshot_2023-10-07_at_1.22.14_PM_kf8ewy.png"
        />
      </motion.div>
    </div>
  );
};

export default Cars24;