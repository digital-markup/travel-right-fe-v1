import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import image1 from "../assets/slider/10863668.jpg";
import image2 from "../assets/slider/Galle-1024x768.jpg";
import image3 from "../assets/slider/Lotus-Tower-1.jpg";
import image4 from "../assets/slider/Sigiriya.jpg";


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
        <img className="w-full h-[600px] object-cover" src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[600px] object-cover" src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[600px] object-cover" src={image3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[600px] object-cover" src={image4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
