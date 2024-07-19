import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import pic1 from "../assets/tesimonials/1.jpg";
import pic2 from "../assets/tesimonials/2.png";
import pic3 from "../assets/tesimonials/3.png";
import pic4 from "../assets/tesimonials/4.png";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      img: pic1,
      name: "Sarah Khan",
      country: "Pakistan",
      paragraph:
        "I was thrilled with the responsive design and attention to detail. The user experience on our site has significantly improved thanks to the new layout!",
    },
    {
      id: 2,
      img: pic2,
      name: "Johnson",
      country: "USA",
      paragraph:
        "Working with Azhar Ali has been a game-changer for our business. The attention to detail and dedication to creating a seamless user experience is unmatched.",
    },
    {
      id: 3,
      img: pic3,
      name: "Carlos Martinez",
      country: "Spain",
      paragraph:
        "I am thoroughly impressed with the quality of work delivered by Azhar Ali. The responsiveness and creativity in the design have greatly enhanced our online presence.",
    },
    {
      id: 4,
      img: pic4,
      name: "Priya Singh",
      country: "India",
      paragraph:
        "Collaborating with Azhar Ali was an absolute pleasure. The professional approach and innovative solutions provided exceeded our expectations.",
    },
  ];

  return (
    <div
      id="Testimonials"
      className="md:w-9/12 w-10/12 h-screen flex flex-col justify-center mx-auto "
    >
      {/* Headings */}
      <div className="w-fit text-center mx-auto">
        <p className="text-md font-semibold text-slate-500">TESTIMONIALS</p>
        <h1 className="my-1 text-2xl md:text-3xl font-semibold text-blue-950">
          What Students Say
        </h1>
      </div>

      <div className="pt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            // when window width is >= 640px
            600: {
              slidesPerView: 2,
            },
          }}
          navigation
        >
          {testimonials.map((monial) => (
            <SwiperSlide key={monial.id}>
              <div className="flex ">
                <div className="bg-gray-100    shadow-lg md:w-full w-11/12 px-5 md:px-12 py-3 md:py-10 rounded-2xl">
                  <div className="flex items-center  gap-3 py-4">
                    <img
                      src={monial.img}
                      className="h-16 w-16 rounded-full border-blue-600 border-2"
                      alt={monial.name}
                    />
                    <div>
                      <h1 className="font-semibold">{monial.name}</h1>
                      <p className="text-sm text-gray-600">{monial.country}</p>
                    </div>
                  </div>
                  <p className="text-justify">{monial.paragraph}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
