import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSlider from "../components/HomeSlider";
import PlacesCard from "../components/ui/PlacesCard";
import MapComponent from "../components/MapComponent";
import FeaturesGrid from "../components/FeaturesGrid";
import ProcessGrid from "../components/ProcessGrid";

const Home = () => {
  return (
    <div className="font-Popins">
      <HomeSlider />
      <div className="font-Beba relative">
        <h2 className="text-black text-[200px] opacity-10 text-center">
          Ayubowan
        </h2>
        <h2 className="text-mainColor text-[75px] absolute bottom-0 top-[150px] left-0 right-0 m-auto text-center ">
          Welcome to Sri Lanka
        </h2>
      </div>

      <div className="container m-auto px-5 ">
        <h2 className="font-semibold text-2xl mb-5">
          Discover what awaits you on your upcoming island vacation.
        </h2>
        <div>
          <Swiper
          className="pb-5"
            spaceBetween={40}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
            <SwiperSlide>{<PlacesCard />}</SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-[#EDF2F3] h-[300px] flex justify-center items-center mt-5">
        <h2 className="font-bold text-4xl max-w-4xl text-center m-auto">
          AI-Enhanced Travel Companion: Personalize Your Journey with Smart
          Recommendations and Real-Time Assistance
        </h2>
      </div>

      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold">Services We <span className="text-mainColor ">Provide</span></h2>
        <FeaturesGrid/>
      </div>

      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold">Things You <span className="text-mainColor ">Need</span></h2>
        <p className="text-center mt-2">We want to make sure your vacation is safe, well-planned, and within your budget.</p>
        <ProcessGrid/>
      </div>
      
      <section>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Home;