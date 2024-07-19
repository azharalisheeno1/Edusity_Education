import React from "react";

import imge from '../assets/about.jpg'
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="w-full pt-16 md:pt-0" id="About">
        
        <div className="w-11/12 md:w-9/12 mx-auto h-screen md:flex justify-center items-center gap-5   ">
          <div className="md:w-2/4 ">
          
            <motion.img whileHover={{scale:1.1}} transition={{ duration: 0.3 }} src={imge} className="rounded-xl " alt="" />
          </div>
          <div className="md:w-1/2">
          <div className="w-11/12 md:w-9/12  ">
          <h3 className="text-md text-slate-500 font-semibold">ABOUT UNIVERSITY</h3>
          <h1 className="md:text-3xl text-2xl font-bold text-blue-950 my-2">Nurturing Tomorrow's Leaders Today</h1>
        </div>
            <p className="text-justify text-slate-700">
              Embark on a transformative educational journey with our university's comprehensive education programs. 
              Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences 
              needed to excel in the dynamic field of education. <br /><br />
              With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring 
              educators to make a meaningful impact in classrooms, schools, and communities. <br /><br />
              Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range 
              of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the 
              future of education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
