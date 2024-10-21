import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import both high-quality (for desktop) and low-quality (for mobile) images
import banner1pc from "../assets/banner/banner1pc.jpg";
import banner1mob from "../assets/banner/banner1mob.jpg";
import banner2pc from "../assets/banner/banner2pc.jpg";
import banner2mob from "../assets/banner/banner2mob.jpg";
import banner3pc from "../assets/banner/banner3pc.jpg";
import banner3mob from "../assets/banner/banner3mob.jpg";
import { BackgroundLinesDemo } from "./Heading";

const Carousel = () => {
  // Array of images and corresponding text
  const slides = [
    { 
      desktop: banner1pc, 
      mobile: banner1mob, 
      text: "FITNESS RECONFIGURED" 
    },
    { 
      desktop: banner2pc, 
      mobile: banner2mob, 
      text: "Discover Amazing Products" 
    },
    { 
      desktop: banner3pc, 
      mobile: banner3mob, 
      text: "Define Yourself" 
    },
  ];

  return (
    <div className="w-full relative"> {/* Full width container */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Include Autoplay module
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds (3 seconds here)
          disableOnInteraction: false, // Keep autoplay running after user interactions
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: gray;"></span>`,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center w-full h-full relative">
            <picture className="w-full h-full">
              <source media="(max-width: 640px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover" // Use h-full to fill the height as well
              />
            </picture>
            {/* Overlay Text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-5xl font-bold p-4">
              <BackgroundLinesDemo heading={slide.text}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
