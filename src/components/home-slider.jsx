import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="w-full h-[600px] object-cover"
          src="/home/home-hero2.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[600px] object-cover"
          src="/home/home-hero1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[600px] object-cover"
          src="/home/home-hero3.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[600px] object-cover"
          src="product-hero.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
