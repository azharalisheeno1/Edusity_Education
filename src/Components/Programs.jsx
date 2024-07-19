import React from "react";
import { motion } from "framer-motion";
import Pic1 from "../assets/hd.png";
import Pic2 from "../assets/2.png";
import Pic3 from "../assets/3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import "../App.css";

function Programs() {


  
  const programs = [
    { id: 2, img: Pic3, icon: icon2, name: "Graduation Degree" },
    { id: 1, img: Pic1, icon: icon1, name: "Master Degree" },
    { id: 3, img: Pic2, icon: icon3, name: "Post Graduation" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div id="Program" className="w-fit pt-20 text-center mx-auto">
        <p className="text-md text-slate-500 font-semibold">OUR PROGRAM</p>
        <h1 className="md:text-3xl font-bold">What We Offer</h1>
      </div>
      <div className="my-10 mx-auto w-9/12 container md:flex items-center justify-between">
        {programs.map((program) => (
          <motion.div     whileTap={{ scale: 1.1, rotate: 10, filter: "brightness(1.2)" }}
          transition={{ duration: 0.3 }}
            key={program.id}
            className="basis-[31%] my-3 relative"
            
          >
            <img
              src={program.img}
              className="md:h-[450px] h-96 rounded-2xl object-cover w-full"
              alt={program.name}
            />
            <div className="absolute top-0 flex justify-center pt-[70%] hover:pt-0 items-center flex-col rounded-2xl text-white opacity-0 hover:opacity-100 ease-in-out duration-300 bottom-0 left-0 right-0 rgba">
              <img src={program.icon} className="w-20 mb-5" alt={program.name} />
              <p>{program.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Programs;
