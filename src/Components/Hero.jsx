import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { FaArrowRightLong } from "react-icons/fa6";
function Hero() {
  return (
    <>
      <div
        id="Home"
        className="w-full min-h-screen flex justify-center items-center  img bg-cover bg-no-repeat bg-center text-white   "
      >
        <motion.div
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: "2", delay: "0" }}
          className="text-center md:max-w-[900px]"
        >
          <h1 className="md:text-5xl text-2xl font-semibold">
            We ensure better education <br /> for a better world
          </h1>
          <p className="my-3 text-xl text-justify md:text-center px-4">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education.
          </p>
          <button className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
            Explore More <FaArrowRightLong size={20} className="ml-3" />
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
