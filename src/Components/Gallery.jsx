import React from "react";
import pic1 from "../assets/gallery/1.jpg";
import pic2 from "../assets/gallery/2.jpg";
import pic3 from "../assets/gallery/3.jpg";
import pic4 from "../assets/gallery/4.jpg";
import pic5 from "../assets/gallery/5.jpg";
import pic6 from "../assets/gallery/6.jpg";
import pic7 from "../assets/gallery/7.jpg";
import pic8 from "../assets/gallery/8.jpg";
import "../App.css";
import { motion } from "framer-motion";
function Gallery() {


  
  const gallery = [
    { id: 1, img: pic1 },
    { id: 2, img: pic2 },
    { id: 3, img: pic3 },
    { id: 4, img: pic4 },
    { id: 5, img: pic5 },
    { id: 6, img: pic6 },
    { id: 7, img: pic7 },
    { id: 8, img: pic8 },
  ];
  return (
    <>
      <div id="Campus" className="w-9/12  mx-auto pt-16   ">
     
        
        <div className="w-11/12 md:w-9/12 mx-auto text-center ">
          <h3 className="text-md text-slate-500 font-semibold">GALLERY </h3>
          <h1 className="md:text-3xl text-2xl font-bold text-blue-950 ">Campus Photos</h1>
        </div>

        <div className="md:grid-cols-4 gap-2  grid-cols-1 grid  mx-auto ">
          {gallery.map((Gal) => (
            <div key={Gal.id} className="mx-auto   mt-7">
              <motion.img  
              whileHover={{ x: 10, y: -10 }}
              whileTap={  { x: 10, y: -10 }}
              transition={{ duration: 0.3 }}
                src={Gal.img}
                alt=""
                className="md:h-[250px] h-full rounded-2xl object-cover md:w-[300px]"
              />
            </div>
          ))}
        </div>
        </div>
    

    </>
  );
}

export default Gallery;
