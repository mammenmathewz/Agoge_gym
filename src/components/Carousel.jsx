import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide from '../assets/banner/slide.jpg';
import slide1 from '../assets/banner/slide1.jpg';
import slide2 from '../assets/banner/slide2.jpg';
import slide3 from '../assets/banner/slide3.jpg';

const Carousel = () => {
  const images = [slide, slide1, slide2, slide3];

  return (
    <div className="w-full h-[60vh] md:h-[80vh]"> {/* Responsive height */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          style: {
            color: 'gray',
          },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: gray;"></span>`,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="w-full h-full" // Make sure Swiper takes the full height and width
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensure the image covers the entire slide space
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
