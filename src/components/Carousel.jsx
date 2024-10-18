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

const Carousel=() => {
  const images = [slide, slide1, slide2, slide3];

  return (
    <div className="w-full">
           
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0} // Set space between slides to 0
        slidesPerView={1} // Start with one slide on mobile
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          style: {
            color: 'gray', // Inline style for navigation arrows
          },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => (
            `<span class="${className}" style="background-color: gray;"></span>` // Inline style for pagination bullets
          ),
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="w-full" // Ensure Swiper takes full width
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: '100%' }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ display: 'block', width: '100%', height: 'auto' }} // Ensure images are responsive
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel
